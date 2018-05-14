export default (state = 0, { type, payload }) => {
  switch (type) {
  case 'LIKE_DOG':
  //NOTE: Payload needs to add new key:value to store if no record of this breed exists for this user.
  //      If breed already exists, needs to increment rating value.
    return {
      ...state,

    }
  case 'DISLIKE_DOG':
  //NOTE: Payload needs to add new key:value to store if no record of this breed exists for this user.
  //      If breed already exists, needs to decrement rating value.
    return state.concat(payload)
  default:
    return state
  }
}

/*
Mockup:

    (state, { type, payload }) => {
  switch (type) {
    case 'LIKE_PHOTO':
      return {
        ...state,
        state.usersMockup.userID.breeds: state.usersMockup.userID.map((breed, i) => i === 1 ? {...breed, payload: action.payload) : breed)}
      }
    case 'DISLIKE_PHOTO':
      return {
      ...state,
      state.usersMockup.userID.breeds: state.usersMockup.map((breed, i) => i === 1 ? {...breed, payload: action.payload) : breed)}
    }
    default:
      return state
  }
}


initial state view mockup:

usersMockup  {
  user01: {
    name: user01Name,
    breeds: {
      doggo1: 0
      doggo2: 0
      doggo3: 0
      doggo4: 0
      doggo5: 0
    }
  }
  user02: {
    name: user02Name,
    breeds: {
      doggo1: 0
      doggo2: 0
      doggo3: 0
      doggo4: 0
      doggo5: 0
    }
  }
  user03: {
    name: user03Name,
    breeds: {
      doggo1: 0
      doggo2: 0
      doggo3: 0
      doggo4: 0
      doggo5: 0
    }
  }
}

*/
