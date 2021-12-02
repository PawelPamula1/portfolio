import React from 'react';
import Card from '../components/UI/Card';
import classes from './Home.module.css';
import profile from '../jpg/profile.jpg';
import { motion } from 'framer-motion';
import { faGitAlt, faHtml5, faCss3, faSass, faJs, faWordpress, faReact, faGithubSquare, faNpm } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <section className={classes.home}>
        <img src={profile} className={classes.img} alt="Home-img" />
        <div className={classes.divider}></div>
        <Card>
          <div className={classes.content}>
            <h1>Hi! I'm Paweł</h1>
            <hr />
            <h2>Frontend Developer</h2>
            <p>
              Since I started my adventure with programming I noticed there are a lot of challenging problems when it comes to create a project. And I
              found solving these problems very satysfying. Learning new skills and technologies is what I fell in love with.
            </p>
            <p>
              I am looking for a job where I could work in a team and practice those skills which I already have and master them under the guidance of
              senior developers. I encourage you to take a look on my projects and if you liked them, then hire me :).
            </p>
            <button>
              <Link to="/projects">See my work</Link>
            </button>
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
