import React from 'react';
import classes from './Logo.module.css';
import logo from '../../jpg/logo.png';

const Logo = () => {
  return <img src={logo} alt="logo" className={classes.logo} />;
};

export default Logo;
