import React from 'react'
import ReactDOM from 'react-dom'
import co from 'co'
import Container from './components/Container'
import css from './styles/main.css'
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

  destroy() {
    utils.removeElem(this._styles)
  }

  * createView() {
    try {
      const container = yield this.view.getContainer(this.view.PLAYER_CONTAINER)
      const document = container.ownerDocument
      const dest = document.createElement('div')
      this._styles = utils.addCss(container, css)
      //const src = 'http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/sign-check-icon.png'
      ReactDOM.render(<Container
        yOffset={this.config.yOffset}
        xOffset={this.config.xOffset}
      />, dest)
      container.appendChild(dest.firstChild)
    }
    catch (error) {
      window.console.error(error)
    }
  }

  get api() {
    return {
      destroy: this.destroy.bind(this),
    }
  }
}

export default Extension