import React from 'react';
import Draggable from 'react-draggable';
import PropTypes from 'prop-types';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';


class Rectangle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleTouchTap(event) {
    event.preventDefault();
    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  }

  handleRequestClose() {
    this.setState({
      open: false,
    });
  }

  handleStop(data) {
    this.props.adjustPosition(data);
  }

  render() {
    const { height, width, x, y, remove } = this.props;
    return (
      <Draggable
        bounds="parent"
        defaultPosition={{ x, y }}
        position={null}
        onStop={(e, data) => this.handleStop(data)}
      >
        <div
          role="button"
          tabIndex="-1"
          onClick={e => this.handleTouchTap(e)}
          style={{ backgroundColor: 'white', height, width, position: 'absolute' }}
        >
          <Popover
            open={this.state.open}
            anchorEl={this.state.anchorEl}
            anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
            targetOrigin={{ horizontal: 'left', vertical: 'top' }}
            onRequestClose={() => this.handleRequestClose()}
          >
            <Menu>
              <MenuItem primaryText="Delete" onClick={() => remove()} />
            </Menu>
          </Popover>
        </div>
      </Draggable>
    );
  }
}

Rectangle.propTypes = {
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  adjustPosition: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
};

export default Rectangle;
