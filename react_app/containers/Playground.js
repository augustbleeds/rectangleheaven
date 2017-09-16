import React from 'react';
// import Draggable from 'react-draggable';
import Rectangle from '../components/Rectangle';

/*
So, on drag, the coordinates change.
 */

export default class Playground extends React.Component {
  constructor(props) {
    super(props);
    const x = JSON.parse(localStorage.getItem('rectangles')) || [{ x: 100, y: 200, height: 50, width: 50 }];
    this.state = { rectangles: x };
  }

  eventLogger(data) {
    const newRectangle = Object.assign({}, this.state.rectangles[0], { x: data.x, y: data.y });
    this.setState({ rectangles: [newRectangle] });
    localStorage.setItem('rectangles', JSON.stringify([newRectangle]));
  }


  render() {
    return (
      <div>
        {this.state.rectangles.map(({ x, y }) => {
          const rectangle = (
            <Rectangle
              key="test"
              x={x}
              y={y}
              adjustPosition={data => this.eventLogger(data)}
            />
          );
          return rectangle;
        })}
      </div>
    );
  }
}
