import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import FullscreenWrapper from './../lib';


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
      <div>
        <FullscreenWrapper fullscreen={this.state.fullscreen} expand={true} onFullscreen={this.onFullscreen.bind(this)}>
          <span className="fullscreen-element" onClick={this.toggleFullscreen.bind(this)}>fullscreen expand</span>
        </FullscreenWrapper>
        <span>none</span>
      </div>
    )
  }
}


ReactDOM.render(<Example />, document.getElementById('react-content'));