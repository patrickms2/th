import list from 'reducers/vips__modules/vips__modulesListReducers';
import form from 'reducers/vips__modules/vips__modulesFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
