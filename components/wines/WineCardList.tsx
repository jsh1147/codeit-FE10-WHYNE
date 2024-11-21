import { WineDetails } from '@/types/wineListTypes';
import WineCard from './WineCard';

interface WineCardListProps {
  allWineList: WineDetails[];
}

export default function WineCardList(props: WineCardListProps) {
  console.log(props.allWineList);

  return (
    <div>
      {props.allWineList.map((wine) => (
        <WineCard key={wine.id} wine={wine} />
      ))}
    </div>
  );
}
