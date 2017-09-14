import React from 'react';
import Draggable from 'react-draggable';

export default class Playground extends React.Component {
  constructor(props) {
    super(props);
    const x = JSON.parse(localStorage.getItem('rectangles')) || [{ x: 100, y: 200, height: 50, width: 50 }];
    console.log('typeof x', typeof x);
    this.state = { rectangles: x };
  }

  eventLogger(data) {
    // console.log('Event: ', e);
    // console.log('Data: ', data.x, data.y);
    const newRectangle = Object.assign({}, this.state.rectangles[0], { x: data.x, y: data.y });
    this.setState({ rectangles: [newRectangle] });
    localStorage.setItem('rectangles', JSON.stringify([newRectangle]));
    // console.log(this.state);
  }

  render() {
    return (
      <div>
        {this.state.rectangles.map(({ x, y }) => {
          const val = (
            <Draggable
              key="test"
              defaultPosition={{ x, y }}
              position={null}
              onDrag={(e, data) => this.eventLogger(data)}
            >
              <div style={{ backgroundColor: 'blue', height: 100, width: 100 }}>
                HELLO IM DRAGGABLE
              </div>
            </Draggable>
          );
          return val;
        })}
      </div>
    );
  }
}
