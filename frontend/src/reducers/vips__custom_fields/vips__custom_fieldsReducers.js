import list from 'reducers/vips__custom_fields/vips__custom_fieldsListReducers';
import form from 'reducers/vips__custom_fields/vips__custom_fieldsFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
