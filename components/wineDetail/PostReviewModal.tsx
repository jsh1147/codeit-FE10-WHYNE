import * as S from './ReviewModal.css';
import { useRouter } from 'next/router';
import { MouseEvent, useState, useEffect } from 'react';
import BasicButton from '@/components/wines/BasicButton';
import { Rating, Slider } from '@mui/material';
import { translateAroma, translateAromaToKey } from '@/utils/translateAroma';
import { instance } from '@/apis/instance';

interface PostReviewModalProps {
  closeModal: () => void;
  rating: number;
  lightBold: number;
  smoothTannic: number;
  drySweet: number;
  softAcidic: number;
  aroma: string[];
  content: string;
  wineId: number;
  wineName: string;
}

interface postReviewData {
  rating: number;
  lightBold: number;
  smoothTannic: number;
  drySweet: number;
  softAcidic: number;
  aroma: string[];
  content: string;
  wineId: number;
}

export default function PostReviewModal({
  closeModal,
  rating,
  lightBold,
  smoothTannic,
  drySweet,
  softAcidic,
  aroma,
  content,
  wineId,
  wineName,
}: PostReviewModalProps): JSX.Element {
  const router = useRouter();
  const availableScentItems = [
    '체리',
    '베리',
    '오크',
    '바닐라',
    '후추',
    '제빵',
    '풀',
    '사과',
    '복숭아',
    '시트러스',
    '트로피컬',
    '미네랄',
    '꽃',
    '담뱃잎',
    '흙',
    '초콜릿',
    '스파이스',
    '카라멜',
    '가죽',
  ];

  const [postRating, setPostRating] = useState<number>(0);
  const [postLightBold, setPostLightBold] = useState<number>(0);
  const [postSmoothTannic, setPostSmoothTannic] = useState<number>(0);
  const [postDrySweet, setPostDrySweet] = useState<number>(0);
  const [postSoftAcidic, setPostSoftAcidic] = useState<number>(0);
  const [postAroma, setPostAroma] = useState<string[]>(translateAroma(aroma));
  const [postContent, setPostContent] = useState<string>('');

  const postReview = async (data: postReviewData): Promise<void> => {
    try {
      const res = await instance.post('/reviews', data);
      console.log('리뷰 등록 성공:', res.data);
    } catch (err) {
      console.error(err);
      alert('리뷰 등록 중 오류가 발생했습니다.');
    }
  };

  useEffect(() => {
    setPostRating(rating);
    setPostLightBold(lightBold);
    setPostSmoothTannic(smoothTannic);
    setPostDrySweet(drySweet);
    setPostSoftAcidic(softAcidic);
    setPostAroma(translateAroma(aroma));
    setPostContent(content);
  }, [rating, lightBold, smoothTannic, drySweet, softAcidic, aroma, content]);

  const handleScentChange = (scent: string) => {
    setPostAroma((prevAroma) =>
      prevAroma.includes(scent)
        ? prevAroma.filter((item) => item !== scent)
        : [...prevAroma, scent],
    );
  };

  const handleOverlayClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const formSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      if (window.confirm('리뷰를 등록하시겠습니까?')) {
        await postReview({
          rating: postRating,
          lightBold: postLightBold,
          smoothTannic: postSmoothTannic,
          drySweet: postDrySweet,
          softAcidic: postSoftAcidic,
          aroma: translateAromaToKey(postAroma),
          content: postContent,
          wineId,
        });
        router.reload();
      }
    } catch (err) {
      console.error('리뷰 등록 중 오류 발생:', err);
    }
  };

  return (
    <S.ModalOverlay onClick={handleOverlayClick}>
      <S.ModalContent>
        <S.ModalTitleContainer>
          <S.ModalTitle>리뷰 등록</S.ModalTitle>
          <button onClick={closeModal}>
            <S.closeIcon />
          </button>
        </S.ModalTitleContainer>
        <S.ModalContentWrapper>
          <S.ReviewContentWrapper>
            <S.InfoWrapper>
              <S.WineIcon aria-label="와인 아이콘" />
              <S.RattingWrapper>
                <S.WineNameText>{wineName}</S.WineNameText>
                <Rating
                  value={postRating}
                  onChange={(_, newValue) => setPostRating(newValue || 0)}
                  precision={1}
                  icon={
                    <S.Star aria-label="별" style={{ width: 32, height: 32 }} />
                  }
                  emptyIcon={
                    <S.EmptyStar
                      aria-label="비어있는 별"
                      style={{ width: 32, height: 32 }}
                    />
                  }
                  sx={{
                    '& .MuiRating-iconFilled': {
                      color: 'var(--purple-100)',
                    },
                    '& .MuiRating-iconEmpty': {
                      color: 'var(--gray-300)',
                    },
                    '& .MuiRating-icon': {
                      width: 32,
                      height: 32,
                    },
                  }}
                />
              </S.RattingWrapper>
            </S.InfoWrapper>
            <S.ReviewContent
              placeholder="후기를 작성해주세요"
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
            />
          </S.ReviewContentWrapper>
          <S.ReviewDetailWrapper>
            <S.QuestionText>와인의 맛은 어땠나요?</S.QuestionText>
            <S.SliderListWrapper>
              <S.SliderWrapper>
                <S.Tag>바디감</S.Tag>
                <S.TasteTextL>가벼워요</S.TasteTextL>
                <Slider
                  value={postLightBold}
                  onChange={(_, newValue) =>
                    setPostLightBold(newValue as number)
                  }
                  min={0}
                  max={5}
                  step={1}
                  sx={{
                    '& .MuiSlider-track': {
                      backgroundColor: 'var(--gray-100)',
                      height: '6px',
                      width: '260px',
                    },
                    '& .MuiSlider-rail': {
                      backgroundColor: 'var(--gray-300)',
                    },
                    '& .MuiSlider-thumb': {
                      backgroundColor: 'var(--purple-100)',
                      borderColor: 'var(--gray-300)',
                      border: '0.5px',
                      width: '16px',
                      height: '16px',
                    },
                    '& .MuiSlider-thumb:hover': {
                      backgroundColor: 'var(--purple-100)',
                    },
                  }}
                />
                <S.TasteTextR>진해요</S.TasteTextR>
              </S.SliderWrapper>
              <S.SliderWrapper>
                <S.Tag>타닌</S.Tag>
                <S.TasteTextL>부드러워요</S.TasteTextL>
                <Slider
                  value={postSmoothTannic}
                  onChange={(_, newValue) =>
                    setPostSmoothTannic(newValue as number)
                  }
                  min={0}
                  max={5}
                  step={1}
                  sx={{
                    '& .MuiSlider-track': {
                      backgroundColor: 'var(--gray-100)',
                      height: '6px',
                      width: '260px',
                    },
                    '& .MuiSlider-rail': {
                      backgroundColor: 'var(--gray-300)',
                    },
                    '& .MuiSlider-thumb': {
                      backgroundColor: 'var(--purple-100)',
                      borderColor: 'var(--gray-300)',
                      border: '0.5px',
                      width: '16px',
                      height: '16px',
                    },
                    '& .MuiSlider-thumb:hover': {
                      backgroundColor: 'var(--purple-100)',
                    },
                  }}
                />
                <S.TasteTextR>떫어요</S.TasteTextR>
              </S.SliderWrapper>
              <S.SliderWrapper>
                <S.Tag>당도</S.Tag>
                <S.TasteTextL>드라이해요</S.TasteTextL>
                <Slider
                  value={postDrySweet}
                  onChange={(_, newValue) =>
                    setPostDrySweet(newValue as number)
                  }
                  min={0}
                  max={5}
                  step={1}
                  sx={{
                    '& .MuiSlider-track': {
                      backgroundColor: 'var(--gray-100)',
                      height: '6px',
                      width: '260px',
                    },
                    '& .MuiSlider-rail': {
                      backgroundColor: 'var(--gray-300)',
                    },
                    '& .MuiSlider-thumb': {
                      backgroundColor: 'var(--purple-100)',
                      borderColor: 'var(--gray-300)',
                      border: '0.5px',
                      width: '16px',
                      height: '16px',
                    },
                    '& .MuiSlider-thumb:hover': {
                      backgroundColor: 'var(--purple-100)',
                    },
                  }}
                />
                <S.TasteTextR>달아요</S.TasteTextR>
              </S.SliderWrapper>
              <S.SliderWrapper>
                <S.Tag>산미</S.Tag>
                <S.TasteTextL>안셔요</S.TasteTextL>
                <Slider
                  value={postSoftAcidic}
                  onChange={(_, newValue) =>
                    setPostSoftAcidic(newValue as number)
                  }
                  min={0}
                  max={5}
                  step={1}
                  sx={{
                    '& .MuiSlider-track': {
                      backgroundColor: 'var(--gray-100)',
                      height: '6px',
                      width: '260px',
                    },
                    '& .MuiSlider-rail': {
                      backgroundColor: 'var(--gray-300)',
                    },
                    '& .MuiSlider-thumb': {
                      backgroundColor: 'var(--purple-100)',
                      borderColor: 'var(--gray-300)',
                      border: '1px',
                      width: '16px',
                      height: '16px',
                    },
                    '& .MuiSlider-thumb:hover': {
                      backgroundColor: 'var(--purple-100)',
                    },
                  }}
                />
                <S.TasteTextR>많이셔요</S.TasteTextR>
              </S.SliderWrapper>
            </S.SliderListWrapper>
          </S.ReviewDetailWrapper>
          <S.ReviewDetailWrapper>
            <S.QuestionText>기억에 남는 향이 있나요?</S.QuestionText>
            <S.ScentListWrapper>
              <S.ReviewDetailWrapper>
                <S.ScentListWrapper>
                  {availableScentItems.map((scent) => (
                    <S.ScentItem
                      key={scent}
                      onClick={() => handleScentChange(scent)}
                      $isSelected={postAroma.includes(scent)}
                    >
                      {scent}
                    </S.ScentItem>
                  ))}
                </S.ScentListWrapper>
              </S.ReviewDetailWrapper>
            </S.ScentListWrapper>
          </S.ReviewDetailWrapper>
        </S.ModalContentWrapper>
        <S.ModalButtonWrapper>
          <BasicButton onClick={formSubmit}>리뷰 남기기</BasicButton>
        </S.ModalButtonWrapper>
      </S.ModalContent>
    </S.ModalOverlay>
  );
}
