import * as S from './MyReviews.css';
import { useEffect, useState, useRef, useCallback } from 'react';
import { getReviews, GetReviews, Review } from '@/apis/myProfileApi';

function formatTime(date: string): string {
  const now = new Date();
  const createdTime = new Date(date);
  const timeDiff = now.getTime() - createdTime.getTime();
  const diffInHours = Math.floor(timeDiff / (1000 * 60 * 60));
  if (diffInHours < 0.5) {
    return '방금 전';
  } else if (diffInHours < 24) {
    return `${diffInHours}시간 전`;
  }
  const year = createdTime.getFullYear();
  const month = String(createdTime.getMonth() + 1).padStart(2, '0');
  const day = String(createdTime.getDate()).padStart(2, '0');

  return `${year}.${month}.${day}`;
}
interface MyReviewsProps {
  openDeleteModal: (reviewId: number) => void;
  openEditReviewModal: (reviewId: number, wineName: string) => void;
}

export default function MyReviews({
  openDeleteModal,
  openEditReviewModal,
}: MyReviewsProps) {
  const [reviews, setReviews] = useState<GetReviews['list']>([]);
  const [cursor, setCursor] = useState<number>(0);
  const [totalCount, setTotalCount] = useState<number | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const handleDeleteClick = (reviewId: number) => {
    openDeleteModal(reviewId);
  };
  const handleEditClick = (reviewId: number, wineName: string) => {
    openEditReviewModal(reviewId, wineName);
  };
  const toggleDropdown = (id: number) => {
    setActiveDropdown((prev) => (prev === id ? null : id));
  };
  const fetchReviews = useCallback(async () => {
    if (totalCount !== null && reviews.length >= totalCount) return;

    try {
      const response = await getReviews(5, cursor);
      if (response) {
        setReviews((prev) => [
          ...prev,
          ...response.list.filter(
            (newItem) => !prev.some((item) => item.id === newItem.id),
          ),
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
      observerRef.current = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          fetchReviews();
        }
      });
      if (node) {
        observerRef.current.observe(node);
      }
    },
    [fetchReviews],
  );
  useEffect(() => {
    fetchReviews();
  }, [fetchReviews]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest('[data-dropdown]')) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

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
              <S.TimeText>{formatTime(review.createdAt)}</S.TimeText>
            </S.StarTimeWrapper>
            <S.KebapIcon
              aria-label="수정삭제 드롭다운 버튼"
              data-dropdown
              onClick={() => toggleDropdown(review.id)}
            />
            {activeDropdown === review.id && (
              <S.DropdownList>
                <ul>
                  <li>
                    <S.DropdownItem
                      onClick={() =>
                        handleEditClick(review.id, review.wine.name)
                      }
                    >
                      수정하기
                    </S.DropdownItem>
                  </li>
                  <li>
                    <S.DropdownItem
                      onClick={() => handleDeleteClick(review.id)}
                    >
                      삭제하기
                    </S.DropdownItem>
                  </li>
                </ul>
              </S.DropdownList>
            )}
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
