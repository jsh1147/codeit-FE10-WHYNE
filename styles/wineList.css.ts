import media from '@/styles/mediaQuery';
import styled from 'styled-components';

export const WinesPageContainer = styled.div`
  width: min(1140px, 100%);
  margin: 118px auto auto;

  ${media.tablet`
    margin: 108px auto auto;
    width: min(1140px, 100% - 40px);
    position: relative;
  `}

  ${media.mobile`
    margin: 99px auto auto;
    width: calc(100% - 32px);
  `}
`;

export const GridWrapper = styled.div`
  display: grid;
  grid-template-rows: 48px 1fr;
  grid-template-columns: 284px 1fr;
  grid-row-gap: 20px;
  grid-column-gap: 60px;
  margin-top: 40px;
`;

export const SearchBarWrapper = styled.div<{ $isLogin: boolean }>`
  grid-row: 1;
  grid-column: 2;

  ${(props) =>
    media.tablet`
      width: 90%;
      margin-left: 24px;
      margin-right: ${props.$isLogin ? '16px' : '0'};
    `}

  ${media.mobile`
    width: 80%;
    margin-left: 10px;
    margin-right: 0;
  `}
`;

export const FilterWrapper = styled.div`
  margin-top: 42px;
  grid-row: 2;
  grid-column: 1;
  gap: 46px;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`;

export const WineCardListWrapper = styled.div`
  grid-row: 2;
  grid-column: 2;
`;

// Tablet UI
export const TopActionWrapper = styled.div`
  display: flex;
  margin-top: 40px;
  margin-bottom: 32px;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 101; // header가 100 이여서 101로 설정
`;

export const CreateWineButton = styled.div`
  ${media.tablet`
  width: 220px;
  `}

  ${media.mobile`
    z-index: 100;
  bottom: 35px;
  position: fixed;
  width: calc(100% - 32px);

  button {
      width: 100%;
      display: flex;
      justify-content: center;
      white-space: nowrap;
    }
  `}
`;
