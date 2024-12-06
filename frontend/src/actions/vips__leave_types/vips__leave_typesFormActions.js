import axios from 'axios';
import Errors from 'components/FormItems/error/errors';
import { push } from 'connected-react-router';
import { doInit } from 'actions/auth';
import { showSnackbar } from '../../components/Snackbar';

const actions = {
  doNew: () => {
    return {
      type: 'VIPS__LEAVE_TYPES_FORM_RESET',
    };
  },

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: 'VIPS__LEAVE_TYPES_FORM_FIND_STARTED',
      });

      axios.get(`/vips__leave_types/${id}`).then((res) => {
        const record = res.data;

        dispatch({
          type: 'VIPS__LEAVE_TYPES_FORM_FIND_SUCCESS',
          payload: record,
        });
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'VIPS__LEAVE_TYPES_FORM_FIND_ERROR',
      });

      dispatch(push('/admin/vips__leave_types'));
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: 'VIPS__LEAVE_TYPES_FORM_CREATE_STARTED',
      });

      axios.post('/vips__leave_types', { data: values }).then((res) => {
        dispatch({
          type: 'VIPS__LEAVE_TYPES_FORM_CREATE_SUCCESS',
        });
        showSnackbar({ type: 'success', message: 'Vips__leave_types created' });
        dispatch(push('/admin/vips__leave_types'));
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'VIPS__LEAVE_TYPES_FORM_CREATE_ERROR',
      });
    }
  },

  doUpdate: (id, values, isProfile) => async (dispatch, getState) => {
    try {
      dispatch({
        type: 'VIPS__LEAVE_TYPES_FORM_UPDATE_STARTED',
      });

      await axios.put(`/vips__leave_types/${id}`, { id, data: values });

      dispatch(doInit());

      dispatch({
        type: 'VIPS__LEAVE_TYPES_FORM_UPDATE_SUCCESS',
      });

      if (isProfile) {
        showSnackbar({ type: 'success', message: 'Profile updated' });
      } else {
        showSnackbar({ type: 'success', message: 'Vips__leave_types updated' });
        dispatch(push('/admin/vips__leave_types'));
      }
    } catch (error) {
      Errors.handle(error);
      showSnackbar({
        type: 'error',
        message: 'Vips__leave_types update error',
      });
      dispatch({
        type: 'VIPS__LEAVE_TYPES_FORM_UPDATE_ERROR',
      });
    }
  },
};

export default actions;
