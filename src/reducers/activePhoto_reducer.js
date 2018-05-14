export default (state = [], { type, payload } = {}) => {
  switch (type) {
  case `DISPLAY_ACTIVE_PHOTO`:
    return payload
  default:
    return state
  }
}
