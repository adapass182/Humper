import { getDog, rateDog } from './rateDog' 

describe('rateDog action creator', () => {

  it('should return a FETCHED_IMAGE action on fetching an image from dog API', () => {
    expect(getDog()).toContain('asd')    
  })

})
