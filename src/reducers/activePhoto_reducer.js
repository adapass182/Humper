export default (state = [], { type, payload } = {}) => {
  switch (type) {
  case `FETCHED_IMAGE`:
    return payload
  default:
    return state
  }
}


/* State shape:

img_001 {
  id: #001
  breed: breed
  linkToImg:
}
<<<<<<< HEAD
=======

>>>>>>> d2c74f70f948cf5c3d6bf0e0d91d145050724464
*/
