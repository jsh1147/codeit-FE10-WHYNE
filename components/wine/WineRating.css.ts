import styled from 'styled-components';

export const WineRatingContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const RatingRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

export const StarLabel = styled.span`
  width: 50px;
`;

export const Bar = styled.div`
  flex: 1;
  background-color: #f2f4f8;
  margin: 0 10px;
`;

export const FilledBar = styled.div<{ percentage: number }>`
  width: ${(props) => props.percentage}%;
  background-color: #6a42db;
  height: 10px;
`;
