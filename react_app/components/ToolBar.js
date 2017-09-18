import React from 'react';
import SaveBar from './SaveBar';

export default ({
  createNew,
  clearAll,
  layoutNames,
  switchArea,
  currentLayoutName,
  saveArea,
  deleteArea }) => {
  const toolBar = (
    <div>
      <button onClick={() => createNew()}> Add Rectangle </button>
      <button onClick={() => clearAll()}> Reset Layout </button>

      <SaveBar name={currentLayoutName} save={layoutName => saveArea(layoutName)} />

      <button onClick={() => deleteArea()}> Delete Layout </button>

      <select
        value={currentLayoutName}
        onChange={e => switchArea(e.target.value)}
      >
        <option
          value={''}
          disabled
          hidden
        >
          Select Layout
        </option>
        {layoutNames.map(name => <option key={name} value={name}> {name} </option>)}
      </select>

    </div>
  );
  return toolBar;
};
