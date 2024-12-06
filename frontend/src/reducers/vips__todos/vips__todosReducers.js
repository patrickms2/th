import list from 'reducers/vips__todos/vips__todosListReducers';
import form from 'reducers/vips__todos/vips__todosFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
