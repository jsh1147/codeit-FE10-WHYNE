// import MonthlyWineSection from '@/components/wines/MonthlyWineSection';
import SearchBar from '@/components/wines/SearchBar';
import WineCardList from '@/components/wines/WineCardList';
import { useAllWines } from '@/hooks/useAllWines';

export default function WineListPage(): React.ReactElement {
  const [allWineList, condition, setCondition] = useAllWines({ cursor: 0 });

  const searchByKeyword = (keyword: string) => {
    console.log('WineListPage:searchKeyword:', keyword);
    const newCondition = { ...condition };
    newCondition.name = keyword;
    setCondition(newCondition);
  };

  return (
    <>
      {/* <MonthlyWineSection /> */}
      <SearchBar searchByKeyword={searchByKeyword} />

      <WineCardList wineList={allWineList} />
    </>
  );
}
