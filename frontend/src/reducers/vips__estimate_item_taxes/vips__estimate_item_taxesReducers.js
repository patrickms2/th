import list from 'reducers/vips__estimate_item_taxes/vips__estimate_item_taxesListReducers';
import form from 'reducers/vips__estimate_item_taxes/vips__estimate_item_taxesFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
