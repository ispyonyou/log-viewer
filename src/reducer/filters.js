import {CHANGE_SELECTED_LEVELS, CHANGE_SELECTED_LOGGERS} from '../constants'

const defaultFilters = {
  selectedLevels: [],
  selectedLoggers: []
}

export default (filters = defaultFilters, action) => {
  const {type, payload} = action

  switch (type) {
    case CHANGE_SELECTED_LEVELS:
      return {...filters, selectedLevels: payload.selectedLevels}
    case CHANGE_SELECTED_LOGGERS:
      console.log( 'newselLoggers', payload.selectedLoggers)
      return {...filters, selectedLoggers: payload.selectedLoggers}
    default:
      return filters
  }
}
