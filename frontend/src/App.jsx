import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import './index.css'
import Home from './Pages/Home/Home';
import { PlaceOrder } from './Pages/PlaceOrder/PlaceOrder';
import Footer from './Components/Footer/Footer';
import { useState } from 'react';
import LoginPopUp from './Components/LoginPopUp/LoginPopUp';
import Cart from './Pages/Card/Cart';




function App() {
  const [showLogin,setShowLogin]=useState(false)
  return (
    <>
    {showLogin?<LoginPopUp setShowLogin={setShowLogin} />:<></>}
    <div className="app">
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/order' element={<PlaceOrder />}/>
      </Routes>
    </div>
    <Footer />
    </>
    
  );
}

export default App;
