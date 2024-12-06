import list from 'reducers/vips__email_inbox/vips__email_inboxListReducers';
import form from 'reducers/vips__email_inbox/vips__email_inboxFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
