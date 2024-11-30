import IconPhoto from '@/public/icons/photo.svg';
import BasicButton from '@/components/wines/BasicButton';
import * as S from './EditWineModal.css';
import useImageUpload from '@/hooks/useImageUpload';
import Image from 'next/image';
import { MouseEvent, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getWine } from '@/apis/itemDeleteEditApis';
import { patchWine } from '@/apis/itemDeleteEditApis';

interface EditWineModalProps {
  closeModal: () => void;
  wineId: number;
}

export default function EditWineModal({
  closeModal,
  wineId,
}: EditWineModalProps): JSX.Element {
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedWineType, setSelectedWineType] = useState<'Red' | 'White' | 'Sparkling'>('Red');

  const [existingData, setExistingData] = useState<{
    id: number;
    name: string;
    price: number;
    region: string;
    type: 'Red' | 'White' | 'Sparkling';
    image: string;
  } | null>(null);

  const [wineName, setWineName] = useState('');
  const [region, setRegion] = useState('');
  const [price, setPrice] = useState<number>(0);

  const { previewImageSrc, handleImagePreview, uploadImage, imageFile } =
    useImageUpload();

  useEffect(() => {
    const fetchWineData = async () => {
      const data = await getWine(wineId);
      if (data) {
        setExistingData(data);
        setWineName(data.name);
        setRegion(data.region);
        setPrice(data.price);
        setSelectedWineType(data.type.charAt(0).toUpperCase() + data.type.slice(1).toLowerCase()); 
      } else {
        alert('와인 정보를 불러오지 못했습니다.');
        closeModal();
      }
    };

    fetchWineData();
  }, [wineId, closeModal]);

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!/^\d*$/.test(value)) return;

    const numericValue = Number(value);
    if (numericValue > 100000) return;

    setPrice(numericValue);
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  
  const handleSelectWineType = (type: 'Red' | 'White' | 'Sparkling') => {
    setSelectedWineType(type);
    setIsDropdownOpen(false); 
  };

  const formSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!wineName.trim()) return alert('와인 이름을 입력해주세요.');
    if (!price) return alert('가격을 입력해주세요.');
    if (!region.trim()) return alert('원산지를 입력해주세요.');
    if (!selectedWineType) return alert('와인 타입을 선택해주세요.');

    try {
      if (window.confirm('와인을 수정하시겠습니까?')) {
        let imageUrl = existingData?.image || '';

        if (imageFile) {
          if (imageFile.type !== 'image/png') {
            alert('이미지는 PNG 파일만 업로드 가능합니다.');
            return;
          }

          const uploadImageUrl = await uploadImage(imageFile);
          if (uploadImageUrl) {
            imageUrl = uploadImageUrl;
          } else {
            alert(
              '이미지 업로드에 실패했습니다. 5MB 이하의 이미지를 업로드해주세요.',
            );
            return;
          }
        }

        await patchWine(wineId, {
          name: wineName,
          price,
          region,
          type: selectedWineType.toUpperCase() as 'RED' | 'WHITE' | 'SPARKLING',
          image: imageUrl,
        });
        console.log({
          name: wineName,
          price,
          region,
          type: selectedWineType.toUpperCase() as 'RED' | 'WHITE' | 'SPARKLING',
          image: imageUrl,
        });
        alert('와인이 성공적으로 수정되었습니다.');
        router.reload();
      }
    } catch (err) {
      console.error(err);
      alert('와인 수정 중 오류가 발생했습니다.');
    }
  };

  return (
    <S.ModalOverlay>
      <S.ModalContent>
        <S.ModalTitle>와인 수정</S.ModalTitle>
        <S.ModalContentWrapper>
          <S.ModalContentLayoutBox>
            <S.ModalContentTitle>와인 이름</S.ModalContentTitle>
            <S.StyledInput
              value={wineName}
              onChange={(e) => setWineName(e.target.value)}
              placeholder="와인 이름 입력"
            />
          </S.ModalContentLayoutBox>
          <S.ModalContentLayoutBox>
            <S.ModalContentTitle>가격</S.ModalContentTitle>
            <S.StyledInput
              value={price.toString()}
              onChange={handlePriceChange}
              placeholder="가격 입력 (10만원 이하)"
            />
          </S.ModalContentLayoutBox>
          <S.ModalContentLayoutBox>
            <S.ModalContentTitle>원산지</S.ModalContentTitle>
            <S.StyledInput
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              placeholder="원산지 입력"
            />
          </S.ModalContentLayoutBox>
          <S.ModalContentLayoutBox>
            <S.Label>와인 타입</S.Label>
            <S.DropdownWrapper onClick={handleDropdownToggle}>
              <span>{selectedWineType}</span>
              <S.ArrowIcon isOpen={isDropdownOpen} />
            </S.DropdownWrapper>
            <S.DropdownList isOpen={isDropdownOpen}>
              <S.DropdownItem onClick={() => handleSelectWineType('Red')}>Red</S.DropdownItem>
              <S.DropdownItem onClick={() => handleSelectWineType('White')}>White</S.DropdownItem>
              <S.DropdownItem onClick={() => handleSelectWineType('Sparkling')}>Sparkling</S.DropdownItem>
            </S.DropdownList>
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
          <BasicButton onClick={formSubmit}>수정하기</BasicButton>
        </S.ModalButtonWrapper>
      </S.ModalContent>
    </S.ModalOverlay>
  );
}