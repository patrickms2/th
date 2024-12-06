import list from 'reducers/vips__project_sprint_task_members/vips__project_sprint_task_membersListReducers';
import form from 'reducers/vips__project_sprint_task_members/vips__project_sprint_task_membersFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
