import React from 'react'
import IconView from './IconView'

class Container extends React.Component {
  render() {
    return (
      <div className="video-pause-icon">
        <div className="container">
          <IconView config={this.props.config}/>
        </div>
      </div>
    )
  }
}

Container.defaultProps = {
}

export default Container
