import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/home';
import Cart from './pages/Cart/cart'; 
import PlaceOrder from './pages/PlaceOrder/placeorder';
import Footer from './components/Footer/Footer';
import LoginPopup from './components/LoginPopups/LoginPopup';
import { useState } from 'react';

const App = () => {
  const [showLogin,setShowLogin] = useState(false)
  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/> :<></>}
    <div className='app'>
      <Navbar setShowLogin = {setShowLogin}/>
      <Routes>
        <Route path = '/' element={<Home/>} />
        <Route path = '/cart' element={<Cart/>} />
        <Route path = '/order' element={<PlaceOrder/>} />
      </Routes>
    </div>
    <Footer/>
    </>
  )
}
export default App;