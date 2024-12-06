import list from 'reducers/vips__project_user/vips__project_userListReducers';
import form from 'reducers/vips__project_user/vips__project_userFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
