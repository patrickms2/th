import list from 'reducers/vips__email_inbox_attachment/vips__email_inbox_attachmentListReducers';
import form from 'reducers/vips__email_inbox_attachment/vips__email_inbox_attachmentFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
