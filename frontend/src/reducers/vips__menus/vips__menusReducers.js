import list from 'reducers/vips__menus/vips__menusListReducers';
import form from 'reducers/vips__menus/vips__menusFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
