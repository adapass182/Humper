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
    reducers

  linkToImg:
     master
}

*/
