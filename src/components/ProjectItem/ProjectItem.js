import React from 'react';
import classes from './ProjectItem.module.css';
import portfolioProject from '../../jpg/projects/portfolio-project.jpg';

const ProjectItem = () => {
  return (
    <div className={classes.project}>
      <img src={portfolioProject} />
      <h1 className={classes.title}>This Portfolio</h1>
      <div className={classes.links}>
        <a href="#" className={classes.link}>
          Live
        </a>
        <a href="#" className={classes.link}>
          Code
        </a>
      </div>
      <p className={classes.stack}>
        <span>React</span> <span>React-router</span> <span>CSS-modules</span>
      </p>
      <p className={classes.description}>
        Design, development - all made by me. Actually this is my first original
        project in React done from A to Z.
      </p>
    </div>
  );
};

export default ProjectItem;
