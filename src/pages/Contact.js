import React from 'react';
import { motion } from 'framer-motion';
import classes from './Contact.module.css';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from '../components/UI/Card';
import {
  faFacebookSquare,
  faGithubSquare,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import CV from '../pdf/CV.pdf';

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section className={classes.contact}>
        <h1>Contact Me</h1>
        <Card>
          <div className={classes.content}>
            <h2>Paweł Pamuła</h2>
            <div className={classes.mail}>
              <FontAwesomeIcon icon={faEnvelope} />
              <p>pawelpamula003@gmail.com</p>
            </div>
            <div className={classes.phone}>
              <FontAwesomeIcon icon={faPhone} />
              <p>+48 726 103 796</p>
            </div>
            <div className={classes.socials}>
              <a
                href="https://www.linkedin.com/in/pawelpamula003/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedin} className={classes.icon} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100012829777760"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faFacebookSquare}
                  className={classes.icon}
                />
              </a>
              <a href="https://github.com/PawelPamula1" target="_blank">
                <FontAwesomeIcon
                  icon={faGithubSquare}
                  className={classes.icon}
                />
              </a>
            </div>
          </div>
        </Card>
        <a href={CV} download className={classes.button}>
          Download my CV
        </a>
      </section>
    </motion.div>
  );
};

export default Contact;
