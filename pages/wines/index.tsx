import Filter from '@/components/wines/Filter';
import MonthlyWineSection from '@/components/wines/MonthlyWineSection';
import SearchBar from '@/components/wines/SearchBar';
import WineCardList, {
  WineFilterOptions,
} from '@/components/wines/WineCardList';
import useDebounce from '@/hooks/useDebounce';
import * as S from '@/styles/Wines.css';

export default function WineListPage(): React.ReactElement {
  const [debouncedOptions, options, setOptions] =
    useDebounce<WineFilterOptions>({}, 500);

  const searchByKeyword = (keyword: string) => {
    setOptions((prev) => ({
      ...prev,
      name: keyword,
    }));
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

  return (
    <div className="container">
      <MonthlyWineSection />
      <S.GridWrapper>
        <S.SearchBarWrapper>
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
        </S.FilterWrapper>
      </S.GridWrapper>
    </div>
  );
}
