import { createStore, applyMiddleware } from 'redux';

import logger from 'redux-logger';
import thunk from 'redux-thunk';

import searchCharacters from './reducers/searchResults';

export default createStore(
  searchCharacters,
  applyMiddleware(thunk, logger)
);
