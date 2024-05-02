import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCart } from '../context/CartContext.jsx';
const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }
  const {cartItems} = useCart()
  return (
   <>
   
   
   
   
   <nav className="navbar">
      <div className="container" >
        <div className="logo">
         Abhayass
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <MenuIcon/>
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/" className='first' style={{color:"white"}}>JOIN US</NavLink>
            </li>
            <li>
              <NavLink to="/Classes">Classes</NavLink>
            </li>
            <li>
              <NavLink to="/Product">Products</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/Page2"><PersonIcon/></NavLink>
            </li>
            <li>
              <NavLink to="/useCart"><ShoppingCartIcon/>{cartItems.length}</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
   
   </>
  )
}

export default Navbar