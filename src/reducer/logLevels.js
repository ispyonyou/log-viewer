import {CHANGE_SELECTED_LEVELS} from '../constants'

const defaultLogLevels = [
  {
    name: "DEBUG"
  },
  {
    name: "TRACE"
  }
]

export default (logLevels = defaultLogLevels, action) => {
  const {type, payload} = action
  switch (type) {
    default: return logLevels
  }
}
