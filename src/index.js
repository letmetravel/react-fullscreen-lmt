import React, {Component, PropTypes} from 'react';


export default class FullscreenWrapper extends Component {
  render() {
    return this.props.children;
  }
}


FullscreenWrapper.propTypes = {
  fullscreen: PropTypes.bool,
  expand: PropTypes.bool,
  onFullscreen: PropTypes.func
};