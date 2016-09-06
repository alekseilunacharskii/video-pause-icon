import React from 'react'
const vidible = global.vidible

class IconView extends React.Component {

  constructor() {
    super()
    this.state = {
      visible: false,
    }
  }

  componentDidMount() {
    const context = this.props.context
    const config = context.config
    const player = context.player

    player.addEventListener(vidible.VIDEO_PLAY,
      () => this.setState({ visible: false }))
    player.addEventListener(vidible.VIDEO_PAUSE, (e) => {
      if (config.showOnAd || !e.data.isAd) {
        this.setState({visible: true})
      }
    })
  }

  render() {
    const context = this.props.context
    const config = context.config

    const styles = {
      bottom: config.yOffset,
      right: config.xOffset,
      width: config.width,
      height: config.width,
      display: this.state.visible ? 'block' : 'none',
    }
    return (
      <a href={config.href} target="blank">
        <img className="image" src={config.src} style={styles}/>
      </a>
    )
  }
}

export default IconView
