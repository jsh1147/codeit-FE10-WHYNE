import React, { useState, useRef } from 'react';
import * as S from './WineRating.css';
import PostReviewModal from './PostReviewModal';

interface WineRatingProps {
  wineId: number;
  wineName: string;
  avgRating: number | null;
  reviewCount: number;
  avgRatings: {
    [key: number]: number;
  };
}

export const WineRating: React.FC<WineRatingProps> = ({
  wineId,
  wineName,
  avgRating,
  reviewCount,
  avgRatings,
}) => {
  const ratingCounts = [0, 0, 0, 0, 0];

  for (let i = 1; i <= 5; i++) {
    ratingCounts[i - 1] = avgRatings[i] || 0;
  }

  const fullStars = avgRating ? Math.floor(avgRating) : 0;
  const emptyStars = 5 - fullStars;

  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    wineId: number | null;
    wineName: string;
  }>({ isOpen: false, wineId: null, wineName: '' });

  const modalRef = useRef<HTMLDivElement | null>(null);

  const openModal = (wineId: number, wineName: string) => {
    setModalState({ isOpen: true, wineId, wineName });
  };

  const closeModal = () => {
    setModalState({ isOpen: false, wineId: null, wineName: '' });
  };

  return (
    <S.WineRatingContainer>
      <S.Group1>
        <S.AvgRating>
          {avgRating !== null ? avgRating.toFixed(1) : '0.0'}
        </S.AvgRating>
        <S.Group1_2>
          <S.StarRating>
            {[...Array(fullStars)].map((_, index) => (
              <S.StarImage key={`full-${index}`} aria-label="Star" />
            ))}
            {[...Array(emptyStars)].map((_, index) => (
              <S.EmptyStarImage key={`empty-${index}`} aria-label="EmptyStar" />
            ))}
          </S.StarRating>
          <S.ReviewCount>{reviewCount}개의 후기</S.ReviewCount>
        </S.Group1_2>
      </S.Group1>
      <S.RatingCount>
        {[5, 4, 3, 2, 1].map((star) => {
          const count = ratingCounts[star - 1];
          const percentage = reviewCount ? (count / reviewCount) * 100 : 0;
          return (
            <S.RatingRow key={star}>
              <S.StarLabel>{star}점</S.StarLabel>
              <S.Bar>
                <S.FilledBar percentage={percentage} />
              </S.Bar>
            </S.RatingRow>
          );
        })}
      </S.RatingCount>
      <S.buttonBox>
        <S.ReviewButton onClick={() => openModal(wineId, wineName)}>
          리뷰 남기기
        </S.ReviewButton>
      </S.buttonBox>

      {modalState.isOpen && modalState.wineId !== null && (
        <div ref={modalRef}>
          <PostReviewModal
            closeModal={closeModal}
            wineId={modalState.wineId}
            wineName={modalState.wineName}
            rating={0}
            lightBold={0}
            smoothTannic={0}
            drySweet={0}
            softAcidic={0}
            aroma={[]}
            content={''}
          />
        </div>
      )}
    </S.WineRatingContainer>
  );
};
