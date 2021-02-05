import React from "react";
import IconButton from "@material-ui/core/IconButton";
import FullscreenIcon from "@material-ui/icons/Fullscreen";
import FullscreenExitIcon from "@material-ui/icons/FullscreenExit";

function isFullScreenSupported() {
  var doc = window.document;
  var docEl = doc.documentElement;

  var requestFullScreen =
    docEl.requestFullscreen ||
    docEl.mozRequestFullScreen ||
    docEl.webkitRequestFullScreen ||
    docEl.msRequestFullscreen;

  return Boolean(requestFullScreen);
}

function toggleFullScreen() {
  var doc = window.document;
  var docEl = doc.documentElement;

  var requestFullScreen =
    docEl.requestFullscreen ||
    docEl.mozRequestFullScreen ||
    docEl.webkitRequestFullScreen ||
    docEl.msRequestFullscreen;

  var cancelFullScreen =
    doc.exitFullscreen ||
    doc.mozCancelFullScreen ||
    doc.webkitExitFullscreen ||
    doc.msExitFullscreen;

  if (
    !doc.fullscreenElement &&
    !doc.mozFullScreenElement &&
    !doc.webkitFullscreenElement &&
    !doc.msFullscreenElement
  ) {
    requestFullScreen.call(docEl);
  } else {
    cancelFullScreen.call(doc);
  }
}

function isFullScreen() {
  var doc = window.document;

  if (
    !doc.fullscreenElement &&
    !doc.mozFullScreenElement &&
    !doc.webkitFullscreenElement &&
    !doc.msFullscreenElement
  ) {
    return false;
  }
  return true;
}

const FullScreenButton = () => {
  const fullscreen = isFullScreen();

  return isFullScreenSupported() ? (
    <span>
      {fullscreen && (
        <IconButton color="inherit" onClick={toggleFullScreen}>
          <FullscreenExitIcon />
        </IconButton>
      )}
      {!fullscreen && (
        <IconButton color="inherit" onClick={toggleFullScreen}>
          <FullscreenIcon />
        </IconButton>
      )}
    </span>
  ) : null;
};

export default FullScreenButton;
