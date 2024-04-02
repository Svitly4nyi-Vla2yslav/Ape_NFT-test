import { Global } from '@emotion/react';
import GlobalStyles from './App.styled';
import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';

const App = () => {
  return (
    <div>
      <Global styles={GlobalStyles} />
      <Header/>
    </div>
  )
}

export default App