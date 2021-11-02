import React from 'react';
import Logo from './Logo';
import MainHeader from './MainHeader';
import classes from './Navigation.module.css';

const Navigation = () => {
  return (
    <div className={classes.navigation}>
      <Logo />
      <MainHeader />
    </div>
  );
};

export default Navigation;
