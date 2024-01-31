import React, { useEffect } from 'react';
import NavBar from '../pages/HomeComponents/NavBar';
import SearchServicesMenu from '../pages/HomeComponents/SearchServicesMenu';
import HomeBody from '../pages/HomeComponents/HomeBody';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { Outlet, useNavigate } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import { AnimatePresence } from 'framer-motion';
import RegisterPage from '../pages/RegisterPage';
function Homepage() {
  const showState=useSelector((state)=>state.showLoginAndSignin)

 
  return (
    <div className='relative '>
     
      {showState.showLogin && !localStorage.getItem("account")?<LoginPage/>:""}
      {showState.showSignin && <RegisterPage/>}
     <NavBar/>
     <SearchServicesMenu/>
     <Outlet/>
    </div>
  )
}

export default Homepage
