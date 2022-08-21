import { combineReducers } from 'redux';
import loader from '../features/loading/loaderSlice';

const rootReducer = combineReducers({
  loader,
});
export default rootReducer;
