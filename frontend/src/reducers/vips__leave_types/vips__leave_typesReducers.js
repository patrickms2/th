import list from 'reducers/vips__leave_types/vips__leave_typesListReducers';
import form from 'reducers/vips__leave_types/vips__leave_typesFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
