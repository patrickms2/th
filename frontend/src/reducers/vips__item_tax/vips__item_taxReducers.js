import list from 'reducers/vips__item_tax/vips__item_taxListReducers';
import form from 'reducers/vips__item_tax/vips__item_taxFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
