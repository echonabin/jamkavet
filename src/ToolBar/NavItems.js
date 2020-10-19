import React from 'react'
import {NavLink} from 'react-router-dom'

const NavItems = () => {
    return (
        <nav className='stroke'>
                <ul>
                  <li>
                    <NavLink to='/' exact>
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to='/people'>People</NavLink>
                  </li>
                  <li>
                    <NavLink to='/place'>Place</NavLink>
                  </li>
                  <li>
                    <NavLink to='/brand'>Brand</NavLink>
                  </li>
                  <li>
                    <NavLink to='/history'>History</NavLink>
                  </li>
                  <li>
                    <NavLink to='/fiction'>Fiction</NavLink>
                  </li>
                  <li>
                    <NavLink to='/videos'>Videos</NavLink>
                  </li>
                </ul>
              </nav>
    )
}

export default NavItems
