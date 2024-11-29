import styled from 'styled-components';
import media from './mediaQuery';

export const WineDetailContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 1fr;
  grid-template-rows: 0.5fr 0.5fr 3fr;
  grid-gap: 60px;
  width: 100%;
  max-width: 1199px;
  margin: 0 auto;

  ${media.tablet`
    grid-template-columns: 2fr 2fr 1fr;
    grid-template-rows: 420px 190px 1fr;
    grid-gap: 45px;
  `}

  ${media.mobile`
    grid-template-columns: 2fr 2fr 1fr;
    grid-template-rows: 310px 240px 1fr;
    grid-gap: 20px;
  `}
`;

export const WineDetailHeader = styled.div`
  grid-column: 1 / 4;
  grid-row: 1 / 2;
`;

export const WineStats = styled.div`
  grid-column: 3 / 4;
  grid-row: 2 / 3;

  ${media.tablet`
    grid-column: 1 / 4;
    grid-row: 2 / 3;`}
`;

export const WineReviews = styled.div`
  grid-column: 1 / 3;
  grid-row: 2 / 4;

  ${media.tablet`
    grid-column: 1 / 4;
    grid-row: 3 / 4;`}
`;
