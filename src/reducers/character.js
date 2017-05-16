export const character = (state = null, action) => {
  switch (action.type) {

    case 'GET_DETAILS_SUCCESS': {
      return Object.assign({}, action.payload);
    }

    case 'CLEAR_DETAILS':
    case 'GET_DETAILS_ERROR': {
      return null;
    }

    default:
      return state;
  }
};
