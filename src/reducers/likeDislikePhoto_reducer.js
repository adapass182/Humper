export default (state = 0, { type, payload }) => {
  switch (type) {
  case 'LIKE_PHOTO':
  //NOTE: Payload needs to add new key:value to store if no record of this breed exists for this user.
  //      If breed already exists, needs to increment rating value.
    return {
      ...state,

    }
  case 'DISLIKE_PHOTO':
  //NOTE: Payload needs to add new key:value to store if no record of this breed exists for this user.
  //      If breed already exists, needs to decrement rating value.
    return state.concat(payload)
  default:
    return state
  }
}


