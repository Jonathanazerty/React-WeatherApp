import './App.css';
import React from 'react';
import {  BrowserRouter, Routes, Route /*, Link*/} from 'react-router-dom';
import Home from './components/Home';
import ShoppingCart from './components/ShoppingCart';


function App() {
 
  return (
    <Home>
      <BrowserRouter>
            {/* <Link className="Link" to="/">Home</Link>
            <Link className="Link" to="ShoppingCart">Shopping Cart</Link> */}
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="ShoppingCart" element={<ShoppingCart/>}/>
            </Routes>
      </BrowserRouter>
    </Home>
  );
}

export default App;
