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
    const temp = this.state.rectangles.concat({ x: 100, y: 200, height: 50, width: 50 });
    this.setState({ rectangles: temp });
    localStorage.setItem('rectangles', JSON.stringify(temp));
  }

  render() {
    return (
      <div style={{ backgroundColor: 'skyblue', height: 500, alignSelf: 'stretch' }} >
        <ToolBar
          createNew={() => this.addSquare()}
        />
        {this.state.rectangles.map(({ x, y, height, width }, index) => ((
          <Rectangle
            height={height}
            width={width}
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
