import React from 'react';
import classes from './Logo.module.css';
import logo from '../../jpg/paul.png';

const Logo = () => {
  return <img src={logo} alt="logo" className={classes.logo} />;
};

export default Logo;
