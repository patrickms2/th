import list from 'reducers/vips__teams/vips__teamsListReducers';
import form from 'reducers/vips__teams/vips__teamsFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
