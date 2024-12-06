import list from 'reducers/vips__folders/vips__foldersListReducers';
import form from 'reducers/vips__folders/vips__foldersFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
