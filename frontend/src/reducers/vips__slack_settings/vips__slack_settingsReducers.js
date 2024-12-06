import list from 'reducers/vips__slack_settings/vips__slack_settingsListReducers';
import form from 'reducers/vips__slack_settings/vips__slack_settingsFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
