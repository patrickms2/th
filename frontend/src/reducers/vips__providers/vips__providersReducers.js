import list from 'reducers/vips__providers/vips__providersListReducers';
import form from 'reducers/vips__providers/vips__providersFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
