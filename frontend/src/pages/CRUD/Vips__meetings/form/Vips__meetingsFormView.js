import { Formik } from 'formik';
import React, { Component, useEffect }  from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as dataFormat from 'pages/CRUD/Vips__meetings/table/Vips__meetingsDataFormatters';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Loader from 'components/Loader';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
// eslint-disable-next-line no-unused-vars
import SwitchFormItem from 'components/FormItems/items/SwitchFormItem';
// eslint-disable-next-line no-unused-vars
import RadioFormItem from 'components/FormItems/items/RadioFormItem';
// eslint-disable-next-line no-unused-vars
import SelectFormItem from 'components/FormItems/items/SelectFormItem';
// eslint-disable-next-line no-unused-vars
import DatePickerFormItem from 'components/FormItems/items/DatePickerFormItem';
// eslint-disable-next-line no-unused-vars
import ImagesFormItem from 'components/FormItems/items/ImagesFormItem';
// eslint-disable-next-line no-unused-vars
import FilesFormItem from 'components/FormItems/items/FilesFormItem';
// eslint-disable-next-line no-unused-vars
import ItemsList from 'components/FormItems/items/ItemsList';

import vips__meetingsFields from 'pages/CRUD/Vips__meetings/helpers/vips__meetingsFields';
import IniValues from 'components/FormItems/iniValues';
import PreparedValues from 'components/FormItems/preparedValues';
import FormValidations from 'components/FormItems/formValidations';
import Widget from 'components/Widget';

const Vips__meetingsForm = (props) => {

  const {
  findLoading,
  record,
  onCancel,
  } = props;

  const iniValues = () => {
  return IniValues(vips__meetingsFields, record || {});
  }
  const dispatch = useDispatch();

useEffect(() => {

}, []);

  const renderForm = () => (
  <Widget title={'View vips__meetings'} collapse close>
  <Formik
  initialValues={iniValues()}
  >
  {(form) => (
  <form>
    <Grid container spacing={3} direction="column">

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__meetingsFields['generated_id'].label}</Typography>
        <Typography >{form.values.generated_id}</Typography> 
      </Grid>

      <Grid item>
      <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__meetingsFields['organizer_id'].label}</Typography>
      <Typography >{form.values.organizer_id}</Typography>
      </Grid>

      <Grid item>
      <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__meetingsFields['project_id'].label}</Typography>
      <Typography >{form.values.project_id}</Typography>
      </Grid>

      <Grid item>
      <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__meetingsFields['client_id'].label}</Typography>
      <Typography >{form.values.client_id}</Typography>
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__meetingsFields['title'].label}</Typography>
        <Typography >{form.values.title}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__meetingsFields['description'].label}</Typography>
        <Typography >{form.values.description}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__meetingsFields['location'].label}</Typography>
        <Typography >{form.values.location}</Typography> 
      </Grid>

      <Grid item>
      <Typography variant='h6' style={{ marginBottom: 10 }}>{vips__meetingsFields['start_date'].label}</Typography>
      <Typography>{(form.values.start_date).toLocaleDateString() + ' ' + (form.values.start_date).toLocaleTimeString().slice(0,-6)}</Typography>
      </Grid>

      <Grid item>
      <Typography variant='h6' style={{ marginBottom: 10 }}>{vips__meetingsFields['end_date'].label}</Typography>
      <Typography>{(form.values.end_date).toLocaleDateString() + ' ' + (form.values.end_date).toLocaleTimeString().slice(0,-6)}</Typography>
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__meetingsFields['hour_time'].label}</Typography>
        <Typography >{form.values.hour_time}</Typography> 
      </Grid>

      <Grid item>
      <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__meetingsFields['status'].label}</Typography>
      <Typography >{form.values.status}</Typography>
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__meetingsFields['2=in'].label}</Typography>
        <Typography >{form.values.2=in}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__meetingsFields['3=cancel'].label}</Typography>
        <Typography >{form.values.3=cancel}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__meetingsFields['4=completed'].label}</Typography>
        <Typography >{form.values.4=completed}</Typography> 
      </Grid>

  <Grid container ml={3}  mt={3}>
    <Grid item>
      <Button
        color="primary"
        variant="outlined"
        onClick={() => onCancel()}
      >
      Back
      </Button>
    </Grid>
  </Grid>
</Grid>
      </form>
      )
      }
    </Formik>
  </Widget>
  );
  if (findLoading) {
  return <Loader />;
  }
  return renderForm();
  }
  export default Vips__meetingsForm;
