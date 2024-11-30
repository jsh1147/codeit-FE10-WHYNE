import * as S from './DeleteReviewModal.css';
import { useRouter } from 'next/router';
import { MouseEvent } from 'react';
import BasicButton from '@/components/wineList/BasicButton';
import { AxiosError } from 'axios';
import { instance } from '@/apis/instance';

interface DeleteReviewModalProps {
  closeModal: () => void;
  reviewId: number;
}

export default function EditReviewModal({
  closeModal,
  reviewId,
}: DeleteReviewModalProps): JSX.Element {
  const router = useRouter();

  const handleOverlayClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const formSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      await instance.delete(`reviews/${reviewId}`);
      alert('리뷰가 성공적으로 삭제되었습니다.');
      closeModal();
      router.reload();
    } catch (error) {
      if (error instanceof AxiosError && error.response?.status === 403) {
        alert('리뷰 작성자만 삭제할 수 있습니다.');
        closeModal();
      } else {
        console.error('리뷰 삭제 중 오류 발생', error);
      }
    }
  };

  return (
    <S.ModalOverlay onClick={handleOverlayClick}>
      <S.ModalContent>
        <S.ModalTitleContainer>
          <S.DeleteModalTitle>정말 삭제하시겠습니까?</S.DeleteModalTitle>
        </S.ModalTitleContainer>
        <S.ModalButtonWrapper>
          <BasicButton
            $bgColor="var(--purple-10)"
            $fontColor="var(--purple-100)"
            onClick={closeModal}
          >
            취소
          </BasicButton>
          <BasicButton onClick={formSubmit}>삭제하기</BasicButton>
        </S.ModalButtonWrapper>
      </S.ModalContent>
    </S.ModalOverlay>
  );
}
