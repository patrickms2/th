// eslint-disable-next-line
import * as dataFormat from 'pages/CRUD/Vips__defects/table/Vips__defectsDataFormatters';

import actions from 'actions/vips__defects/vips__defectsListActions';
import actionsVips__defects from 'actions/vips__defects/vips__defectsFormActions';
import React, { useRef, useState } from 'react';
import {
  useManagementDispatch,
  useManagementState,
} from 'context/ManagementContext';

import { createAsyncThunk } from '@reduxjs/toolkit';
import { FileUploader } from 'react-drag-drop-files';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { uniqueId } from 'lodash';
import _ from 'lodash';
import { withStyles } from '@mui/styles';
import { makeStyles } from '@mui/styles';
import { DataGrid, GridValueGetterParams } from '@mui/x-data-grid';
import { Link as LinkMaterial } from '../../../../components/Wrappers';
import DataGridMultiSelect from 'components/FormItems/items/DataGridMultiSelect';
import DataGridSinglSelect from 'components/FormItems/items/DataGridSinglSelect';
import axios from 'axios';

import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import CloseIcon from '@mui/icons-material/Close';
import Stack from '@mui/material/Stack';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';

import Widget from 'components/Widget';
import Actions from '../../../../components/Table/Actions';
import Dialog from '../../../../components/Dialog';

const useStyles = makeStyles({
  container: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  actions: {
    display: 'flex',
    justifyContent: 'start',
    marginBottom: 10,
    '& a': {
      textDecoration: 'none',
      color: '#fff',
    },
  },
  element: {
    marginRight: '1rem',
  },
});

const Vips__defectsTable = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const linkCsvDownload = useRef(null);
  const [width, setWidth] = useState(window.innerWidth);

  const [filters, setFilters] = useState([
    { label: 'generated_id', title: 'generated_id' },
    { label: 'project_version', title: 'project_version' },
    { label: '2=enhancement', title: '2=enhancement' },
    { label: 'defect_name', title: 'defect_name' },
    { label: 'estimated_hours', title: 'estimated_hours' },
    { label: 'actual_hours', title: 'actual_hours' },
    { label: 'description', title: 'description' },
    { label: '2=closed', title: '2=closed' },
    { label: '3=in', title: '3=in' },
    { label: '4=open', title: '4=open' },
    { label: '5=solved', title: '5=solved' },
    { label: '6=re-open', title: '6=re-open' },
    { label: '7=deferred', title: '7=deferred' },
    { label: 'assign_member', title: 'assign_member' },
    { label: '2=medium', title: '2=medium' },
    { label: '3=high', title: '3=high' },
    { label: '4=very', title: '4=very' },
    { label: '5=urgent', title: '5=urgent' },
    { label: 'notes', title: 'notes' },
    { label: 'attachment', title: 'attachment' },
    { label: 'attachment_hash', title: 'attachment_hash' },
    { label: 'create_user_id', title: 'create_user_id', number: 'true' },
    { label: 'project_id', title: 'project_id', number: 'true' },
    { label: 'defect_type', title: 'defect_type', number: 'true' },
    { label: 'status', title: 'status', number: 'true' },
    { label: 'assigned_group_id', title: 'assigned_group_id', number: 'true' },
    { label: 'severity', title: 'severity', number: 'true' },
    { label: 'orders', title: 'orders', number: 'true' },
  ]);

  const [filterItems, setFilterItems] = useState([]);
  const [filterUrl, setFilterUrl] = useState('');

  const [loading, setLoading] = useState(false);
  const [sortModel, setSortModel] = useState([]);
  const [selectionModel, setSelectionModel] = useState([]);

  const count = useSelector((store) => store.vips__defects.list.count);
  const modalOpen = useSelector((store) => store.vips__defects.list.modalOpen);
  const rows = useSelector((store) => store.vips__defects.list.rows);
  const idToDelete = useSelector(
    (store) => store.vips__defects.list.idToDelete,
  );

  const [rowsState, setRowsState] = useState({
    page: 0,
    pageSize: 5,
  });

  const loadData = async (limit, page, orderBy, request) => {
    setLoading(true);
    await dispatch(actions.doFetch({ limit, page, orderBy, request }));
    setLoading(false);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [file, setFile] = useState(null);
  const handleChangeFile = (file) => {
    setFile(file);
  };
  const fileTypes = ['CSV'];
  const update = (id, data) => {
    dispatch(actionsVips__defects.doUpdate(id, data));
  };

  const managementDispatch = useManagementDispatch();
  const managementValue = useManagementState();
  const [currentUser, setCurrentUser] = useState(null);

  React.useEffect(() => {
    setCurrentUser(managementValue.currentUser);
  }, [managementDispatch, managementValue]);

  React.useEffect(() => {
    loadData(rowsState.pageSize, rowsState.page, sortModel[0], filterUrl);
  }, [sortModel, rowsState]);

  React.useEffect(() => {
    updateWindowDimensions();
    window.addEventListener('resize', updateWindowDimensions);
    return () => window.removeEventListener('resize', updateWindowDimensions);
  }, []);

  const handleSortModelChange = (newModel) => {
    setSortModel(newModel);
  };

  const styleForModal = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '',
    borderRadius: 4,
    boxShadow: 15,
    p: 2,
  };

  const updateWindowDimensions = () => {
    setWidth(window.innerWidth);
  };

  const handleChange = (id) => (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFilterItems(
      filterItems.map((item) =>
        item.id === id
          ? { id, fields: { ...item.fields, [name]: value } }
          : item,
      ),
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let request = '&';
    filterItems.forEach((item) => {
      filters[
        filters.map((filter) => filter.title).indexOf(item.fields.selectedField)
      ].hasOwnProperty('number')
        ? (request += `${item.fields.selectedField}Range=${item.fields.filterValueFrom}&${item.fields.selectedField}Range=${item.fields.filterValueTo}&`)
        : (request += `${item.fields.selectedField}=${item.fields.filterValue}&`);
    });

    loadData(rowsState.pageSize, 0, sortModel[0], request);
    setFilterUrl(request);
  };

  const handleReset = () => {
    setFilterItems([]);
    setFilterUrl('');
    dispatch(
      actions.doFetch({ limit: rowsState.pageSize, page: 0, request: '' }),
    );
  };

  const sendVips__defectsCSV = async () => {
    const data = new FormData();
    data.append('file', file[0]);
    data.append('filename', file[0].name);

    try {
      const result = await axios.post('vips__defects/bulk-import', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (result.status === 200) {
        loadData(rowsState.pageSize, rowsState.page, sortModel[0], filterUrl);
        setFile(null);
        handleClose();
      }
      return result.data;
    } catch (error) {
      console.log(`CSV upload error`, error);
    }
  };

  const getVips__defectsCSV = async () => {
    const response = await axios({
      url: '/vips__defects?filetype=csv',
      method: 'GET',
      responseType: 'blob',
    });
    const type = response.headers['content-type'];
    const blob = new Blob([response.data], { type: type, encoding: 'UTF-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'vips__defectsCSV.csv';
    link.click();
  };

  const addFilter = () => {
    let newItem = {
      id: uniqueId(),
      fields: {
        filterValue: '',
        filterValueFrom: '',
        filterValueTo: '',
      },
    };
    newItem.fields.selectedField = filters[0].title;
    setFilterItems([...filterItems, newItem]);
  };

  const deleteFilter = (value) => (e) => {
    e.preventDefault();
    const newItems = filterItems.filter((item) => item.id !== value);
    if (newItems.length) {
      setFilterItems(newItems);
    } else {
      dispatch(actions.doFetch({ limit: 10, page: 1 }));
      setFilterItems(newItems);
    }
  };

  const handleDelete = () => {
    dispatch(
      actions.doDelete({ limit: 10, page: 0, request: filterUrl }, idToDelete),
    );
  };

  const openModal = (event, cell) => {
    const id = cell;
    event.stopPropagation();
    dispatch(actions.doOpenConfirm(id));
  };

  const closeModal = () => {
    dispatch(actions.doCloseConfirm());
  };

  function NoRowsOverlay() {
    return (
      <Stack height='100%' alignItems='center' justifyContent='center'>
        No results found
      </Stack>
    );
  }

  function humanize(str) {
    return str
      .replace(/^[\s_]+|[\s_]+$/g, '')
      .replace(/[_\s]+/g, ' ')
      .replace(/^[a-z]/, function (m) {
        return m.toUpperCase();
      });
  }

  const columns = [
    {
      field: 'create_user_id',

      flex: 0.6,
      editable: true,

      headerName: 'create_user_id',
    },

    {
      field: 'generated_id',

      flex: 0.6,
      editable: true,

      headerName: 'generated_id',
    },

    {
      field: 'project_id',

      flex: 0.6,
      editable: true,

      headerName: 'project_id',
    },

    {
      field: 'project_version',

      flex: 0.6,
      editable: true,

      headerName: 'project_version',
    },

    {
      field: 'defect_type',

      flex: 0.6,
      editable: true,

      headerName: 'defect_type',
    },

    {
      field: '2=enhancement',

      flex: 0.6,
      editable: true,

      headerName: '2=enhancement',
    },

    {
      field: 'defect_name',

      flex: 0.6,
      editable: true,

      headerName: 'defect_name',
    },

    {
      field: 'start_date',

      headerName: 'start_date',
    },

    {
      field: 'end_date',

      headerName: 'end_date',
    },

    {
      field: 'estimated_hours',

      flex: 0.6,
      editable: true,

      headerName: 'estimated_hours',
    },

    {
      field: 'actual_hours',

      flex: 0.6,
      editable: true,

      headerName: 'actual_hours',
    },

    {
      field: 'description',

      flex: 0.6,
      editable: true,

      headerName: 'description',
    },

    {
      field: 'status',

      flex: 0.6,
      editable: true,

      headerName: 'status',
    },

    {
      field: '2=closed',

      flex: 0.6,
      editable: true,

      headerName: '2=closed',
    },

    {
      field: '3=in',

      flex: 0.6,
      editable: true,

      headerName: '3=in',
    },

    {
      field: '4=open',

      flex: 0.6,
      editable: true,

      headerName: '4=open',
    },

    {
      field: '5=solved',

      flex: 0.6,
      editable: true,

      headerName: '5=solved',
    },

    {
      field: '6=re-open',

      flex: 0.6,
      editable: true,

      headerName: '6=re-open',
    },

    {
      field: '7=deferred',

      flex: 0.6,
      editable: true,

      headerName: '7=deferred',
    },

    {
      field: 'assigned_group_id',

      flex: 0.6,
      editable: true,

      headerName: 'assigned_group_id',
    },

    {
      field: 'assign_member',

      flex: 0.6,
      editable: true,

      headerName: 'assign_member',
    },

    {
      field: 'severity',

      flex: 0.6,
      editable: true,

      headerName: 'severity',
    },

    {
      field: '2=medium',

      flex: 0.6,
      editable: true,

      headerName: '2=medium',
    },

    {
      field: '3=high',

      flex: 0.6,
      editable: true,

      headerName: '3=high',
    },

    {
      field: '4=very',

      flex: 0.6,
      editable: true,

      headerName: '4=very',
    },

    {
      field: '5=urgent',

      flex: 0.6,
      editable: true,

      headerName: '5=urgent',
    },

    {
      field: 'notes',

      flex: 0.6,
      editable: true,

      headerName: 'notes',
    },

    {
      field: 'attachment',

      flex: 0.6,
      editable: true,

      headerName: 'attachment',
    },

    {
      field: 'attachment_hash',

      flex: 0.6,
      editable: true,

      headerName: 'attachment_hash',
    },

    {
      field: 'orders',

      flex: 0.6,
      editable: true,

      headerName: 'orders',
    },

    {
      field: 'id',
      headerName: 'Actions',
      sortable: false,
      flex: 0.6,
      maxWidth: 80,
      renderCell: (params) => (
        <Actions
          classes={classes}
          entity='vips__defects'
          openModal={openModal}
          {...params}
        />
      ),
    },
  ];

  return (
    <div>
      <Widget title={humanize('Vips__defects')} disableWidgetMenu>
        <Box className={classes.actions}>
          <Link to='/admin/vips__defects/new' className={classes.element}>
            <Button variant='contained'>New</Button>
          </Link>
          <Button
            type='button'
            variant='contained'
            className={classes.element}
            onClick={addFilter}
          >
            Add Filter
          </Button>
          <Button
            type='button'
            variant='contained'
            onClick={getVips__defectsCSV}
            className={classes.element}
          >
            Export CSV
          </Button>
          <Button
            type='button'
            variant='contained'
            onClick={handleOpen}
            className={classes.element}
          >
            Upload CSV
          </Button>
        </Box>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
        >
          <Box sx={styleForModal}>
            <Stack
              direction='row'
              mb={2}
              justifyContent='center'
              alignItems='center'
              spacing={1}
            >
              <Typography
                align='center'
                id='modal-modal-title'
                variant='h3'
                component='h2'
              >
                Upload CSV
              </Typography>
              <IconButton size='small' onClick={handleClose}>
                <CloseRoundedIcon />
              </IconButton>
            </Stack>
            <Box align='center'>
              <FileUploader
                multiple={true}
                handleChange={handleChangeFile}
                name='file'
                types={fileTypes}
                children={
                  <Box
                    sx={{
                      '&:hover': {
                        backgroundColor: '#eeeeee',
                        cursor: 'pointer',
                      },
                    }}
                    style={{
                      border: 2,
                      borderRadius: 7,
                      borderStyle: 'dotted',
                      borderColor: '#1976d2',
                      minHeight: '300px',
                      width: '450px',
                      justifyContent: 'center',
                      display: 'flex',
                      alignItems: 'center',
                      flexDirection: 'column',
                    }}
                  >
                    <p>Upload or drop a file right here</p>{' '}
                    <p style={{ fontSize: 14 }}>Import CSV file</p>
                  </Box>
                }
              />
              <Typography
                id='modal-modal-description'
                variant='subtitle1'
                sx={{ mt: 2, mb: 4 }}
              >
                {file ? `File name: ${file[0].name}` : 'no files uploaded yet'}
              </Typography>
            </Box>
            <Button
              type='button'
              variant='contained'
              className={classes.element}
              onClick={() => sendVips__defectsCSV()}
            >
              Confirm
            </Button>
            <Button
              type='button'
              variant='contained'
              className={classes.element}
              onClick={handleClose}
            >
              Cancel
            </Button>
          </Box>
        </Modal>

        <Box sx={{ flexGrow: 1 }}>
          {filterItems.map((item) => (
            <Grid
              container
              alignItems='center'
              columns={12}
              spacing={1}
              className={classes.container}
            >
              <Grid item xs={3}>
                <FormControl size='small' fullWidth>
                  <InputLabel>Field</InputLabel>
                  <Select
                    label='Field'
                    name='selectedField'
                    size='small'
                    value={item.fields.selectedField}
                    onChange={handleChange(item.id)}
                  >
                    {filters.map((selectOption) => (
                      <MenuItem
                        key={selectOption.title}
                        value={`${selectOption.title}`}
                      >
                        {selectOption.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              {filters
                .find((filter) => filter.title === item.fields.selectedField)
                .hasOwnProperty('number') ? (
                <>
                  <Grid item xs={2}>
                    <TextField
                      label='From'
                      type='text'
                      name='filterValueFrom'
                      size='small'
                      fullWidth
                      onChange={handleChange(item.id)}
                    />
                  </Grid>
                  <Grid item xs={2}>
                    <TextField
                      label='To'
                      type='text'
                      name='filterValueTo'
                      size='small'
                      fullWidth
                      onChange={handleChange(item.id)}
                    />
                  </Grid>
                </>
              ) : (
                <Grid item xs={4}>
                  <TextField
                    label='Contained'
                    type='text'
                    name='filterValue'
                    size='small'
                    fullWidth
                    onChange={handleChange(item.id)}
                  />
                </Grid>
              )}

              <Grid item xs={2}>
                <Button
                  variant='outlined'
                  color='error'
                  onClick={deleteFilter(item.id)}
                >
                  <CloseIcon />
                </Button>
              </Grid>
            </Grid>
          ))}
          {filterItems.length > 0 && (
            <Grid container spacing={1}>
              <Grid item>
                <Button variant='outlined' onClick={(e) => handleSubmit(e)}>
                  Apply
                </Button>
              </Grid>
              <Grid item>
                <Button color='error' variant='outlined' onClick={handleReset}>
                  Clear
                </Button>
              </Grid>
            </Grid>
          )}
        </Box>

        <div
          style={{
            minHeight: 500,
            width: '100%',
            paddingTop: 20,
            paddingBottom: 20,
          }}
        >
          <DataGrid
            rows={loading ? [] : rows}
            columns={columns}
            sortingMode='server'
            sortModel={sortModel}
            onSortModelChange={handleSortModelChange}
            rowsPerPageOptions={[5, 10, 20, 50, 100]}
            pageSize={5}
            pagination
            {...rowsState}
            rowCount={count}
            paginationMode={
              process.env.NODE_ENV === 'production' ? 'server' : 'client'
            }
            components={{ NoRowsOverlay, LoadingOverlay: LinearProgress }}
            onPageChange={(page) => {
              setRowsState((prev) => ({ ...prev, page }));
            }}
            onPageSizeChange={(pageSize) => {
              setRowsState((prev) => ({ ...prev, pageSize }));
            }}
            onSelectionModelChange={(newSelectionModel) => {
              setSelectionModel(newSelectionModel);
            }}
            selectionModel={selectionModel}
            checkboxSelection
            disableSelectionOnClick
            disableColumnMenu
            onProcessRowUpdateError={(params) => {
              console.log('Error', params);
            }}
            processRowUpdate={async (newRow, oldRow) => {
              const data = dataFormat.dataGridEditFormatter(newRow);

              try {
                const { password, ...rest } = data;
                update(newRow.id, rest);
                return newRow;
              } catch (e) {
                console.log('error', e);
                return oldRow;
              }
            }}
            disableRowSelectionOnClick
            loading={loading}
            autoHeight
          />
        </div>

        {
          <div>
            <LinkMaterial
              color={'primary'}
              target={'_blank'}
              href={
                process.env.NODE_ENV === 'production'
                  ? window.location.origin + '/api-docs/#/Vips__defects'
                  : 'http://localhost:8080/api-docs/#/Vips__defects'
              }
            >
              API documentation for vips__defects
            </LinkMaterial>
          </div>
        }
      </Widget>

      <Dialog
        open={modalOpen || false}
        title='Confirm delete'
        contentText='Are you sure you want to delete this item?'
        onClose={closeModal}
        onSubmit={handleDelete}
      />
    </div>
  );
};

export default Vips__defectsTable;
