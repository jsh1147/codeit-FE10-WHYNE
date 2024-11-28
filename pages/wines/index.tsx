import BasicButton from '@/components/wineList/BasicButton';
import CreateWineModal from '@/components/wineList/CreateWineModal';
import Filter from '@/components/wineList/Filter';
import MonthlyWineSection from '@/components/wineList/MonthlyWineSection';
import SearchBar from '@/components/wineList/SearchBar';
import WineCardList, {
  WineFilterOptions,
} from '@/components/wineList/WineCardList';
import {
  RATING_30_35,
  RATING_35_40,
  RATING_40_45,
  RATING_45_50,
  RATING_ALL,
} from '@/constants/wineRating';
import useDebounce from '@/hooks/useDebounce';
import { PC, TABLET, useResponsiveQuery } from '@/hooks/useResponsiveQuery';
import { useUser } from '@/store/UserContext';
import * as S from '@/styles/wineList.css';
import { RatingType } from '@/types/wineRatingType';
import { WineType } from '@/types/wineType';
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import { IconButton } from '@mui/material';
import { useEffect, useState } from 'react';

export type FilterOptions = {
  type?: WineType;
  price: [number, number];
  rating: RatingType;
};

export default function WineListPage(): React.ReactElement {
  const [isCreateButtonModalOpen, setIsModalOpen] = useState<boolean>(false);
  const responsiveQuery = useResponsiveQuery();
  const { user } = useUser();

  const [filter, setFilter] = useState<FilterOptions>({
    price: [0, 1000000],
    rating: RATING_ALL,
  });

  const [modalFilter, setModalFilter] = useState<FilterOptions>({
    price: [0, 1000000],
    rating: RATING_ALL,
  });

  const [isFilterOpen, setIsFilterOpen] = useState(false);

  /** 필터 옵션 모달 상태 */
  const toggleFilter = () => {
    // 모달을 열 때,
    if (!isFilterOpen) {
      // PC의 필터값을 모바일 필터로 복사
      setModalFilter((prev) => ({ ...prev, ...filter }));
    }
    setIsFilterOpen((prev) => !prev);
  };

  useEffect(() => {
    if (responsiveQuery === PC) {
      setIsFilterOpen(false);
    }
  }, [responsiveQuery]);

  /** 와인 등록 모달 상태 */
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [debouncedOptions, options, setOptions] =
    useDebounce<WineFilterOptions>({}, 100);

  const searchByKeyword = (newKeyword?: string) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { name, ...others } = options;

    let newFilterOptions: WineFilterOptions;

    if (newKeyword === undefined) {
      newFilterOptions = { ...others };
    } else {
      newFilterOptions = { ...others, name: newKeyword };
    }

    setOptions(newFilterOptions);
  };

  useEffect(() => {
    let newRating: number;
    switch (filter.rating) {
      case RATING_ALL:
        // no action
        break;

      case RATING_45_50:
        newRating = 5;
        break;

      case RATING_40_45:
        newRating = 4.5;
        break;

      case RATING_35_40:
        newRating = 4;
        break;

      case RATING_30_35:
        newRating = 3.5;
        break;
    }

    setOptions((prev) => ({
      ...prev,
      type: filter.type,
      minPrice: filter.price[0],
      maxPrice: filter.price[1],
      rating: newRating,
    }));
  }, [filter, setOptions]);

  return (
    <S.WinesPageContainer>
      <MonthlyWineSection />
      {responsiveQuery === PC && (
        <>
          <S.GridWrapper>
            <S.SearchBarWrapper $isLogin={user !== undefined}>
              <SearchBar searchByKeyword={searchByKeyword} />
            </S.SearchBarWrapper>

            <S.WineCardListWrapper>
              <WineCardList filterOptions={debouncedOptions} />
            </S.WineCardListWrapper>
            <S.FilterWrapper>
              <Filter
                filter={filter}
                setFilter={setFilter}
                modalFilter={modalFilter}
                setModalFilter={setModalFilter}
              />
              {user !== undefined && (
                <BasicButton onClick={() => setIsModalOpen(true)} $width="100%">
                  와인 등록하기
                </BasicButton>
              )}
            </S.FilterWrapper>
          </S.GridWrapper>
        </>
      )}
      {isCreateButtonModalOpen && <CreateWineModal closeModal={closeModal} />}

      {responsiveQuery === TABLET && (
        <>
          <S.TopActionWrapper>
            <IconButton
              onClick={toggleFilter}
              sx={{
                backgroundColor: '#fff',
                width: 48,
                height: 48,
                border: '1px solid var(--gray-300)',
                borderRadius: '8px',
                '&:hover': { backgroundColor: 'transparent' },
              }}
            >
              <TuneRoundedIcon sx={{ color: 'var(--gray-300)' }} />
            </IconButton>
            {isFilterOpen && (
              <S.ModalOverlay>
                <Filter
                  toggleFilter={toggleFilter}
                  filter={filter}
                  setFilter={setFilter}
                  modalFilter={modalFilter}
                  setModalFilter={setModalFilter}
                />
              </S.ModalOverlay>
            )}
            <S.SearchBarWrapper $isLogin={user !== undefined}>
              <SearchBar searchByKeyword={searchByKeyword} />
            </S.SearchBarWrapper>
            {user !== undefined && (
              <BasicButton onClick={() => setIsModalOpen(true)} $width="220px">
                와인 등록하기
              </BasicButton>
            )}
          </S.TopActionWrapper>
          <S.WineCardListWrapper>
            <WineCardList filterOptions={debouncedOptions} />
          </S.WineCardListWrapper>
        </>
      )}
    </S.WinesPageContainer>
  );
}
