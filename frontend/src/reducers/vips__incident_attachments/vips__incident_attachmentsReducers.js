import list from 'reducers/vips__incident_attachments/vips__incident_attachmentsListReducers';
import form from 'reducers/vips__incident_attachments/vips__incident_attachmentsFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
