import list from 'reducers/vips__email_template_groups/vips__email_template_groupsListReducers';
import form from 'reducers/vips__email_template_groups/vips__email_template_groupsFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
