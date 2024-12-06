import axios from 'axios';
import Errors from 'components/FormItems/error/errors';
import { push } from 'connected-react-router';
import { doInit } from 'actions/auth';
import { showSnackbar } from '../../components/Snackbar';

const actions = {
  doNew: () => {
    return {
      type: 'VIPS__TODOS_FORM_RESET',
    };
  },

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: 'VIPS__TODOS_FORM_FIND_STARTED',
      });

      axios.get(`/vips__todos/${id}`).then((res) => {
        const record = res.data;

        dispatch({
          type: 'VIPS__TODOS_FORM_FIND_SUCCESS',
          payload: record,
        });
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'VIPS__TODOS_FORM_FIND_ERROR',
      });

      dispatch(push('/admin/vips__todos'));
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: 'VIPS__TODOS_FORM_CREATE_STARTED',
      });

      axios.post('/vips__todos', { data: values }).then((res) => {
        dispatch({
          type: 'VIPS__TODOS_FORM_CREATE_SUCCESS',
        });
        showSnackbar({ type: 'success', message: 'Vips__todos created' });
        dispatch(push('/admin/vips__todos'));
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'VIPS__TODOS_FORM_CREATE_ERROR',
      });
    }
  },

  doUpdate: (id, values, isProfile) => async (dispatch, getState) => {
    try {
      dispatch({
        type: 'VIPS__TODOS_FORM_UPDATE_STARTED',
      });

      await axios.put(`/vips__todos/${id}`, { id, data: values });

      dispatch(doInit());

      dispatch({
        type: 'VIPS__TODOS_FORM_UPDATE_SUCCESS',
      });

      if (isProfile) {
        showSnackbar({ type: 'success', message: 'Profile updated' });
      } else {
        showSnackbar({ type: 'success', message: 'Vips__todos updated' });
        dispatch(push('/admin/vips__todos'));
      }
    } catch (error) {
      Errors.handle(error);
      showSnackbar({ type: 'error', message: 'Vips__todos update error' });
      dispatch({
        type: 'VIPS__TODOS_FORM_UPDATE_ERROR',
      });
    }
  },
};

export default actions;
