import React from 'react'
import "./navbar.css"
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='links'>
            <Link to="/"><HomeIcon /></Link>
            <Link to="/cart"><ShoppingCartIcon /></Link>
        </div>
    </div>
  )
}

export default Navbar