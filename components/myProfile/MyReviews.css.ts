import styled from "styled-components";
import media from '@/styles/mediaQuery';
import Icon from '@/public/icons/icon_kebap.svg';
import Star from '@/public/icons/icon_star.svg';
export const ReviewListContainer = styled.div`
    width:100%;
    display:flex;
    flex-direction: column;
    gap:8px;
`;
export const ReviewItem = styled.div`
    display: inline-flex;
    padding: 24px 40px 30px 40px;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    flex-shrink: 0;
    border-radius: 16px;
    border: 1px solid var(--gray-300);
    background: var(--white);
    ${media.mobile`
        padding: 16px 20px;
    `}
`;

export const ReviewItemTopWrapper = styled.div`
    width:100%;
    display: flex;
    justify-content: space-between;
    position:relative;
`;
export const StarTimeWrapper = styled.div`
    display:flex;
    align-items: center;
    gap:15px;
`;
export const TimeText = styled.div`
    color: var(--gray-500);
    font-size: 16px;
    font-weight: 400;
    line-height: 26px; 
    ${media.mobile`
        font-size:14px;
    `}
`;
export const KebapIcon = styled(Icon)`
    width:20px;
    height:27px;
`;
export const ReviewTextWrapper = styled.div`
    display:flex;
    flex-direction: column;
`;
export const WineName = styled.div`
    color: var(--gray-500);
    font-size: 16px;
    font-weight: 500;
    line-height: 26px; 
    ${media.mobile`
        font-size:14px;
    `}
`;
export const WineReview = styled.div`
    color: var(--gray-800);
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    ${media.mobile`
        font-size:14px;
    `}
`;
export const StarWrapper = styled.div`
    display: flex;
    padding: 8px 15px;
    align-items: center;
    gap: 2px;
    border-radius: 12px;
    background: var(--purple-10, #F1EDFC);
`;
export const StarIcon = styled(Star)`
    width: 20px;
    height: 20px;
    ${media.mobile`
        width: 16px;
        height:16px;
    `}
`;
export const StarText = styled.div`
    color: var(--purple-100);
    font-size: 18px;
    font-weight: 700;
    line-height: 26px; 
    ${media.mobile`
        font-size:14px;
    `}
`;
export const TotalCount = styled.div`
    position:relative;
    bottom:30px;
    color: var(--purple-100);
    text-align: right;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    ${media.mobile`
        font-size: 12px;
    `}
`;

export const DropdownList = styled.div`
  position: absolute;
  inset: 35px 5px auto auto;
  border-radius: 16px;
  border: 1px solid var(--gray-300);
  background-color: white;

  ${media.tablet`
    top: 35px;
  `}

  ${media.mobile`
    inset: 35px 5px auto auto;
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

  ${media.mobile`
    width: 96px;
    height: 40px;
    font-size: 14px;
  `};

  &:hover {
    background-color: var(--purple-10);
    color: var(--purple-100);
  }
`;
