import React, { useEffect, useRef } from 'react';
import BasicButton from '@/components/wines/BasicButton';
import * as S from './DeleteReviewModal.css';
import { instance } from '@/apis/instance';
import { AxiosError } from 'axios';
import { useRouter } from 'next/router';

interface DeleteReviewModalProps {
  closeModal: () => void;
  reviewId: number;
}

export default function DeleteReviewModal({
  closeModal,
  reviewId,
}: DeleteReviewModalProps): JSX.Element {
  const router = useRouter();
  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        closeModal();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [closeModal]);

  const formSubmit = async () => {
    try {
      await instance.delete(`reviews/${reviewId}`);
      alert('리뷰가 성공적으로 삭제되었습니다.');
      closeModal();
      router.reload();
    } catch (error) {
      if (error instanceof AxiosError && error.response?.status === 403) {
        alert('리뷰 작성자만 삭제할 수 있습니다.');
      } else {
        console.error('리뷰 삭제 중 오류 발생', error);
      }
    }
  };

  return (
    <S.ModalContainer ref={modalRef} onClick={handleOverlayClick}>
      <S.ModalTitle>정말 삭제하시겠습니까?</S.ModalTitle>
      <S.ModalButtonWrapper>
        <BasicButton onClick={closeModal}>취소</BasicButton>
        <BasicButton onClick={formSubmit}>삭제하기</BasicButton>
      </S.ModalButtonWrapper>
    </S.ModalContainer>
  );
}
