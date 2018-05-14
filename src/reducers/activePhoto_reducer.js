export default (state = [], { type, payload } = {}) => {
  switch (type) {
  case `ACTIVE_PHOTO`:
    return payload
  default:
    return state
  }
}
