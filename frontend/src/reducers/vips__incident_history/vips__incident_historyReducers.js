import list from 'reducers/vips__incident_history/vips__incident_historyListReducers';
import form from 'reducers/vips__incident_history/vips__incident_historyFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
