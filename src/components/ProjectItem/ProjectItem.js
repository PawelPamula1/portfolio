import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import classes from './ProjectItem.module.css';

const ProjectItem = (props) => {
  return (
    <div className={classes.project}>
      <img src={props.img} />
      <h1 className={classes.title}>{props.title}</h1>
      <div className={classes.links}>
        <a href={props.linkLive} className={classes.link}>
          <FontAwesomeIcon icon={faGlobe} />
          <span>Live</span>
        </a>
        <a href={props.linkCode} className={classes.link}>
          <FontAwesomeIcon icon={faGithub} />
          <span>Code</span>
        </a>
      </div>
      <p className={classes.stack}>
        {props.stack.map((item) => {
          return <span>{item}</span>;
        })}
      </p>
      <p className={classes.description}>{props.description}</p>
    </div>
  );
};

export default ProjectItem;
