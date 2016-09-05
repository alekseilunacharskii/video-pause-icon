import React from 'react'

class IconView extends React.Component {
  render() {
    const styles = {
      bottom: this.props.yOffset,
      right: this.props.xOffset,
    }
    return (
      <div className="notice" style={styles}>
      Here be dragons!</div>
    )
  }
}

IconView.defaultProps = {
  xOffset: '0px',
  yOffset: '0px',
}

export default IconView
