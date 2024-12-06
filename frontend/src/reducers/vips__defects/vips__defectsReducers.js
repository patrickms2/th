import list from 'reducers/vips__defects/vips__defectsListReducers';
import form from 'reducers/vips__defects/vips__defectsFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
