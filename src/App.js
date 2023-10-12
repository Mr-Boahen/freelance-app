
import { useState,useEffect } from 'react';
import Banner from './Banner';
import Slide from './Slide';
import Conditions from './Conditions';
import JoinBanner from './JoinBanner';
import Services from './Services';
import NavBar from './NavBar';

function App() {
  
  return (
    <div className="App">
      <NavBar/>
     <Banner/>
     <Slide/>
     <Conditions/>
     <JoinBanner/>
     <Services/>
    </div>
  );
}

export default App;
