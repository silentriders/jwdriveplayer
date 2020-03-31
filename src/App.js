import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './Config/Router';
import { GlobalStateProvider } from './globalState';

const App = () => (
  <GlobalStateProvider>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </GlobalStateProvider>
);

export default App;
