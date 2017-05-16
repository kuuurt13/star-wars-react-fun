import { getDetails } from '../services/starwars';

export const getCharacterDetails = (id) => {
  return (dispatch) => {
    dispatch({ type: "GET_DETAILS_LOADING" });

    getDetails(id)
      .then(res => dispatch({ type: "GET_DETAILS_SUCCESS", payload: res }))
      .catch(err => dispatch({ type: "GET_DETAILS_ERROR", payload: err }));
  }
}

export const clearCharacterDetails = (id) => {
  return (dispatch) => {
    dispatch({ type: "CLEAR_DETAILS" });
  }
}
