import list from 'reducers/vips__files/vips__filesListReducers';
import form from 'reducers/vips__files/vips__filesFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
