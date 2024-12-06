import list from 'reducers/vips__slack_integration/vips__slack_integrationListReducers';
import form from 'reducers/vips__slack_integration/vips__slack_integrationFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
