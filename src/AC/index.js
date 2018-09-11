import {INCREMENT, CHANGE_SELECTED_LEVELS, CHANGE_SELECTED_LOGGERS
} from '../constants';

export function increment() {
  return {
    type: INCREMENT
  }
}

export function changeSelectedLevels(selectedLevels) {
  return {
    type: CHANGE_SELECTED_LEVELS,
    payload: { selectedLevels }
  }
}

export function changeSelectedLoggers(selectedLoggers) {
  return {
    type: CHANGE_SELECTED_LOGGERS,
    payload: { selectedLoggers }
  }
}