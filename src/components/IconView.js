import React from 'react'

class IconView extends React.Component {
  render() {
    const config = this.props.config
    const styles = {
      bottom: config.yOffset,
      right: config.xOffset,
      width: config.width,
      height: config.width,
    }
    return (
      <img className="image" src={config.src} style={styles}/>
    )
  }
}

export default IconView
