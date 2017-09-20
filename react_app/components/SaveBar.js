import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import { ToolbarGroup } from 'material-ui';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

class SaveBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalOpen: false, buttonText: '', inputName: '' };
  }

  handleSave(text) {
    if (!this.props.name || text === 'Save Layout As') {
      this.openModal(text);
    } else {
      this.props.save(this.props.name);
    }
  }

  openModal(text) {
    this.setState({
      modalOpen: true,
      buttonText: text,
    });
  }

  handleInput(e) {
    this.setState({
      inputName: e.target.value,
    });
  }

  handleModalSubmit() {
    this.props.save(this.state.inputName);
    this.handleClose();
  }

  handleClose() {
    this.setState({
      modalOpen: false,
      buttonText: '',
    });
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary
        onClick={() => this.handleClose()}
      />,
      <FlatButton
        label="Submit"
        primary
        onClick={() => this.handleModalSubmit()}
      />,
    ];
    return (
      <ToolbarGroup>
        <RaisedButton label="Save Layout As" primary onClick={() => this.handleSave('Save Layout As')} />
        <RaisedButton label="Save Layout" primary onClick={() => this.handleSave('Save Layout')} />
        <Dialog
          title={this.state.buttonText}
          actions={actions}
          modal
          open={this.state.modalOpen}
        >
          <TextField hintText="Layout Name" onChange={e => this.handleInput(e)} />
        </Dialog>
      </ToolbarGroup>
    );
  }
}

SaveBar.propTypes = {
  name: PropTypes.string.isRequired,
  save: PropTypes.func.isRequired,
};

export default SaveBar;
