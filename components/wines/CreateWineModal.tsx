import IconPhoto from '@/public/icons/photo.svg';
import BasicButton from './BasicButton';
import * as S from './CreateWineModal.css';
import useImageUpload from '@/hooks/useImageUpload';
import Image from 'next/image';
import { MouseEvent, useState } from 'react';
import { instance } from '@/apis/instance';
import { HttpStatusCode } from 'axios';
import { useRouter } from 'next/router';

interface CreateWineModalProps {
  closeModal: () => void;
}

export default function CreateWineModal({
  closeModal,
}: CreateWineModalProps): JSX.Element {
  const router = useRouter();

  const [wineName, setWineName] = useState('');
  const [region, setRegion] = useState('');
  const [price, setPrice] = useState<number>(0);
  const [wineType, setWineType] = useState<'red' | 'white' | 'sparkling'>(
    'red',
  );

  const { previewImageSrc, handleImagePreview, uploadImage, imageFile } =
    useImageUpload();

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // 숫자만 입력 가능하도록 정규식 사용
    if (!/^\d*$/.test(value)) return;

    const numericValue = Number(value);

    // 10만 원 이하만 입력 가능 (필터에 걸려서 10만 이상은 입력 불가)
    if (numericValue > 100000) return;

    setPrice(numericValue);
  };

  const formSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!imageFile) return alert('와인 사진을 등록해주세요.');
    if (!wineName?.trim()) return alert('와인 이름을 입력해주세요.');
    if (!price) return alert('가격을 입력해주세요.');
    if (!region?.trim()) return alert('원산지를 입력해주세요.');
    if (!wineType) return alert('와인 타입을 선택해주세요.');

    try {
      if (window.confirm('와인을 등록하시겠습니까?')) {
        let imageUrl = '';

        if (imageFile) {
          // MIME 타입 검사 (png만 허용)
          if (imageFile.type !== 'image/png') {
            alert('이미지는 PNG 파일만 업로드 가능합니다.');
            return;
          }

          const uploadImageUrl = await uploadImage(imageFile);
          if (uploadImageUrl) {
            imageUrl = uploadImageUrl;
          } else {
            alert('이미지 업로드에 실패했습니다.');
            return;
          }
        }

        const res = await instance.post('/wines', {
          name: wineName,
          price,
          region,
          type: wineType.toUpperCase(),
          image: imageUrl,
        });

        if (res.status === HttpStatusCode.Created) {
          alert('와인이 등록되었습니다.');
          console.log(res.data);
          router.push(`/wines/${res.data.id}`);
        } else {
          alert('게시글 등록에 실패했습니다.');
        }
      }
    } catch (err) {
      console.error(err);
      alert('와인 등록에 실패했습니다.');
    }
  };

  return (
    <S.ModalOverlay>
      <S.ModalContent>
        <S.ModalTitle>와인 등록</S.ModalTitle>
        <S.ModalContentWrapper>
          <S.ModalContentLayoutBox>
            <S.ModalContentTitle>와인 이름</S.ModalContentTitle>
            <S.StyledInput
              onChange={(e) => setWineName(e.target.value)}
              placeholder="와인 이름 입력"
            />
          </S.ModalContentLayoutBox>
          <S.ModalContentLayoutBox>
            <S.ModalContentTitle>가격</S.ModalContentTitle>
            <S.StyledInput
              onChange={handlePriceChange}
              placeholder="가격 입력 (10만원 이하)"
            />
          </S.ModalContentLayoutBox>
          <S.ModalContentLayoutBox>
            <S.ModalContentTitle>원산지</S.ModalContentTitle>
            <S.StyledInput
              onChange={(e) => setRegion(e.target.value)}
              placeholder="원산지 입력"
            />
          </S.ModalContentLayoutBox>
          <S.ModalContentLayoutBox>
            <form>
              <S.Label>와인 타입</S.Label>
              <S.SelectWrapper>
                <S.Select
                  onChange={(e) => {
                    setWineType(
                      e.target.value as 'red' | 'white' | 'sparkling',
                    );
                  }}
                  required
                >
                  <option value="red">Red</option>
                  <option value="white">White</option>
                  <option value="sparkling">Sparkling</option>
                </S.Select>
                <S.ArrowIcon />
              </S.SelectWrapper>
            </form>
          </S.ModalContentLayoutBox>
          <S.ModalContentLayoutBox>
            <S.ModalContentTitle>와인 사진</S.ModalContentTitle>
            <S.StyledFileUpload htmlFor="file-upload">
              <input
                onChange={handleImagePreview}
                id="file-upload"
                type="file"
              />
              {!previewImageSrc ? (
                <IconPhoto />
              ) : (
                <Image
                  src={previewImageSrc}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                  }}
                  alt="preview-img"
                />
              )}
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
          <BasicButton onClick={formSubmit}>와인 등록하기</BasicButton>
        </S.ModalButtonWrapper>
      </S.ModalContent>
    </S.ModalOverlay>
  );
}
