import list from 'reducers/vips__timesheets/vips__timesheetsListReducers';
import form from 'reducers/vips__timesheets/vips__timesheetsFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
