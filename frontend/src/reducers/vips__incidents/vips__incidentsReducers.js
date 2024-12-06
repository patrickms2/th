import list from 'reducers/vips__incidents/vips__incidentsListReducers';
import form from 'reducers/vips__incidents/vips__incidentsFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
