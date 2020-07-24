import React, { useState } from 'react';
import './App.css';
import data from './data/data';

import Carousel from './components/Carousel';


function App() {
  const [employees, setEmployees] = useState(data);

  return (
    <div className="App">
      <header className="nav-bar">
        <a className="nav-item" href=""> Home </a>
      </header>
      <main>
       <Carousel 
       dataSet={employees} 
       />
      </main>
    </div>
  );
}

export default App;
