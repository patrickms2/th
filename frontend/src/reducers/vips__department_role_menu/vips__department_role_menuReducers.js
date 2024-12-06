import list from 'reducers/vips__department_role_menu/vips__department_role_menuListReducers';
import form from 'reducers/vips__department_role_menu/vips__department_role_menuFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
