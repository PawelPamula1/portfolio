import React from 'react';
import Card from '../components/UI/Card';
import classes from './Home.module.css';
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
  faNpm,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section className={classes.home}>
        <img
          src="https://scontent-waw1-1.xx.fbcdn.net/v/t1.6435-9/88276399_890210808083237_3176480833422753792_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=VSGs9GvUFwwAX-n9EQJ&_nc_ht=scontent-waw1-1.xx&oh=f49bc651c943874c37d0386112132414&oe=61A70095"
          className={classes.img}
          alt="Home-img"
        />
        <div className={classes.divider}></div>
        <Card>
          <div className={classes.content}>
            <p>
              Hi! I'm Paweł, a <span>Frontend Developer.</span> I create things
              on internet.
            </p>
            <p>
              My mission: To develop websites and apps that are
              <span> prettier, faster</span> and with the best possible
              <span> user experience.</span>
            </p>
          </div>
        </Card>
      </section>

      <section className={classes.skills}>
        <FontAwesomeIcon icon={faHtml5} />
        <FontAwesomeIcon icon={faCss3} />
        <FontAwesomeIcon icon={faSass} />
        <FontAwesomeIcon icon={faJs} />
        <FontAwesomeIcon icon={faWordpress} />
        <FontAwesomeIcon icon={faReact} />
        <FontAwesomeIcon icon={faNpm} />
        <FontAwesomeIcon icon={faGitAlt} />
        <FontAwesomeIcon icon={faGithubSquare} />
      </section>
    </motion.div>
  );
};

export default Home;
