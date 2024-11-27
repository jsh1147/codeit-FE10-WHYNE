import BasicButton from '@/components/wineList/BasicButton';
import CreateWineModal from '@/components/wineList/CreateWineModal';
import Filter from '@/components/wineList/Filter';
import MonthlyWineSection from '@/components/wineList/MonthlyWineSection';
import SearchBar from '@/components/wineList/SearchBar';
import WineCardList, {
  WineFilterOptions,
} from '@/components/wineList/WineCardList';
import useDebounce from '@/hooks/useDebounce';
import * as S from '@/styles/Wines.css';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import { IconButton } from '@mui/material';

export default function WineListPage(): React.ReactElement {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isLogin, setIsLogin] = useState(false);

  const [isTablet, setIsTablet] = useState(false);
  const [isPC, setIsPC] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const tabletQuery = useMediaQuery({ query: '(max-width: 1199px)' });
  const mobileQuery = useMediaQuery({ query: '(max-width: 767px)' });
  const pcQuery = useMediaQuery({ query: '(min-width: 1200px)' });

  useEffect(() => {
    setIsTablet(tabletQuery);
    setIsMobile(mobileQuery);
    setIsPC(pcQuery);
  }, [isTablet, isPC, isMobile, tabletQuery, mobileQuery, pcQuery]);

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
    console.log('changeRating - ' + 'newRating: ' + newRating);
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

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (localStorage.getItem('accessToken')) setIsLogin(true);
      else setIsLogin(false);
    }
  }, []);

  return (
    <S.WinesPageContainer>
      <MonthlyWineSection />
      {isPC && (
        <>
          <S.GridWrapper>
            <S.SearchBarWrapper isLogin={isLogin}>
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
              />
              {isLogin && (
                <BasicButton onClick={() => setIsModalOpen(true)} $width="100%">
                  와인 등록하기
                </BasicButton>
              )}
            </S.FilterWrapper>
          </S.GridWrapper>
        </>
      )}
      {isModalOpen && <CreateWineModal closeModal={closeModal} />}

      {isTablet && (
        <>
          <S.TopActionWrapper>
            <IconButton
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
            <S.SearchBarWrapper>
              <SearchBar searchByKeyword={searchByKeyword} />
            </S.SearchBarWrapper>
            {isLogin && (
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
