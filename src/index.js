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
    const fullscreenStyle = {position: 'absolute', top: '0px', bottom: '0px', left: '0px', right: '0px'};
    const {fullscreen, expand} = this.props;
    const child = (fullscreen && expand) ?
      React.cloneElement(this.props.children, {style: fullscreenStyle}) :
      this.props.children;

    return (
      <div ref="wrapper" style={fullscreen ? fullscreenStyle : null}>{child}</div>
    );
  }
}


FullscreenWrapper.propTypes = {
  fullscreen: PropTypes.bool,
  expand: PropTypes.bool,
  onFullscreen: PropTypes.func
};