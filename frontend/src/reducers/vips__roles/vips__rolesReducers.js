import list from 'reducers/vips__roles/vips__rolesListReducers';
import form from 'reducers/vips__roles/vips__rolesFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
