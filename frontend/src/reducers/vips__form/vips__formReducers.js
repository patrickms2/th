import list from 'reducers/vips__form/vips__formListReducers';
import form from 'reducers/vips__form/vips__formFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
