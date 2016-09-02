import React from 'react'
import ReactDOM from 'react-dom'
import co from 'co'
import Container from './components/container'
import css from './styles/App.css'
import utils from './utils'

class Extension {
  constructor(opts = {}) {
    const {
      config = {},
        player,
        view,
    } = opts
    this.config = config
    this.player = player
    this.view = view
    co(this.createView.bind(this))
  }

  hide() {

  }

  show() {

  }

  load() {

  }

  destroy() {
    utils.removeElem(this._styles)
  }

  * createView() {
    try {
      const container = yield this.view.getContainer(this.view.PLAYER_CONTAINER)
      const target = document.createElement('div')
      target.className = 'video-pause-icon'

      this._styles = utils.addCss(container, css)
      const src = 'http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/sign-check-icon.png'
      ReactDOM.render(<Container src={src}/>, target)
      container.appendChild(target)
    }
    catch (error) {
      window.console.error(error)
    }
  }

  get api() {
    return {
      hide: this.hide.bind(this),
      show: this.show.bind(this),
      load: this.load.bind(this),
    }
  }
}

export default Extension
