import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ToolBar from '../components/ToolBar';
import Rectangle from '../components/Rectangle';
import addRectangle from '../actionCreators/addRectangle';
import saveLocation from '../actionCreators/saveLocation';
import deleteRectangle from '../actionCreators/deleteRectangle';
import clearLayout from '../actionCreators/clearLayout';


class Playground extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { rectangles, adjustLocation, addOneRectangle, removeRectangle, clearArea } = this.props;
    return (
      <div style={{ backgroundColor: 'skyblue', height: 500, alignSelf: 'stretch' }} >
        <ToolBar
          createNew={() => addOneRectangle()}
          clearAll={() => clearArea()}
          layoutNames={['hi', 'bye', 'aloha']}
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
};

const mapStateToProps = ({ rectangles }) => ({ rectangles });

const mapDispatchToProps = dispatch => ({
  addOneRectangle: () => dispatch(addRectangle()),
  adjustLocation: (data, index) => dispatch(saveLocation(data, index)),
  removeRectangle: id => dispatch(deleteRectangle(id)),
  clearArea: () => dispatch(clearLayout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Playground);
