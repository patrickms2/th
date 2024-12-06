import list from 'reducers/vips__clients/vips__clientsListReducers';
import form from 'reducers/vips__clients/vips__clientsFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
