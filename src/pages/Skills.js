import React from 'react';
import classes from './Skills.module.css';
import { motion } from 'framer-motion';
import {
  faGitAlt,
  faHtml5,
  faCss3,
  faSass,
  faJs,
  faWordpress,
  faReact,
  faGithubSquare,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>Skills page</h1>
      <section className={classes.skills}>
        <FontAwesomeIcon icon={faHtml5} />
        <FontAwesomeIcon icon={faCss3} />
        <FontAwesomeIcon icon={faSass} />
        <FontAwesomeIcon icon={faJs} />
        <FontAwesomeIcon icon={faWordpress} />
        <FontAwesomeIcon icon={faReact} />
        <FontAwesomeIcon icon={faGitAlt} />
        <FontAwesomeIcon icon={faGithubSquare} />
      </section>
    </motion.div>
  );
};

export default Skills;
