import styled from 'styled-components';
import Rating, { RatingProps } from '@mui/material/Rating';
import Slider from 'react-slick';

export const WinesPageSectionTitle = styled.h2`
  color: var(--gray-800);
  font-weight: 700;
  font-size: 20px;
  line-height: 32px;
`;

export const MonthlyWineContainer = styled.div`
  background-color: var(--gray-100);
  border-radius: 16px;
  margin-top: 20px;
  padding: 30px 0 30px 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  overflow: hidden;
`;

export const MonthlyWineCardContainer = styled.div`
  gap: 15px;
  position: relative;
`;

export const MonthlyWineCard = styled.div`
  background-color: var(--white);
  border-radius: 12px;
  flex: 0 0 auto;
  width: 232px !important;
  height: 185px;
  overflow: hidden;
`;

export const MonthlyWineCardContent = styled.div`
  width: 172px;
  margin-top: 24px;
  gap: 28px;
  height: 161px;
  display: flex;
  justify-content: space-between;
  margin-left: 30px;
`;

export const ImageWrapper = styled.div`
  position: relative;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const CardThumbnail = styled.div`
  width: 44px;
  height: 176px;
`;

export const MonthlyWineCardInfo = styled.div`
  width: 100px;
  display: flex;
  flex-direction: column;
  gap: 5px;

  > p {
    font-size: 36px;
    font-weight: bold;
  }
`;

export const MonthlyWineCardInfoText = styled.span`
  span {
    color: var(--gray-500);
    font-size: 12px;
    line-height: 18px;
    display: block;
  }
`;

export const CustomRating = styled(Rating)<RatingProps>`
  color: var(--purple-100);
`;

export const StyledSlider = styled(Slider)`
  .slick-prev:before,
  .slick-next:before {
    display: none; /* 초기화: 비활성화된 버튼 숨기기 */
  }

  .slick-arrow.slick-disabled {
    visibility: hidden; /* 초기화: 비활성화된 버튼 숨기기 */
  }

  .slick-list {
    margin: 0 auto;
    height: 185px;
  }

  .slick-slide {
    overflow: visible;
    margin-right: 15px;
  }

  .slick-arrow.slick-next {
    right: 20px;
  }

  .slick-arrow.slick-prev {
    left: -10px;
  }

  .slick-arrow {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .slick-prev:hover,
  .slick-prev:focus,
  .slick-next:hover,
  .slick-next:focus {
    background-color: #fff;
    color: var(--gray-300);
    filter: drop-shadow(0 2px 20px rgba(0, 0, 0, 0.04));
  }

  button.slick-arrow {
    display: none;

    &:hover {
      display: none;
    }
  }
`;
