import './App.css';
import React from 'react';
import {  BrowserRouter, Routes, Route /*, Link*/} from 'react-router-dom';
import Home from './components/Home';
import Search from './components/Search';
import Location from './components/Location';
import OtherDays from './components/OtherDays';


function App() {

    const options = {weekday: 'long'}
    const date = new Date();
    let today = date.toLocaleDateString("en-US", options) + ' ' + date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear();
 
  return (
    <>
    <BrowserRouter>
        <h3 className="todaysdate"> {today} </h3>
          {/* <Link className="Link" to="/">Home</Link>
          <Link className="Link" to="Search">Search</Link>
          <Link className="Link" to="Location">Location</Link>
          <Link className="Link" to="OtherDays">Other days</Link> */}
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="Search" element={<Search />}/>
            <Route path="Location" element={<Location />}/>
            <Route path="OtherDays" element={<OtherDays/>}/>
          </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
