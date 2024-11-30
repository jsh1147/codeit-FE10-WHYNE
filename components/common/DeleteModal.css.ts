import styled from 'styled-components';

export const ModalOverlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0px;
  right: 0px;
  left: 0px;

  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 40px;
  width: 353px;
  height: 182px;
`;

export const ModalMessage = styled.div`
  font-size: 20px;
  color: var(--gray-gray800, #2d3034);
  text-align: center;
  font-weight: 700;
  line-height: 32px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 9px;
  width: 100%;
`;

export const CancelButton = styled.button`
  display: flex;
  width: 156px;
  height: 54px;
  padding: 16px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  border: 1px solid var(--gray-300);
  background: var(--white);

  color: var(--gray-500);
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  line-height: 26px;
`;

export const DeleteButton = styled.button`
  background: var(--purple-100);
  padding: 10px 20px;
  border-radius: 12px;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  width: 156px;
  height: 54px;
  padding: 16px 36px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: var(--white);
`;
