import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import debug from 'debug';

import * as actions from '../actions';

const log = debug('pivot:reducers/index'); // eslint-disable-line

function savings(state = {}, action) {
  switch (action.type) {
    case actions.FETCH_SAVINGS_ACCOUNTS:
      return {
        ...state,
        accounts: action.data,
        status: action.status
      };
    default:
      return state;
  }
}

export default combineReducers({
  savings,
  routing
});
