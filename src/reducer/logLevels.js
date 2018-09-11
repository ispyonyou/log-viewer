const defaultLogLevels = [
  {
    name: "DEBUG"
  },
  {
    name: "TRACE"
  }
]

export default (logLevels = defaultLogLevels, action) => {
  const {type} = action
  switch (type) {
    default: return logLevels
  }
}
