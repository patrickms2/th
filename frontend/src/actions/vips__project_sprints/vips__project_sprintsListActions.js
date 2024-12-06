import Errors from 'components/FormItems/error/errors';
import axios from 'axios';
import queryString from 'query-string';

async function list(filter) {
  const response = await axios.get(
    filter
      ? `/vips__project_sprints?page=${filter.page}&limit=${filter.limit}

    &vips__project_sprints=${
      filter.vips__project_sprints ? filter.vips__project_sprints : ''
    }
    &${queryString.stringify(filter.orderBy)}${filter.request}`
      : `/vips__project_sprints`,
  );
  return response.data;
}

async function filterVips__project_sprints(request, filter) {
  const response = await axios.get(
    `/vips__project_sprints?page=${filter.page}&limit=${filter.limit}${request}`,
  );
  return response.data;
}

export const actions = {
  doFilter: (request, filter) => async (dispatch, getState) => {
    try {
      const response = await filterVips__project_sprints(request, filter);

      dispatch({
        type: 'VIPS__PROJECT_SPRINTS_LIST_FILTERED',
        payload: {
          rows: response.rows,
          count: response.count,
        },
      });
    } catch (error) {
      Errors.handle(error);
      dispatch({
        type: 'VIPS__PROJECT_SPRINTS_LIST_FETCH_ERROR',
      });
    }
  },

  doFetch:
    (filter, keepPagination = false) =>
    async (dispatch, getState) => {
      try {
        dispatch({
          type: 'VIPS__PROJECT_SPRINTS_LIST_FETCH_STARTED',
          payload: { filter, keepPagination },
        });

        const response = await list(filter);

        dispatch({
          type: 'VIPS__PROJECT_SPRINTS_LIST_FETCH_SUCCESS',
          payload: {
            rows: response.rows,
            count: response.count,
          },
        });
      } catch (error) {
        Errors.handle(error);

        dispatch({
          type: 'VIPS__PROJECT_SPRINTS_LIST_FETCH_ERROR',
        });
      }
    },

  doDelete: (filter, id) => async (dispatch) => {
    try {
      dispatch({
        type: 'VIPS__PROJECT_SPRINTS_LIST_DELETE_STARTED',
      });

      await axios.delete(`/vips__project_sprints/${id}`);

      dispatch({
        type: 'VIPS__PROJECT_SPRINTS_LIST_DELETE_SUCCESS',
      });

      const response = await list(filter);
      dispatch({
        type: 'VIPS__PROJECT_SPRINTS_LIST_FETCH_SUCCESS',
        payload: {
          rows: response.rows,
          count: response.count,
        },
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'VIPS__PROJECT_SPRINTS_LIST_DELETE_ERROR',
      });
    }
  },
  doOpenConfirm: (id) => async (dispatch) => {
    dispatch({
      type: 'VIPS__PROJECT_SPRINTS_LIST_OPEN_CONFIRM',
      payload: {
        id: id,
      },
    });
  },
  doCloseConfirm: () => async (dispatch) => {
    dispatch({
      type: 'VIPS__PROJECT_SPRINTS_LIST_CLOSE_CONFIRM',
    });
  },
};

export default actions;
