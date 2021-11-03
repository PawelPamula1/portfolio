import {
  faBars,
  faCross,
  faHamburger,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './MainHeader.module.css';
import Socials from './Socials';

const MainHeader = () => {
  const [isClicked, setIsClicked] = useState(false);

  const clickHandler = () => {
    setIsClicked(!isClicked);
  };
  return (
    <>
      <nav
        className={
          isClicked ? `${classes.nav} ${classes.clicked}` : `${classes.nav}`
        }
      >
        <ul>
          <li>
            <NavLink to="/" onClick={clickHandler}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              activeClassName={classes.active}
              to="/projects"
              onClick={clickHandler}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName={classes.active}
              to="/contact"
              onClick={clickHandler}
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <Socials />
      </nav>
      {isClicked ? (
        <FontAwesomeIcon
          icon={faTimes}
          className={classes.cross}
          onClick={clickHandler}
        />
      ) : (
        <FontAwesomeIcon
          icon={faBars}
          className={classes.hamburger}
          onClick={clickHandler}
        />
      )}
    </>
  );
};

export default MainHeader;
