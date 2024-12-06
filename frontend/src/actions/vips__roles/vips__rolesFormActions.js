import axios from 'axios';
import Errors from 'components/FormItems/error/errors';
import { push } from 'connected-react-router';
import { doInit } from 'actions/auth';
import { showSnackbar } from '../../components/Snackbar';

const actions = {
  doNew: () => {
    return {
      type: 'VIPS__ROLES_FORM_RESET',
    };
  },

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: 'VIPS__ROLES_FORM_FIND_STARTED',
      });

      axios.get(`/vips__roles/${id}`).then((res) => {
        const record = res.data;

        dispatch({
          type: 'VIPS__ROLES_FORM_FIND_SUCCESS',
          payload: record,
        });
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'VIPS__ROLES_FORM_FIND_ERROR',
      });

      dispatch(push('/admin/vips__roles'));
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: 'VIPS__ROLES_FORM_CREATE_STARTED',
      });

      axios.post('/vips__roles', { data: values }).then((res) => {
        dispatch({
          type: 'VIPS__ROLES_FORM_CREATE_SUCCESS',
        });
        showSnackbar({ type: 'success', message: 'Vips__roles created' });
        dispatch(push('/admin/vips__roles'));
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'VIPS__ROLES_FORM_CREATE_ERROR',
      });
    }
  },

  doUpdate: (id, values, isProfile) => async (dispatch, getState) => {
    try {
      dispatch({
        type: 'VIPS__ROLES_FORM_UPDATE_STARTED',
      });

      await axios.put(`/vips__roles/${id}`, { id, data: values });

      dispatch(doInit());

      dispatch({
        type: 'VIPS__ROLES_FORM_UPDATE_SUCCESS',
      });

      if (isProfile) {
        showSnackbar({ type: 'success', message: 'Profile updated' });
      } else {
        showSnackbar({ type: 'success', message: 'Vips__roles updated' });
        dispatch(push('/admin/vips__roles'));
      }
    } catch (error) {
      Errors.handle(error);
      showSnackbar({ type: 'error', message: 'Vips__roles update error' });
      dispatch({
        type: 'VIPS__ROLES_FORM_UPDATE_ERROR',
      });
    }
  },
};

export default actions;
