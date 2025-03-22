import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import { countReducer } from '../reducers/counter';
import { favoriteReducer } from '../reducers/favoriteReducer';

export interface RootState {
  count: number;
}

const rootReducer = combineReducers({
  count: countReducer,
  favorite: favoriteReducer
});

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
