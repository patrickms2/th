import list from 'reducers/vips__departments/vips__departmentsListReducers';
import form from 'reducers/vips__departments/vips__departmentsFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
