import React from 'react';
import Playground from '../containers/Playground';

export default class App extends React.Component {
  render() {
    const mainApp = (
      <div>
        <Playground />
      </div>
    );
    return mainApp;
  }
}
