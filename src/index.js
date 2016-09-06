import 'core-js/fn/object/assign'
import 'babel-polyfill'
import VideoPauseIconExtension from './extension'

const instances = []

const extensionFactory = function(config, player, view) {
  const extension = new VideoPauseIconExtension({
    config,
    player,
    view,
  })
  instances.push(extension)
  return extension.api // provide api for other extensions
}

window.vidible.extension('videoPauseIcon', ['config', 'player', 'view', extensionFactory])
