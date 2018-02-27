// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

const rootReducer = combineReducers({
  router,
});

export type InitialStateType = {
  
}

export default rootReducer;
