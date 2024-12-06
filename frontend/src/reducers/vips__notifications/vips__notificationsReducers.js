import list from 'reducers/vips__notifications/vips__notificationsListReducers';
import form from 'reducers/vips__notifications/vips__notificationsFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
