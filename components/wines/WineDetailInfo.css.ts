import { colors } from '@mui/material';
import styled from 'styled-components';

export const WineDetailInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const WineRegion = styled.div`
  color: var(--gray-500);
  font-weight: 400;
  // font : pretendard lg-16px-regular;
`;

export const WineName = styled.div`
  color: var(--gray-800);
  // font : pretendard lg-24px-bold;
`;

export const WinePrice = styled.div`
  color: #6a42db;
  background-color: #f1edfc;
  outline-offset: 12px;
  // color: var(--main);
  // background-color: var(--main-10);
  // font : pretendard lg-24px-bold;
`;
