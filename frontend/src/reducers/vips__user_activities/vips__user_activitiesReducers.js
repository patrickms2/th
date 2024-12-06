import list from 'reducers/vips__user_activities/vips__user_activitiesListReducers';
import form from 'reducers/vips__user_activities/vips__user_activitiesFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
