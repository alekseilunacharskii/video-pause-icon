function onVideoPlay() {
  this.setState({
    visible: false
  });
}

function onVideoPause(e) {
  if (this.config.showOnAd || !e.data.isAd) {
    this.setState({visible: true});
  }
}

function VideoPauseIcon(config, player, view) {
  this.config = config;
  this.player = player;
  config.xOffset = config.xOffset || 0;
  config.yOffset = config.yOffset || 0;
  config.src = config.src || 'http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/sign-check-icon.png';
  config.width = config.width || 50;
  config.showOnAd = config.showOnAd || false;

  view.getContainer(view.PLAYER_CONTAINER)
    .then(this.createView.bind(this))
    .catch(this.onError.bind(this));
}

VideoPauseIcon.prototype.onError = function (error) {
  setTimeout(function () {
    throw error;
  }, 0);
}

VideoPauseIcon.prototype.createView = function (tagContainer) {
  var config = this.config;
  var container = document.createElement('div');
  var inner = document.createElement('div');
  var style;
  
  style = container.style;
  style.width = '100%';
  style.height = '100%'
  style.position = 'relative';
  style.zIndex = '10';
  tagContainer.appendChild(container);

  style = inner.style;
  style.position = 'absolute';
  style.right = this.config.xOffset + 'px';
  style.bottom = this.config.yOffset + 'px';
  container.appendChild(inner);

  var image = new Image();
  image.src = config.src;
  style = image.style;
  style.color = '#fff';
  style.pointerEvents = 'visible';
  style.width = config.width + 'px';
  inner.appendChild(image);
  this.icon = image;

  this.player.addEventListener(vidible.VIDEO_PLAY, onVideoPlay.bind(this));
  this.player.addEventListener(vidible.VIDEO_PAUSE, onVideoPause.bind(this));

  this.setState({visible: false});
}

VideoPauseIcon.prototype.setState = function (state) {
  if (state.visible) {
    this.icon.style.display = 'block';
  }
  else {
    this.icon.style.display = 'none';
  }
}

vidible.extension('videoPauseIcon', function (config, player, view) {
  return new VideoPauseIcon(config, player, view);
});
