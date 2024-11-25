import styled from 'styled-components';

export const PriceButton = styled.button`
  background-color: var(--purple-10);
  border-radius: 12px;
  color: var(--purple-100);
  padding: 8px 15px;
  font-size: 18px;
  font-weight: 700;
  line-height: 26px;
  text-align: center;
`;

export const WineCardContainer = styled.section`
  /* max-width: 800px; */
  border: 1px solid var(--gray-300);
  border-radius: 16px;
  cursor: pointer;
  margin-top: 42px;
`;

export const WineImageThumbnail = styled.figure`
  width: 60px;
  margin-top: 40px;
  margin-left: 60px;
  overflow-y: hidden;
`;

export const ImageWrapper = styled.div`
  position: relative;
  bottom: -20px;
  width: 100%;
  height: 100%;
`;

export const WineInfoSection = styled.section`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  flex: 1;
  margin: 36.5px 50px 23.5px 0;
`;

export const WineInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 81px;

  aside {
    display: flex;
    justify-content: space-between;
  }
`;

export const WineDesc = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const WineInfoSectionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const RecentReviewSection = styled.section`
  border-top: 1px solid var(--gray-300);
  width: 100%;
  height: 127px;
`;

export const RecentReviewWrapper = styled.div`
  margin: 19.5px 60px;

  h3 {
    font-weight: 600;
    line-height: 26px;
    margin-bottom: 10px;
  }
`;

export const WineInfoTitle = styled.h2`
  font-size: 32px;
  line-height: 42px;
  color: var(--gray-800);
  font-weight: 600;
  margin-bottom: 20px;
  flex: 1;
  text-overflow: ellipsis;
  overflow: hidden;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  white-space: normal;
`;

export const WineInfoText = styled.p<{
  $fontWeight?: string;
  $fontSize?: string;
  $lineHeight?: string;
}>`
  font-weight: ${(props) => props.$fontWeight || '400'};
  font-size: ${(props) => props.$fontSize || '16px'};
  color: var(--gray-500);
  line-height: ${(props) => props.$lineHeight || '26px'};
  height: 52px;

  text-overflow: ellipsis;
  overflow: hidden;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  white-space: normal;
`;

export const WineInfoReviewBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 121px;
  justify-content: space-between;

  strong {
    font-size: 48px;
    font-weight: 800;
  }
`;
