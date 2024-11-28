import styled from 'styled-components';

export const WinesPageContainer = styled.div`
  margin-top: 130px;
`;

export const GridWrapper = styled.div`
  display: grid;
  grid-template-rows: 48px 1fr;
  grid-template-columns: 284px 1fr;
  grid-row-gap: 20px;
  grid-column-gap: 60px;
  margin-top: 40px;
`;

export const SearchBarWrapper = styled.div`
  grid-row: 1;
  grid-column: 2;
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
