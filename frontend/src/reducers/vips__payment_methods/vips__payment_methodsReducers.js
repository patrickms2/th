import list from 'reducers/vips__payment_methods/vips__payment_methodsListReducers';
import form from 'reducers/vips__payment_methods/vips__payment_methodsFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
