import list from 'reducers/vips__appointment/vips__appointmentListReducers';
import form from 'reducers/vips__appointment/vips__appointmentFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
