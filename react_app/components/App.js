import React from 'react';
// import ToolBar from './ToolBar';
import Playground from '../containers/Playground';

export default class App extends React.Component {
  render() {
    const mainApp = (
      <div>
        {/* <ToolBar /> */}
        <Playground />
      </div>
    );
    return mainApp;
  }
}
