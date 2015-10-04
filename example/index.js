import React, {Component} from 'react';
import FullscreenWrapper from './../src';


class Example extends Component {

  onFullscreen() {
    debugger
  }

  render() {
    return (
      <FullscreenWrapper fullscreen={false} expand={false} onFullscreen={this.onFullscreen.bind(this)}>
        <span style={{background: 'red'}}>foo</span>
      </FullscreenWrapper>
    )
  }
}


React.render(<Example />, document.getElementById('react-content'));