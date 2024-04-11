import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
 } from "react-router-dom";
 import {PATHS} from './utils/constants'
import Home from './Components/Home';
import About from './Components/About';

import Classes from './Components/Classes.js';
import Page1 from './Components/Page1';
import Page2 from './Components/Page2';
import Gprs from './Components/Gprs.jsx'
import Product from './Components/Product.jsx';

import Forgot from './Components/Forgot';
// import Login from './Components/Login';
import Navbar from './Components/Navbar';
// import Logout from './Components/Logout'
import Footer from './Footer';
import UserCart from './UserCart';

  const App = () => {
  return (
    <>
    {/* <AuthProvider> */}
    <Router >
     <Navbar/>
      <Routes>
      <Route path={PATHS.home} element={<Home/>} />
      
        <Route path={PATHS.about} element={<About/>} />
        {/* <Route path={PATHS.services} element={<Services/>} /> */}
        <Route path={PATHS.Classes} element={<Classes/>}/>
        <Route path={PATHS.Page1} element={<Page1/>}/>
        <Route path={PATHS.Page2} element={<Page2/>}/>
        {/* <Route path={PATHS.AdminDashboard} element={<AdminDashboard/>}/>
        <Route path={PATHS.UserDashboard} element={<UserDashboard/>}/> */}
        <Route path={PATHS.Product} element={<Product/>}/>
      <Route path={PATHS.Gprs} element={<Gprs/>}/> 
        {/* <Route path={PATHS.Rules} element={<Rules/>}/>
        <Route path={PATHS.Emergency} element={<Emergency/>}/>
        <Route path={PATHS.Timetable} element={<Timetable/>}/>
        
        {/* <Route path={PATHS.Whatsup} element={<Whatsup/>}/> */}
        <Route path={PATHS.Forgot} element={<Forgot/>}/>
        <Route path={PATHS.UserCart} element={<UserCart/>}/>
        {/* <Route path= "/login"   element={<Login/>}/> */}
        {/* <Route path= "/logout"   element={<Logout/>}/> */}
      </Routes>
      <Footer/>
    </Router>
    {/* </AuthProvider> */}
    </>
  )
}

export default App;