import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <span className="brand-name">Logify</span>
        <img src="/logo.jpg" alt="Logo" className="logo" />
      </div>
      {/* Gender Section */}
      <div className="sidebar-section">
        <h3>Gender</h3>
        <ul>
          <li><input type='radio' name='test'/><span className='checkmark'>Male</span></li>
          <li><input type='radio' name='test'/><span className='checkmark'>Female</span></li>
        </ul>
      </div>

      {/* Apparel Section */}
      <div className="sidebar-section">
        <h3>Apparel</h3>
        <ul>
          <li><input type='radio' name='test'/><span className='checkmark'>T-Shirts</span></li>
          <li><input type='radio' name='test'/><span className='checkmark'>Polo Shirts</span></li>
          <li><input type='radio' name='test'/><span className='checkmark'>Hoodies</span></li>
          <li><input type='radio' name='test'/><span className='checkmark'>Hats</span></li>
          <li><input type='radio' name='test'/><span className='checkmark'>Socks</span></li>
        </ul>
      </div>

      {/* Color Section */}
      <div className="sidebar-section">
        <h3>Color</h3>
        <ul>
          <li><input type='radio' name='test'/><span className='checkmark'>All</span></li>
          <li><input type='radio' name='test'/><span className='checkmark'>Black</span></li>
          <li><input type='radio' name='test'/><span className='checkmark'>Navy Blue</span></li>
          <li><input type='radio' name='test'/><span className='checkmark'>Dark Gray</span></li>
          <li><input type='radio' name='test'/><span className='checkmark'>Red</span></li>
          <li><input type='radio' name='test'/><span className='checkmark'>White</span></li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
