import list from 'reducers/vips__teams_members/vips__teams_membersListReducers';
import form from 'reducers/vips__teams_members/vips__teams_membersFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
