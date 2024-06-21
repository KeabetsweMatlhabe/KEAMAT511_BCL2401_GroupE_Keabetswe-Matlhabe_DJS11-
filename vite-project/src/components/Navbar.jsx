import React from 'react'
import logo from "../assets/caret_icon.png"
import { Link, NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar-left'>
            <img className='icons' src={logo} alt='Logo'/>
            <NavLink className="navlink" to="/">Home</NavLink>
            <NavLink className="navlink" to="/podcasts">Podcasts</NavLink>
            <NavLink className="navlink" to="/favorites">My Favorites</NavLink>
        </div>
        <div className='navbar-right'>
            <img className='icons' src={searchIcon}/>
            <div className='navbar-profile'>
                <img className='profile' src={profileImg} alt=''/>
                <img src={caretIcon} alt=''/>
            </div>
        </div>
      
    </div>
  )
}

export default Navbar
