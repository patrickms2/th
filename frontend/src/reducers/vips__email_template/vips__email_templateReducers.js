import list from 'reducers/vips__email_template/vips__email_templateListReducers';
import form from 'reducers/vips__email_template/vips__email_templateFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
