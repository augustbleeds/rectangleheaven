import React from 'react';
import SaveBar from './SaveBar';

export default ({ createNew, clearAll, layoutNames, switchArea, currentLayoutName, saveArea }) => {
  const toolBar = (
    <div>
      <button onClick={() => createNew()}> Add Rectangle </button>
      <button onClick={() => clearAll()}> Clear Layout </button>

      <SaveBar name={currentLayoutName} save={layoutName => saveArea(layoutName)} />

      <select onChange={e => switchArea(e.target.value)} >
        <option
          value=""
          selected
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
