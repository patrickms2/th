import list from 'reducers/vips__items/vips__itemsListReducers';
import form from 'reducers/vips__items/vips__itemsFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
