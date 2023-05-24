import React from 'react';
import './Footer.css'

const Footer: React.FC = () => {
  return (
    <footer className='footer'>
      <ul className='leftList'>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
      <ul className='rightList'>
        <li>
          <strong>Darkes's Simulator</strong>
        </li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </footer>
  );
};

export default Footer;
