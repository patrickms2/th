import { Formik } from 'formik';
import React, { Component, useEffect }  from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as dataFormat from 'pages/CRUD/Vips__projects/table/Vips__projectsDataFormatters';
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

import vips__projectsFields from 'pages/CRUD/Vips__projects/helpers/vips__projectsFields';
import IniValues from 'components/FormItems/iniValues';
import PreparedValues from 'components/FormItems/preparedValues';
import FormValidations from 'components/FormItems/formValidations';
import Widget from 'components/Widget';

const Vips__projectsForm = (props) => {

  const {
  findLoading,
  record,
  onCancel,
  } = props;

  const iniValues = () => {
  return IniValues(vips__projectsFields, record || {});
  }
  const dispatch = useDispatch();

useEffect(() => {

}, []);

  const renderForm = () => (
  <Widget title={'View vips__projects'} collapse close>
  <Formik
  initialValues={iniValues()}
  >
  {(form) => (
  <form>
    <Grid container spacing={3} direction="column">

      <Grid item>
      <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__projectsFields['user_id'].label}</Typography>
      <Typography >{form.values.user_id}</Typography>
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__projectsFields['generated_id'].label}</Typography>
        <Typography >{form.values.generated_id}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__projectsFields['project_name'].label}</Typography>
        <Typography >{form.values.project_name}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__projectsFields['project_version'].label}</Typography>
        <Typography >{form.values.project_version}</Typography> 
      </Grid>

      <Grid item>
      <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__projectsFields['client_id'].label}</Typography>
      <Typography >{form.values.client_id}</Typography>
      </Grid>

      <Grid item>
      <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__projectsFields['progress'].label}</Typography>
      <Typography >{form.values.progress}</Typography>
      </Grid>

      <Grid item>
      <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__projectsFields['project_hours'].label}</Typography>
      <Typography >{form.values.project_hours}</Typography>
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__projectsFields['1=task'].label}</Typography>
        <Typography >{form.values.1=task}</Typography> 
      </Grid>

      <Grid item>
        <DatePickerFormItem
          name={'start_date'}
          schema={vips__projectsFields}
        />
      </Grid>

      <Grid item>
        <DatePickerFormItem
          name={'end_date'}
          schema={vips__projectsFields}
        />
      </Grid>

      <Grid item>
      <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__projectsFields['billing_type'].label}</Typography>
      <Typography >{form.values.billing_type}</Typography>
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__projectsFields['2=hourly'].label}</Typography>
        <Typography >{form.values.2=hourly}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__projectsFields['price_rate'].label}</Typography>
        <Typography >{form.values.price_rate}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__projectsFields['estimated_hours'].label}</Typography>
        <Typography >{form.values.estimated_hours}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__projectsFields['actual_hours'].label}</Typography>
        <Typography >{form.values.actual_hours}</Typography> 
      </Grid>

      <Grid item>
      <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__projectsFields['status'].label}</Typography>
      <Typography >{form.values.status}</Typography>
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__projectsFields['2=inprogress'].label}</Typography>
        <Typography >{form.values.2=inprogress}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__projectsFields['3=onhold'].label}</Typography>
        <Typography >{form.values.3=onhold}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__projectsFields['4=cancel'].label}</Typography>
        <Typography >{form.values.4=cancel}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__projectsFields['5=completed'].label}</Typography>
        <Typography >{form.values.5=completed}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__projectsFields['demo_url'].label}</Typography>
        <Typography >{form.values.demo_url}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__projectsFields['description'].label}</Typography>
        <Typography >{form.values.description}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__projectsFields['project_logo'].label}</Typography>
        <Typography >{form.values.project_logo}</Typography> 
      </Grid>

      <Grid item>
      <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__projectsFields['assign_to'].label}</Typography>
      <Typography >{form.values.assign_to}</Typography>
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__projectsFields['assign_members'].label}</Typography>
        <Typography >{form.values.assign_members}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__projectsFields['notes'].label}</Typography>
        <Typography >{form.values.notes}</Typography> 
      </Grid>

      <Grid item>
      <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__projectsFields['is_overdue'].label}</Typography>
      <Typography >{form.values.is_overdue}</Typography>
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
  export default Vips__projectsForm;
