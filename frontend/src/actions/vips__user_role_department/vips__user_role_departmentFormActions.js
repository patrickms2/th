import axios from 'axios';
import Errors from 'components/FormItems/error/errors';
import { push } from 'connected-react-router';
import { doInit } from 'actions/auth';
import { showSnackbar } from '../../components/Snackbar';

const actions = {
  doNew: () => {
    return {
      type: 'VIPS__USER_ROLE_DEPARTMENT_FORM_RESET',
    };
  },

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: 'VIPS__USER_ROLE_DEPARTMENT_FORM_FIND_STARTED',
      });

      axios.get(`/vips__user_role_department/${id}`).then((res) => {
        const record = res.data;

        dispatch({
          type: 'VIPS__USER_ROLE_DEPARTMENT_FORM_FIND_SUCCESS',
          payload: record,
        });
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'VIPS__USER_ROLE_DEPARTMENT_FORM_FIND_ERROR',
      });

      dispatch(push('/admin/vips__user_role_department'));
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: 'VIPS__USER_ROLE_DEPARTMENT_FORM_CREATE_STARTED',
      });

      axios
        .post('/vips__user_role_department', { data: values })
        .then((res) => {
          dispatch({
            type: 'VIPS__USER_ROLE_DEPARTMENT_FORM_CREATE_SUCCESS',
          });
          showSnackbar({
            type: 'success',
            message: 'Vips__user_role_department created',
          });
          dispatch(push('/admin/vips__user_role_department'));
        });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'VIPS__USER_ROLE_DEPARTMENT_FORM_CREATE_ERROR',
      });
    }
  },

  doUpdate: (id, values, isProfile) => async (dispatch, getState) => {
    try {
      dispatch({
        type: 'VIPS__USER_ROLE_DEPARTMENT_FORM_UPDATE_STARTED',
      });

      await axios.put(`/vips__user_role_department/${id}`, {
        id,
        data: values,
      });

      dispatch(doInit());

      dispatch({
        type: 'VIPS__USER_ROLE_DEPARTMENT_FORM_UPDATE_SUCCESS',
      });

      if (isProfile) {
        showSnackbar({ type: 'success', message: 'Profile updated' });
      } else {
        showSnackbar({
          type: 'success',
          message: 'Vips__user_role_department updated',
        });
        dispatch(push('/admin/vips__user_role_department'));
      }
    } catch (error) {
      Errors.handle(error);
      showSnackbar({
        type: 'error',
        message: 'Vips__user_role_department update error',
      });
      dispatch({
        type: 'VIPS__USER_ROLE_DEPARTMENT_FORM_UPDATE_ERROR',
      });
    }
  },
};

export default actions;
