import React from 'react';
import 'tachyons';
import './App.css';

function App() {
  return (
    <div className='container'>
      <div className="App">
        {/* A weather app written in React/Typescript */}
        <h1 className='tl f1 ma5'>Find out how the weather is looking.</h1>
        <div className='box'>
            <h2 className='tc f3 ma2 pa3'>Search for a city or town.</h2>
            <div className='searchfield'>
              <input type="text" className='search' />
              <button>search</button>
            </div>
            <div className='forecastOption'>
              <button>Hourly</button>
              <button>7 day</button>
            </div>  
        </div>
      </div>
    </div>
  );
}

export default App;
