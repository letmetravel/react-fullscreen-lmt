import React, {Component} from 'react';
import FullscreenWrapper from './../src';


class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullscreen: false
    };
  }

  toggleFullscreen() {
    this.setState({fullscreen: !this.state.fullscreen});
  }

  onFullscreen(fullscreen) {
    this.setState({fullscreen: fullscreen});
  }

  render() {
    return (
      <FullscreenWrapper fullscreen={this.state.fullscreen} expand={false} onFullscreen={this.onFullscreen.bind(this)}>
        <span style={{background: 'red', cursor: 'pointer'}} onClick={this.toggleFullscreen.bind(this)}>foo</span>
      </FullscreenWrapper>
    )
  }
}


React.render(<Example />, document.getElementById('react-content'));