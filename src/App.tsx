import React from 'react';
import Search from "./Search";
import 'tachyons';
import './App.css';

function App() {
  return (
    <div className='container'>
      <div className="App">
        {/* A weather app written in React/Typescript */}
        <h1 className='tl f1 ma5'>Find out how the weather is looking.</h1>
        <Search />
      </div>
    </div>
  );
}

export default App;
