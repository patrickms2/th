import Errors from 'components/FormItems/error/errors';
import axios from 'axios';
import queryString from 'query-string';

async function list(filter) {
  const response = await axios.get(
    filter
      ? `/vips__defect_attachments?page=${filter.page}&limit=${filter.limit}

    &vips__defect_attachments=${
      filter.vips__defect_attachments ? filter.vips__defect_attachments : ''
    }
    &${queryString.stringify(filter.orderBy)}${filter.request}`
      : `/vips__defect_attachments`,
  );
  return response.data;
}

async function filterVips__defect_attachments(request, filter) {
  const response = await axios.get(
    `/vips__defect_attachments?page=${filter.page}&limit=${filter.limit}${request}`,
  );
  return response.data;
}

export const actions = {
  doFilter: (request, filter) => async (dispatch, getState) => {
    try {
      const response = await filterVips__defect_attachments(request, filter);

      dispatch({
        type: 'VIPS__DEFECT_ATTACHMENTS_LIST_FILTERED',
        payload: {
          rows: response.rows,
          count: response.count,
        },
      });
    } catch (error) {
      Errors.handle(error);
      dispatch({
        type: 'VIPS__DEFECT_ATTACHMENTS_LIST_FETCH_ERROR',
      });
    }
  },

  doFetch:
    (filter, keepPagination = false) =>
    async (dispatch, getState) => {
      try {
        dispatch({
          type: 'VIPS__DEFECT_ATTACHMENTS_LIST_FETCH_STARTED',
          payload: { filter, keepPagination },
        });

        const response = await list(filter);

        dispatch({
          type: 'VIPS__DEFECT_ATTACHMENTS_LIST_FETCH_SUCCESS',
          payload: {
            rows: response.rows,
            count: response.count,
          },
        });
      } catch (error) {
        Errors.handle(error);

        dispatch({
          type: 'VIPS__DEFECT_ATTACHMENTS_LIST_FETCH_ERROR',
        });
      }
    },

  doDelete: (filter, id) => async (dispatch) => {
    try {
      dispatch({
        type: 'VIPS__DEFECT_ATTACHMENTS_LIST_DELETE_STARTED',
      });

      await axios.delete(`/vips__defect_attachments/${id}`);

      dispatch({
        type: 'VIPS__DEFECT_ATTACHMENTS_LIST_DELETE_SUCCESS',
      });

      const response = await list(filter);
      dispatch({
        type: 'VIPS__DEFECT_ATTACHMENTS_LIST_FETCH_SUCCESS',
        payload: {
          rows: response.rows,
          count: response.count,
        },
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'VIPS__DEFECT_ATTACHMENTS_LIST_DELETE_ERROR',
      });
    }
  },
  doOpenConfirm: (id) => async (dispatch) => {
    dispatch({
      type: 'VIPS__DEFECT_ATTACHMENTS_LIST_OPEN_CONFIRM',
      payload: {
        id: id,
      },
    });
  },
  doCloseConfirm: () => async (dispatch) => {
    dispatch({
      type: 'VIPS__DEFECT_ATTACHMENTS_LIST_CLOSE_CONFIRM',
    });
  },
};

export default actions;
