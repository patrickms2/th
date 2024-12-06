import list from 'reducers/vips__locales/vips__localesListReducers';
import form from 'reducers/vips__locales/vips__localesFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
