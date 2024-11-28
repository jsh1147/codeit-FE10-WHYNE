import { PC, useResponsiveQuery } from '@/hooks/useResponsiveQuery';
import { FilterOptions } from '@/pages/wines';
import FormControl from '@mui/material/FormControl';
import Radio, { RadioProps } from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { Dispatch, SetStateAction } from 'react';
import * as S from './CustomRadio.css';
import {
  RATING_30_35,
  RATING_35_40,
  RATING_40_45,
  RATING_45_50,
  RATING_ALL,
} from '@/constants/wineRating';
import { RatingType } from '@/types/wineRatingType';

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
  filter: FilterOptions;
  setFilter: Dispatch<SetStateAction<FilterOptions>>;
  modalFilter: FilterOptions;
  setModalFilter: Dispatch<SetStateAction<FilterOptions>>;
}

export default function CustomizedRadios(props: CustomizedRadiosProps) {
  const { modalFilter, setModalFilter, filter, setFilter } = props;
  const responsiveQuery = useResponsiveQuery();

  const handleRatingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newRating = Number(e.target.value) as RatingType;

    if (responsiveQuery === PC) {
      setFilter((prev) => ({ ...prev, rating: newRating }));
    } else {
      setModalFilter((prev) => ({ ...prev, rating: newRating }));
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
            checked={
              (responsiveQuery === PC ? filter.rating : modalFilter.rating) ===
              RATING_ALL
            }
            sx={{ marginLeft: '-9px' }} // label의 패딩값만큼 왼쪽으로 이동
          />
          <S.StyledFormControlLabel
            value={RATING_45_50}
            label="4.5 - 5.0"
            control={<BpRadio />}
            checked={
              (responsiveQuery === PC ? filter.rating : modalFilter.rating) ===
              RATING_45_50
            }
            sx={{ marginLeft: '-9px' }}
          />
          <S.StyledFormControlLabel
            value={RATING_40_45}
            label="4.0 - 4.5"
            control={<BpRadio />}
            checked={
              (responsiveQuery === PC ? filter.rating : modalFilter.rating) ===
              RATING_40_45
            }
            sx={{ marginLeft: '-9px' }}
          />
          <S.StyledFormControlLabel
            value={RATING_35_40}
            label="3.5 - 4.0"
            control={<BpRadio />}
            checked={
              (responsiveQuery === PC ? filter.rating : modalFilter.rating) ===
              RATING_35_40
            }
            sx={{ marginLeft: '-9px' }}
          />
          <S.StyledFormControlLabel
            value={RATING_30_35}
            label="3.0 - 3.5"
            control={<BpRadio />}
            checked={
              (responsiveQuery === PC ? filter.rating : modalFilter.rating) ===
              RATING_30_35
            }
            sx={{ marginLeft: '-9px' }}
          />
        </S.StyledRadioGroup>
      </FormControl>
    </RadioGroup>
  );
}
