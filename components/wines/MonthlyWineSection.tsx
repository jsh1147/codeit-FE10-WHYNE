import Image from 'next/image';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import sample from '@/public/images/sample.png';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import StarIcon from '@mui/icons-material/Star';
import { useState } from 'react';
import * as S from './MonthlyWineSection.css';

interface ArrowBtnProps {
  className?: string;
  onClick?: () => void;
}

function NextArrowBtn({ className, onClick }: ArrowBtnProps) {
  return (
    <S.StyledArrowBtn className={className} onClick={onClick}>
      <ArrowForwardRoundedIcon htmlColor="var(--gray-300)" />
    </S.StyledArrowBtn>
  );
}

function PrevArrowBtn({ className, onClick }: ArrowBtnProps) {
  return (
    <S.StyledArrowBtn className={className} onClick={onClick}>
      <ArrowBackRoundedIcon htmlColor="var(--gray-300)" />
    </S.StyledArrowBtn>
  );
}

export default function MonthlyWineSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrowBtn />, // 화살표 버튼을 커스텀해서 사용
    prevArrow: currentIndex > 0 ? <PrevArrowBtn /> : undefined, // 인덱스가 0보다 클 때만 prev 버튼 렌더링
    beforeChange: (oldIndex: number, newIndex: number) =>
      setCurrentIndex(newIndex), // 인덱스 업데이트
  };
  return (
    <section className="container">
      <S.MonthlyWineContainer>
        <S.WinesPageSectionTitle>이번 달 추천 와인</S.WinesPageSectionTitle>
        <S.MonthlyWineCardContainer>
          <S.StyledSlider {...settings}>
            <S.MonthlyWineCard key={0}>
              <S.MonthlyWineCardContent>
                <S.CardThumbnail>
                  <S.ImageWrapper>
                    <Image
                      priority
                      src={sample}
                      fill
                      style={{ objectFit: 'cover' }}
                      alt="와인이미지"
                      sizes="(min-width: 768px) 44px, 38px"
                    />
                  </S.ImageWrapper>
                </S.CardThumbnail>
                <S.MonthlyWineCardInfo>
                  <p>4.8</p>
                  <S.CustomRating
                    name="size-small"
                    defaultValue={Math.floor(4.8)}
                    size="small"
                    readOnly
                    emptyIcon={
                      <StarIcon
                        style={{ fill: `var(--gray-300)` }}
                        fontSize="inherit"
                      />
                    }
                  />

                  <S.MonthlyWineCardInfoText>
                    <span>Sentinel</span>
                    <span>Carrot</span>
                    <span>Say 2016</span>
                  </S.MonthlyWineCardInfoText>
                </S.MonthlyWineCardInfo>
              </S.MonthlyWineCardContent>
            </S.MonthlyWineCard>
            <S.MonthlyWineCard key={1}>
              <S.MonthlyWineCardContent>
                <S.CardThumbnail>
                  <S.ImageWrapper>
                    <Image
                      priority
                      src={sample}
                      fill
                      style={{ objectFit: 'cover' }}
                      alt="와인이미지"
                      sizes="(min-width: 768px) 44px, 38px"
                    />
                  </S.ImageWrapper>
                </S.CardThumbnail>
                <S.MonthlyWineCardInfo>
                  <p>4.8</p>
                  <S.CustomRating
                    name="size-small"
                    defaultValue={Math.floor(4.8)}
                    size="small"
                    readOnly
                    emptyIcon={
                      <StarIcon
                        style={{ fill: `var(--gray-300)` }}
                        fontSize="inherit"
                      />
                    }
                  />

                  <S.MonthlyWineCardInfoText>
                    <span>Sentinel</span>
                    <span>Carrot</span>
                    <span>Say 2016</span>
                  </S.MonthlyWineCardInfoText>
                </S.MonthlyWineCardInfo>
              </S.MonthlyWineCardContent>
            </S.MonthlyWineCard>
            <S.MonthlyWineCard key={2}>
              <S.MonthlyWineCardContent>
                <S.CardThumbnail>
                  <S.ImageWrapper>
                    <Image
                      priority
                      src={sample}
                      fill
                      style={{ objectFit: 'cover' }}
                      alt="와인이미지"
                      sizes="(min-width: 768px) 44px, 38px"
                    />
                  </S.ImageWrapper>
                </S.CardThumbnail>
                <S.MonthlyWineCardInfo>
                  <p>4.8</p>
                  <S.CustomRating
                    name="size-small"
                    defaultValue={Math.floor(4.8)}
                    size="small"
                    readOnly
                    emptyIcon={
                      <StarIcon
                        style={{ fill: `var(--gray-300)` }}
                        fontSize="inherit"
                      />
                    }
                  />

                  <S.MonthlyWineCardInfoText>
                    <span>Sentinel</span>
                    <span>Carrot</span>
                    <span>Say 2016</span>
                  </S.MonthlyWineCardInfoText>
                </S.MonthlyWineCardInfo>
              </S.MonthlyWineCardContent>
            </S.MonthlyWineCard>
            <S.MonthlyWineCard key={3}>
              <S.MonthlyWineCardContent>
                <S.CardThumbnail>
                  <S.ImageWrapper>
                    <Image
                      priority
                      src={sample}
                      fill
                      style={{ objectFit: 'cover' }}
                      alt="와인이미지"
                      sizes="(min-width: 768px) 44px, 38px"
                    />
                  </S.ImageWrapper>
                </S.CardThumbnail>
                <S.MonthlyWineCardInfo>
                  <p>4.8</p>
                  <S.CustomRating
                    name="size-small"
                    defaultValue={Math.floor(4.8)}
                    size="small"
                    readOnly
                    emptyIcon={
                      <StarIcon
                        style={{ fill: `var(--gray-300)` }}
                        fontSize="inherit"
                      />
                    }
                  />

                  <S.MonthlyWineCardInfoText>
                    <span>Sentinel</span>
                    <span>Carrot</span>
                    <span>Say 2016</span>
                  </S.MonthlyWineCardInfoText>
                </S.MonthlyWineCardInfo>
              </S.MonthlyWineCardContent>
            </S.MonthlyWineCard>
            <S.MonthlyWineCard key={3}>
              <S.MonthlyWineCardContent>
                <S.CardThumbnail>
                  <S.ImageWrapper>
                    <Image
                      priority
                      src={sample}
                      fill
                      style={{ objectFit: 'cover' }}
                      alt="와인이미지"
                      sizes="(min-width: 768px) 44px, 38px"
                    />
                  </S.ImageWrapper>
                </S.CardThumbnail>
                <S.MonthlyWineCardInfo>
                  <p>4.8</p>
                  <S.CustomRating
                    name="size-small"
                    defaultValue={Math.floor(4.8)}
                    size="small"
                    readOnly
                    emptyIcon={
                      <StarIcon
                        style={{ fill: `var(--gray-300)` }}
                        fontSize="inherit"
                      />
                    }
                  />

                  <S.MonthlyWineCardInfoText>
                    <span>Sentinel</span>
                    <span>Carrot</span>
                    <span>Say 2016</span>
                  </S.MonthlyWineCardInfoText>
                </S.MonthlyWineCardInfo>
              </S.MonthlyWineCardContent>
            </S.MonthlyWineCard>
            <S.MonthlyWineCard key={3}>
              <S.MonthlyWineCardContent>
                <S.CardThumbnail>
                  <S.ImageWrapper>
                    <Image
                      priority
                      src={sample}
                      fill
                      style={{ objectFit: 'cover' }}
                      alt="와인이미지"
                      sizes="(min-width: 768px) 44px, 38px"
                    />
                  </S.ImageWrapper>
                </S.CardThumbnail>
                <S.MonthlyWineCardInfo>
                  <p>4.8</p>
                  <S.CustomRating
                    name="size-small"
                    defaultValue={Math.floor(4.8)}
                    size="small"
                    readOnly
                    emptyIcon={
                      <StarIcon
                        style={{ fill: `var(--gray-300)` }}
                        fontSize="inherit"
                      />
                    }
                  />

                  <S.MonthlyWineCardInfoText>
                    <span>Sentinel</span>
                    <span>Carrot</span>
                    <span>Say 2016</span>
                  </S.MonthlyWineCardInfoText>
                </S.MonthlyWineCardInfo>
              </S.MonthlyWineCardContent>
            </S.MonthlyWineCard>
          </S.StyledSlider>
        </S.MonthlyWineCardContainer>
      </S.MonthlyWineContainer>
    </section>
  );
}
