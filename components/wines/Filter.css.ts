import { FormControlLabel, Radio, Slider } from '@mui/material';
import styled from 'styled-components';

export const FilterOptionTitle = styled.h3`
  font-size: 20px;
  color: var(--gray-800);
  font-weight: 700;
  line-height: 32px;
  text-transform: uppercase;
`;

export const FilterOptionBtn = styled.button`
  padding: 8px 18px;
  border-radius: 100px;
  border: 1px solid var(--gray-300);
  background-color: #fff;
  color: var(--gray-800);
  font-weight: 500;
  line-height: 26px;

  &:hover,
  &:focus {
    background-color: var(--purple-100);
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 26px;
    color: #fff;
  }
`;

export const FilterContainer = styled.section`
  width: 284px;
`;

export const FilterPriceSliderWrapper = styled.div`
  margin-top: 20px;
`;

export const FilterOptionBtnBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;
  margin-top: 12px;
`;

export const FilterPriceContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FilterPriceSlider = styled(Slider)`
  color: var(--purple-100);
  height: 5px;
  padding: 15px 0;

  &:focus,
  &:hover,
  &:active {
    box-shadow: none;
  }

  .MuiSlider-rail {
    background-color: var(--gray-300);
  }

  .MuiSlider-thumb {
    height: 20px;
    width: 20px;
    background-color: #fff;

    // 흰색 원 조절 시, hover 효과 커스텀
    &:hover,
    &.Mui-focusVisible {
      box-shadow: 0px 0px 0px 8px rgba(241, 237, 252, 1);
    }
  }

  & .MuiSlider-valueLabel {
    top: -6px;
    background-color: unset;
    color: var(--purple-100);
    font-size: 16px;
    font-weight: 500;
    line-height: 26px;
    text-align: center;
    font-family: 'Pretendard', sans-serif;

    &:before {
      display: none;
    }
  }
`;

export const StyledFormControlLabel = styled(FormControlLabel)`
  .Mui-checked {
    color: var(--purple-100);
  }

  .MuiSvgIcon-root {
    fill: var(--purple-100);
    border-radius: 6px;
  }
  
`;

export const StyledRadio = styled(Radio)`
  .MuiRadio-root {
    border-radius: 0; /* 네모 모양으로 변경 */
    border: 2px solid var(--purple-100); /* 테두리 색상 */
    padding: 4px; /* 테두리가 표시되도록 공간 확보 */
  }

  .MuiSvgIcon-root {
    width: 18px;
    height: 18px;
    border-radius: 0; /* SVG 아이콘도 네모 모양으로 변경 */
  }

  &.Mui-checked {
    background-color: var(--purple-100); /* 체크된 상태 색상 */
    border: 2px solid var(--purple-100); /* 체크된 상태 테두리 색상 */
  }
`;
