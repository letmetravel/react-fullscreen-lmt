function fullScreen(element) {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.webkitRequestFullScreen) {
    element.webkitRequestFullScreen();
  } else if (element.mozRequestFullscreen) {
    element.mozRequestFullScreen();
  }
}

function fullScreenCancel(document) {
  if (document.cancelFullscreen) {
    document.cancelFullscreen();
  } else if (document.webkitCancelFullScreen) {
    document.webkitCancelFullScreen();
  } else if (document.mozCancelFullscreen) {
    document.mozCancelFullscreen();
  }
}

function isFullScreen(document) {
  if (document.cancelFullscreen) return document.fullScreen;
  if (document.mozCancelFullscreen) return document.mozFullScreen;
  if (document.webkitCancelFullScreen) return document.webkitIsFullScreen;
}


export default {fullScreen, fullScreenCancel, isFullScreen};