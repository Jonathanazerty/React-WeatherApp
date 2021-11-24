import './App.css';
import React from 'react';
import {  BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from './components/Home';
import ShoppingCart from './components/ShoppingCart';


function App() {

    const options = {weekday: 'long'}
    const date = new Date();
    let today = date.toLocaleDateString("en-US", options) + ' ' + date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear();
 
  return (
    <>
    <BrowserRouter>
        <h3 className="todaysdate"> {today} </h3>
          <Link className="Link" to="/">Home</Link>
          <Link className="Link" to="ShoppingCart">Shopping Cart</Link>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="ShoppingCart" element={<ShoppingCart/>}/>
          </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
