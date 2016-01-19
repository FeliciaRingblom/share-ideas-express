import React from 'react';
import Header from './header/header';

require('../../sass/_app.scss');

const App = (props) => {
  return (
    <div className="container">
      <Header />
        { props.children }
    </div>
  );
};

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;
