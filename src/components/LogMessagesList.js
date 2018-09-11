import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import {
  DataTable,
  TableHeader,
  TableRow,
  TableColumn,
  TableBody,
} from 'react-md';


class LogMessagesList extends Component {
  static propTypes = {
    // from connect
    logMessages: PropTypes.array.isRequired
  }

  render() {
    return (
      <DataTable plain>
      <TableHeader>
        <TableRow>
          <TableColumn>Level</TableColumn>
          <TableColumn>Logger</TableColumn>
          <TableColumn>Message</TableColumn>
        </TableRow>
      </TableHeader>
      <TableBody>
        {this.props.logMessages.map(message => (
          <TableRow key={message.log_file_line}>
            <TableColumn>{message.level}</TableColumn>
            <TableColumn>{message.logger_name}</TableColumn>
            <TableColumn>{message.msg}</TableColumn>
          </TableRow>
        ))}
      </TableBody>
    </DataTable>
    )
  }
}

export default connect(state=>({
  logMessages: state.logMessages
}))(LogMessagesList)