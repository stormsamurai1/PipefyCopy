import React from 'react';

import GlobalStyles from './styles/global'

import Header from './Components/Header/Header'
import Board from './Components/Board/Board'

function App() {
  return (
    <>
      <Header/>
      <Board/>
      <GlobalStyles/>
    </>
    
  );
}

export default App;
