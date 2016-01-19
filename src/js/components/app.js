import React from 'react';

require('../../sass/_app.scss');

const App = (props) => {
  return (
    <div className="container">
      <h1>Share Ideas</h1>
        { props.children }
    </div>
  );
};

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;
