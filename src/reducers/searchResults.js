const defaultState = {
  results: [],
  loading: false,
  error: null
}

export default function searchResults(state = defaultState, action) {
  switch (action.type) {

    case 'SEARCHING': {
      return { ...state, loading: true };
    }

    case 'SEARCH_SUCCESS': {
      return { ...state, loading: false, results: action.payload.reverse() };
    }

    case 'SEARCH_ERROR': {
      return { ...state, loading: false, error: action.payload.reverse() };
    }

    default:
      return state;
  }
}
