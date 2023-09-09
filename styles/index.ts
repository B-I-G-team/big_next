import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    font-family: 'Gmarket Sans TTF';
    box-sizing: border-box;

    padding: 0;
    margin: 0;
  }
  
  body {
  	background: #fff;

    max-width: 360px;
    margin: auto;
    min-height: 100vh;

    border: 1px solid ${({ theme }) => theme.color.border_100};
  }
`;

export default GlobalStyle;
