import React from 'react';
import Draggable from 'react-draggable';

export default ({ height, width, x, y, adjustPosition }) => {
  const rectangle = (
    <Draggable
      defaultPosition={{ x, y }}
      position={null}
      onStop={(e, data) => adjustPosition(data)}
    >
      <div
        style={{ backgroundColor: 'red', height, width, position: 'absolute' }}
      />
    </Draggable>
  );
  return rectangle;
};
