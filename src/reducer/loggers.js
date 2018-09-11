import defaultLogMessages from '../test/test_fixture_array'

//const defaultLoggers = defaultLogMessages.map( message => {
//  return { name: message.logger_name }
//})

const defaultLoggersMap = defaultLogMessages.reduce((map, message) => {
  map[message.logger_name] = 1
  return map
}, {})

console.log('defaultLoggersMap - ', defaultLoggersMap)

const defaultLoggersNames = Object.keys(defaultLoggersMap)

console.log('defaultLoggersNames - ', defaultLoggersNames)


const defaultLoggers = defaultLoggersNames.map( loggerName => {return {name: loggerName}})

console.log('defaultLoggers - ', defaultLoggers)

export default (loggers = defaultLoggers, action) => {
  const {type} = action
  switch (type) {
    default: return loggers
  }
}
