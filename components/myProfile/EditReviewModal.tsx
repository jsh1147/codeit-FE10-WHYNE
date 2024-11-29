import * as S from './EditReviewModal.css';
import { useRouter } from 'next/router';
import { MouseEvent, useState, useEffect } from 'react';
import BasicButton from '@/components/wines/BasicButton';
import { patchReview, getReview } from '@/apis/itemDeleteEditApis'; 
import { Rating, Slider } from '@mui/material'; 
import { translateAroma, translateAromaToKey } from '@/utils/translateAroma';

interface EditReviewModalProps {
    closeModal: () => void;
    reviewId: number;
    wineName: string;
}

export default function EditReviewModal({
    closeModal,
    reviewId,
    wineName,
}: EditReviewModalProps): JSX.Element {
    const router = useRouter();
    const availableScentItems = [
        '체리', '베리', '오크', '바닐라', '후추', '제빵', '풀', '사과', '복숭아', '시트러스',
        '트로피컬', '미네랄', '꽃', '담뱃잎', '흙', '초콜릿', '스파이스', '카라멜', '가죽'
    ];

    const [rating, setRating] = useState<number>(0);
    const [lightBold, setLightBold] = useState<number>(0);
    const [smoothTannic, setSmoothTannic] = useState<number>(0);
    const [drySweet, setDrySweet] = useState<number>(0);
    const [softAcidic, setSoftAcidic] = useState<number>(0);
    const [aroma, setAroma] = useState<string[]>([]);
    const [content, setContent] = useState<string>('');
    const translatedAroma = translateAromaToKey(aroma);
    useEffect(() => {
        const fetchReviewData = async () => {
            try {
                const reviewData = await getReview(reviewId); 
                setRating(reviewData.rating);
                setLightBold(reviewData.lightBold);
                setSmoothTannic(reviewData.smoothTannic);
                setDrySweet(reviewData.drySweet);
                setSoftAcidic(reviewData.softAcidic);
                setAroma(translateAroma(reviewData.aroma));
                setContent(reviewData.content);
            } catch (error) {
                console.error('리뷰 데이터를 불러오는 중 오류 발생:', error);
            }
        };

        fetchReviewData();
    }, [reviewId,wineName]);
    const handleScentChange = (scent: string) => {
        setAroma((prevAroma) =>
            prevAroma.includes(scent)
                ? prevAroma.filter((item) => item !== scent)
                : [...prevAroma, scent]
        );
    };

    const formSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        try {
            if (window.confirm('리뷰를 수정하시겠습니까?')) {
                await patchReview(reviewId, {
                    rating,
                    lightBold,
                    smoothTannic,
                    drySweet,
                    softAcidic,
                    aroma:translatedAroma,
                    content,
                });
                router.reload();
            }
        } catch (err) {
            console.error('리뷰 수정 중 오류 발생:', err);
        }
    };

    return (
        <S.ModalOverlay>
            <S.ModalContent>
                <S.ModalTitle>수정하기</S.ModalTitle>
                <S.ModalContentWrapper>
                    <S.ReviewContentWrapper>
                        <S.InfoWrapper>
                            <S.WineIcon aria-label="와인 아이콘" />
                            <S.RattingWrapper>
                                <S.WineNameText>{wineName}</S.WineNameText>
                                <Rating
                                    value={rating} 
                                    onChange={(_, newValue) => setRating(newValue || 0)} 
                                    precision={0.5} 
                                    icon={<S.Star aria-label="별" style={{ width: 32, height: 32 }} />} 
                                    emptyIcon={<S.EmptyStar aria-label="비어있는 별" style={{ width: 32, height: 32 }} />}
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
                            placeholder='후기를 작성해주세요'
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                    </S.ReviewContentWrapper>
                    <S.ReviewDetailWrapper>
                        <S.QuestionText>와인의 맛은 어땠나요?</S.QuestionText>
                        <S.SliderListWrapper> 
                        <S.SliderWrapper>
                            <S.Tag>바디감</S.Tag>
                            <S.TasteText>가벼워요</S.TasteText>
                            <Slider
                                value={lightBold}
                                onChange={(_, newValue) => setLightBold(newValue as number)}
                                min={0}
                                max={5}
                                step={0.5}
                                sx={{
                                    '& .MuiSlider-track': {
                                        backgroundColor: 'var(--gray-100)',
                                        height: '6px', 
                                        width:'260px',
                                    },
                                    '& .MuiSlider-rail': {
                                        backgroundColor: 'var(--gray-300)', 
                                  
                                    },
                                    '& .MuiSlider-thumb': {
                                        backgroundColor: 'var(--purple-100)', 
                                        borderColor: 'var(--gray-300)', 
                                        border:'0.5px',
                                        width:'16px',
                                        height:'16px',
                                        
                                    },
                                    '& .MuiSlider-thumb:hover': {
                                        backgroundColor: 'var(--purple-100)', 
                                    },
                                }}
                            />
                            <S.TasteText>진해요</S.TasteText>
                        </S.SliderWrapper>
                        <S.SliderWrapper>
                            <S.Tag>타닌</S.Tag>
                            <S.TasteText>부드러워요</S.TasteText>
                            <Slider
                                value={smoothTannic}
                                onChange={(_, newValue) => setSmoothTannic(newValue as number)}
                                min={0}
                                max={5}
                                step={1}
                                sx={{
                                    '& .MuiSlider-track': {
                                        backgroundColor: 'var(--gray-100)',
                                        height: '6px', 
                                        width:'260px',
                                    },
                                    '& .MuiSlider-rail': {
                                        backgroundColor: 'var(--gray-300)', 
                                  
                                    },
                                    '& .MuiSlider-thumb': {
                                        backgroundColor: 'var(--purple-100)', 
                                        borderColor: 'var(--gray-300)', 
                                        border:'0.5px',
                                        width:'16px',
                                        height:'16px',
                                        
                                    },
                                    '& .MuiSlider-thumb:hover': {
                                        backgroundColor: 'var(--purple-100)', 
                                    },
                                }}
                            />
                            <S.TasteText>떫어요</S.TasteText>
                        </S.SliderWrapper>
                        <S.SliderWrapper>
                            <S.Tag>당도</S.Tag>
                            <S.TasteText>드라이해요</S.TasteText>
                            <Slider
                                value={drySweet}
                                onChange={(_, newValue) => setDrySweet(newValue as number)}
                                min={0}
                                max={5}
                                step={1}
                                sx={{
                                    '& .MuiSlider-track': {
                                        backgroundColor: 'var(--gray-100)',
                                        height: '6px', 
                                        width:'260px',
                                    },
                                    '& .MuiSlider-rail': {
                                        backgroundColor: 'var(--gray-300)', 
                                  
                                    },
                                    '& .MuiSlider-thumb': {
                                        backgroundColor: 'var(--purple-100)', 
                                        borderColor: 'var(--gray-300)', 
                                        border:'0.5px',
                                        width:'16px',
                                        height:'16px',
                                        
                                    },
                                    '& .MuiSlider-thumb:hover': {
                                        backgroundColor: 'var(--purple-100)', 
                                    },
                                }}
                            />
                            <S.TasteText>달아요</S.TasteText>
                        </S.SliderWrapper>
                        <S.SliderWrapper>
                            <S.Tag>산미</S.Tag>
                            <S.TasteText>안셔요</S.TasteText>
                            <Slider
                                value={softAcidic}
                                onChange={(_, newValue) => setSoftAcidic(newValue as number)}
                                min={0}
                                max={5}
                                step={1}
                                sx={{
                                    '& .MuiSlider-track': {
                                        backgroundColor: 'var(--gray-100)',
                                        height: '6px', 
                                        width:'260px',
                                    },
                                    '& .MuiSlider-rail': {
                                        backgroundColor: 'var(--gray-300)', 
                                  
                                    },
                                    '& .MuiSlider-thumb': {
                                        backgroundColor: 'var(--purple-100)', 
                                        borderColor: 'var(--gray-300)', 
                                        border:'1px',
                                        width:'16px',
                                        height:'16px',
                                        
                                    },
                                    '& .MuiSlider-thumb:hover': {
                                        backgroundColor: 'var(--purple-100)',
                                    },
                                }}
                            />
                            <S.TasteText>많이셔요</S.TasteText>
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
                                                $isSelected={aroma.includes(scent)}
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