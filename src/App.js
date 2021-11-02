import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Navigation from './components/Navigation/Navigation';
import PageContainer from './components/UI/PageContainer';

function App() {
  return (
    <>
      <Navigation />
      <PageContainer>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/skills">
            <Skills />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </PageContainer>
    </>
  );
}

export default App;
