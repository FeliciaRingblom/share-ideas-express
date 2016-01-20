import React from 'react';
import App from './components/app';
import Home from './components/home/home';
import IdeaList from './components/idea/ideaList';
import IdeaDetails from './components/idea/ideaDetails';
import ManageIdea from './components/idea/manageIdea';
import { IndexRoute, Router, Route } from 'react-router';
import history from './history';

export default () => {
  return (
     <Router history= { history }>
      <Route path="/" component = { App }>
        <IndexRoute component={ Home }/>
        <Route path="ideas" component={ IdeaList }/>
        <Route path="idea/:idea" component={ IdeaDetails } />
        <Route path="/add-idea" component ={ ManageIdea } />
        <Route path="/edit-idea/:idea" component ={ ManageIdea } />
      </Route>
    </Router>
  );
};
