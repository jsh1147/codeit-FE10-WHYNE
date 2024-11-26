import styled from 'styled-components';
import media from './mediaQuery';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 120px;
  margin: calc(70px + 24px * 2) 0 96px;

  ${media.tablet`
    gap: 80px;
    margin: calc(60px + 24px * 2) 0 72px;
    padding: 0 20px;
  `}

  ${media.mobile`
    gap: 40px;
    margin: calc(50px + 24px * 2) 0 64px;
    padding: 0 16px;
  `}
`;

export const MoveButton = styled.button`
  width: 256px;
  height: 48px;
  border-radius: 999px;
  background-color: var(--purple-100);
  font-size: 16px;
  font-weight: 700;
  color: var(--white);
`;
