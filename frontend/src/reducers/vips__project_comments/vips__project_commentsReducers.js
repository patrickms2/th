import list from 'reducers/vips__project_comments/vips__project_commentsListReducers';
import form from 'reducers/vips__project_comments/vips__project_commentsFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
