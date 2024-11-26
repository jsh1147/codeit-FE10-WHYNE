import styled from 'styled-components';
import ArrowDropDownIcon from '@/public/icons/dropdown.svg';

export const ModalTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: var(--gray-800);
  line-height: 32px;
`;

export const ModalContentTitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  color: var(--gray-800);
  line-height: 26px;
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
  z-index: 10;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 460px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const StyledInput = styled.input`
  border-radius: 16px;
  border: 1px solid var(--gray-300);
  background-color: #fff;
  width: 100%;
  padding: 14px 20px;

  &::placeholder {
    color: var(--gray-500);
    line-height: 26px;
    font-weight: 400;
  }
`;

export const ModalContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
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

export const ModalContentLayoutBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

// 지피티
export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  font-weight: bold;
  font-size: 16px;
  font-weight: 500;
  color: var(--gray-800);
  line-height: 26px;
`;

export const Select = styled.select`
  width: 100%;
  height: 100%;
  margin-bottom: 1rem;
  border: 1px solid var(--gray-300);
  border-radius: 16px;
  color: var(--gray-500);
  padding: 11px 20px;
`;

export const SelectWrapper = styled.div`
  position: relative;
  height: 48px;
`;

export const ArrowIcon = styled(ArrowDropDownIcon)`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  pointer-events: none;
`;

export const StyledFileUpload = styled.label`
  > input[type='file'] {
    display: none;
  }
  // Custom file upload button
  display: inline-block;
  cursor: pointer;
  width: 140px;
  height: 140px;
  background-color: #fff;
  border-radius: 12px;
  overflow: hidden;
  color: var(--gray-300);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid var(--gray-300);
`;
