import { resetHaikuForm } from './haikuForm';

const API_URL = process.env.REACT_APP_API_URL;

// ** Action Creators **
const setHaikus = haikus => {
  return {
    type: 'GET_HAIKUS_SUCCESS',
    haikus
  }
}

const addHaiku = haiku => {
  return {
    type: 'CREATE_HAIKU_SUCCESS',
    haiku
  }
}

// ** Async Actions **
export const getHaikus = () => {
  return dispatch => {
    return fetch(`${API_URL}/haikus`)
      .then(response => response.json())
      .then(haikus => dispatch(setHaikus(haikus)))
      .catch(error => console.log(error));
  }
}

export const createHaiku = haiku => {
  return dispatch => {
    return fetch(`${API_URL}/haikus`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ haiku: haiku })
    })
      .then(response => response.json())
      .then(haiku => {
        dispatch(addHaiku(haiku))
        dispatch(resetHaikuForm())
      })
      .catch(error => console.log(error))
  }
}
