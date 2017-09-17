import React from 'react';

export default ({ createNew, clearAll, layoutNames }) => {
  const toolBar = (
    <div>
      <button onClick={() => createNew()}> Add Rectangle </button>
      <button onClick={() => clearAll()}> Clear All </button>
      <button> Save As </button>
      <button> Save </button>
      <select>
        <option value="" selected disabled hidden>Select Layout</option>
        {layoutNames.map(name => <option value={name}> {name} </option>)}
      </select>
    </div>
  );
  return toolBar;
};
