import list from 'reducers/vips__estimate_items/vips__estimate_itemsListReducers';
import form from 'reducers/vips__estimate_items/vips__estimate_itemsFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
