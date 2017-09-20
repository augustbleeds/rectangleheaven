import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import { ToolbarGroup } from 'material-ui';

class SaveBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalOpen: false, buttonText: '', inputName: '' };
    this.styles = {
      overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.75)',
      },
      content: {
        position: 'absolute',
        top: '40px',
        left: '40px',
        right: '40px',
        bottom: '40px',
        border: '1px solid #ccc',
        background: '#fff',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        borderRadius: '4px',
        outline: 'none',
        padding: '20px',
      },
    };
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
          style={this.styles}
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
