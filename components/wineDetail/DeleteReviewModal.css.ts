import styled from 'styled-components';
import media from '@/styles/mediaQuery';

export const DeleteModalTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: var(--gray-800);
  line-height: 32px;
`;

export const ModalTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 34px;

  ${media.mobile`
    height: 32px;
  `}
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
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 353px;
  max-height: 80vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 40px;

  ${media.mobile`
      width: 375px;
  `}
`;

export const ModalButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  width: 100%;
`;
