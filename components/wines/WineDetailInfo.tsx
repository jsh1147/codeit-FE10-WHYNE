import React from 'react';
import Image from 'next/image';
import * as S from './WineDetailInfo.css';

interface WineInfoProps {
  id: number;
  name: string;
  image: string;
  region: string;
  price: number;
}

const WineDetailInfoHeader: React.FC<WineInfoProps> = ({
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

  return (
    <div>
      <Image src={image} alt={name} fill />
      <S.WineName>
        <h1>{name}</h1>
      </S.WineName>
      <S.WineRegion>
        <p>{region}</p>
      </S.WineRegion>
      <S.WinePrice>
        <p>{formattedPrice}</p>
      </S.WinePrice>
    </div>
  );
};

export const WineDetailInfo: React.FC<WineInfoProps> = (props) => {
  return (
    <S.WineDetailInfoContainer>
      <WineDetailInfoHeader {...props} />
    </S.WineDetailInfoContainer>
  );
};
