import React from 'react';
import { motion } from 'framer-motion';
import ProjectItem from '../components/ProjectItem/ProjectItem';
import classes from './Projects.module.css';
import portfolioProject from '../jpg/projects/portfolio-project.jpg';
import foody from '../jpg/projects/foody.jpeg';
import spaceTourism from '../jpg/projects/space-tourism-app.jpg';
import crypto from '../jpg/projects/crypto.jpg';
import gugl from '../jpg/projects/gugl.jpg';

const ProjectList = [
  {
    title: 'Gugl Search Engine',
    linkCode: 'https://github.com/PawelPamula1/best-search-engine',
    linkLive: 'https://gugl-search-engine-pp.netlify.app/',
    description: 'Here is my own search engine made with help of Search Google API from rapidapi.',
    stack: ['React', 'Context API', 'Tailwind CSS', 'React Router', 'REST API'],
    img: gugl,
  },
  {
    title: 'Netflix Clone',
    linkCode: 'https://github.com/PawelPamula1/netflix-clone',
    linkLive: 'https://netflix-clone-pp.netlify.app/',
    description:
      "I made a netflix clone with firebase authentication. You can sign up and sign in (If you don't want to give your credentials you can use these- email: pawel@gmail.com ; password: Siemanko",
    stack: ['React', 'Context API', 'Styled Components', 'React Router', 'Firebase'],
    img: netflix,
  },
  {
    title: 'Every Crypto',
    linkCode: 'https://github.com/PawelPamula1/every-crypto',
    linkLive: 'https://every-crypto.netlify.app/',
    description: 'This site generate a lot of info about most popular cryptocurrencies and also news about all crypto world',
    stack: ['React', 'Redux Toolkit', 'Chart.js', 'React Router', 'Ant Design'],
    img: crypto,
  },
  {
    title: 'Space Tourism App',
    linkCode: 'https://github.com/PawelPamula1/space-tourism-app',
    linkLive: 'https://space-tourism-pp.netlify.app/',
    description: 'I developed this site with design from www.frontendmentor.io to challenge and practice my skills',
    stack: ['React', 'React Hooks', 'CSS Modules', 'React Router'],
    img: spaceTourism,
  },
  {
    title: 'This Portfolio',
    linkCode: 'https://github.com/PawelPamula1/portfolio',
    linkLive: 'https://pawelpamula.netlify.app/',
    description: 'Design, development - all made by me. Actually this is my first original project in React done from A to Z.',
    stack: ['React', 'React Router', 'CSS Modules'],
    img: portfolioProject,
  },
  {
    title: 'Foody App',
    linkCode: 'https://github.com/PawelPamula1/foody-app',
    linkLive: 'https://foody-app-pp.netlify.app/',
    description: "App where you can adjust your diet to your caloric demand. Just type an amount of calories and that's it.",
    stack: ['React', 'REST API', 'CSS Modules', 'HTTP Requests'],
    img: foody,
  },
];

const Projects = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
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
