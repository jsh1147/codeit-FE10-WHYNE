import React from 'react';
import * as S from './WineRating.css';

interface WineRatingProps {
  avgRating: number | null;
  reviewCount: number;
  avgRatings: {
    [key: number]: number;
  };
}

export const WineRating: React.FC<WineRatingProps> = ({
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

  return (
    <S.WineRatingContainer>
      <S.Group1>
        <S.AvgRating>
          {avgRating !== null ? avgRating.toFixed(1) : '0'}
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
        <S.ReviewButton>리뷰 남기기</S.ReviewButton>
      </S.buttonBox>
    </S.WineRatingContainer>
  );
};
