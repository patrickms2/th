import list from 'reducers/vips__invoices/vips__invoicesListReducers';
import form from 'reducers/vips__invoices/vips__invoicesFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
