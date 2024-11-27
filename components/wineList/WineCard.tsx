import { useWineNavigation } from '@/hooks/useWineNavigation';
import { WineDetails } from '@/types/wineListTypes';
import { toNumberFormatOfKor } from '@/utils/toNumberFormatOfKor';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import Image from 'next/image';
import CustomRating from '../common/CustomRating';
import * as S from './WineCard.css';

export default function WineCard({ wine }: { wine: WineDetails }) {
  
  const navigateToWine = useWineNavigation();

  return (
    <S.WineCardContainer onClick={() => navigateToWine(wine.id)}>
      <S.WineInfoWrapper>
        <S.WineImageThumbnail>
          <S.ImageWrapper>
            <Image
              priority
              src={wine.image}
              fill
              style={{ objectFit: 'cover' }}
              alt="와인이미지"
              sizes="(min-width: 1200px) 50vw, 25vw"
            />
          </S.ImageWrapper>
        </S.WineImageThumbnail>
        <S.WineInfoSection>
          <S.WineInfoSectionWrapper>
            <S.WineDesc>
              <S.WineInfoTitle>{wine.name}</S.WineInfoTitle>
              <S.WineInfoText>{wine.region}</S.WineInfoText>
            </S.WineDesc>
            <S.WineInfoReviewBox>
              <div aria-label="평점">
                <strong>{wine.avgRating.toFixed(1)}</strong>
              </div>
              <CustomRating
                defaultValue={wine.avgRating}
                size="medium"
                readOnly
              />
              <S.WineInfoText $fontSize={'14px'} $lineHeight={'24px'}>
                {wine.reviewCount}개의 후기
              </S.WineInfoText>
            </S.WineInfoReviewBox>
          </S.WineInfoSectionWrapper>
          <aside>
            <S.PriceButton>{toNumberFormatOfKor(wine.price)}</S.PriceButton>
            <ArrowForwardRoundedIcon htmlColor="var(--gray-300)" />
          </aside>
        </S.WineInfoSection>
      </S.WineInfoWrapper>
      <S.RecentReviewSection>
        <S.RecentReviewWrapper>
          <h3>최신 후기</h3>
          <S.WineInfoText>
            {wine.recentReview?.content || '아직 후기가 없습니다.'}
          </S.WineInfoText>
        </S.RecentReviewWrapper>
      </S.RecentReviewSection>
    </S.WineCardContainer>
  );
}
