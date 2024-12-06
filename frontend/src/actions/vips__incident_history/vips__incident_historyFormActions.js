import axios from 'axios';
import Errors from 'components/FormItems/error/errors';
import { push } from 'connected-react-router';
import { doInit } from 'actions/auth';
import { showSnackbar } from '../../components/Snackbar';

const actions = {
  doNew: () => {
    return {
      type: 'VIPS__INCIDENT_HISTORY_FORM_RESET',
    };
  },

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: 'VIPS__INCIDENT_HISTORY_FORM_FIND_STARTED',
      });

      axios.get(`/vips__incident_history/${id}`).then((res) => {
        const record = res.data;

        dispatch({
          type: 'VIPS__INCIDENT_HISTORY_FORM_FIND_SUCCESS',
          payload: record,
        });
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'VIPS__INCIDENT_HISTORY_FORM_FIND_ERROR',
      });

      dispatch(push('/admin/vips__incident_history'));
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: 'VIPS__INCIDENT_HISTORY_FORM_CREATE_STARTED',
      });

      axios.post('/vips__incident_history', { data: values }).then((res) => {
        dispatch({
          type: 'VIPS__INCIDENT_HISTORY_FORM_CREATE_SUCCESS',
        });
        showSnackbar({
          type: 'success',
          message: 'Vips__incident_history created',
        });
        dispatch(push('/admin/vips__incident_history'));
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'VIPS__INCIDENT_HISTORY_FORM_CREATE_ERROR',
      });
    }
  },

  doUpdate: (id, values, isProfile) => async (dispatch, getState) => {
    try {
      dispatch({
        type: 'VIPS__INCIDENT_HISTORY_FORM_UPDATE_STARTED',
      });

      await axios.put(`/vips__incident_history/${id}`, { id, data: values });

      dispatch(doInit());

      dispatch({
        type: 'VIPS__INCIDENT_HISTORY_FORM_UPDATE_SUCCESS',
      });

      if (isProfile) {
        showSnackbar({ type: 'success', message: 'Profile updated' });
      } else {
        showSnackbar({
          type: 'success',
          message: 'Vips__incident_history updated',
        });
        dispatch(push('/admin/vips__incident_history'));
      }
    } catch (error) {
      Errors.handle(error);
      showSnackbar({
        type: 'error',
        message: 'Vips__incident_history update error',
      });
      dispatch({
        type: 'VIPS__INCIDENT_HISTORY_FORM_UPDATE_ERROR',
      });
    }
  },
};

export default actions;