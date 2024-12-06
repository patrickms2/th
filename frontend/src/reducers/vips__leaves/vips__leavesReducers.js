import list from 'reducers/vips__leaves/vips__leavesListReducers';
import form from 'reducers/vips__leaves/vips__leavesFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
