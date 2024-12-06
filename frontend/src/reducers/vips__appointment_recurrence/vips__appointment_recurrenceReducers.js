import list from 'reducers/vips__appointment_recurrence/vips__appointment_recurrenceListReducers';
import form from 'reducers/vips__appointment_recurrence/vips__appointment_recurrenceFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
