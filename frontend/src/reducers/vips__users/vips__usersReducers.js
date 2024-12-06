import list from 'reducers/vips__users/vips__usersListReducers';
import form from 'reducers/vips__users/vips__usersFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
