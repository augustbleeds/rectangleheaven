import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';
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
        <FlatButton label="Add Rectangle" onClick={() => createNew()} />
        <FlatButton label="Reset Layout" onClick={() => clearAll()} />
      </ToolbarGroup>
      <SaveBar
        name={currentLayoutName}
        save={layoutName => saveArea(layoutName)}
      />
      <ToolbarGroup>
        <RaisedButton label="Delete Layout" onClick={() => deleteArea()} secondary />
        <DropDownMenu value={currentLayoutName} onChange={(e, k, value) => switchArea(value)}>
          <MenuItem disabled value="" primaryText="Select Existing Layout" />
          {layoutNames.map(name => <MenuItem key={name} value={name} primaryText={name} />)}
        </DropDownMenu>
      </ToolbarGroup>
      <Drawer open={false}>
        <MenuItem>Menu Item</MenuItem>
        <MenuItem>Menu Item 2</MenuItem>
      </Drawer>

    </Toolbar>
  );
  return toolBar;
};
