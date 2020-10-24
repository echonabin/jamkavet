import React from "react";
import { NavLink } from "react-router-dom";

const NavItems = () => {
  return (
    <nav className='stroke'>
      <ul>
        <li>
          <NavLink to='/' exact>
            गृहपृष्ठ
          </NavLink>
        </li>
        <li>
          <NavLink to='/people'>सेलिब्रेटी</NavLink>
        </li>
        <li>
          <NavLink to='/place'>राष्ट्रसेवक</NavLink>
        </li>
        <li>
          <NavLink to='/brand'>भूईंमान्छे</NavLink>
        </li>
        <li>
          <NavLink to='/podcast'>पडकास्ट</NavLink>
        </li>
        <li>
          <NavLink to='/videos'>भिडियाे</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavItems;
