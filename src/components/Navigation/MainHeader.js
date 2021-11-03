import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './MainHeader.module.css';
import Socials from './Socials';

const MainHeader = () => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        <li>
          <NavLink activeClassName={classes.active} to="/projects">
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={classes.active} to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>
      <Socials />
    </nav>
  );
};

export default MainHeader;
