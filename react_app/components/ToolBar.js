import React from 'react';

export default ({ createNew }) => {
  const toolBar = (
    <button onClick={() => createNew()}> Create new </button>
  );
  return toolBar;
};
