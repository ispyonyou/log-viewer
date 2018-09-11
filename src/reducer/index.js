import {combineReducers} from 'redux'
import logMessages from './logMessages'
import logLevels from './logLevels'
import loggers from './loggers'
import filters from './filters'

export default combineReducers({
  logMessages, logLevels, loggers, filters
})