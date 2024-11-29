import media from '@/styles/mediaQuery';
import { Slider } from '@mui/material';
import styled from 'styled-components';

export const TabletFilterTop = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TabletFilterTitle = styled.h2`
  color: var(--gray-800);
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 32px;
`;

export const FilterTypesWrapper = styled.div`
  display: flex;
  gap: 12px;
  flex-direction: column;
`;

export const FilterRatingWrapper = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

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
  display: flex;
  flex-direction: column;
  gap: 60px;
  justify-content: space-between;

  ${media.tablet`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    width: 375px;
    padding: 24px;
    border-radius: 16px;
    gap: 0px;
    max-height: 90vh; 
    overflow: hidden;
    overflow-y: auto; 

    /** 스크롤바 커스텀 */
    &::-webkit-scrollbar {
    width: 6px;
    }

    /* 스크롤바: Track */
    &::-webkit-scrollbar-track {
      background-color: var(--gray-100);
      background-color: #fff;
      border-radius: 16px;
      margin: 24px 0;
    }
    
    /* 스크롤바: Handle */
    &::-webkit-scrollbar-thumb {
      background: var(--gray-500);
      border-radius: 16px;
    }
`}
`;

export const FilterPriceSliderWrapper = styled.div`
  margin-top: 20px;
  width: 263px;
`;

export const FilterOptionBtnBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;

  input {
    display: none;
  }

  label {
    padding: 10px 20px;
    border-radius: 180px;
    background-color: #fff;
    border: 1px solid var(--gray-300);
    color: #000;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background-color: var(--purple-10);
    }
  }

  input:checked + label {
    background-color: var(--purple-100);
    color: white;
  }
`;

export const FilterPriceContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;

  ${media.tablet`
    margin: 64px 0;
  `}
`;

export const FilterPriceSlider = styled(Slider)`
  color: var(--purple-100) !important;
  height: 5px;
  padding: 15px 0;
  margin-left: 16px;

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

export const TabletFilterButton = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 40px;
`;
