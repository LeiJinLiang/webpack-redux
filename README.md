# webpack-redux
webpack-redux

防抖动
var delta = 1000;
var timeoutID = null;
var safe = true;

function log() {
  console.log('foo');
}

function immediatedLog() {
  if (safe) {
    log();
    safe = false;
  }

  clearTimeout(timeoutID);
  timeoutID = setTimeout(function() {
    safe = true;
  }, delta);
};

window.onkeydown = immediatedLog;
