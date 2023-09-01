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

    max-width: 600px;
  }
`;

export default GlobalStyle;
