import list from 'reducers/vips__project_sprints/vips__project_sprintsListReducers';
import form from 'reducers/vips__project_sprints/vips__project_sprintsFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
