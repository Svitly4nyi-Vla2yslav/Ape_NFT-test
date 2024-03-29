import { css } from '@emotion/react';

//! src: url(${Roboto}) format('truetype');

const GlobalStyles = css`
  @font-face {
    font-family: 'Roboto';
    
  }
  
  body {
    font-family: 'Roboto', sans-serif;
    background-color: #040404;
    color: #efedee;
 
  }

  button {
    cursor: pointer;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
 {
    margin: 0;
    padding: 0;
  }

  ul,
  li {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }


`;

export default GlobalStyles;