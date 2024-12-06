import list from 'reducers/vips__task_attachments/vips__task_attachmentsListReducers';
import form from 'reducers/vips__task_attachments/vips__task_attachmentsFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
