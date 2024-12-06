import list from 'reducers/vips__languages/vips__languagesListReducers';
import form from 'reducers/vips__languages/vips__languagesFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
