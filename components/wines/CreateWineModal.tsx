import IconPhoto from '@/public/icons/photo.svg';
import BasicButton from './BasicButton';
import * as S from './CreateWineModal.css';

interface CreateWineModalProps {
  closeModal: () => void;
}

export default function CreateWineModal({ closeModal }: CreateWineModalProps) {
  return (
    <S.ModalOverlay>
      <S.ModalContent>
        <S.ModalTitle>와인 등록</S.ModalTitle>
        <S.ModalContentWrapper>
          <S.ModalContentLayoutBox>
            <S.ModalContentTitle>와인 이름</S.ModalContentTitle>
            <S.StyledInput placeholder="와인 이름 입력" />
          </S.ModalContentLayoutBox>
          <S.ModalContentLayoutBox>
            <S.ModalContentTitle>가격</S.ModalContentTitle>
            <S.StyledInput placeholder="가격 입력" />
          </S.ModalContentLayoutBox>
          <S.ModalContentLayoutBox>
            <S.ModalContentTitle>원산지</S.ModalContentTitle>
            <S.StyledInput placeholder="원산지 입력" />
          </S.ModalContentLayoutBox>
          <S.ModalContentLayoutBox>
            <form>
              <S.Label>와인 타입</S.Label>
              <S.SelectWrapper>
                <S.Select required>
                  <option value="red">Red</option>
                  <option value="white">White</option>
                  <option value="sparkling">Sparkling</option>
                </S.Select>
                <S.IconWrapper></S.IconWrapper>
              </S.SelectWrapper>
            </form>
          </S.ModalContentLayoutBox>
          <S.ModalContentLayoutBox>
            <S.ModalContentTitle>와인 사진</S.ModalContentTitle>
            <S.StyledFileUpload htmlFor="file-upload">
              <input id="file-upload" type="file" />
              <IconPhoto />
            </S.StyledFileUpload>
          </S.ModalContentLayoutBox>
        </S.ModalContentWrapper>
        <S.ModalButtonWrapper>
          <BasicButton
            $bgColor="var(--purple-10)"
            $fontColor="var(--purple-100)"
            onClick={closeModal}
          >
            취소
          </BasicButton>
          <BasicButton>와인 등록하기</BasicButton>
        </S.ModalButtonWrapper>
      </S.ModalContent>
    </S.ModalOverlay>
  );
}
