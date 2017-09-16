import React from 'react';
import Draggable from 'react-draggable';

export default ({ id, x, y, adjustPosition }) => {
  const rectangle = (
    <Draggable
      key={id}
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
