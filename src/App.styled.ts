import { css } from '@emotion/react';

//! src: url(${Roboto}) format('truetype');

const GlobalStyles = css`
  @font-face {
    font-family: 'Roboto';
    
  }

  html,
  body,
  #root {
    height: 100%;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: #040404;
    color: #efedee;
    scroll-behavior: smooth;
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

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    appearance: none;
  }

  .scrollbar-inner {
    &::-webkit-scrollbar {
      width: 6px;
    }

    @media screen and (min-width: 769px) {
      &::-webkit-scrollbar {
        width: 8px;
      }
    }

    &::-webkit-scrollbar-track {
      background-color: transparent;
      border-radius: 12px;
      margin: 14px 0;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #efede81a;
      border-radius: 12px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background-color: #efede84d;
    }
  }

  .scrollbar-outer {
    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-track {
      background-color: #efede81a;
      border-radius: 12px;
      margin-left: 16px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #ef8964;
      border-radius: 12px;
    }

    @media screen and (max-width: 768px) {
      &::-webkit-scrollbar {
        display: none;
      }
    }
  }

  .ant-popover-inner,
  .ant-tour-inner,
  .ant-popconfirm-title,
  .ant-popconfirm-description {
    background-color: #1c1c1c !important;
    color: #efedee !important;
  }

  .ant-picker-header-view {
    color: #efedee;
  }
`;

export default GlobalStyles;