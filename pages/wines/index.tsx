// import MonthlyWineSection from '@/components/wines/MonthlyWineSection';
import WineCardList from '@/components/wines/WineCardList';
import { useAllWines, UseAllWinesProps } from '@/hooks/useAllWines';
import { useState } from 'react';

export default function WineListPage(): React.ReactElement {
  const [useAllWinesProps] = useState<UseAllWinesProps>({
    cursor: 0,
  });

  const allWineList = useAllWines(useAllWinesProps);

  return (
    <>
      {/* <MonthlyWineSection /> */}
      <WineCardList allWineList={allWineList} />
    </>
  );
}
