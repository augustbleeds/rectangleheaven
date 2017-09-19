import React from 'react';
import PropTypes from 'prop-types';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Rnd from 'react-rnd';
import { GithubPicker } from 'react-color';


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

  handleColorChange(color) {
    this.props.switchColor(color.hex);
  }

  render() {
    const { height, width, x, y, remove, adjustPosition, adjustDimension, color } = this.props;
    return (
      <Rnd
        bounds="parent"
        size={{ width, height }}
        position={{ x, y }}
        onDragStop={(e, data) => adjustPosition(data)}
        onResize={(e, direction, ref) => adjustDimension(ref.offsetHeight, ref.offsetWidth)}
      >
        <div
          role="button"
          tabIndex="-1"
          onClick={e => this.handleTouchTap(e)}
          style={{ backgroundColor: color, height, width, position: 'absolute' }}
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
              <GithubPicker
                color={color}
                onChangeComplete={val => this.handleColorChange(val)}
              />
            </Menu>
          </Popover>
        </div>
      </Rnd>
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
  adjustDimension: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  switchColor: PropTypes.func.isRequired,
};

export default Rectangle;
