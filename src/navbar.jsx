import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { FaShoppingBag } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'
import './navbar.css';


const Navbar = () => {
  const handleDropdownClick = () => {
    const dropdownMenu = document.getElementById('dropdown-menu');
    dropdownMenu.classList.toggle('show');
  };

  let navigate = useNavigate();
  const handlebackhome = () => {
    let path = '/';
    navigate(path);
  }
  return (
  <div id="dashboard">
    <nav className="navbar">
    <div className="navbar-left" onClick={handlebackhome}>
        <h1>
          <span className="brand">DIGAGA</span>
          <span className="spacer"></span>
          <span className="style1">CLADS</span>
        </h1>
      </div>
      <ul className="nav-links navbar-right">
      <FaBars className="menu-icon" onClick={handleDropdownClick} />
        <li className="dropdown" onClick={handleDropdownClick}>
          <ul id="dropdown-menu" className="dropdown-menu">
            <li><Link to="/men">Men</Link></li>
            <li><Link to="/women">Women</Link></li>
            <li><Link to="/kids">Kids</Link></li>
            <li><Link to="/accessories">Accessories</Link></li>
          </ul>
        </li>
        
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/view">SignUp</Link></li>
        <li><Link to="/cart"><FaShoppingBag className="shopping-bag-icon" /></Link></li>
        
      </ul>
    </nav>
    </div>
  );
};

export default Navbar;
