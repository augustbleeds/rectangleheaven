import React from 'react';
import Draggable from 'react-draggable';
import PropTypes from 'prop-types';

class Rectangle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  render() {
    const { height, width, x, y, adjustPosition, remove } = this.props;
    return (
      <Draggable
        bounds="parent"
        defaultPosition={{ x, y }}
        position={null}
        onStop={(e, data) => adjustPosition(data)}
      >
        <div
          style={{ backgroundColor: 'white', height, width, position: 'absolute' }}
        >
          <button onClick={() => remove()} >X</button>
        </div>
      </Draggable>
    );
  }
}

Rectangle.propTypes = {
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  adjustPosition: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
};

export default Rectangle;
