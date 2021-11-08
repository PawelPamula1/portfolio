import React from 'react';
import { motion } from 'framer-motion';
import ProjectItem from '../components/ProjectItem/ProjectItem';
import classes from './Projects.module.css';
import portfolioProject from '../jpg/projects/portfolio-project.jpg';
import foody from '../jpg/projects/foody.jpeg';

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
    linkCode: 'https://github.com/PawelPamula1/foody-app',
    linkLive: 'https://foody-app-pp.netlify.app/',
    description:
      "App where you can adjust your diet to your caloric demand. Just type an amount of calories and that's it.",
    stack: ['React', 'REST API', 'CSS Modules', 'HTTP Requests'],
    img: foody,
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
