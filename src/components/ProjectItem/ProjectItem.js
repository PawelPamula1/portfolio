import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import classes from './ProjectItem.module.css';

const ProjectItem = (props) => {
  return (
    <div className={classes.project}>
      <a href={props.linkLive} target="_blank" rel="noreferrer">
        <img src={props.img} alt={props.title} />
      </a>
      <h1 className={classes.title}>{props.title}</h1>
      <div className={classes.links}>
        <a href={props.linkLive} className={classes.link} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGlobe} />
          <span>Live</span>
        </a>
        <a href={props.linkCode} className={classes.link} target="_blank" rel="noreferrer">
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
