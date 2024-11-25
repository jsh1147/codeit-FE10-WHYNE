import React from 'react';
import Image from 'next/image';
import * as S from './WineInfoSection.css';

interface WineInfoProps {
  id: number;
  name: string;
  image: string;
  region: string;
  price: number;
}

const WineInfoHeader: React.FC<WineInfoProps> = ({
  id,
  name,
  image,
  region,
  price,
}) => {
  if (!id) return null;

  const formattedPrice = new Intl.NumberFormat('ko-KR', {
    style: 'currency',
    currency: 'KRW',
  }).format(price);

  const formattedPriceWithSpaces = formattedPrice.replace('₩', '₩ ');

  return (
    <S.WineInfoContainer>
      <S.WineContainer>
        <S.WineImage>
          <Image src={image} alt={name} fill />
        </S.WineImage>
        <S.WineInfo>
          <S.WineName>
            <h1>{name}</h1>
          </S.WineName>
          <S.WineRegion>
            <p>{region}</p>
          </S.WineRegion>
          <S.WinePrice>
            <p>{formattedPriceWithSpaces}</p>
          </S.WinePrice>
        </S.WineInfo>
      </S.WineContainer>
    </S.WineInfoContainer>
  );
};

export const WineInfo: React.FC<WineInfoProps> = (props) => {
  return <WineInfoHeader {...props} />;
};
