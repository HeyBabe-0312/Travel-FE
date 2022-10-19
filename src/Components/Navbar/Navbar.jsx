import React, {useState} from 'react'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'
import './navbar.css'

const Navbar = () => {
  const [active, setActive]= useState('navBar')
  //Func to toggle Navbar
  const showNav = () => {
    setActive('navBar activeNavbar')
  }

   //Func to remove Navbar
   const removeNav = () => {
    setActive('navBar')
  }

  return (
    <session className='navBarSection'>
      <header className='header flex'>
        <div className='logoDiv'>
          <a href='#' className='logo flex'>
            <h1><MdOutlineTravelExplore className='icon'/>DanaTravel.</h1>
          </a>
        </div>

        <div className={active}>
          <ul className='navLists flex'>
            <li className='navItem'>
              <a href="#" className="navLink">Home</a>
            </li>
            <li className='navItem'>
              <a href="#" className="navLink">Packages</a>
            </li>
            <li className='navItem'>
              <a href="#" className="navLink">Shop</a>
            </li>
            <li className='navItem'>
              <a href="#" className="navLink">About</a>
            </li>
            <li className='navItem'>
              <a href="#" className="navLink">Pages</a>
            </li>
            <li className='navItem'>
              <a href="#" className="navLink">News</a>
            </li>
            <li className='navItem'>
              <a href="#" className="navLink">Contact</a>
              </li>
            <button className="btn">
              <a href="#">BOOKING</a>
            </button>
          </ul>

          <div onClick={removeNav} className="closeNavbar">
            <AiFillCloseCircle className='icon'/>
          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className='icon'/>
        </div>

      </header>
    </session>
  )
}

export default Navbar