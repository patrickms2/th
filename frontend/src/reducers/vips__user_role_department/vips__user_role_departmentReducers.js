import list from 'reducers/vips__user_role_department/vips__user_role_departmentListReducers';
import form from 'reducers/vips__user_role_department/vips__user_role_departmentFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
