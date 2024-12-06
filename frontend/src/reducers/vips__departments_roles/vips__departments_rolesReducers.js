import list from 'reducers/vips__departments_roles/vips__departments_rolesListReducers';
import form from 'reducers/vips__departments_roles/vips__departments_rolesFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
