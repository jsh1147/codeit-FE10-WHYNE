import * as S from './MyReviews.css';
import { useEffect, useState, useRef, useCallback } from 'react';
import { getReviews, GetReviews, Review } from '@/apis/myProfileApi';

function formatTime(date: string): string {
    const now = new Date();
    const updatedTime = new Date(date);
    const timeDiff = now.getTime() - updatedTime.getTime();
    const diffInHours = Math.floor(timeDiff / (1000 * 60 * 60));

    if (diffInHours < 0.5) {
        return '방금 전';
    }
    return `${diffInHours}시간 전`;
}

export default function MyReviews() {
    const [reviews, setReviews] = useState<GetReviews['list']>([]);
    const [cursor, setCursor] = useState<number>(0);
    const [totalCount, setTotalCount] = useState<number | null>(null);
    const observerRef = useRef<IntersectionObserver | null>(null);

    const fetchReviews = useCallback(async () => {
        if (totalCount !== null && reviews.length >= totalCount) return;

        try {
            const response = await getReviews(5, cursor);
            if (response) {
                setReviews(prev => [
                    ...prev,
                    ...response.list.filter(newItem => !prev.some(item => item.id === newItem.id)),
                ]);
                setCursor(response.nextCursor);
                setTotalCount(response.totalCount);
            }
        } catch (error) {
            console.error('리뷰 불러오기 오류:', error);
        }
    }, [cursor, reviews.length, totalCount]);

    const setupObserver = useCallback(
        (node: HTMLDivElement) => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
            observerRef.current = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        fetchReviews();
                    }
                },
            );
            if (node) {
                observerRef.current.observe(node);
            }
        },
        [fetchReviews]
    );

    useEffect(() => {
        fetchReviews();
        console.log(reviews)
    }, [reviews]); 

    return (
        <S.ReviewListContainer>
            <S.TotalCount>총 {totalCount}개</S.TotalCount>
            {reviews.map((review: Review) => (
                <S.ReviewItem key={review.id}>
                    <S.ReviewItemTopWrapper>
                        <S.StarTimeWrapper>
                            <S.StarWrapper>
                                <S.StarIcon aria-label="별점 아이콘" />
                                <S.StarText>{review.rating}.0</S.StarText>
                            </S.StarWrapper>
                            <S.TimeText>{formatTime(review.updatedAt)}</S.TimeText>
                        </S.StarTimeWrapper>
                        <S.KebapIcon aria-label="수정삭제 드롭다운 버튼" />
                    </S.ReviewItemTopWrapper>
                    <S.ReviewTextWrapper>
                        <S.WineName>{review.wine.name}</S.WineName>
                        <S.WineReview>{review.content}</S.WineReview>
                    </S.ReviewTextWrapper>
                </S.ReviewItem>
            ))}
            <div ref={setupObserver}></div>
        </S.ReviewListContainer>
    );
}