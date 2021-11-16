import './App.css';
import React from 'react';

const API = {
  key: "REACT_APP_WEATHER_API_KEY",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {

    const options = {weekday: 'long'}
    const date = new Date();
    let today = date.toLocaleDateString("en-US", options) + ' ' + date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear();
 
  return (
    <div className="App">
      <h3 className="todaysdate"> {today} </h3>
    </div>
  );
}

export default App;
