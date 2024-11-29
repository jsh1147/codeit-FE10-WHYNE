import styled from 'styled-components';
import {
  TextLgMedium,
  TextMdBold,
  Text2lgBold,
  TextMdMedium,
  TextLgSemibold,
  TextXsSemibold,
  TextXlBold,
} from '@/styles/FontStyles';
import media from '@/styles/mediaQuery';
import Star from '@/public/icons/star.svg';
import ProfileDefault from '@/public/icons/profile_default.svg';
import Like from '@/public/icons/like.svg';
import Liked from '@/public/icons/liked.svg';
import Dot3Lg from '@/public/icons/dotLg.svg';
import Collapse from '@/public/icons/collapse.svg';
import Expand from '@/public/icons/expand.svg';

export const ReviewListContainer = styled.div`
  width: min(800px, 100%);
  margin-left: 10px;
  padding: 0 20px;

  ${media.tablet`
    margin: 0 auto;
  `}
`;

export const ReviewListTitle = styled.h3`
  color: var(--gray-800);
  ${TextXlBold};

  ${media.tablet`
    display: none;
  `}
`;

export const ReviewItemOutline = styled.div`
  outline: 1px solid var(--gray-300);
  border-radius: 16px;
  margin-top: 20px;
`;

export const ReviewItem = styled.div`
  padding: 16.5px 40px 20px 40px;
`;

export const ReviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const UserNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
  gap: 4px;
`;

export const ReviewUserName = styled.div`
  margin-right: 10px;
`;

export const ReviewUserImage = styled.img`
  width: 64px;
  height: 64px;

  ${media.mobile`
    width: 42px;
    height: 42px;
  `}
`;

export const ProfileDefaultIcon = styled(ProfileDefault)`
  width: 64px;
  height: 64px;
`;

export const LikeMoreContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  ${media.mobile`
    gap: 18px;
  `}
`;

export const LikeButton = styled.button`
  width: 38px;
  height: 38px;
`;

export const LikedIcon = styled(Liked)`
  width: 38px;
  height: 38px;
`;

export const LikeIcon = styled(Like)`
  width: 38px;
  height: 38px;
`;

export const Dot3Button = styled.button`
  position: relative;
  width: 38px;
  height: 38px;
`;

export const Dot3Icon = styled(Dot3Lg)`
  width: 38px;
  height: 38px;
`;

export const AromaRatingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const AromaContainer = styled.div`
  display: flex;
  overflow: hidden;
  padding: 1px;
  gap: 8px;
`;

export const ReviewAroma = styled.div`
  border-radius: 100px;
  outline: 1px solid var(--gray-300);
  color: var(--gray-800);
  padding: 8px 15px;
  ${TextLgMedium};

  ${media.mobile`
    padding: 6px 10px;
    ${TextMdMedium};
  `}
`;

export const ReviewRating = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  padding: 8px 15px;
  width: 80px;
  height: 42px;
  background-color: var(--purple-10);
  color: var(--purple-100);
  border-radius: 12px;
  ${Text2lgBold};

  ${media.mobile`
    width: 60px;
    height: 36px;
    padding: 6px 10px;
    ${TextMdBold};
  `}
`;

export const ReviewRatingStar = styled(Star)`
  width: 20px;
  height: 20px;
`;

export const Content = styled.p`
  white-space: pre-wrap;
  margin-bottom: 20px;
`;

export const CollapseButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const CollapseIcon = styled(Collapse)`
  width: 20px;
  height: 20px;
`;

export const ExpandIcon = styled(Expand)`
  width: 20px;
  height: 20px;
`;

export const WineBalanceContainer = styled.div`
  display: grid;
  grid-template-columns: 56px 70px 1fr 70px;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;

  ${media.mobile`
    grid-template-columns: 48px 62px 1fr 50px;
    gap: 8px;
  `}
`;

export const WineBalanceTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 28px;
  background-color: var(--gray-100);
  color: var(--gray-500);
  border-radius: 6px;
  ${TextLgSemibold};

  ${media.mobile`
    width: 44.21px;
    height: 30px;
    ${TextXsSemibold};
  `}
`;

export const WineBalanceLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 26px;
`;

export const StyledSlider = styled.input`
  width: min(491px, 100%);
  height: 6px;
  background: var(--gray-100);
  border-radius: 50px;
  border: 1px solid var(--gray-300);
  margin: 0 15.5px;

  ${media.mobile`
    margin: 0 8px;
  `}

  &::-webkit-slider-thumb {
    appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: var(--purple-100);
    cursor: not-allowed;
  }

  &::-moz-range-thumb {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: var(--purple-100);
    cursor: not-allowed;
  }
`;

export const NoReviewsMessage = styled.div`
  display: flex;
  justify-content: center;

  align-items: center;
  height: 200px;
`;

export const DropdownList = styled.div`
  position: absolute;
  inset: 60px 0px auto auto;
  border-radius: 16px;
  border: 1px solid var(--gray-300);
  background-color: white;

  ${media.tablet`
    top: 55px;
  `}

  ${media.mobile`
    inset: 45px 20px auto auto;
  `};
`;

export const DropdownItem = styled.button`
  width: 120px;
  height: 48px;
  margin: 4px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 500;
  color: var(--gray-800);
  ${TextLgMedium}

  ${media.mobile`
    width: 96px;
    height: 40px;
    ${TextMdMedium};
  `};

  &:hover {
    background-color: var(--purple-10);
    color: var(--purple-100);
  }
`;
