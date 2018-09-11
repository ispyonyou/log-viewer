import React, {Component} from 'react'

import LevelsList from './LevelsList'
import LoggersList from './LoggersList'

class Filters extends Component {

  render() {
    return (
      <div>
        <LevelsList />
        <LoggersList />
      </div>
    )
  }
}

export default Filters
