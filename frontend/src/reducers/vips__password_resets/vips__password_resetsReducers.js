import list from 'reducers/vips__password_resets/vips__password_resetsListReducers';
import form from 'reducers/vips__password_resets/vips__password_resetsFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
