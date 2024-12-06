import list from 'reducers/vips__projects/vips__projectsListReducers';
import form from 'reducers/vips__projects/vips__projectsFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
