import {CHANGE_SELECTED_LEVELS, CHANGE_SELECTED_LOGGERS} from '../constants'

import defaultLogMessages from '../test/test_fixture_array'

export default (logMessages = defaultLogMessages, action) => {
  const {type, payload} = action
  switch (type) {

    case CHANGE_SELECTED_LEVELS:
      console.log( 'CHANGE_SELECTED_LEVELS', payload.selectedLevels)
      return defaultLogMessages.filter(message => {
        return payload.selectedLevels.indexOf(message.level) !== -1
      })

    case CHANGE_SELECTED_LOGGERS:
      return defaultLogMessages.filter(message => {
        return payload.selectedLoggers.indexOf(message.logger_name) !== -1
      })

    default: return logMessages
  }
}
