(function() {
  var drawCircle, getCoordinates, getRandomColor, getRanromRadius, pad;

  window.red = 136;

  window.green = 136;

  window.blue = 136;

  window.radius = 75;

  window.onload = function() {
    var canvas;
    canvas = document.getElementById('board');
    return canvas.onmousemove = function(e) {
      var ctx, r, x, y, _ref;
      ctx = canvas.getContext('2d');
      _ref = getCoordinates(canvas, e), x = _ref[0], y = _ref[1];
      r = getRanromRadius();
      drawCircle(x, y, r, canvas);
      drawCircle(1280 - x, 720 - y, r, canvas);
      drawCircle(x, 720 - y, r, canvas);
      drawCircle(1280 - x, y, r, canvas);
      drawCircle(y * 1.7778, x * 0.5625, r, canvas);
      drawCircle(1280 - y * 1.7778, 720 - x * 0.5625, r, canvas);
      drawCircle(y * 1.7778, 720 - x * 0.5625, r, canvas);
      return drawCircle(1280 - y * 1.7778, x * 0.5625, r, canvas);
    };
  };

  drawCircle = function(x, y, r, canvas) {
    var ctx;
    ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fillStyle = getRandomColor();
    return ctx.fill();
  };

  getCoordinates = function(canvas, e) {
    var rect, x, y;
    rect = canvas.getBoundingClientRect();
    x = e.clientX - rect.left;
    y = e.clientY - rect.top;
    return [x, y];
  };

  getRandomColor = function() {
    var b, g, r;
    window.red += (Math.floor(Math.random() * 2) + 1) === 1 ? Math.floor(Math.random() * 6) + 1 : -(Math.floor(Math.random() * 6) + 1);
    if (window.red > 255) {
      window.red = 255;
    }
    if (window.red < 0) {
      window.red = 0;
    }
    window.green += (Math.floor(Math.random() * 2) + 1) === 1 ? Math.floor(Math.random() * 6) + 1 : -(Math.floor(Math.random() * 6) + 1);
    if (window.green > 255) {
      window.green = 255;
    }
    if (window.green < 0) {
      window.green = 0;
    }
    window.blue += (Math.floor(Math.random() * 2) + 1) === 1 ? Math.floor(Math.random() * 6) + 1 : -(Math.floor(Math.random() * 6) + 1);
    if (window.blue > 255) {
      window.blue = 255;
    }
    if (window.blue < 0) {
      window.blue = 0;
    }
    console.log("red: " + window.red + ", green: " + window.green + ", blue: " + window.blue);
    r = pad(window.red.toString(16), 2);
    g = pad(window.green.toString(16), 2);
    b = pad(window.blue.toString(16), 2);
    return "#" + r + g + b;
  };

  getRanromRadius = function() {
    window.radius += (Math.floor(Math.random() * 2) + 1) === 1 ? Math.floor(Math.random() * 4) + 1 : -(Math.floor(Math.random() * 4) + 1);
    if (window.radius > 100) {
      window.radius = 100;
    }
    if (window.radius < 25) {
      window.radius = 25;
    }
    return window.radius;
  };

  pad = function(number, length) {
    var str;
    str = '' + number;
    while (str.length < length) {
      str = '0' + str;
    }
    return str;
  };

}).call(this);
