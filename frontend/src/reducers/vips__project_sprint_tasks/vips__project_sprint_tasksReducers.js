import list from 'reducers/vips__project_sprint_tasks/vips__project_sprint_tasksListReducers';
import form from 'reducers/vips__project_sprint_tasks/vips__project_sprint_tasksFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
