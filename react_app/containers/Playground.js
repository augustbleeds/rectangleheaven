import React from 'react';

const currentLayoutState = [
  { x: 100, y: 100, height: 50, width: 50 },
];

export default class Playground extends React.Component {
  constructor(props) {
    super(props);
    this.state = { rectangles: currentLayoutState };
  }

  render() {
    return (
      <p> Hello this is the playground </p>
    );
  }
}
