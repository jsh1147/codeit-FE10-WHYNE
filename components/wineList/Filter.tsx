import { RATING_ALL } from '@/constants/wineRating';
import { PC, TABLET, useResponsiveQuery } from '@/hooks/useResponsiveQuery';
import { FilterOptions } from '@/pages/wines';
import { toNumberFormatOfKor } from '@/utils/toNumberFormatOfKor';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { Dispatch, SetStateAction } from 'react';
import BasicButton from './BasicButton';
import CustomizedRadios from './CustomRadio';
import * as S from './Filter.css';
import { RED, SPARKLING, WHITE } from '@/constants/wineType';
import { WineType } from '@/types/wineType';

interface FilterProps {
  toggleFilter?: () => void;
  filter: FilterOptions;
  setFilter: Dispatch<SetStateAction<FilterOptions>>;
  modalFilter: FilterOptions;
  setModalFilter: Dispatch<SetStateAction<FilterOptions>>;
}

export default function Filter(props: FilterProps) {
  const { toggleFilter, filter, setFilter, modalFilter, setModalFilter } =
    props;
  const responsiveQuery = useResponsiveQuery();

  const handleTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.checked) {
      setFilter((prev) => ({ ...prev, type: undefined }));
    } else {
      const newWineType = e.target.value as WineType;

      if (responsiveQuery === PC) {
        setFilter((prev) => ({ ...prev, type: newWineType }));
      } else {
        setModalFilter((prev) => ({ ...prev, type: newWineType }));
      }
    }
  };

  const handleFilterApply = () => {
    setFilter(modalFilter);
    if (toggleFilter !== undefined) {
      toggleFilter();
    }
  };

  const handleResetFilter = () => {
    setModalFilter({
      price: [0, 1000000],
      rating: RATING_ALL,
    });
  };

  const handlePriceChange = (
    _: React.SyntheticEvent | Event,
    value: number | number[],
  ) => {
    if (typeof value === 'number') return;

    const newPrice = value as [number, number];

    if (responsiveQuery === PC) {
      setFilter((prev) => ({
        ...prev,
        price: newPrice,
      }));
    } else {
      setModalFilter((prev) => ({
        ...prev,
        price: newPrice,
      }));
    }
  };

  return (
    <S.FilterContainer>
      {responsiveQuery === TABLET && (
        <S.TabletFilterTop>
          <S.TabletFilterTitle>필터</S.TabletFilterTitle>
          <CloseRoundedIcon
            onClick={() => toggleFilter && toggleFilter()}
            sx={{ fill: 'var(--gray-500)', cursor: 'pointer' }}
          />
        </S.TabletFilterTop>
      )}
      <S.FilterTypesWrapper>
        <S.FilterOptionTitle>WINE TYPES</S.FilterOptionTitle>
        <S.FilterOptionBtnBox>
          <input
            onChange={handleTypeChange}
            type="checkbox"
            id="red"
            value={RED}
            name="filter"
            checked={
              (responsiveQuery === PC ? filter.type : modalFilter.type) === RED
            }
          />
          <label htmlFor="red">Red</label>

          <input
            onChange={handleTypeChange}
            type="checkbox"
            value={WHITE}
            id="white"
            name="filter"
            checked={
              (responsiveQuery === PC ? filter.type : modalFilter.type) ===
              WHITE
            }
          />
          <label htmlFor="white">White</label>

          <input
            onChange={handleTypeChange}
            type="checkbox"
            id="sparkling"
            value={SPARKLING}
            name="filter"
            checked={
              (responsiveQuery === PC ? filter.type : modalFilter.type) ===
              SPARKLING
            }
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
            max={1000000}
            value={responsiveQuery === PC ? filter.price : modalFilter.price}
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
        <CustomizedRadios
          filter={filter}
          setFilter={setFilter}
          modalFilter={modalFilter}
          setModalFilter={setModalFilter}
        />
      </S.FilterRatingWrapper>
      {responsiveQuery === TABLET && (
        <S.TabletFilterButton>
          <BasicButton
            $bgColor="var(--purple-10)"
            $fontColor="var(--purple-100)"
            onClick={handleResetFilter}
          >
            초기화
          </BasicButton>
          <BasicButton $width="223px" onClick={handleFilterApply}>
            필터 적용하기
          </BasicButton>
        </S.TabletFilterButton>
      )}
    </S.FilterContainer>
  );
}
