import list from 'reducers/vips__invoice_settings/vips__invoice_settingsListReducers';
import form from 'reducers/vips__invoice_settings/vips__invoice_settingsFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
