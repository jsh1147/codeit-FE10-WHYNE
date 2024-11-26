import styled from 'styled-components';
import { BasicButtonPropsType } from './BasicButton';

export const Button = styled.button<BasicButtonPropsType>`
  padding: 16px 36px;
  background-color: ${(props) => props.$bgColor};
  color: ${(props) => props.$fontColor};
  border-radius: 12px;
  font-size: ${(props) => props.$fontSize};
  font-weight: 700;
  cursor: pointer;
  transition: 0.3s;
  width: ${(props) => props.$width};

  &:hover {
    color: ${(props) => props.$hoverFontColor};
    background-color: ${(props) => props.$hoverBgColor};
  }
`;
