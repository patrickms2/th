import axios from 'axios';
import Errors from 'components/FormItems/error/errors';
import { push } from 'connected-react-router';
import { doInit } from 'actions/auth';
import { showSnackbar } from '../../components/Snackbar';

const actions = {
  doNew: () => {
    return {
      type: 'VIPS__SLACK_INTEGRATION_FORM_RESET',
    };
  },

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: 'VIPS__SLACK_INTEGRATION_FORM_FIND_STARTED',
      });

      axios.get(`/vips__slack_integration/${id}`).then((res) => {
        const record = res.data;

        dispatch({
          type: 'VIPS__SLACK_INTEGRATION_FORM_FIND_SUCCESS',
          payload: record,
        });
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'VIPS__SLACK_INTEGRATION_FORM_FIND_ERROR',
      });

      dispatch(push('/admin/vips__slack_integration'));
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: 'VIPS__SLACK_INTEGRATION_FORM_CREATE_STARTED',
      });

      axios.post('/vips__slack_integration', { data: values }).then((res) => {
        dispatch({
          type: 'VIPS__SLACK_INTEGRATION_FORM_CREATE_SUCCESS',
        });
        showSnackbar({
          type: 'success',
          message: 'Vips__slack_integration created',
        });
        dispatch(push('/admin/vips__slack_integration'));
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'VIPS__SLACK_INTEGRATION_FORM_CREATE_ERROR',
      });
    }
  },

  doUpdate: (id, values, isProfile) => async (dispatch, getState) => {
    try {
      dispatch({
        type: 'VIPS__SLACK_INTEGRATION_FORM_UPDATE_STARTED',
      });

      await axios.put(`/vips__slack_integration/${id}`, { id, data: values });

      dispatch(doInit());

      dispatch({
        type: 'VIPS__SLACK_INTEGRATION_FORM_UPDATE_SUCCESS',
      });

      if (isProfile) {
        showSnackbar({ type: 'success', message: 'Profile updated' });
      } else {
        showSnackbar({
          type: 'success',
          message: 'Vips__slack_integration updated',
        });
        dispatch(push('/admin/vips__slack_integration'));
      }
    } catch (error) {
      Errors.handle(error);
      showSnackbar({
        type: 'error',
        message: 'Vips__slack_integration update error',
      });
      dispatch({
        type: 'VIPS__SLACK_INTEGRATION_FORM_UPDATE_ERROR',
      });
    }
  },
};

export default actions;
