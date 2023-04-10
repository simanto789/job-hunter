import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';

const App = () => {
  return ( 
  <div>
    {/* header */}
    <Header/>
    <h1>startung page</h1>
    <Outlet/>
    {/* footer */}
  </div>
  );
};

export default App;