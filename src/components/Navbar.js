import React from 'react';
import '../styles/navbar.css'; 

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="logo">
          LOGO
        </div>
        <div className="nav-icons">
        
            <img src="https://img.icons8.com/material-outlined/24/ffffff/search--v1.png" alt="Search Icon" />
         
          
            <img src="https://img.icons8.com/material-outlined/24/ffffff/hearts.png" alt="Like Icon" />
        
       
            <img src="https://img.icons8.com/material-outlined/24/ffffff/shopping-cart.png" alt="Cart Icon" />
         
            <img src="https://img.icons8.com/material-outlined/24/ffffff/user.png" alt="User Icon" />
        
          {/* Add Like Icon Here */}
         
        </div>
      </div>
      <nav className="navbar">
        <ul className="nav-links">
          <li>
            SHOP
          </li>
          <li>
            SKILLS
          </li>
          <li>
          STORIES
          </li>
          <li>
            ABOUT
          </li>
          <li>
            CONTACT US
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
