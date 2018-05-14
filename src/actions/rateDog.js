import * as request from 'superagent'

const dogApiUrl = 'https://dog.ceo/api/breeds/image/random'

export const FETCHED_IMAGE = 'FETCHED_IMAGE'
export const LIKE_DOG = 'LIKE_DOG'
export const DISLIKE_DOG = 'DISLIKE_DOG'

export const getDog = () => (dispatch) => {
  console.log('getDog called')
  request 
    .get(`${dogApiUrl}`)
    .then(response => dispatch({
      type: 'FETCHED_IMAGE',
      payload: {
        img: response.body.message
      }
    }))
    .catch(err => alert(err))
}

export const rateDog = (opinion) => dispatch => {
  const { breed, type } = opinion

  //request
    //.get(`${dogApiUrl}`)
    //.then(response => dispatch(
      //switch (type) {
        //case 'like' :
          //{
            //type: LIKE_DOG,
            //payload: {
              //breed: breed
            //}
          //}
        //case 'dislike':
          //{
            //type: DISLIKE_DOG,
            //payload: {
              //breed: breed
            //}
          //}

      //}
    //)).catch(err => alert(err))
  
}

