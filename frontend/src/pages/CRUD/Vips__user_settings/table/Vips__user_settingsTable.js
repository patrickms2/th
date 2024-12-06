// eslint-disable-next-line
import * as dataFormat from 'pages/CRUD/Vips__user_settings/table/Vips__user_settingsDataFormatters';

import actions from 'actions/vips__user_settings/vips__user_settingsListActions';
import actionsVips__user_settings from 'actions/vips__user_settings/vips__user_settingsFormActions';
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

const Vips__user_settingsTable = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const linkCsvDownload = useRef(null);
  const [width, setWidth] = useState(window.innerWidth);

  const [filters, setFilters] = useState([
    { label: 'company_name', title: 'company_name' },
    { label: 'company_legal_name', title: 'company_legal_name' },
    { label: 'company_short_name', title: 'company_short_name' },
    { label: 'contact_person', title: 'contact_person' },
    { label: 'company_address', title: 'company_address' },
    { label: 'company_city', title: 'company_city' },
    { label: 'company_zipcode', title: 'company_zipcode' },
    { label: 'company_phone', title: 'company_phone' },
    { label: 'company_email', title: 'company_email' },
    { label: 'company_website', title: 'company_website' },
    { label: 'company_from_email', title: 'company_from_email' },
    { label: 'smtp_protocol', title: 'smtp_protocol' },
    { label: 'smtp_host', title: 'smtp_host' },
    { label: 'smtp_user', title: 'smtp_user' },
    { label: 'smtp_password', title: 'smtp_password' },
    { label: 'smtp_port', title: 'smtp_port' },
    { label: 'smtp_encryption', title: 'smtp_encryption' },
    { label: 'mail_from_name', title: 'mail_from_name' },
    { label: 'sparkpost_secret', title: 'sparkpost_secret' },
    { label: 'mailgun_domain', title: 'mailgun_domain' },
    { label: 'mailgun_secret', title: 'mailgun_secret' },
    { label: 'mandrill_secret', title: 'mandrill_secret' },
    { label: 'daily_report_emails', title: 'daily_report_emails' },
    { label: 'last_autobackup', title: 'last_autobackup' },
    { label: 'cronjob_link', title: 'cronjob_link' },
    { label: 'last_cronjob_run', title: 'last_cronjob_run' },
    {
      label: 'reminder_alert_before_hours',
      title: 'reminder_alert_before_hours',
    },
    { label: '12', title: '12' },
    {
      label: 'reminder_alert_before_days',
      title: 'reminder_alert_before_days',
    },
    { label: '2', title: '2' },
    { label: '3', title: '3' },
    { label: 'task', title: 'task' },
    { label: 'defect', title: 'defect' },
    { label: 'login_background', title: 'login_background' },
    { label: 'company_logo', title: 'company_logo' },
    { label: 'company_sidebar_logo', title: 'company_sidebar_logo' },
    { label: 'sidebar_background_images', title: 'sidebar_background_images' },
    { label: 'default_language', title: 'default_language' },
    { label: 'default_locale', title: 'default_locale' },
    { label: 'timezone', title: 'timezone' },
    { label: 'date_format', title: 'date_format' },
    { label: 'time_format', title: 'time_format' },
    { label: 'date_time_format', title: 'date_time_format' },
    { label: 'php_date_format', title: 'php_date_format' },
    { label: 'php_time_format', title: 'php_time_format' },
    { label: 'php_date_time_format', title: 'php_date_time_format' },
    { label: 'purchase_key', title: 'purchase_key' },
    { label: 'unique_coder', title: 'unique_coder' },
    { label: 'update_url', title: 'update_url' },
    { label: 'theme_layout', title: 'theme_layout' },
    { label: 'sidebar_bg_color', title: 'sidebar_bg_color' },
    {
      label: 'sidebar_transparent_bg_image',
      title: 'sidebar_transparent_bg_image',
    },
    { label: 'sidebar_bg_custom_color', title: 'sidebar_bg_custom_color' },
    { label: 'sidebar_font_color', title: 'sidebar_font_color' },
    { label: 'sidebar_width', title: 'sidebar_width' },
    { label: 'product_version', title: 'product_version' },
    { label: 'company_country', title: 'company_country', number: 'true' },
    { label: 'post_mark', title: 'post_mark', number: 'true' },
    {
      label: 'is_announcement_notification',
      title: 'is_announcement_notification',
      number: 'true',
    },
    {
      label: 'is_team_notification',
      title: 'is_team_notification',
      number: 'true',
    },
    { label: 'active_cronjob', title: 'active_cronjob', number: 'true' },
    { label: 'automatic_backup', title: 'automatic_backup', number: 'true' },
    { label: '24', title: '24', number: 'true' },
    {
      label: 'tables_pagination_limit',
      title: 'tables_pagination_limit',
      number: 'true',
    },
    { label: 'currency_id', title: 'currency_id', number: 'true' },
    { label: 'is_collapsed_menu', title: 'is_collapsed_menu', number: 'true' },
    {
      label: 'is_sidebar_background',
      title: 'is_sidebar_background',
      number: 'true',
    },
    { label: 'sidebar_bg_image', title: 'sidebar_bg_image', number: 'true' },
    { label: 'is_demo', title: 'is_demo', number: 'true' },
    {
      label: 'allowed_for_registration',
      title: 'allowed_for_registration',
      number: 'true',
    },
  ]);

  const [filterItems, setFilterItems] = useState([]);
  const [filterUrl, setFilterUrl] = useState('');

  const [loading, setLoading] = useState(false);
  const [sortModel, setSortModel] = useState([]);
  const [selectionModel, setSelectionModel] = useState([]);

  const count = useSelector((store) => store.vips__user_settings.list.count);
  const modalOpen = useSelector(
    (store) => store.vips__user_settings.list.modalOpen,
  );
  const rows = useSelector((store) => store.vips__user_settings.list.rows);
  const idToDelete = useSelector(
    (store) => store.vips__user_settings.list.idToDelete,
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
    dispatch(actionsVips__user_settings.doUpdate(id, data));
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

  const sendVips__user_settingsCSV = async () => {
    const data = new FormData();
    data.append('file', file[0]);
    data.append('filename', file[0].name);

    try {
      const result = await axios.post('vips__user_settings/bulk-import', data, {
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

  const getVips__user_settingsCSV = async () => {
    const response = await axios({
      url: '/vips__user_settings?filetype=csv',
      method: 'GET',
      responseType: 'blob',
    });
    const type = response.headers['content-type'];
    const blob = new Blob([response.data], { type: type, encoding: 'UTF-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'vips__user_settingsCSV.csv';
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
      field: 'company_name',

      flex: 0.6,
      editable: true,

      headerName: 'company_name',
    },

    {
      field: 'company_legal_name',

      flex: 0.6,
      editable: true,

      headerName: 'company_legal_name',
    },

    {
      field: 'company_short_name',

      flex: 0.6,
      editable: true,

      headerName: 'company_short_name',
    },

    {
      field: 'contact_person',

      flex: 0.6,
      editable: true,

      headerName: 'contact_person',
    },

    {
      field: 'company_address',

      flex: 0.6,
      editable: true,

      headerName: 'company_address',
    },

    {
      field: 'company_country',

      flex: 0.6,
      editable: true,

      headerName: 'company_country',
    },

    {
      field: 'company_city',

      flex: 0.6,
      editable: true,

      headerName: 'company_city',
    },

    {
      field: 'company_zipcode',

      flex: 0.6,
      editable: true,

      headerName: 'company_zipcode',
    },

    {
      field: 'company_phone',

      flex: 0.6,
      editable: true,

      headerName: 'company_phone',
    },

    {
      field: 'company_email',

      flex: 0.6,
      editable: true,

      headerName: 'company_email',
    },

    {
      field: 'company_website',

      flex: 0.6,
      editable: true,

      headerName: 'company_website',
    },

    {
      field: 'company_from_email',

      flex: 0.6,
      editable: true,

      headerName: 'company_from_email',
    },

    {
      field: 'post_mark',

      flex: 0.6,
      editable: true,

      headerName: 'post_mark',
    },

    {
      field: 'smtp_protocol',

      flex: 0.6,
      editable: true,

      headerName: 'smtp_protocol',
    },

    {
      field: 'smtp_host',

      flex: 0.6,
      editable: true,

      headerName: 'smtp_host',
    },

    {
      field: 'smtp_user',

      flex: 0.6,
      editable: true,

      headerName: 'smtp_user',
    },

    {
      field: 'smtp_password',

      flex: 0.6,
      editable: true,

      headerName: 'smtp_password',
    },

    {
      field: 'smtp_port',

      flex: 0.6,
      editable: true,

      headerName: 'smtp_port',
    },

    {
      field: 'smtp_encryption',

      flex: 0.6,
      editable: true,

      headerName: 'smtp_encryption',
    },

    {
      field: 'mail_from_name',

      flex: 0.6,
      editable: true,

      headerName: 'mail_from_name',
    },

    {
      field: 'sparkpost_secret',

      flex: 0.6,
      editable: true,

      headerName: 'sparkpost_secret',
    },

    {
      field: 'mailgun_domain',

      flex: 0.6,
      editable: true,

      headerName: 'mailgun_domain',
    },

    {
      field: 'mailgun_secret',

      flex: 0.6,
      editable: true,

      headerName: 'mailgun_secret',
    },

    {
      field: 'mandrill_secret',

      flex: 0.6,
      editable: true,

      headerName: 'mandrill_secret',
    },

    {
      field: 'is_announcement_notification',

      flex: 0.6,
      editable: true,

      headerName: 'is_announcement_notification',
    },

    {
      field: 'is_team_notification',

      flex: 0.6,
      editable: true,

      headerName: 'is_team_notification',
    },

    {
      field: 'active_cronjob',

      flex: 0.6,
      editable: true,

      headerName: 'active_cronjob',
    },

    {
      field: 'automatic_backup',

      flex: 0.6,
      editable: true,

      headerName: 'automatic_backup',
    },

    {
      field: 'daily_report_emails',

      flex: 0.6,
      editable: true,

      headerName: 'daily_report_emails',
    },

    {
      field: 'last_autobackup',

      flex: 0.6,
      editable: true,

      headerName: 'last_autobackup',
    },

    {
      field: 'cronjob_link',

      flex: 0.6,
      editable: true,

      headerName: 'cronjob_link',
    },

    {
      field: 'last_cronjob_run',

      flex: 0.6,
      editable: true,

      headerName: 'last_cronjob_run',
    },

    {
      field: 'reminder_alert_before_hours',

      flex: 0.6,
      editable: true,

      headerName: 'reminder_alert_before_hours',
    },

    {
      field: '12',

      flex: 0.6,
      editable: true,

      headerName: '12',
    },

    {
      field: '24',

      flex: 0.6,
      editable: true,

      headerName: '24',
    },

    {
      field: 'reminder_alert_before_days',

      flex: 0.6,
      editable: true,

      headerName: 'reminder_alert_before_days',
    },

    {
      field: '2',

      flex: 0.6,
      editable: true,

      headerName: '2',
    },

    {
      field: '3',

      flex: 0.6,
      editable: true,

      headerName: '3',
    },

    {
      field: 'task',

      flex: 0.6,
      editable: true,

      headerName: 'task',
    },

    {
      field: 'defect',

      flex: 0.6,
      editable: true,

      headerName: 'defect',
    },

    {
      field: 'login_background',

      flex: 0.6,
      editable: true,

      headerName: 'login_background',
    },

    {
      field: 'company_logo',

      flex: 0.6,
      editable: true,

      headerName: 'company_logo',
    },

    {
      field: 'company_sidebar_logo',

      flex: 0.6,
      editable: true,

      headerName: 'company_sidebar_logo',
    },

    {
      field: 'sidebar_background_images',

      flex: 0.6,
      editable: true,

      headerName: 'sidebar_background_images',
    },

    {
      field: 'default_language',

      flex: 0.6,
      editable: true,

      headerName: 'default_language',
    },

    {
      field: 'default_locale',

      flex: 0.6,
      editable: true,

      headerName: 'default_locale',
    },

    {
      field: 'timezone',

      flex: 0.6,
      editable: true,

      headerName: 'timezone',
    },

    {
      field: 'tables_pagination_limit',

      flex: 0.6,
      editable: true,

      headerName: 'tables_pagination_limit',
    },

    {
      field: 'date_format',

      flex: 0.6,
      editable: true,

      headerName: 'date_format',
    },

    {
      field: 'time_format',

      flex: 0.6,
      editable: true,

      headerName: 'time_format',
    },

    {
      field: 'date_time_format',

      flex: 0.6,
      editable: true,

      headerName: 'date_time_format',
    },

    {
      field: 'php_date_format',

      flex: 0.6,
      editable: true,

      headerName: 'php_date_format',
    },

    {
      field: 'php_time_format',

      flex: 0.6,
      editable: true,

      headerName: 'php_time_format',
    },

    {
      field: 'php_date_time_format',

      flex: 0.6,
      editable: true,

      headerName: 'php_date_time_format',
    },

    {
      field: 'currency_id',

      flex: 0.6,
      editable: true,

      headerName: 'currency_id',
    },

    {
      field: 'purchase_key',

      flex: 0.6,
      editable: true,

      headerName: 'purchase_key',
    },

    {
      field: 'unique_coder',

      flex: 0.6,
      editable: true,

      headerName: 'unique_coder',
    },

    {
      field: 'update_url',

      flex: 0.6,
      editable: true,

      headerName: 'update_url',
    },

    {
      field: 'is_collapsed_menu',

      flex: 0.6,
      editable: true,

      headerName: 'is_collapsed_menu',
    },

    {
      field: 'is_sidebar_background',

      flex: 0.6,
      editable: true,

      headerName: 'is_sidebar_background',
    },

    {
      field: 'theme_layout',

      flex: 0.6,
      editable: true,

      headerName: 'theme_layout',
    },

    {
      field: 'sidebar_bg_color',

      flex: 0.6,
      editable: true,

      headerName: 'sidebar_bg_color',
    },

    {
      field: 'sidebar_transparent_bg_image',

      flex: 0.6,
      editable: true,

      headerName: 'sidebar_transparent_bg_image',
    },

    {
      field: 'sidebar_bg_custom_color',

      flex: 0.6,
      editable: true,

      headerName: 'sidebar_bg_custom_color',
    },

    {
      field: 'sidebar_font_color',

      flex: 0.6,
      editable: true,

      headerName: 'sidebar_font_color',
    },

    {
      field: 'sidebar_width',

      flex: 0.6,
      editable: true,

      headerName: 'sidebar_width',
    },

    {
      field: 'sidebar_bg_image',

      flex: 0.6,
      editable: true,

      headerName: 'sidebar_bg_image',
    },

    {
      field: 'product_version',

      flex: 0.6,
      editable: true,

      headerName: 'product_version',
    },

    {
      field: 'is_demo',

      flex: 0.6,
      editable: true,

      headerName: 'is_demo',
    },

    {
      field: 'allowed_for_registration',

      flex: 0.6,
      editable: true,

      headerName: 'allowed_for_registration',
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
          entity='vips__user_settings'
          openModal={openModal}
          {...params}
        />
      ),
    },
  ];

  return (
    <div>
      <Widget title={humanize('Vips__user_settings')} disableWidgetMenu>
        <Box className={classes.actions}>
          <Link to='/admin/vips__user_settings/new' className={classes.element}>
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
            onClick={getVips__user_settingsCSV}
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
              onClick={() => sendVips__user_settingsCSV()}
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
                  ? window.location.origin + '/api-docs/#/Vips__user_settings'
                  : 'http://localhost:8080/api-docs/#/Vips__user_settings'
              }
            >
              API documentation for vips__user_settings
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

export default Vips__user_settingsTable;
