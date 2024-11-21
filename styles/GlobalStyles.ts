import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  *, *::before, *::after {
  box-sizing: border-box;
}

  :root {
    --gray-800: #2D3034;
    --gray-500: #9FACBD;
    --gray-300: #CFDBEA;
    --gray-100: #F2F4F8;
    --purple-100: #6A42DB;
    --purple-10: #F1EDFC;
    --black: #101318;
    --white: #FFFFFF;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button, input, textarea, select {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    color: inherit;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  button {
    background: none;
    border: none;
    outline: none;
    box-shadow: none;
    cursor: pointer;
  }

  img, svg {
    vertical-align: bottom;
  }

  body {
    color: var(--gray-800);
    word-break: keep-all;
    font-family: "Pretendard", sans-serif;
  }

  .container {
    max-width: calc(100% - 780px); /* 100%에서 좌우 여백(390px * 2)을 뺀 넓이 */
    margin: 0 auto; 
  }
`;

export default GlobalStyle;
