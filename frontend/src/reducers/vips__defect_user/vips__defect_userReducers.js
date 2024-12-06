import list from 'reducers/vips__defect_user/vips__defect_userListReducers';
import form from 'reducers/vips__defect_user/vips__defect_userFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
