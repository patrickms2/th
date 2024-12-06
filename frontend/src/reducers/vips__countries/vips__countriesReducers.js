import list from 'reducers/vips__countries/vips__countriesListReducers';
import form from 'reducers/vips__countries/vips__countriesFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
