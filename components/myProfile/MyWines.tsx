import * as S from './MyWines.css';
import StarIcon from '@/public/icons/icon_star.svg';
import KebapIcon from '@/public/icons/icon_kebap.svg';
import { useEffect, useState, useRef, useCallback } from 'react';
import { TotalCount } from './MyReviews.css';
import WineImage from '@/public/images/wineimg_example.png';
import { getWines, GetWines, Wine } from '@/apis/myProfileApi';

export default function MyWines() {
    const [wines, setWines] = useState<GetWines['list']>([]);
    const [cursor, setCursor] = useState<number>(0);
    const [totalCount, setTotalCount] = useState<number | null>(null);
    const observerRef = useRef<IntersectionObserver | null>(null);

    const fetchWines = useCallback(async () => {
        if (totalCount !== null && wines.length >= totalCount) return;

        try {
            const response = await getWines(5, cursor);
            if (response) {
                setWines(prev => [
                    ...prev,
                    ...response.list.filter(newItem => !prev.some(item => item.id === newItem.id)),
                ]);
                setCursor(response.nextCursor);
                setTotalCount(response.totalCount);
            }
        } catch (error) {
            console.error('리뷰 불러오기 오류:', error);
        }
    }, [cursor, wines.length, totalCount]);

    const setupObserver = useCallback(
        (node: HTMLDivElement) => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
            observerRef.current = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        fetchWines();
                    }
                },
            );
            if (node) {
                observerRef.current.observe(node);
            }
        },
        [fetchWines]
    );

    useEffect(() => {
        fetchWines();
        console.log(wines)
    },[]); 


    return (
        <S.WineListContainer>
            <S.TotalCount>총 {totalCount}개</S.TotalCount>
            {wines.map((wine: Wine) => (
            <S.WineItemWrapper>
                <S.WineItem>
                    <S.ItemWrapper>
                        <S.ImageWrapper>
                            <S.WineImage src={wine.image} alt="와인이미지" layout='fill' />
                        </S.ImageWrapper>
                    <S.WineInfoWrapper>
                        <S.WineNameWrapper>
                            <S.WineNameText>{wine.name}</S.WineNameText>
                            <S.WineRegionText>{wine.region}</S.WineRegionText>
                        </S.WineNameWrapper>
                        <S.Price>
                            <S.PriceText>₩ {wine.price}</S.PriceText>
                        </S.Price>
                    </S.WineInfoWrapper>
                    </S.ItemWrapper>
                    <S.KebapIcon src={KebapIcon} alt="더보기" />
                </S.WineItem>
            </S.WineItemWrapper>
        ))}
        <div ref={setupObserver}></div>
        </S.WineListContainer>
    );
}

