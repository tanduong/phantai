import React from 'react';
import { Link } from 'react-router-dom';
import NavTech from './navbar/NavTech';
import NavSkill from './navbar/NavSkill';
import NavContact from './navbar/NavContact';
import NavHome from './navbar/NavHome';

const imageSrc = {
  avatar: './img/avatar.jpg',
  alt: 'avatar'
}

const Navbar = () => {
  return (
    <aside className="g-sidebar">
      <div className="personal">
        <h2><img src={imageSrc.avatar} alt={imageSrc.alt} /></h2>
        <ul className="g-navi">
          <li>
            <NavHome />
            <Link to="/" className="link" />
          </li>
          <li>
            <NavTech />
            <Link to="/technical" className="link"/>
          </li>
          <li>
            <NavSkill />
            <Link to="/experience" className="link"/>
          </li>
          <li>
            <NavContact />
            <Link to="/contact-gallery" className="link"/>
          </li>
        </ul>
      </div>
    </aside>
  )
} 

export default Navbar;