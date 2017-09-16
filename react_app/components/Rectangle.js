import React from 'react';
import Draggable from 'react-draggable';

export default ({ x, y, adjustPosition }) => {
  const rectangle = (
    <Draggable
      defaultPosition={{ x, y }}
      position={null}
      onStop={(e, data) => adjustPosition(data)}
    >
      <div
        style={{ backgroundColor: 'red', height: 100, width: 100 }}
      />
    </Draggable>
  );
  return rectangle;
};
