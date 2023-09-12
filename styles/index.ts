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
    margin: auto;
    min-height: 100vh;

    border: 1px solid ${({ theme }) => theme.color.border_100};
  }
  @font-face {
    font-family: 'Gmarket Sans TTF';
    font-weight: 700;
    src: local('Gmarket Sans TTF'),
    url('/fonts/GmarketSansTTFBold.ttf') format('truetype');
  }

@font-face {
    font-family: 'Gmarket Sans TTF';
    font-weight: 500;
    src: local('Gmarket Sans TTF'),
    url('/fonts/GmarketSansTTFMedium.ttf') format('truetype');
  }

@font-face {
    font-family: 'Gmarket Sans TTF';
    font-weight: 300;
    src: local('Gmarket Sans TTF'),
    url('/fonts/GmarketSansTTFLight.ttf') format('truetype');
  }

`;

export default GlobalStyle;
