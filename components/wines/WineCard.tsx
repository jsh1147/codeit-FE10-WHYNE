import Image from 'next/image';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import * as S from './WineCard.css';
import sample from '@/public/images/sample.png';
import CustomRating from '../common/CustomRating';
import { toNumberFormatOfKor } from '@/utils/toNumberFormatOfKor';

export default function WineCard() {
  return (
    <S.WineCardContainer className="container">
      <S.WineInfoWrapper>
        <S.WineImageThumbnail>
          <S.ImageWrapper>
            <Image
              priority
              src={sample}
              fill
              style={{ objectFit: 'cover' }}
              alt="와인이미지"
              sizes="(min-width: 1200px) 50vw, 25vw"
            />
          </S.ImageWrapper>
        </S.WineImageThumbnail>
        <S.WineInfoSection>
          <S.WineInfoSectionWrapper>
            <div>
              <S.WineInfoTitle>
                Sentinel Carbernet Sauvignon 2016
              </S.WineInfoTitle>
              <S.WineInfoText>Western Cape, South Africa</S.WineInfoText>
            </div>
            <S.WineInfoReviewBox>
              <div aria-label="평점">
                <strong>4.8</strong>
              </div>
              <CustomRating defaultValue={4.8} size="medium" readOnly />
              <S.WineInfoText $fontSize={'14px'} $lineHeight={'24px'}>
                17개의 후기
              </S.WineInfoText>
            </S.WineInfoReviewBox>
          </S.WineInfoSectionWrapper>
          <aside>
            <S.PriceButton>{toNumberFormatOfKor(64900)}</S.PriceButton>
            <ArrowForwardRoundedIcon htmlColor="var(--gray-300)" />
          </aside>
        </S.WineInfoSection>
      </S.WineInfoWrapper>
      <S.RecentReviewSection>
        <S.RecentReviewWrapper>
          <h3>최신 후기</h3>
          <S.WineInfoText>
            맛이 좋습니다 맛이 좋습니다 맛이 좋습니다맛이 좋습니다 맛이 좋습니다
            맛이 좋습니다맛이 좋습니다맛이 좋습니다맛이 좋습니다맛이
            좋습니다맛이 좋습니다
          </S.WineInfoText>
        </S.RecentReviewWrapper>
      </S.RecentReviewSection>
    </S.WineCardContainer>
  );
}
