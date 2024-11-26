import React from 'react';
import * as S from './WineRating.css';
import Image from 'next/image';
import Star from '@/public/images/icons/star.svg';
import EmptyStar from '@/public/images/icons/emptyStar.svg';

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
  const emptyStars = 5 - fullStars;

  return (
    <S.WineRatingContainer>
      <h2>{avgRating.toFixed(1)}</h2>
      <div>
        {[...Array(fullStars)].map((_, index) => (
          <Image
            key={`full-${index}`}
            src={Star}
            alt="Star"
            width={24}
            height={24}
          />
        ))}
        {[...Array(emptyStars)].map((_, index) => (
          <Image
            key={`empty-${index}`}
            src={EmptyStar}
            alt="Empty Star"
            width={24}
            height={24}
          />
        ))}
      </div>
      <p>{reviewCount}개의 후기</p>
      <div>
        {[5, 4, 3, 2, 1].map((star) => {
          const count = ratingCounts[star - 1];
          const percentage = reviewCount ? (count / reviewCount) * 100 : 0;
          return (
            <S.RatingRow key={star}>
              <S.StarLabel>{star}점</S.StarLabel>
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
