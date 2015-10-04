import React, {Component, PropTypes} from 'react';
import utils from './fullscreenUtils';


export default class FullscreenWrapper extends Component {
  componentDidMount() {
    document.addEventListener("fullscreeneventchange", this.onFullscreen.bind(this));
    document.addEventListener("mozfullscreenchange", this.onFullscreen.bind(this));
    document.addEventListener("webkitfullscreenchange", this.onFullscreen.bind(this));
    this.applyFullscreen();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.fullscreen!==this.props.fullscreen) this.applyFullscreen();
  }

  onFullscreen() {
    const {onFullscreen} = this.props;
    onFullscreen(utils.isFullScreen(document));
  }

  applyFullscreen() {
    const {fullscreen} = this.props;
    const el = this.refs['wrapper'].getDOMNode();
    fullscreen ? utils.fullScreen(el) : utils.fullScreenCancel(document);
  }

  render() {
    const {fullscreen} = this.props;
    return (
      <div ref="wrapper" className="fullscreen-wrapper">
        {this.props.children}
      </div>
    );
  }
}


FullscreenWrapper.propTypes = {
  fullscreen: PropTypes.bool,
  expand: PropTypes.bool,
  onFullscreen: PropTypes.func
};