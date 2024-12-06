import list from 'reducers/vips__meeting_members/vips__meeting_membersListReducers';
import form from 'reducers/vips__meeting_members/vips__meeting_membersFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
