import list from 'reducers/vips__knowledge_base_category/vips__knowledge_base_categoryListReducers';
import form from 'reducers/vips__knowledge_base_category/vips__knowledge_base_categoryFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
