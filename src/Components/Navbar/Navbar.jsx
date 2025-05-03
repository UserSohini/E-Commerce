import React, { useState } from 'react';
import './Navbar.css';
import { FaShoppingCart, FaHome, FaSearch, FaBars } from 'react-icons/fa';
import { FcAbout } from "react-icons/fc";
import { GrHelpBook } from "react-icons/gr";
import shirts from '../Navbar/shirts.jpg';
import s_shirts from '../Navbar/ss.png';
import Pants from '../Navbar/pants.jpg';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const handleSearchClick = () => {
    setDropdownOpen(true);
  };

  const handleClickOutside = (e) => {
    if (!e.target.closest('.search-container')) {
      setDropdownOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <nav className="navbar">

      {/* Middle: Search Bar with Dropdown */}
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
          onClick={handleSearchClick}
        />
        <FaSearch className="search-icon" />
        {dropdownOpen && (
          <div className="dropdown-menu ">
            <div className="dropdown-item"><img src={s_shirts} alt="T" className="Clothes" />T-Shirts</div>
            <div className="dropdown-item"><img src={shirts} alt="T" className="Clothes" />Sweat-Shirts</div>
            <div className="dropdown-item"><img src={Pants} alt="T" className="Clothes" />Pants</div>
          </div>
        )}
      </div>
      {/* Right: Links and Cart */}
      <div className="navbar-right">
        <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
        <FaHome style={{ color: 'black', fontSize: '25px' }} /> Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
        <FcAbout style={{  fontSize: '25px' }} />About</NavLink>
        <NavLink to="/help" className={({ isActive }) => isActive ? "active" : ""}>
        <GrHelpBook style={{ color: 'black', fontSize: '25px' }} />Help</NavLink>
        <a href="#"><button className='details'>Login</button></a>
        <FaShoppingCart className="cart-icon" />
      </div>
    </nav>
  );
};

export default Navbar;

