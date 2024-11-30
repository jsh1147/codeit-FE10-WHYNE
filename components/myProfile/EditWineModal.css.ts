import styled from 'styled-components';
import ArrowDropDownIcon from '@/public/icons/dropdown.svg';
import media from '@/styles/mediaQuery';

interface DropdownProps {
  isOpen: boolean;
}

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
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 460px;
  max-height: 80vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 40px;

  ${media.mobile`
      width: 375px;
  `}
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

export const DropdownWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 48px;
  border: 1px solid var(--gray-300);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  cursor: pointer;
  color: var(--gray-800);
  background-color: #fff;
`;

export const DropdownList = styled.div<DropdownProps>`
  position: relative;
  border: 1px solid var(--gray-300);
  top: 100%;
  left: 0;
  right: 0;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  z-index: 999;
  border-radius: 16px;
`;

export const DropdownItem = styled.div`
  position: relative;
  padding: 12px 16px;
  font-size: 16px;
  color: var(--gray-800);
  cursor: pointer;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 26px;
  border: 0.5px solid var(--gray-300);

  &:hover {
    background-color: var(--gray-100);
  }

  &:active {
    background-color: var(--gray-200);
  }
`;

export const ArrowIcon = styled(ArrowDropDownIcon)<DropdownProps>`
  transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: transform 0.3s ease;
`;

export const StyledFileUpload = styled.label`
  > input[type='file'] {
    display: none;
  }

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
