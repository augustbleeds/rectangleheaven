import React from 'react';
import Draggable from 'react-draggable';

export default ({ height, width, x, y, adjustPosition, remove }) => {
  const rectangle = (
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
  return rectangle;
};
