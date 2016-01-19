import React from 'react';
import App from './components/app';
import Ideas from './components/idea/ideaList';
import { browserHistory, Router, Route } from 'react-router';

export default () => {
  return (
     <Router history={ browserHistory }>
      <Route path="/" component = { App } />
      <Route path="/ideas" component={ Ideas }/>
    </Router>
  );
};
