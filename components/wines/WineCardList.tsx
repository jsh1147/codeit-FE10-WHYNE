import { WineDetails } from '@/types/wineListTypes';
import WineCard from './WineCard';
import * as S from './WineCardList.css';

interface WineCardListProps {
  wineList: WineDetails[];
}

export default function WineCardList(props: WineCardListProps) {
  const { wineList } = props;

  return (
    <>
      <S.WineCardListContainer>
        {wineList.map((wine) => (
          <WineCard key={wine.id} wine={wine} />
        ))}
      </S.WineCardListContainer>
    </>
  );
}
