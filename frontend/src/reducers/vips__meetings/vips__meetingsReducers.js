import list from 'reducers/vips__meetings/vips__meetingsListReducers';
import form from 'reducers/vips__meetings/vips__meetingsFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
