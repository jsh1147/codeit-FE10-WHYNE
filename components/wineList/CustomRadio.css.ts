import { FormControlLabel, RadioGroup } from '@mui/material';
import { styled } from '@mui/material/styles';

export const BpIcon = styled('span')`
  border-radius: 6px;
  width: 20px;
  height: 20px;
  border: 1px solid #cfdbea;
  box-shadow:
    inset 0 0 0 1px rgba(16, 22, 26, 0.2),
    inset 0 -1px 0 rgba(16, 22, 26, 0.1);
  background-color: #f5f8fa;
`;

export const StyledRadioGroup = styled(RadioGroup)`
  display: flex;
  gap: 10px;
`;

export const BpCheckedIcon = styled(BpIcon)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f4f8;

  ::before {
    width: 9px;
    height: 9px;
    content: '';
    border-radius: 3px;
    background-color: #6a42db;
  }
`;

export const StyledFormControlLabel = styled(FormControlLabel)`
  > span {
    font-family: 'Pretendard', sans-serif;
    color: var(--gray-800);
    font-weight: 500;
    line-height: 26px;
  }
`;
