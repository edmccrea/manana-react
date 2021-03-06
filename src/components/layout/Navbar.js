import React from 'react';
import './Navbar.scss';
import logo from '../../imgs/manjana_color.png';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <a href='/' className='logo'>
        <img src={logo} alt='' />
      </a>
      <ul className='navbar-nav'>
        <a href='/classes' className='nav-link'>
          <li>Classes</li>
        </a>
        <a href='/instructors' className='nav-link'>
          <li>Instructors</li>
        </a>
        <a href='/timetable' className='nav-link'>
          <li>Timetable</li>
        </a>
        <a href='/pricing' className='nav-link'>
          <li>Pricing</li>
        </a>
        <a href='/news' className='nav-link'>
          <li>News</li>
        </a>
        <a href='/contact' className='nav-link'>
          <li>Contact</li>
        </a>
      </ul>
    </nav>
  );
};

export default Navbar;
