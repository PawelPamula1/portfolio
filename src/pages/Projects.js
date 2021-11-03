import React from 'react';
import { motion } from 'framer-motion';
import ProjectItem from '../components/ProjectItem/ProjectItem';
import classes from './Projects.module.css';

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section className={classes.projects}>
        <h1>My Projects</h1>
        <div className={classes.projectsList}>
          <ProjectItem />
        </div>
      </section>
    </motion.div>
  );
};

export default Projects;
