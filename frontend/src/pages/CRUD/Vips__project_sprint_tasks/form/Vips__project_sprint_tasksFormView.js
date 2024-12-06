import { Formik } from 'formik';
import React, { Component, useEffect }  from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as dataFormat from 'pages/CRUD/Vips__project_sprint_tasks/table/Vips__project_sprint_tasksDataFormatters';
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

import vips__project_sprint_tasksFields from 'pages/CRUD/Vips__project_sprint_tasks/helpers/vips__project_sprint_tasksFields';
import IniValues from 'components/FormItems/iniValues';
import PreparedValues from 'components/FormItems/preparedValues';
import FormValidations from 'components/FormItems/formValidations';
import Widget from 'components/Widget';

const Vips__project_sprint_tasksForm = (props) => {

  const {
  findLoading,
  record,
  onCancel,
  } = props;

  const iniValues = () => {
  return IniValues(vips__project_sprint_tasksFields, record || {});
  }
  const dispatch = useDispatch();

useEffect(() => {

}, []);

  const renderForm = () => (
  <Widget title={'View vips__project_sprint_tasks'} collapse close>
  <Formik
  initialValues={iniValues()}
  >
  {(form) => (
  <form>
    <Grid container spacing={3} direction="column">

      <Grid item>
      <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__project_sprint_tasksFields['project_sprint_id'].label}</Typography>
      <Typography >{form.values.project_sprint_id}</Typography>
      </Grid>

      <Grid item>
      <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__project_sprint_tasksFields['project_id'].label}</Typography>
      <Typography >{form.values.project_id}</Typography>
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__project_sprint_tasksFields['name'].label}</Typography>
        <Typography >{form.values.name}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__project_sprint_tasksFields['description'].label}</Typography>
        <Typography >{form.values.description}</Typography> 
      </Grid>

      <Grid item>
      <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__project_sprint_tasksFields['status'].label}</Typography>
      <Typography >{form.values.status}</Typography>
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__project_sprint_tasksFields['2=onhold'].label}</Typography>
        <Typography >{form.values.2=onhold}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__project_sprint_tasksFields['3=closed'].label}</Typography>
        <Typography >{form.values.3=closed}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__project_sprint_tasksFields['4=released|story:1=open'].label}</Typography>
        <Typography >{form.values.4=released|story:1=open}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__project_sprint_tasksFields['2=inprogress'].label}</Typography>
        <Typography >{form.values.2=inprogress}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__project_sprint_tasksFields['3=closed'].label}</Typography>
        <Typography >{form.values.3=closed}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__project_sprint_tasksFields['type'].label}</Typography>
        <Typography >{form.values.type}</Typography> 
      </Grid>

      <Grid item>
        <DatePickerFormItem
          name={'start_date'}
          schema={vips__project_sprint_tasksFields}
        />
      </Grid>

      <Grid item>
        <DatePickerFormItem
          name={'end_date'}
          schema={vips__project_sprint_tasksFields}
        />
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__project_sprint_tasksFields['estimated_hours'].label}</Typography>
        <Typography >{form.values.estimated_hours}</Typography> 
      </Grid>

      <Grid item>
      <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__project_sprint_tasksFields['assign_to'].label}</Typography>
      <Typography >{form.values.assign_to}</Typography>
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
  export default Vips__project_sprint_tasksForm;
