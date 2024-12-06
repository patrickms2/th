import list from 'reducers/vips__payment_gateway_settings/vips__payment_gateway_settingsListReducers';
import form from 'reducers/vips__payment_gateway_settings/vips__payment_gateway_settingsFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
