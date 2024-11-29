import StarIcon from '@mui/icons-material/Star';
import * as S from './CustomRating.css';

interface CustomRatingProps {
  name?: string;
  value: number;
  size?: 'small' | 'large' | 'medium' | undefined;
  readOnly?: boolean;
}

export default function CustomRating({
  name,
  value,
  size = 'small',
  readOnly = true,
}: CustomRatingProps) {
  return (
    <S.CustomRating
      name={name}
      value={Math.floor(value)}
      size={size}
      readOnly={readOnly}
      emptyIcon={
        <StarIcon style={{ fill: `var(--gray-300)` }} fontSize="inherit" />
      }
    />
  );
}
