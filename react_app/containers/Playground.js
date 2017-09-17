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

  // saveLayoutToCache() {
  //   const { rectangles } = this.props;
  //   // console.log('rectangles are', rectangles);
  //   localStorage.setItem('rectangles', JSON.stringify(rectangles));
  // }

  render() {
    // this.saveLayoutToCache();
    const { rectangles, adjustLocation, addOneRectangle } = this.props;
    // console.log('storage', JSON.parse(localStorage.getItem('rectangles')));
    // console.log('rectangle is', rectangles);
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

const mapStateToProps = ({ rectangles, isExistingLayout }) => ({
  rectangles,
  isExistingLayout,
});

const mapDispatchToProps = dispatch => ({
  addOneRectangle: () => dispatch(addRectangle()),
  adjustLocation: (data, index) => dispatch(saveLocation(data, index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Playground);
