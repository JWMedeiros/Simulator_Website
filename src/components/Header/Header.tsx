import React, { useState } from 'react';
import './Header.css';

interface HeaderProps {
  selectedItem: string;
  onItemClick: (item: string) => void;
}

const Header: React.FC<HeaderProps> = ({ selectedItem, onItemClick }) => {
  const handleItemClick = (item: string) => {
    onItemClick(item);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src="/me.jpg" alt="Logo" />
      </div>
      <nav className="nav">
        <ul>
          <li onClick={() => handleItemClick('Item 1')}>Item 1</li>
          <li onClick={() => handleItemClick('Item 2')}>Item 2</li>
          <li onClick={() => handleItemClick('Item 3')}>Item 3</li>
        </ul>
      </nav>
      <button className="bookButton">Book Now</button>
    </header>
  );
};

export default Header;
