import React, {Component, PropTypes} from 'react';
import utils from './fullscreenUtils';


export default class FullscreenWrapper extends Component {
  componentDidMount() {
    this.cacheFullscreenCallback();
    document.addEventListener("fullscreeneventchange", this.cachedOnFullscreen);
    document.addEventListener("mozfullscreenchange", this.cachedOnFullscreen);
    document.addEventListener("webkitfullscreenchange", this.cachedOnFullscreen);
    this.applyFullscreen();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.fullscreen!==this.props.fullscreen) this.applyFullscreen();
  }

  cacheFullscreenCallback() {
    this.cachedOnFullscreen = this.onFullscreen.bind(this);
  }

  onFullscreen() {
    const {onFullscreen} = this.props;
    window.dispatchEvent(new Event('resize'));
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

  componentWillUnmount() {
    document.removeEventListener("fullscreeneventchange", this.cachedOnFullscreen);
    document.removeEventListener("mozfullscreenchange", this.cachedOnFullscreen);
    document.removeEventListener("webkitfullscreenchange", this.cachedOnFullscreen);
  }
}


FullscreenWrapper.propTypes = {
  fullscreen: PropTypes.bool,
  expand: PropTypes.bool,
  onFullscreen: PropTypes.func
};