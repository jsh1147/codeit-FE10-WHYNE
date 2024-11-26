import styled from 'styled-components';
import EmptyStar from '@/public/icons/emptyStar.svg';
import Star from '@/public/icons/star.svg';
import {
  TextLgBold,
  TextReviewCount,
  TextReviewCountTablet,
  TextWineAvgRating,
  TextWineAvgRatingMobile,
  TextLgMedium,
} from '@/styles/FontStyles';
import media from '@/styles/mediaQuery';

export const WineRatingContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  height: 311px;
  margin: 0 auto;

  ${media.tablet`
    width: min(1199px, 100%);
    height: 162px;
    padding: 0 85px;
    display: grid;
    grid-template-areas: 
     'group1 group1 group3 group3'
     'group1 group1 group3 group3'
     'group2 group2 group3 group3'
     'group2 group2 group3 group3';
  `}

  ${media.mobile`
    width: min(766px, 100%);
    height: 233px;
    padding: 0 20px;
    display: grid;
    grid-template-areas: 
      'group1 group1 group1 group2'
      'group3 group3 group3 group3'
      'group3 group3 group3 group3'
      'group3 group3 group3 group3';
  `}
`;

export const Group1 = styled.div`
  display: flex;
  flex-direction: row;
  width: 220px;
  height: 64px;
  margin-bottom: 20px;

  ${media.tablet`
    width: 100%;
    margin-top: 10px;
    margin-bottom: 0px;
    grid-area: group1;
  `}

  ${media.mobile` 
    width: 100%;
    height: 47px;
    margin-top: 0px;
    margin-bottom: 24px;
  `}
`;

export const Group1_2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  width: 112px;
  height: 47px;
  margin-left: 20px;
  margin-top: 8px;
  gap: 5px;

  ${media.tablet`
    width: 100%;
    height: 55px; 
    margin-top: 6px;
    gap: 2px;
  `}

  ${media.mobile`
    width: 100%;
    height: 47px;
    margin-top: 0px;
    margin-left: 15px;
  `}
`;

export const AvgRating = styled.h2`
  color: var(--gray-800);
  ${TextWineAvgRating};

  ${media.mobile`
    ${TextWineAvgRatingMobile};
    margin-top: 2px;
  `}
`;

export const StarRating = styled.div`
  display: flex;
  flex-direction: row;
  height: 24px;

  ${media.mobile`
    height: 50px;
  `}
`;

export const ReviewCount = styled.p`
  margin-left: 2px;
  color: var(--gray-500);
  ${TextReviewCount};

  ${media.tablet`
    ${TextReviewCountTablet};
  `}
`;

export const RatingCount = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 280px;
  height: 155px;

  ${media.tablet`
    width: 100%;
    height: 162px;
    grid-area: group3;
  `}
`;

export const RatingRow = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const StarLabel = styled.span`
  color: var(--gray-500);
  ${TextLgMedium};
`;

export const StarImage = styled(Star)`
  width: 24px;
  height: 24px;

  ${media.mobile`
    width: 18px;
    height: 18px;
  `};
`;

export const EmptyStarImage = styled(EmptyStar)`
  width: 24px;
  height: 24px;

  ${media.mobile`
    width: 18px;
    height: 18px;
  `}
`;

export const Bar = styled.div`
  flex: 1;
  background-color: var(--gray-100);
  margin: 0 10px;
  width: 100px;
`;

export const FilledBar = styled.div<{ percentage: number }>`
  width: ${(props) => props.percentage}%;
  background-color: var(--purple-100);
  height: 6px;
  border-radius: 50px;
`;

export const ReviewButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 113px;
  height: 42px;
  background-color: var(--purple-100);
  color: var(--white);
  border-radius: 12px;
  margin-top: 30px;
  ${TextLgBold};

  ${media.tablet`
    margin-top: 0px;
  `}

  ${media.mobile`
    width: 100px;
    height: 42px;
  `}
`;

export const buttonBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;

  ${media.tablet`
    grid-area: group2;
  `}

  ${media.mobile`
    justify-content: end;
  `}
`;
