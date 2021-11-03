import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Navigation from './components/Navigation/Navigation';
import PageContainer from './components/UI/PageContainer';
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <>
      <Navigation />
      <PageContainer>
        <AnimatePresence>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/skills" component={Skills} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </AnimatePresence>
      </PageContainer>
    </>
  );
}

export default App;
