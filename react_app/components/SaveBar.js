import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import { ToolbarGroup } from 'material-ui';

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
    this.setState({
      modalOpen: false,
      buttonText: '',
    });
  }

  render() {
    return (
      <ToolbarGroup>
        <RaisedButton label="Save Layout As" primary onClick={() => this.handleSave('Save Layout As')} />
        <RaisedButton label="Save Layout" primary onClick={() => this.handleSave('Save Layout')} />
        <Modal
          isOpen={this.state.modalOpen}
          contentLabel="SaveOptions"
        >
          <input type="text" placeholder="Layout Name" onChange={e => this.handleInput(e)} />
          <button onClick={() => this.handleModalSubmit()}> {this.state.buttonText} </button>
        </Modal>
      </ToolbarGroup>
    );
  }
}

SaveBar.propTypes = {
  name: PropTypes.string.isRequired,
  save: PropTypes.func.isRequired,
};

export default SaveBar;
