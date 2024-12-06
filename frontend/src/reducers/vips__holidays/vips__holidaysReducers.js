import list from 'reducers/vips__holidays/vips__holidaysListReducers';
import form from 'reducers/vips__holidays/vips__holidaysFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
