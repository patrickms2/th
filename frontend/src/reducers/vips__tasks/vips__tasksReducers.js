import list from 'reducers/vips__tasks/vips__tasksListReducers';
import form from 'reducers/vips__tasks/vips__tasksFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
