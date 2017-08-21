'use strict';

window.renderStatistics = function (ctx, names, times) {

  var YOUR_NAME = 'Вы';
  var YOUR_COLOR = 'rgba(255, 0, 0, 1)';
  var INITIAL_Y = 240;
  var INITIAL_X = 140;
  var GUTTER = 90;
  var BAR_WIDTH = 40;
  var HISTOGRAM_HEIGHT = 150;

  var renderInfo = function () {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.fillRect(110, 20, 420, 270);
    ctx.fillStyle = 'white';
    ctx.fillRect(100, 10, 420, 270);
    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';
    ctx.fillText('Ура вы победили!', 120, 40);
    ctx.fillText('Список результатов:', 120, 60);
  };
  var renderGraph = function () {
    var maxTime = Math.max.apply(null, times);
    function getRandomBlueColor() {
      var randomAlpha = Math.random().toFixed(1);
      var blueColor = 'rgba(0, 0, 255, ' + randomAlpha + ')';
      return blueColor;
    }
    var step = HISTOGRAM_HEIGHT / maxTime;
    for (var i = 0; i < times.length; i++) {
      var playerColor = getRandomBlueColor();
      var barHeight = times[i] * step;
      var timeIndent = INITIAL_Y - barHeight - BAR_WIDTH / 4;
      var nameIndent = INITIAL_Y + BAR_WIDTH / 2;
      var x = INITIAL_X + (GUTTER * i);

      ctx.fillStyle = names[i] === YOUR_NAME ? YOUR_COLOR : playerColor;
      ctx.fillRect(x, INITIAL_Y, BAR_WIDTH, -barHeight);
      ctx.fillStyle = 'black';
      ctx.fillText(Math.round(times[i]), x, timeIndent);
      ctx.fillText(names[i], x, nameIndent);
    }
  };

  renderInfo();
  renderGraph();
};
