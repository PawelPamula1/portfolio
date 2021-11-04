import React from 'react';
import { motion } from 'framer-motion';
import ProjectItem from '../components/ProjectItem/ProjectItem';
import classes from './Projects.module.css';
import portfolioProject from '../jpg/projects/portfolio-project.jpg';

const ProjectList = [
  {
    title: 'This Portfolio',
    linkCode: 'https://github.com/PawelPamula1/portfolio',
    linkLive: 'https://pawelpamula.netlify.app/',
    description:
      'Design, development - all made by me. Actually this is my first original project in React done from A to Z.',
    stack: ['React', 'React Router', 'CSS Modules'],
    img: portfolioProject,
  },
  {
    title: 'Foody App',
    linkCode: '#',
    linkLive: '#',
    description: 'IN PROGRESS...',
    stack: ['React', 'REST API', 'CSS Modules', 'HTTP Requests'],
    img: 'https://www.fitagain.pl/wp-content/uploads/2019/09/IMG_88612str.jpg',
  },
];

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
          {ProjectList.map((project) => {
            return (
              <ProjectItem
                title={project.title}
                linkCode={project.linkCode}
                linkLive={project.linkLive}
                description={project.description}
                stack={project.stack}
                img={project.img}
              />
            );
          })}
        </div>
      </section>
    </motion.div>
  );
};

export default Projects;
