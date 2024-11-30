import React from 'react';
import * as S from './DeleteModal.css';

interface DeleteModalProps {
  onClose: () => void;
  onDelete: () => void;
}

const DeleteModal = ({ onClose, onDelete }: DeleteModalProps) => {
  return (
    <S.ModalOverlay>
      <S.ModalContent>
        <S.ModalMessage>정말 삭제하시겠습니까?</S.ModalMessage>
        <S.ButtonWrapper>
          <S.CancelButton onClick={onClose}>취소</S.CancelButton>
          <S.DeleteButton onClick={onDelete}>삭제하기</S.DeleteButton>
        </S.ButtonWrapper>
      </S.ModalContent>
    </S.ModalOverlay>
  );
};

export default DeleteModal;
