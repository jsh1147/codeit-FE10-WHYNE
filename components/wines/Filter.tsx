import { toNumberFormatOfKor } from '@/utils/toNumberFormatOfKor';
import CustomizedRadios from './CustomRadio';
import * as S from './Filter.css';

export default function Filter() {
  return (
    <S.FilterContainer>
      <S.FilterOptionTitle>WINE TYPES</S.FilterOptionTitle>
      <S.FilterOptionBtnBox>
        <S.FilterOptionBtn>Red</S.FilterOptionBtn>
        <S.FilterOptionBtn>White</S.FilterOptionBtn>
        <S.FilterOptionBtn>Sparkling</S.FilterOptionBtn>
      </S.FilterOptionBtnBox>
      <S.FilterPriceContainer>
        <S.FilterOptionTitle>PRICE</S.FilterOptionTitle>
        <S.FilterPriceSliderWrapper>
          <S.FilterPriceSlider
            getAriaLabel={() => '금액 범위'}
            max={74000}
            defaultValue={[0, 74000]}
            valueLabelFormat={(value) => toNumberFormatOfKor(value)}
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
      <S.FilterOptionTitle>RATING</S.FilterOptionTitle>
      <CustomizedRadios />
    </S.FilterContainer>
  );
}
