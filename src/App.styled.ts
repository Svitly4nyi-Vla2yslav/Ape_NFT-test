import { css } from '@emotion/react';

//! src: url(${Roboto}) format('truetype');

const GlobalStyles = css`

:root {
  --font-family: "Right Grotesk", sans-serif;
  --second-family: "Messina Sans Mono", sans-serif;
  --third-family: "Biro Script Plus", sans-serif;
  --font3: "Formular", sans-serif;
  --font4: "Roboto", sans-serif;
}
@font-face {
  font-family: 'Roboto';
  // src: url('./assets/fonts/Roboto-Regular.ttf') format('truetype');
}

@font-face {
  font-family: 'Right Grotesk';
  src: url('./assets/fonts/RightGrotesk-CompactBlack.ttf') format('truetype');
}

@font-face {
  font-family: 'Messina Sans Mono';
  src: url('./assets/fonts/MessinaSansMono-Black.ttf') format('truetype');
}

@font-face {
  font-family: 'Biro Script Plus';
  src: url('./assets/fonts/BiroScriptPlus-Bold.ttf') format('truetype');
}

@font-face {
  font-family: 'Formular';
  src: url('./assets/fonts/Formular-Medium.ttf') format('truetype');
}


  
  body {
    font-family: 'Roboto', sans-serif;
    background-color: black;
    color: #efedee;
 
  }

  button {
    cursor: pointer;
    transition-duration: 300ms;
  }
  button:focus,
  button:hover {
    color: lightgray; 
    box-shadow: 0 0 3px 2px rgba(0, 0, 0, 0.2); 
  }

  a {
    cursor: pointer;
    transition-duration: 300ms;
  }
 

  img {
    cursor: pointer;
    transition-duration: 300ms;
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