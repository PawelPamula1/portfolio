import React from 'react';
import classes from './Logo.module.css';
import logo from '../../jpg/paul.png';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/">
      <img src={logo} alt="logo" className={classes.logo} />
    </Link>
  );
};

export default Logo;
