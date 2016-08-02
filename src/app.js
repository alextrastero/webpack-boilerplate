import React, { Component, PropTypes } from 'react';

class App extends Component {
  render() {
    const { name } = this.props;

    return (
      <div>
        {`Hey ${name}!`}
      </div>
    );
  }
}

App.propTypes = {
  name: PropTypes.string
};

export default App;