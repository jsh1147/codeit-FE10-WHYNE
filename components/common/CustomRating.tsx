import StarIcon from '@mui/icons-material/Star';
import * as S from './CustomRating.css';

interface CustomRatingProps {
  name?: string;
  defaultValue: number;
  size?: 'small' | 'large' | 'medium' | undefined;
  readOnly?: boolean;
}

export default function CustomRating({
  name,
  defaultValue,
  size = 'small',
  readOnly = true,
}: CustomRatingProps) {
  return (
    <S.CustomRating
      name={name}
      defaultValue={Math.floor(defaultValue)}
      size={size}
      readOnly={readOnly}
      emptyIcon={
        <StarIcon style={{ fill: `var(--gray-300)` }} fontSize="inherit" />
      }
    />
  );
}
