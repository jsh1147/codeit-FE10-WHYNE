import { PC, useResponsiveQuery } from '@/hooks/useResponsiveQuery';
import FormControl from '@mui/material/FormControl';
import Radio, { RadioProps } from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { useState } from 'react';
import * as S from './CustomRadio.css';

const RATING_ALL = 0;
const RATING_45_50 = 1;
const RATING_40_45 = 2;
const RATING_35_40 = 3;
const RATING_30_35 = 4;

function BpRadio(props: RadioProps) {
  return (
    <Radio
      disableRipple
      color="default"
      checkedIcon={<S.BpCheckedIcon />}
      icon={<S.BpIcon />}
      {...props}
    />
  );
}

interface CustomizedRadiosProps {
  changeRating: (newRating?: number) => void;
}

export default function CustomizedRadios(props: CustomizedRadiosProps) {
  const { changeRating } = props;
  const responsiveQuery = useResponsiveQuery();
  const [rating, setRating] = useState<
    | typeof RATING_ALL
    | typeof RATING_45_50
    | typeof RATING_40_45
    | typeof RATING_35_40
    | typeof RATING_30_35
  >(RATING_ALL);

  const handleRatingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newRating = Number(e.target.value) as
      | typeof RATING_ALL
      | typeof RATING_45_50
      | typeof RATING_40_45
      | typeof RATING_35_40
      | typeof RATING_30_35;

    setRating(newRating);
    if (responsiveQuery !== PC) return;

    if (newRating === RATING_ALL) {
      changeRating();
    } else {
      let rating: number;
      switch (newRating) {
        case RATING_45_50:
          rating = 5;
          break;
        case RATING_40_45:
          rating = 4.5;
          break;
        case RATING_35_40:
          rating = 4;
          break;
        case RATING_30_35:
          rating = 3.5;
          break;
      }
      changeRating(rating);
    }
  };

  return (
    <RadioGroup name="use-radio-group" defaultValue="4.5 - 4.0">
      <FormControl>
        <S.StyledRadioGroup
          name="use-radio-group"
          defaultValue={RATING_ALL}
          onChange={handleRatingChange}
        >
          <S.StyledFormControlLabel
            control={<BpRadio />}
            value={RATING_ALL}
            label="전체"
            checked={rating === RATING_ALL}
            sx={{ marginLeft: '-9px' }} // label의 패딩값만큼 왼쪽으로 이동
          />
          <S.StyledFormControlLabel
            value={RATING_45_50}
            label="4.5 - 5.0"
            control={<BpRadio />}
            checked={rating === RATING_45_50}
            sx={{ marginLeft: '-9px' }}
          />
          <S.StyledFormControlLabel
            value={RATING_40_45}
            label="4.0 - 4.5"
            control={<BpRadio />}
            checked={rating === RATING_40_45}
            sx={{ marginLeft: '-9px' }}
          />
          <S.StyledFormControlLabel
            value={RATING_35_40}
            label="3.5 - 4.0"
            control={<BpRadio />}
            checked={rating === RATING_35_40}
            sx={{ marginLeft: '-9px' }}
          />
          <S.StyledFormControlLabel
            value={RATING_30_35}
            label="3.0 - 3.5"
            control={<BpRadio />}
            checked={rating === RATING_30_35}
            sx={{ marginLeft: '-9px' }}
          />
        </S.StyledRadioGroup>
      </FormControl>
    </RadioGroup>
  );
}
