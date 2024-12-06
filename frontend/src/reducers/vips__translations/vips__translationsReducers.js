import list from 'reducers/vips__translations/vips__translationsListReducers';
import form from 'reducers/vips__translations/vips__translationsFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
