import Image from 'next/image';
import sample from '@/public/images/sample.png';
import * as S from './MonthlyWineSection.css';
import StarIcon from '@mui/icons-material/Star';

export default function MonthlyWineSection(): React.ReactElement {
  return (
    <section className="container">
      <S.MonthlyWineContainer>
        <S.WinesPageSectionTitle>이번 달 추천 와인</S.WinesPageSectionTitle>
        <S.MonthlyWineCardContainer>
          <S.MonthlyWineCard>
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
          <S.MonthlyWineCard>
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
          <S.MonthlyWineCard>
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
          <S.MonthlyWineCard>
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
          <S.MonthlyWineCard>
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
          <S.MonthlyWineCard>
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
          <S.MonthlyWineCard>
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
          <S.MonthlyWineCard>
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
        </S.MonthlyWineCardContainer>
      </S.MonthlyWineContainer>
    </section>
  );
}
