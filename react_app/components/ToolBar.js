import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
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
    <Toolbar>
      <ToolbarGroup firstChild>
        <RaisedButton label="Add Rectangle" onClick={() => createNew()} />
        <RaisedButton label="Reset Layout" onClick={() => clearAll()} />
      </ToolbarGroup>
      <SaveBar name={currentLayoutName} save={layoutName => saveArea(layoutName)} />
      <ToolbarGroup>
        <RaisedButton label="Delete Layout" onClick={() => deleteArea()} secondary />
        <DropDownMenu value={currentLayoutName} onChange={(e, k, value) => switchArea(value)}>
          <MenuItem disabled value="" primaryText="Select Existing Layout" />
          {layoutNames.map(name => <MenuItem key={name} value={name} primaryText={name} />)}
        </DropDownMenu>
      </ToolbarGroup>
    </Toolbar>
  );
  return toolBar;
};
