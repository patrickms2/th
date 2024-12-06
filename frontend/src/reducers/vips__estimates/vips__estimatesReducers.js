import list from 'reducers/vips__estimates/vips__estimatesListReducers';
import form from 'reducers/vips__estimates/vips__estimatesFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
