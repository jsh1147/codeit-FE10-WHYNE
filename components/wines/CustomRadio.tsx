import FormControl from '@mui/material/FormControl';
import Radio, { RadioProps } from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import * as S from './CustomRadio.css';

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

export default function CustomizedRadios() {
  return (
    <RadioGroup name="use-radio-group" defaultValue="4.5 - 4.0">
      <FormControl>
        <S.StyledRadioGroup name="use-radio-group" defaultValue="4.5 - 4.0">
          <S.StyledFormControlLabel
            control={<BpRadio />}
            value="전체"
            label="전체"
          />
          <S.StyledFormControlLabel
            value="5.0 - 4.5"
            label="5.0 - 4.5"
            control={<BpRadio />}
          />
          <S.StyledFormControlLabel
            value="4.5 - 4.0"
            label="4.5 - 4.0"
            control={<BpRadio />}
          />
          <S.StyledFormControlLabel
            value="4.0 - 3.5"
            label="4.0 - 3.5"
            control={<BpRadio />}
          />
          <S.StyledFormControlLabel
            value="3.5 - 3.0"
            label="3.5 - 3.0"
            control={<BpRadio />}
          />
        </S.StyledRadioGroup>
      </FormControl>
    </RadioGroup>
  );
}
