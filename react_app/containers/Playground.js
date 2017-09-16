import React from 'react';
import Rectangle from '../components/Rectangle';

export default class Playground extends React.Component {
  constructor(props) {
    super(props);
    const x = JSON.parse(localStorage.getItem('rectangles')) || [{ x: 100, y: 200, height: 50, width: 50 }];
    this.state = { rectangles: x };
  }

  saveNewLocation(data) {
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
              adjustPosition={data => this.saveNewLocation(data)}
            />
          );
          return rectangle;
        })}
      </div>
    );
  }
}
