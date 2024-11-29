import styled from 'styled-components';
import media from '@/styles/mediaQuery';
import Icon from '@/public/icons/icon_wine.svg';
import starIcon from '@/public/icons/icon_star2.svg';
import emptyStar from '@/public/icons/emptyStar.svg';
import close from '@/public/icons/icon_close.svg';

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

export const ModalTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 480px;
  height: 34px;

  ${media.mobile`
    width: 327px;
    height: 32px;
  `}
`;

export const closeIcon = styled(close)`
  width: 34px;
  height: 34px;

  ${media.mobile`
   width: 24px;
   height: 24px;
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
export const ReviewContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;
export const InfoWrapper = styled.div`
  display: flex;
  gap: 23px;
`;
export const WineIcon = styled(Icon)`
  width: 68px;
  height: 68px;
  border-radius: 8px;
  background: var(--gray-100);
  padding: 7px;
  align-items: center;
`;
export const RattingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const WineNameText = styled.div`
  color: var(--gray-800);
  font-size: 18px;
  font-weight: 600;
  line-height: 26px;
`;
export const Star = styled(starIcon)`
  width: 32px;
  height: 32px;
  fill: var(--purple-100);
  object-fit: cover;
`;
export const EmptyStar = styled(emptyStar)`
  width: 32px;
  height: 32px;
  fill: var(--gray-300);
`;
export const ReviewContent = styled.textarea`
  display: flex;
  width: 100%;
  height: 120px;
  padding: 14px 20px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 16px;
  border: 1px solid var(--gray-300);
  background: var(--white);
  resize: none;
`;
export const ReviewDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const QuestionText = styled.div`
  color: var(--gray-800);
  font-size: 20px;
  font-weight: 700;
  line-height: 32px;
`;
export const SliderListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const SliderWrapper = styled.div`
  display: grid;
  grid-template-columns: 54px 70px 1fr 56px;
  align-items: center;
  gap: 15px;
  margin-bottom: 16px;

  ${media.mobile`
    grid-template-columns: 48px 62px 1fr 50px;
  `}
`;

export const Tag = styled.div`
  display: flex;
  height: 25px;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background: var(--gray-100);

  color: var(--gray-gray500, #9facbd);
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
`;
export const TasteTextL = styled.div`
  display: flex;
  justify-content: start;
  margin-right: 5px;
  color: var(--gray-800);
  font-size: 16px;
  font-weight: 500;
  line-height: 26px;
`;

export const TasteTextR = styled.div`
  display: flex;
  justify-content: end;
  margin-left: 5px;
  color: var(--gray-800);
  font-size: 16px;
  font-weight: 500;
  line-height: 26px;
`;

export const ScentListWrapper = styled.div`
  width: 100%;
`;
export const ScentItem = styled.button<{ $isSelected: boolean }>`
  height: 46px;
  padding: 8px 16px;
  margin: 4px;
  border: ${({ $isSelected }) =>
    $isSelected ? 'none' : '1px solid var(--gray-300)'};
  border-radius: 100px;
  cursor: pointer;
  background-color: ${({ $isSelected }) =>
    $isSelected ? 'var(--purple-100)' : 'var(--white)'};
  color: ${({ $isSelected }) =>
    $isSelected ? 'var(--white)' : 'var(--gray-800)'};
  font-size: 14px;
  font-weight: 500;
`;
