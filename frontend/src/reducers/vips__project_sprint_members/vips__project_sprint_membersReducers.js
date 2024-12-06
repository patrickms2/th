import list from 'reducers/vips__project_sprint_members/vips__project_sprint_membersListReducers';
import form from 'reducers/vips__project_sprint_members/vips__project_sprint_membersFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
