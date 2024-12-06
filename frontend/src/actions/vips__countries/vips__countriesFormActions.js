import axios from 'axios';
import Errors from 'components/FormItems/error/errors';
import { push } from 'connected-react-router';
import { doInit } from 'actions/auth';
import { showSnackbar } from '../../components/Snackbar';

const actions = {
  doNew: () => {
    return {
      type: 'VIPS__COUNTRIES_FORM_RESET',
    };
  },

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: 'VIPS__COUNTRIES_FORM_FIND_STARTED',
      });

      axios.get(`/vips__countries/${id}`).then((res) => {
        const record = res.data;

        dispatch({
          type: 'VIPS__COUNTRIES_FORM_FIND_SUCCESS',
          payload: record,
        });
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'VIPS__COUNTRIES_FORM_FIND_ERROR',
      });

      dispatch(push('/admin/vips__countries'));
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: 'VIPS__COUNTRIES_FORM_CREATE_STARTED',
      });

      axios.post('/vips__countries', { data: values }).then((res) => {
        dispatch({
          type: 'VIPS__COUNTRIES_FORM_CREATE_SUCCESS',
        });
        showSnackbar({ type: 'success', message: 'Vips__countries created' });
        dispatch(push('/admin/vips__countries'));
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'VIPS__COUNTRIES_FORM_CREATE_ERROR',
      });
    }
  },

  doUpdate: (id, values, isProfile) => async (dispatch, getState) => {
    try {
      dispatch({
        type: 'VIPS__COUNTRIES_FORM_UPDATE_STARTED',
      });

      await axios.put(`/vips__countries/${id}`, { id, data: values });

      dispatch(doInit());

      dispatch({
        type: 'VIPS__COUNTRIES_FORM_UPDATE_SUCCESS',
      });

      if (isProfile) {
        showSnackbar({ type: 'success', message: 'Profile updated' });
      } else {
        showSnackbar({ type: 'success', message: 'Vips__countries updated' });
        dispatch(push('/admin/vips__countries'));
      }
    } catch (error) {
      Errors.handle(error);
      showSnackbar({ type: 'error', message: 'Vips__countries update error' });
      dispatch({
        type: 'VIPS__COUNTRIES_FORM_UPDATE_ERROR',
      });
    }
  },
};

export default actions;
