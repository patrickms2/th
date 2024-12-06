import list from 'reducers/vips__currency/vips__currencyListReducers';
import form from 'reducers/vips__currency/vips__currencyFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
