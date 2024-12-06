import list from 'reducers/vips__project_attachments/vips__project_attachmentsListReducers';
import form from 'reducers/vips__project_attachments/vips__project_attachmentsFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
