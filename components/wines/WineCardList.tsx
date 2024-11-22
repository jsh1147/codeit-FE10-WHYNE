import { WineDetails } from '@/types/wineListTypes';
import WineCard from './WineCard';
import * as S from './WineCardList.css';

interface WineCardListProps {
  allWineList: WineDetails[];
}

export default function WineCardList(props: WineCardListProps) {
  console.log(props.allWineList);

  return (
    <S.WineCardListContainer>
      {props.allWineList.map((wine) => (
        <WineCard key={wine.id} wine={wine} />
      ))}
    </S.WineCardListContainer>
  );
}
