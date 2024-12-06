import { Formik } from 'formik';
import React, { Component, useEffect }  from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as dataFormat from 'pages/CRUD/Vips__tasks/table/Vips__tasksDataFormatters';
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

import vips__tasksFields from 'pages/CRUD/Vips__tasks/helpers/vips__tasksFields';
import IniValues from 'components/FormItems/iniValues';
import PreparedValues from 'components/FormItems/preparedValues';
import FormValidations from 'components/FormItems/formValidations';
import Widget from 'components/Widget';

const Vips__tasksForm = (props) => {

  const {
  findLoading,
  record,
  onCancel,
  } = props;

  const iniValues = () => {
  return IniValues(vips__tasksFields, record || {});
  }
  const dispatch = useDispatch();

useEffect(() => {

}, []);

  const renderForm = () => (
  <Widget title={'View vips__tasks'} collapse close>
  <Formik
  initialValues={iniValues()}
  >
  {(form) => (
  <form>
    <Grid container spacing={3} direction="column">

      <Grid item>
      <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__tasksFields['parent_task_id'].label}</Typography>
      <Typography >{form.values.parent_task_id}</Typography>
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__tasksFields['generated_id'].label}</Typography>
        <Typography >{form.values.generated_id}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__tasksFields['name'].label}</Typography>
        <Typography >{form.values.name}</Typography> 
      </Grid>

      <Grid item>
      <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__tasksFields['project_id'].label}</Typography>
      <Typography >{form.values.project_id}</Typography>
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__tasksFields['project_version'].label}</Typography>
        <Typography >{form.values.project_version}</Typography> 
      </Grid>

      <Grid item>
        <DatePickerFormItem
          name={'planned_start_date'}
          schema={vips__tasksFields}
        />
      </Grid>

      <Grid item>
        <DatePickerFormItem
          name={'planned_end_date'}
          schema={vips__tasksFields}
        />
      </Grid>

      <Grid item>
      <Typography variant='h6' style={{ marginBottom: 10 }}>{vips__tasksFields['task_start_date'].label}</Typography>
      <Typography>{(form.values.task_start_date).toLocaleDateString() + ' ' + (form.values.task_start_date).toLocaleTimeString().slice(0,-6)}</Typography>
      </Grid>

      <Grid item>
      <Typography variant='h6' style={{ marginBottom: 10 }}>{vips__tasksFields['task_end_date'].label}</Typography>
      <Typography>{(form.values.task_end_date).toLocaleDateString() + ' ' + (form.values.task_end_date).toLocaleTimeString().slice(0,-6)}</Typography>
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__tasksFields['estimated_hours'].label}</Typography>
        <Typography >{form.values.estimated_hours}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__tasksFields['actual_hours'].label}</Typography>
        <Typography >{form.values.actual_hours}</Typography> 
      </Grid>

      <Grid item>
      <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__tasksFields['status'].label}</Typography>
      <Typography >{form.values.status}</Typography>
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__tasksFields['2=in'].label}</Typography>
        <Typography >{form.values.2=in}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__tasksFields['3=on'].label}</Typography>
        <Typography >{form.values.3=on}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__tasksFields['4=waiting'].label}</Typography>
        <Typography >{form.values.4=waiting}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__tasksFields['5=cancel'].label}</Typography>
        <Typography >{form.values.5=cancel}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__tasksFields['6=completed'].label}</Typography>
        <Typography >{form.values.6=completed}</Typography> 
      </Grid>

      <Grid item>
      <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__tasksFields['priority'].label}</Typography>
      <Typography >{form.values.priority}</Typography>
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__tasksFields['2=very'].label}</Typography>
        <Typography >{form.values.2=very}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__tasksFields['3=high'].label}</Typography>
        <Typography >{form.values.3=high}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__tasksFields['4=medium'].label}</Typography>
        <Typography >{form.values.4=medium}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__tasksFields['5=low'].label}</Typography>
        <Typography >{form.values.5=low}</Typography> 
      </Grid>

      <Grid item>
      <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__tasksFields['progress'].label}</Typography>
      <Typography >{form.values.progress}</Typography>
      </Grid>

      <Grid item>
      <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__tasksFields['assign_to'].label}</Typography>
      <Typography >{form.values.assign_to}</Typography>
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__tasksFields['description'].label}</Typography>
        <Typography >{form.values.description}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__tasksFields['notes'].label}</Typography>
        <Typography >{form.values.notes}</Typography> 
      </Grid>

      <Grid item>
      <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__tasksFields['order'].label}</Typography>
      <Typography >{form.values.order}</Typography>
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
  export default Vips__tasksForm;
