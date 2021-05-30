const convertTime = (ts) => new Date(ts * 1000).toTimeString().substring(0, 5)

export default convertTime
