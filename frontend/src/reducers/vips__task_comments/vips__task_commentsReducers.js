import list from 'reducers/vips__task_comments/vips__task_commentsListReducers';
import form from 'reducers/vips__task_comments/vips__task_commentsFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
