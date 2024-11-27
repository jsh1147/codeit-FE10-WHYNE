import styled from 'styled-components';
import media from '@/styles/mediaQuery';

export const WinesPageContainer = styled.div`
  width: min(1140px, 100%);
  margin: 118px auto auto;

  ${media.tablet`
    margin: 108px auto auto;
    width: min(1140px, 100% - 40px);

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

  /* ${media.tablet`
    display: block;
  `} */
`;

export const SearchBarWrapper = styled.div<{ isLogin: boolean }>`
  grid-row: 1;
  grid-column: 2;

  ${(props) =>
    media.tablet`
      flex: 1;
      margin-left: 24px;
      margin-right: ${props.isLogin ? '16px' : '0'};
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
  justify-content: space-between;
  margin-top: 40px;
  margin-bottom: 32px;
`;
