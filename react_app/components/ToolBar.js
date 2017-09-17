import React from 'react';

export default ({ createNew, clearAll, layoutNames, switchArea }) => {
  const toolBar = (
    <div>
      <button onClick={() => createNew()}> Add Rectangle </button>
      <button onClick={() => clearAll()}> Clear All </button>

      <button> Save As </button>
      <button> Save </button>

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
