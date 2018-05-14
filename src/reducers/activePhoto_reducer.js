export default (state = [], { type, payload } = {}) => {
  switch (type) {
  case `ACTIVE_PHOTO`:
    return payload
  default:
    return state
  }
}


/* State shape:

img_001 {
  id: #001
  breed: breed
}

*/
