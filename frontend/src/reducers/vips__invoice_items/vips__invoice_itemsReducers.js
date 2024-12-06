import list from 'reducers/vips__invoice_items/vips__invoice_itemsListReducers';
import form from 'reducers/vips__invoice_items/vips__invoice_itemsFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
