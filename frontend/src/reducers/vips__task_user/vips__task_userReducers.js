import list from 'reducers/vips__task_user/vips__task_userListReducers';
import form from 'reducers/vips__task_user/vips__task_userFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
