import list from 'reducers/vips__taxes/vips__taxesListReducers';
import form from 'reducers/vips__taxes/vips__taxesFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
