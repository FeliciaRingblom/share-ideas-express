import React from 'react';
import App from './components/app';
import { browserHistory, Router, Route } from 'react-router';

export default () => {
  return (
     <Router history={ browserHistory }>
      <Route path="/" component = { App } />
    </Router>
  );
};
