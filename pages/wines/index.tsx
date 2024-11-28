import BasicButton from '@/components/wineList/BasicButton';
import CreateWineModal from '@/components/wineList/CreateWineModal';
import Filter from '@/components/wineList/Filter';
import MonthlyWineSection from '@/components/wineList/MonthlyWineSection';
import SearchBar from '@/components/wineList/SearchBar';
import WineCardList, {
  WineFilterOptions,
} from '@/components/wineList/WineCardList';
import useDebounce from '@/hooks/useDebounce';
import { PC, TABLET, useResponsiveQuery } from '@/hooks/useResponsiveQuery';
import { useUser } from '@/store/UserContext';
import * as S from '@/styles/Wines.css';
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import { IconButton } from '@mui/material';
import { useState } from 'react';

export default function WineListPage(): React.ReactElement {
  const [isCreateButtonModalOpen, setIsModalOpen] = useState<boolean>(false);
  const responsiveQuery = useResponsiveQuery();
  const { user } = useUser();

  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleFilter = () => {
    setIsFilterOpen((prev) => !prev);
  };

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

  const changeWineType = (newType?: 'RED' | 'WHITE' | 'SPARKLING') => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { type, ...others } = options;

    let newFilterOptions: WineFilterOptions;

    if (newType === undefined) {
      newFilterOptions = { ...others };
    } else {
      newFilterOptions = { ...others, type: newType };
    }

    setOptions(newFilterOptions);
  };

  const changePriceRange = (minPrice: number, maxPrice: number) => {
    setOptions((prev) => ({
      ...prev,
      minPrice: minPrice,
      maxPrice: maxPrice,
    }));
  };

  const changeRating = (newRating?: number) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { rating, ...others } = options;
    if (newRating === undefined) {
      setOptions({
        ...others,
      });
    } else {
      setOptions({
        ...others,
        rating: newRating,
      });
    }
  };

  // const changeTabletFilterOption = ({}) => {

  // }

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
                changeWineType={changeWineType}
                changePriceRange={changePriceRange}
                changeRating={changeRating}
                toggleFilter={toggleFilter}
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
                  changeWineType={changeWineType}
                  changePriceRange={changePriceRange}
                  changeRating={changeRating}
                  toggleFilter={toggleFilter}
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
