import React, {Component} from 'react'
import {connect} from 'react-redux'
import {PropTypes} from 'prop-types'
import {changeSelectedLoggers} from '../../AC'

import {
  List,
  ListItemControl,
  Checkbox,
} from 'react-md'

class LoggersList extends Component {

  static propTypes = {
    // from connect
    loggers: PropTypes.array.isRequired,
    selectedLoggers: PropTypes.array.isRequired,
  }

  render() {
//    console.log(this.props.loggers)

    this.props.loggers.forEach(logger => {
      var a = this.props.selectedLoggers.indexOf(logger.name)
      console.log('---', logger.name, a )
    } )

    return (
      <List style = {{ maxWidth: 150 }} className="md-cell md-cell--6 md-paper md-paper--1">
        {this.props.loggers.map(logger => {
          return this.getLevelBody(logger)
        })}
    </List>
    )
  }

  getLevelBody = (logger) => {
    var isChecked = this.props.selectedLoggers.indexOf(logger.name) !== -1

    return (
      <ListItemControl
        key={logger.name}
        primaryAction={
          <Checkbox
            id={"list-control-chat-" + logger.name}
            name="list-control-primary"
            label={logger.name}
            checked={isChecked}
            onChange={(checked) => this.handleChange(checked, logger.name)}
          />}
      />
    )
  }

  handleChange = (checked, loggerName) => {
    var newSelectedLoggers = this.props.selectedLoggers.slice()

    if(checked)
      newSelectedLoggers.push(loggerName)
    else
      newSelectedLoggers = this.props.selectedLoggers.filter(selLevel => {
        return selLevel !== loggerName
      })

    this.props.changeSelectedLoggers(newSelectedLoggers)
  }
}

export default connect( state => ({
  loggers: state.loggers,
  selectedLoggers: state.filters.selectedLoggers
}), { changeSelectedLoggers })(LoggersList)
