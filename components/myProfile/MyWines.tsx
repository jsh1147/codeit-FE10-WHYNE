import * as S from './MyWines.css';
import StarIcon from '@/public/icons/icon_star.svg';
import KebapIcon from '@/public/icons/icon_kebap.svg';
import { useEffect, useState, useRef, useCallback } from 'react';
import { TotalCount } from './MyReviews.css';
import WineImage from '@/public/images/wineimg_example.png';
export default function MyWines() {
    return (
        <S.WineListContainer>
            <S.TotalCount>총 18개</S.TotalCount>
            <S.WineItemWrapper>
                <S.WineItem>
                    <S.WineImage src={ WineImage } alt="와인이미지"/>
                    <S.WineInfoWrapper>
                        <S.WineNameWrapper>
                            <S.WineNameText>Sentinel Carbernet Sauvignon 2016</S.WineNameText>
                            <S.WineRegionText>Western Cape, South Africa</S.WineRegionText>
                        </S.WineNameWrapper>
                        <S.Price>
                            <S.PriceText>₩ 64,99990</S.PriceText>
                        </S.Price>
                    </S.WineInfoWrapper>
                    <S.KebapIcon src={KebapIcon} alt="더보기" />
                </S.WineItem>
            </S.WineItemWrapper>
            
        </S.WineListContainer>
    );
}

