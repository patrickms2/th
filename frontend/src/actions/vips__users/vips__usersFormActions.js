import axios from 'axios';
import Errors from 'components/FormItems/error/errors';
import { push } from 'connected-react-router';
import { doInit } from 'actions/auth';
import { showSnackbar } from '../../components/Snackbar';

const actions = {
  doNew: () => {
    return {
      type: 'VIPS__USERS_FORM_RESET',
    };
  },

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: 'VIPS__USERS_FORM_FIND_STARTED',
      });

      axios.get(`/vips__users/${id}`).then((res) => {
        const record = res.data;

        dispatch({
          type: 'VIPS__USERS_FORM_FIND_SUCCESS',
          payload: record,
        });
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'VIPS__USERS_FORM_FIND_ERROR',
      });

      dispatch(push('/admin/vips__users'));
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: 'VIPS__USERS_FORM_CREATE_STARTED',
      });

      axios.post('/vips__users', { data: values }).then((res) => {
        dispatch({
          type: 'VIPS__USERS_FORM_CREATE_SUCCESS',
        });
        showSnackbar({ type: 'success', message: 'Vips__users created' });
        dispatch(push('/admin/vips__users'));
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'VIPS__USERS_FORM_CREATE_ERROR',
      });
    }
  },

  doUpdate: (id, values, isProfile) => async (dispatch, getState) => {
    try {
      dispatch({
        type: 'VIPS__USERS_FORM_UPDATE_STARTED',
      });

      await axios.put(`/vips__users/${id}`, { id, data: values });

      dispatch(doInit());

      dispatch({
        type: 'VIPS__USERS_FORM_UPDATE_SUCCESS',
      });

      if (isProfile) {
        showSnackbar({ type: 'success', message: 'Profile updated' });
      } else {
        showSnackbar({ type: 'success', message: 'Vips__users updated' });
        dispatch(push('/admin/vips__users'));
      }
    } catch (error) {
      Errors.handle(error);
      showSnackbar({ type: 'error', message: 'Vips__users update error' });
      dispatch({
        type: 'VIPS__USERS_FORM_UPDATE_ERROR',
      });
    }
  },
};

export default actions;
