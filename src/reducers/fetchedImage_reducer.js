export default (state = [], { type, payload } = {}) => {
  switch (type) {
  case 'FETCHED_IMAGE':
    return payload
  default:
    return state
  }
}
<<<<<<< HEAD:src/reducers/fetchedImage_reducer.js
=======

>>>>>>> 2298f55fd7347ee05aa4f7b997b7687bcd8adc6f:src/reducers/activePhoto_reducer.js
