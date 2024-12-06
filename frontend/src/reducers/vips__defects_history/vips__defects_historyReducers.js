import list from 'reducers/vips__defects_history/vips__defects_historyListReducers';
import form from 'reducers/vips__defects_history/vips__defects_historyFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
