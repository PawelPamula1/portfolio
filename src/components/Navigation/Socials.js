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
      <a href="https://www.linkedin.com/in/pawelpamula003/">
        <FontAwesomeIcon icon={faLinkedin} className={classes.icon} />
      </a>
      <a href="https://www.facebook.com/profile.php?id=100012829777760">
        <FontAwesomeIcon icon={faFacebookSquare} className={classes.icon} />
      </a>
      <a href="https://github.com/PawelPamula1">
        <FontAwesomeIcon icon={faGithubSquare} className={classes.icon} />
      </a>
    </div>
  );
};

export default Socials;
