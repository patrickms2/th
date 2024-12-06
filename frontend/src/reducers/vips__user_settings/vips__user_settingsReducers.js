import list from 'reducers/vips__user_settings/vips__user_settingsListReducers';
import form from 'reducers/vips__user_settings/vips__user_settingsFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
