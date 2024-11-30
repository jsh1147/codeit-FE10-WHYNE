import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import * as S from './SliderArrowButton.css';

interface ArrowBtnProps {
  className?: string;
  onClick?: () => void;
}

export function NextArrowBtn({ className, onClick }: ArrowBtnProps) {
  return (
    <S.StyledArrowBtn className={className} onClick={onClick}>
      <ArrowForwardRoundedIcon htmlColor="var(--gray-500)" />
    </S.StyledArrowBtn>
  );
}

export function PrevArrowBtn({ className, onClick }: ArrowBtnProps) {
  return (
    <S.StyledArrowBtn className={className} onClick={onClick}>
      <ArrowBackRoundedIcon htmlColor="var(--gray-500)" />
    </S.StyledArrowBtn>
  );
}
