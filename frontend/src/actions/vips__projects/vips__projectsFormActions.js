import axios from 'axios';
import Errors from 'components/FormItems/error/errors';
import { push } from 'connected-react-router';
import { doInit } from 'actions/auth';
import { showSnackbar } from '../../components/Snackbar';

const actions = {
  doNew: () => {
    return {
      type: 'VIPS__PROJECTS_FORM_RESET',
    };
  },

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: 'VIPS__PROJECTS_FORM_FIND_STARTED',
      });

      axios.get(`/vips__projects/${id}`).then((res) => {
        const record = res.data;

        dispatch({
          type: 'VIPS__PROJECTS_FORM_FIND_SUCCESS',
          payload: record,
        });
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'VIPS__PROJECTS_FORM_FIND_ERROR',
      });

      dispatch(push('/admin/vips__projects'));
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: 'VIPS__PROJECTS_FORM_CREATE_STARTED',
      });

      axios.post('/vips__projects', { data: values }).then((res) => {
        dispatch({
          type: 'VIPS__PROJECTS_FORM_CREATE_SUCCESS',
        });
        showSnackbar({ type: 'success', message: 'Vips__projects created' });
        dispatch(push('/admin/vips__projects'));
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'VIPS__PROJECTS_FORM_CREATE_ERROR',
      });
    }
  },

  doUpdate: (id, values, isProfile) => async (dispatch, getState) => {
    try {
      dispatch({
        type: 'VIPS__PROJECTS_FORM_UPDATE_STARTED',
      });

      await axios.put(`/vips__projects/${id}`, { id, data: values });

      dispatch(doInit());

      dispatch({
        type: 'VIPS__PROJECTS_FORM_UPDATE_SUCCESS',
      });

      if (isProfile) {
        showSnackbar({ type: 'success', message: 'Profile updated' });
      } else {
        showSnackbar({ type: 'success', message: 'Vips__projects updated' });
        dispatch(push('/admin/vips__projects'));
      }
    } catch (error) {
      Errors.handle(error);
      showSnackbar({ type: 'error', message: 'Vips__projects update error' });
      dispatch({
        type: 'VIPS__PROJECTS_FORM_UPDATE_ERROR',
      });
    }
  },
};

export default actions;
