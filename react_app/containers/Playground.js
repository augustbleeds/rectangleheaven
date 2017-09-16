import React from 'react';
import ToolBar from '../components/ToolBar';
import Rectangle from '../components/Rectangle';

export default class Playground extends React.Component {
  constructor(props) {
    super(props);
    const rectangles = JSON.parse(localStorage.getItem('rectangles')) || [];
    this.state = { rectangles };
  }

  saveLocation(data, index) {
    const temp = this.state.rectangles.slice();
    temp[index] = Object.assign({}, temp[index], { x: data.x, y: data.y });
    this.setState({ rectangles: temp });
    localStorage.setItem('rectangles', JSON.stringify(temp));
  }

  addSquare() {
    this.setState({
      rectangles: this.state.rectangles.concat({ x: 100, y: 200, height: 50, width: 50 }),
    });
  }

  render() {
    return (
      <div>
        <ToolBar />
        {this.state.rectangles.map(({ x, y }, index) => ((
          <Rectangle
            key="test"
            x={x}
            y={y}
            adjustPosition={data => this.saveLocation(data, index)}
          />
        )),
        )}
      </div>
    );
  }
}
