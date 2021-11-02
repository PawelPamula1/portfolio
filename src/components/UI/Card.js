import React from 'react';
import classes from './Card.module.css';

const Card = (props) => {
  return (
    <div className={classes.card}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

export default Card;
