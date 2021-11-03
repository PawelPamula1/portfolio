import React from 'react';
import classes from './Socials.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faFacebookSquare,
  faGithubSquare,
} from '@fortawesome/free-brands-svg-icons';

const Socials = () => {
  return (
    <div className={classes.socials}>
      <a href="https://www.linkedin.com/in/pawelpamula003/" target="_blank">
        <FontAwesomeIcon icon={faLinkedin} className={classes.icon} />
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=100012829777760"
        target="_blank"
      >
        <FontAwesomeIcon icon={faFacebookSquare} className={classes.icon} />
      </a>
      <a href="https://github.com/PawelPamula1" target="_blank">
        <FontAwesomeIcon icon={faGithubSquare} className={classes.icon} />
      </a>
    </div>
  );
};

export default Socials;
