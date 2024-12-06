import axios from 'axios';
import Errors from 'components/FormItems/error/errors';
import { push } from 'connected-react-router';
import { doInit } from 'actions/auth';
import { showSnackbar } from '../../components/Snackbar';

const actions = {
  doNew: () => {
    return {
      type: 'VIPS__TEAMS_FORM_RESET',
    };
  },

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: 'VIPS__TEAMS_FORM_FIND_STARTED',
      });

      axios.get(`/vips__teams/${id}`).then((res) => {
        const record = res.data;

        dispatch({
          type: 'VIPS__TEAMS_FORM_FIND_SUCCESS',
          payload: record,
        });
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'VIPS__TEAMS_FORM_FIND_ERROR',
      });

      dispatch(push('/admin/vips__teams'));
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: 'VIPS__TEAMS_FORM_CREATE_STARTED',
      });

      axios.post('/vips__teams', { data: values }).then((res) => {
        dispatch({
          type: 'VIPS__TEAMS_FORM_CREATE_SUCCESS',
        });
        showSnackbar({ type: 'success', message: 'Vips__teams created' });
        dispatch(push('/admin/vips__teams'));
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'VIPS__TEAMS_FORM_CREATE_ERROR',
      });
    }
  },

  doUpdate: (id, values, isProfile) => async (dispatch, getState) => {
    try {
      dispatch({
        type: 'VIPS__TEAMS_FORM_UPDATE_STARTED',
      });

      await axios.put(`/vips__teams/${id}`, { id, data: values });

      dispatch(doInit());

      dispatch({
        type: 'VIPS__TEAMS_FORM_UPDATE_SUCCESS',
      });

      if (isProfile) {
        showSnackbar({ type: 'success', message: 'Profile updated' });
      } else {
        showSnackbar({ type: 'success', message: 'Vips__teams updated' });
        dispatch(push('/admin/vips__teams'));
      }
    } catch (error) {
      Errors.handle(error);
      showSnackbar({ type: 'error', message: 'Vips__teams update error' });
      dispatch({
        type: 'VIPS__TEAMS_FORM_UPDATE_ERROR',
      });
    }
  },
};

export default actions;
