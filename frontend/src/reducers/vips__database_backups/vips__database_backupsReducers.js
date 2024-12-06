import list from 'reducers/vips__database_backups/vips__database_backupsListReducers';
import form from 'reducers/vips__database_backups/vips__database_backupsFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
