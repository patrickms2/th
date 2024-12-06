import list from 'reducers/vips__defect_attachments/vips__defect_attachmentsListReducers';
import form from 'reducers/vips__defect_attachments/vips__defect_attachmentsFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
