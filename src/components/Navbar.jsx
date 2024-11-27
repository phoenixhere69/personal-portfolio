import React from 'react'
import '../assets/navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='logo'>
        <h5>Hi Dev</h5>
      </div>
      <ul>
        <li><a href="#">About</a></li>
        <li><a href="#">Github Profile</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar