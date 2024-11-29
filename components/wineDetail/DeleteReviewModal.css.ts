import styled from 'styled-components';
import media from '@/styles/mediaQuery';

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 353px;
  height: 182px;

  ${media.mobile`
  height: 172px;`}
`;

export const ModalButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;

  button:first-child {
    width: 108px;
  }

  button:nth-child(2) {
    flex-grow: 1;
  }
`;

export const ModalTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: var(--gray-800);
  line-height: 32px;
`;
