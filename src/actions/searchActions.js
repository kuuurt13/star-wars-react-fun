import { search } from '../services/starwars';

export const searchCharacters = (term) => {
  return (dispatch) => {
    if (!term) {
      return dispatch({ type: "SEARCH_SUCCESS", payload: [] })
    }

    dispatch({ type: "SEARCHING" });

    search(term)
      .then(res => dispatch({ type: "SEARCH_SUCCESS", payload: res.results }))
      .catch(err => dispatch({ type: "SEARCH_ERROR", payload: err }));
  }
}
