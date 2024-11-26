import { toNumberFormatOfKor } from '@/utils/toNumberFormatOfKor';
import { useState } from 'react';
import CustomizedRadios from './CustomRadio';
import * as S from './Filter.css';

interface FilterProps {
  changeWineType: (newType?: 'RED' | 'WHITE' | 'SPARKLING') => void;
  changePriceRange: (minPrice: number, maxPrice: number) => void;
  changeRating: (newRating?: number) => void;
}

export default function Filter(props: FilterProps) {
  const { changeWineType, changePriceRange, changeRating } = props;

  const [wineType, setWineType] = useState<'RED' | 'WHITE' | 'SPARKLING'>();
  const [price, setPrice] = useState<[number, number]>([0, 100000]);

  const handleTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.checked) {
      setWineType(undefined);
      changeWineType();
    } else {
      const newWineType = e.target.value as 'RED' | 'WHITE' | 'SPARKLING';
      setWineType(newWineType);
      changeWineType(newWineType);
    }
  };

  const handlePriceChange = (
    _: React.SyntheticEvent | Event,
    value: number | number[],
  ) => {
    if (typeof value === 'number') return;
    const newPrice = value as [number, number];
    setPrice(newPrice);
    changePriceRange(newPrice[0], newPrice[1]);
  };

  return (
    <S.FilterContainer>
      <S.FilterTypesWrapper>
        <S.FilterOptionTitle>WINE TYPES</S.FilterOptionTitle>
        <S.FilterOptionBtnBox>
          <input
            onChange={handleTypeChange}
            type="checkbox"
            id="red"
            value="RED"
            name="filter"
            checked={wineType === 'RED'}
          />
          <label htmlFor="red">Red</label>

          <input
            onChange={handleTypeChange}
            type="checkbox"
            value="WHITE"
            id="white"
            name="filter"
            checked={wineType === 'WHITE'}
          />
          <label htmlFor="white">White</label>

          <input
            onChange={handleTypeChange}
            type="checkbox"
            id="sparkling"
            value="SPARKLING"
            name="filter"
            checked={wineType === 'SPARKLING'}
          />
          <label htmlFor="sparkling">Sparkling</label>
        </S.FilterOptionBtnBox>
      </S.FilterTypesWrapper>
      <S.FilterPriceContainer>
        <S.FilterOptionTitle>PRICE</S.FilterOptionTitle>
        <S.FilterPriceSliderWrapper>
          <S.FilterPriceSlider
            onChange={handlePriceChange}
            getAriaLabel={() => '금액 범위'}
            max={100000}
            value={price}
            valueLabelFormat={(value: number) => toNumberFormatOfKor(value)}
            valueLabelDisplay={'on'}
            step={1000}
            sx={{
              '& .MuiSlider-thumb': {
                '&:focus-visible': {
                  outline: 'none',
                  boxShadow: 'none', // focus-visible 상태 제거
                },
                '&:focus': {
                  outline: 'none', // 일반 focus 상태 제거
                  boxShadow: 'none',
                },
              },
            }}
          />
        </S.FilterPriceSliderWrapper>
      </S.FilterPriceContainer>
      <S.FilterRatingWrapper>
        <S.FilterOptionTitle>RATING</S.FilterOptionTitle>
        <CustomizedRadios changeRating={changeRating} />
      </S.FilterRatingWrapper>
    </S.FilterContainer>
  );
}
