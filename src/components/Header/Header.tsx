import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
        {/* Add your logo or image here */}
        <img src="path/to/logo.png" alt="Logo" />
      </div>
      <nav className="navigation">
        <ul>
          <li>Tab 1</li>
          <li>Tab 2</li>
          <li>Tab 3</li>
        </ul>
      </nav>
      <button className="book-now-button">Book Now</button>
    </header>
  );
};

export default Header;
