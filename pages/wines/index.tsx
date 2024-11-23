// import MonthlyWineSection from '@/components/wines/MonthlyWineSection';
import SearchBar from '@/components/wines/SearchBar';
import WineCardList, {
  WineCardListProps,
} from '@/components/wines/WineCardList';
import { useState } from 'react';

export default function WineListPage(): React.ReactElement {
  const [filterOptions, setFilterOptions] = useState<WineCardListProps>({});

  const searchByKeyword = (keyword: string) => {
    const newFilterOptions = { ...filterOptions };
    newFilterOptions.name = keyword;
    setFilterOptions(newFilterOptions);
  };

  return (
    <>
      {/* <MonthlyWineSection /> */}
      <SearchBar searchByKeyword={searchByKeyword} />
      <WineCardList {...filterOptions} />
    </>
  );
}
