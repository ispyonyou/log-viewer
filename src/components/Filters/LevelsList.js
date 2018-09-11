import React, {Component} from 'react'
import {connect} from 'react-redux'
import {PropTypes} from 'prop-types'
import {changeSelectedLevels} from '../../AC'

import {
  List,
  ListItemControl,
  Checkbox,
} from 'react-md'

import './LevelsList.css'

class LevelsList extends Component {

  static propTypes = {
    // from connect
    logLevels: PropTypes.array.isRequired,
    selectedLevels: PropTypes.array.isRequired,
  }

  render() {
    console.log(this.props.logLevels)

    this.props.logLevels.forEach(level => {
      var a = this.props.selectedLevels.indexOf(level.name)
      console.log('---', level.name, a )
    } )

    return (
      <List style = {{ maxWidth: 150 }} className="md-cell md-cell--6 md-paper md-paper--1">
        {this.props.logLevels.map(level => {
          return this.getLevelBody(level)
        })}
    </List>
    )
  }

  getLevelBody = (level) => {
    var isChecked = this.props.selectedLevels.indexOf(level.name) !== -1

    return (
      <ListItemControl
        key={level.name}
        primaryAction={
          <Checkbox
            id={"list-control-chat-" + level.name}
            name="list-control-primary"
            label={level.name}
            checked={isChecked}
            onChange={(checked) => this.handleChange(checked, level.name)}
          />}
      />
    )
  }

  handleChange = (checked, levelName) => {
    var newSelectedLevels = this.props.selectedLevels.slice()

    if(checked)
      newSelectedLevels.push(levelName)
    else
      newSelectedLevels = this.props.selectedLevels.filter(selLevel => {
        return selLevel !== levelName
      })

    this.props.changeSelectedLevels(newSelectedLevels)
  }
}

export default connect( state => ({
  logLevels: state.logLevels,
  selectedLevels: state.filters.selectedLevels
}), { changeSelectedLevels })(LevelsList)
