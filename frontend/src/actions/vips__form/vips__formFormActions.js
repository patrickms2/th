import axios from 'axios';
import Errors from 'components/FormItems/error/errors';
import { push } from 'connected-react-router';
import { doInit } from 'actions/auth';
import { showSnackbar } from '../../components/Snackbar';

const actions = {
  doNew: () => {
    return {
      type: 'VIPS__FORM_FORM_RESET',
    };
  },

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: 'VIPS__FORM_FORM_FIND_STARTED',
      });

      axios.get(`/vips__form/${id}`).then((res) => {
        const record = res.data;

        dispatch({
          type: 'VIPS__FORM_FORM_FIND_SUCCESS',
          payload: record,
        });
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'VIPS__FORM_FORM_FIND_ERROR',
      });

      dispatch(push('/admin/vips__form'));
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: 'VIPS__FORM_FORM_CREATE_STARTED',
      });

      axios.post('/vips__form', { data: values }).then((res) => {
        dispatch({
          type: 'VIPS__FORM_FORM_CREATE_SUCCESS',
        });
        showSnackbar({ type: 'success', message: 'Vips__form created' });
        dispatch(push('/admin/vips__form'));
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'VIPS__FORM_FORM_CREATE_ERROR',
      });
    }
  },

  doUpdate: (id, values, isProfile) => async (dispatch, getState) => {
    try {
      dispatch({
        type: 'VIPS__FORM_FORM_UPDATE_STARTED',
      });

      await axios.put(`/vips__form/${id}`, { id, data: values });

      dispatch(doInit());

      dispatch({
        type: 'VIPS__FORM_FORM_UPDATE_SUCCESS',
      });

      if (isProfile) {
        showSnackbar({ type: 'success', message: 'Profile updated' });
      } else {
        showSnackbar({ type: 'success', message: 'Vips__form updated' });
        dispatch(push('/admin/vips__form'));
      }
    } catch (error) {
      Errors.handle(error);
      showSnackbar({ type: 'error', message: 'Vips__form update error' });
      dispatch({
        type: 'VIPS__FORM_FORM_UPDATE_ERROR',
      });
    }
  },
};

export default actions;
