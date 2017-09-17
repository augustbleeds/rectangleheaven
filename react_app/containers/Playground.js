import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import addRectangle from '../actionCreators/addRectangle';
import saveLocation from '../actionCreators/saveLocation';
import ToolBar from '../components/ToolBar';
import Rectangle from '../components/Rectangle';


class Playground extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { rectangles, adjustLocation, addOneRectangle } = this.props;
    return (
      <div style={{ backgroundColor: 'skyblue', height: 500, alignSelf: 'stretch' }} >
        <ToolBar
          createNew={() => addOneRectangle()}
        />
        {rectangles.map(({ x, y, height, width }, index) => ((
          <Rectangle
            height={height}
            width={width}
            x={x}
            y={y}
            adjustPosition={data => adjustLocation(data, index)}
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
};

const mapStateToProps = rectangles => ({ rectangles });

const mapDispatchToProps = dispatch => ({
  addOneRectangle: () => dispatch(addRectangle()),
  adjustLocation: (data, index) => dispatch(saveLocation(data, index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Playground);
