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
    width: 578px;
    height: 162px;
    display: grid;
    grid-template-areas: 
     'group1 group1 group3 group3'
     'group1 group1 group3 group3'
     'group2 group2 group3 group3'
     'group2 group2 group3 group3';
  `}

  ${media.mobile`
    width: 343px;
    height: 233px;
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
    margin-top: 20px;
    margin-bottom: 0px;
    grid-area: group1;
  `}

  ${media.mobile`
    width: 162px;
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
    width: 112px;
    height: 55px; 
    margin-top: 6px;
    gap: 2px;
  `}

  ${media.mobile`
    width: 90px;
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
  align-items: center;
  justify-content: center;
  align-content: left;
  width: 110px;
  height: 24px;

  ${media.mobile`
    width: 90px;
    height: 50px;
  `}
`;

export const ReviewCount = styled.p`
  margin-left: 3px;
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
    height: 162px;
    grid-area: group3;
  `}

  ${media.mobile`
    width: 343px;
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
  background-color: var(--white);
  margin: 0 10px;
`;

export const FilledBar = styled.div<{ percentage: number }>`
  width: ${(props) => props.percentage}%;
  background-color: var(--purple-100);
  height: 6px;
  border-radius: 50px;
`;

export const ReviewButton = styled.button`
  width: 133px;
  height: 42px;
  background-color: var(--purple-100);
  color: var(--white);
  border-radius: 12px;
  margin-top: 30px;
  ${TextLgBold};

  ${media.tablet`
    margin-top: 0px;
    margin-bottom: 20px;
    grid-area: group2;
  `}

  ${media.mobile`
    margin-left: 75px;
    margin-bottom: 0px;
    width: 100px;
    height: 42px;
  `}
`;
