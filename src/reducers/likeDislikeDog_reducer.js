import { LIKE_DOG, DISLIKE_DOG } from '../actions/rateDog'

export default (state = [], { type, payload }) => {
  switch (type) {
    case LIKE_DOG:
      console.log('Like Dog payload: ', payload)
      return [...state, payload]
    case DISLIKE_DOG:
      console.log('Dislike Dog payload: ', payload)
      return [...state, payload]
    default:
      return [...state]
  }
}
