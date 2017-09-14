import React from 'react';
import Draggable from 'react-draggable';

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
      <div>
        <Draggable>
          <div style={{ backgroundColor: 'blue', height: 100, width: 100 }}>
            HELLO IM DRAGGABLE
          </div>
        </Draggable>
      </div>
    );
  }
}
