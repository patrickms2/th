import list from 'reducers/vips__defect_comments/vips__defect_commentsListReducers';
import form from 'reducers/vips__defect_comments/vips__defect_commentsFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
