import list from 'reducers/vips__announcements/vips__announcementsListReducers';
import form from 'reducers/vips__announcements/vips__announcementsFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
