(function() {
  var drawCircle, getCoordinates, getRandomColor, getRanromRadius, invert, pad;

  window.red = 136;

  window.green = 136;

  window.blue = 136;

  window.radius = 75;

  window.onload = function() {
    var canvas;
    canvas = document.getElementById('board');
    return canvas.onmousemove = function(e) {
      var ctx, invertBack, numShapes, persist, r, x, y, _ref;
      ctx = canvas.getContext('2d');
      persist = document.getElementById('persist').checked;
      invertBack = document.getElementById('invert').checked;
      if (!persist) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if (invertBack) {
          ctx.rect(0, 0, canvas.width, canvas.height);
          ctx.fillStyle = invert(getRandomColor());
          ctx.fill();
        }
      }
      _ref = getCoordinates(canvas, e), x = _ref[0], y = _ref[1];
      r = getRanromRadius();
      numShapes = document.getElementById('number').value;
      drawCircle(x, y, r, canvas);
      if (numShapes >= 2) {
        drawCircle(1280 - x, 720 - y, r, canvas);
      }
      if (numShapes >= 3) {
        drawCircle(x, 720 - y, r, canvas);
        drawCircle(1280 - x, y, r, canvas);
      }
      if (numShapes >= 4) {
        drawCircle(y * 1.7778, x * 0.5625, r, canvas);
        drawCircle(1280 - y * 1.7778, 720 - x * 0.5625, r, canvas);
        drawCircle(y * 1.7778, 720 - x * 0.5625, r, canvas);
        return drawCircle(1280 - y * 1.7778, x * 0.5625, r, canvas);
      }
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

  invert = function(color) {
    var b, g, r;
    color = color.slice(1);
    r = 255 - parseInt(color.slice(0, 2), 16);
    g = 255 - parseInt(color.slice(2, 4), 16);
    b = 255 - parseInt(color.slice(4), 16);
    r = pad(r.toString(16), 2);
    g = pad(g.toString(16), 2);
    b = pad(b.toString(16), 2);
    return "#" + r + g + b;
  };

}).call(this);
