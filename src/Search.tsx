import React from 'react';

const Search = () => {
    return (
    <div className='box'>
        <h2 className='tc f3 ma2 pa3'>Search for a city or town.</h2>
        <div className='searchfield'>
            <input type="text" className='search h2 w5 bn f6 pa2' placeholder='Search a location...' />
            <button className='b--none bg-navy white h2 f6 w4'>search</button>
        </div>
        <div className='forecastOption ma3'>
            <button>Hourly</button>
            <button>7 day</button>
        </div>  
    </div>
    );
}


export default Search;