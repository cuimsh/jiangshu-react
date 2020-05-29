import { combineReducers } from 'redux-immutable';
import { reducer as header } from '../components/header/store';

const reducer =  combineReducers({
  header
});

export default reducer;
