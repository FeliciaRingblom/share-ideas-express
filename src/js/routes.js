import React from 'react';
import App from './components/app';
import Idea from './components/idea/ideaItem';
import { browserHistory, Router, Route } from 'react-router';

export default () => {
  return (
     <Router history={ browserHistory }>
      <Route path="/" component = { App } />
      <Route path="/idea" component={ Idea }/>
    </Router>
  );
};
