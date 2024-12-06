import list from 'reducers/vips__payments/vips__paymentsListReducers';
import form from 'reducers/vips__payments/vips__paymentsFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
