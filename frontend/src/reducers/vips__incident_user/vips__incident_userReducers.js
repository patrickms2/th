import list from 'reducers/vips__incident_user/vips__incident_userListReducers';
import form from 'reducers/vips__incident_user/vips__incident_userFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
