import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

class SaveBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalOpen: false, buttonText: '', inputName: '' };
  }

  handleSave(text) {
    if (!this.props.name || text === 'Save As') {
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
      <div>
        <button onClick={() => this.handleSave('Save As')}> Save As </button>
        <button onClick={() => this.handleSave('Save')}> Save </button>
        <Modal
          isOpen={this.state.modalOpen}
          contentLabel="SaveOptions"
        >
          <input type="text" placeholder="Layout Name" onChange={e => this.handleInput(e)} />
          <button onClick={() => this.handleModalSubmit()}> {this.state.buttonText} </button>
        </Modal>
      </div>
    );
  }
}

SaveBar.propTypes = {
  name: PropTypes.string.isRequired,
  save: PropTypes.func.isRequired,
};

export default SaveBar;
