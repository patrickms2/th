import list from 'reducers/vips__timer_logs/vips__timer_logsListReducers';
import form from 'reducers/vips__timer_logs/vips__timer_logsFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
