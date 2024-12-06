import list from 'reducers/vips__knowledge_base_article/vips__knowledge_base_articleListReducers';
import form from 'reducers/vips__knowledge_base_article/vips__knowledge_base_articleFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
