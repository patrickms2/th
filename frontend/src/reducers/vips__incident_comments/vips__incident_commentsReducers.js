import list from 'reducers/vips__incident_comments/vips__incident_commentsListReducers';
import form from 'reducers/vips__incident_comments/vips__incident_commentsFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
