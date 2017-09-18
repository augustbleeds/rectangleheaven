import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ToolBar from '../components/ToolBar';
import Rectangle from '../components/Rectangle';
import addRectangle from '../actionCreators/addRectangle';
import saveLocation from '../actionCreators/saveLocation';
import deleteRectangle from '../actionCreators/deleteRectangle';
import clearLayout from '../actionCreators/clearLayout';
import saveLayout from '../actionCreators/saveLayout';
import switchLayout from '../actionCreators/switchLayout';

class Playground extends React.Component {
  switch(switchName) {
    const switchRectangles = this.props.savedLayouts[switchName].slice();
    this.props.switchArea(switchRectangles, switchName);
  }

  render() {
    const {
      rectangles,
      adjustLocation,
      addOneRectangle,
      removeRectangle,
      clearArea,
      saveArea,
      savedLayouts } = this.props;
    const layoutNames = Object.keys(savedLayouts);
    return (
      <div style={{ backgroundColor: 'skyblue', height: 500, alignSelf: 'stretch' }} >
        <ToolBar
          createNew={() => addOneRectangle()}
          clearAll={() => clearArea()}
          layoutNames={layoutNames}
          saveArea={layoutName => saveArea(rectangles, layoutName)}
          switchArea={name => this.switch(name)}
          currentLayoutName={this.props.currentLayoutName}
        />
        {rectangles.map(({ x, y, height, width, id }) => ((
          <Rectangle
            key={id}
            height={height}
            width={width}
            x={x}
            y={y}
            adjustPosition={data => adjustLocation(data, id)}
            remove={() => removeRectangle(id)}
          />
        )),
        )}
      </div>
    );
  }
}

Playground.propTypes = {
  rectangles: PropTypes.arrayOf(PropTypes.object).isRequired,
  addOneRectangle: PropTypes.func.isRequired,
  adjustLocation: PropTypes.func.isRequired,
  removeRectangle: PropTypes.func.isRequired,
  clearArea: PropTypes.func.isRequired,
  saveArea: PropTypes.func.isRequired,
  switchArea: PropTypes.func.isRequired,
  savedLayouts: PropTypes.object.isRequired,
  currentLayoutName: PropTypes.string.isRequired,
};

const mapStateToProps = ({ rectangles, savedLayouts, currentLayoutName }) => ({
  rectangles,
  savedLayouts,
  currentLayoutName,
});

const mapDispatchToProps = dispatch => ({
  addOneRectangle: () => dispatch(addRectangle()),
  adjustLocation: (data, index) => dispatch(saveLocation(data, index)),
  removeRectangle: id => dispatch(deleteRectangle(id)),
  clearArea: () => dispatch(clearLayout()),
  saveArea: (rectangles, layoutName) => dispatch(saveLayout(rectangles, layoutName)),
  switchArea: (rectangles, name) => dispatch(switchLayout(rectangles, name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Playground);
