import { Global } from '@emotion/react';
import GlobalStyles from './App.styled';
import React from 'react';
import Header from './components/Header/Header';
import About from './components/About/About';
import MindMap from './components/MindMap/MindMap';

const App = () => {
  return (
    <div>
      <Global styles={GlobalStyles} />
      <Header/>
      <About/>
      <MindMap/>
    </div>
  )
}

export default App