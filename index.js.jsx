import React from 'react';
import ReactDOM from 'react-dom';

const { Component, PropTypes } = React;

class App extends Component {
  render() {
    const { name } = this.props;

    return (
      <div>
        `Hey ${name}!`
      </div>
    );
  }
}

App.propTypes = {
  name: PropTypes.string
};


ReactDOM.render(
  <App name='Webpack' />, document.getElementById('root')
);
