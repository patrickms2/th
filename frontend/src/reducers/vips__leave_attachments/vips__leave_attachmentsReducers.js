import list from 'reducers/vips__leave_attachments/vips__leave_attachmentsListReducers';
import form from 'reducers/vips__leave_attachments/vips__leave_attachmentsFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
