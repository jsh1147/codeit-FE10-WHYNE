import styled from 'styled-components';
import Rating, { RatingProps } from '@mui/material/Rating';

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
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  overflow: hidden;
`;

export const MonthlyWineCardContainer = styled.div`
  width: 100%; 
  gap: 15px;
  position: relative;
  display: flex;
  `

export const MonthlyWineCard = styled.div`
  background-color: var(--white);
  border-radius: 12px;
  flex: 0 0 auto;
  width: 232px;
  height: 185px;
  display: flex;
  justify-content: center;
  overflow: hidden;
`;

export const MonthlyWineCardContent = styled.div`
  width: 172px;
  margin-top: 24px;
  gap: 28px;
  height: 161px;
  display: flex;
  justify-content: space-between;
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
