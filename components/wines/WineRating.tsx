import React from 'react';
import * as S from './WineRating.css';

interface WineRatingProps {
  avgRating: number;
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

  const fullStars = Math.floor(avgRating);
  const halfStar = avgRating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <S.WineRatingContainer>
      <h2>{avgRating.toFixed(1)}</h2>
      <div>
        {[...Array(fullStars)].map((_, index) => (
          <img key={`full-${index}`} src="/images/star-full.png" alt="Star" />
        ))}
        {halfStar && <img src="/images/star-half.png" alt="Half Star" />}
        {[...Array(emptyStars)].map((_, index) => (
          <img
            key={`empty-${index}`}
            src="/images/star-empty.png"
            alt="Empty Star"
          />
        ))}
      </div>
      <p>{reviewCount}개의 후기</p>
      <p>5점 {ratingCounts[4]}</p>
      <p>4점 {ratingCounts[3]}</p>
      <p>3점 {ratingCounts[2]}</p>
      <p>2점 {ratingCounts[1]}</p>
      <p>1점 {ratingCounts[0]}</p>
      <div>
        {[5, 4, 3, 2, 1].map((star) => {
          const count = ratingCounts[star - 1];
          const percentage = reviewCount ? (count / reviewCount) * 100 : 0;
          return (
            <S.RatingRow key={star}>
              <S.StarLabel>{star} Stars</S.StarLabel>
              <S.Bar>
                <S.FilledBar percentage={percentage} />
              </S.Bar>
              <span>{count}</span>
            </S.RatingRow>
          );
        })}
      </div>
      <button>리뷰 남기기</button>
    </S.WineRatingContainer>
  );
};
