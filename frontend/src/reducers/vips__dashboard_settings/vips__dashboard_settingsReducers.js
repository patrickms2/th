import list from 'reducers/vips__dashboard_settings/vips__dashboard_settingsListReducers';
import form from 'reducers/vips__dashboard_settings/vips__dashboard_settingsFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
