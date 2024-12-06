import list from 'reducers/vips__estimate_settings/vips__estimate_settingsListReducers';
import form from 'reducers/vips__estimate_settings/vips__estimate_settingsFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
