import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="g-header">
    <div className="g-header__logo">
      <h1>
        <Link to="/">
          Phan Ba Tai
          <span>Front End Developer</span>
        </Link>
      </h1>
    </div>
  </header>
  )
}
export default Header;