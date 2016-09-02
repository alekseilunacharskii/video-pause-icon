import React from 'react'
import IconView from './icon-view'

class Container extends React.Component {
  render() {
    return (
      <div className="video-pause-icon">
        <div className="container">
          <IconView/>
        </div>
      </div>
    )
  }
}

Container.defaultProps = {
}

export default Container
