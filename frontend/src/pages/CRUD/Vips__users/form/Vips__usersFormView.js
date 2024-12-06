import { Formik } from 'formik';
import React, { Component, useEffect }  from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as dataFormat from 'pages/CRUD/Vips__users/table/Vips__usersDataFormatters';
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

import vips__usersFields from 'pages/CRUD/Vips__users/helpers/vips__usersFields';
import IniValues from 'components/FormItems/iniValues';
import PreparedValues from 'components/FormItems/preparedValues';
import FormValidations from 'components/FormItems/formValidations';
import Widget from 'components/Widget';

const Vips__usersForm = (props) => {

  const {
  findLoading,
  record,
  onCancel,
  } = props;

  const iniValues = () => {
  return IniValues(vips__usersFields, record || {});
  }
  const dispatch = useDispatch();

useEffect(() => {

}, []);

  const renderForm = () => (
  <Widget title={'View vips__users'} collapse close>
  <Formik
  initialValues={iniValues()}
  >
  {(form) => (
  <form>
    <Grid container spacing={3} direction="column">

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__usersFields['user_generated_id'].label}</Typography>
        <Typography >{form.values.user_generated_id}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__usersFields['firstname'].label}</Typography>
        <Typography >{form.values.firstname}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__usersFields['lastname'].label}</Typography>
        <Typography >{form.values.lastname}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__usersFields['username'].label}</Typography>
        <Typography >{form.values.username}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__usersFields['email'].label}</Typography>
        <Typography >{form.values.email}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__usersFields['password'].label}</Typography>
        <Typography >{form.values.password}</Typography> 
      </Grid>

      <Grid item>
      <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__usersFields['is_super_admin'].label}</Typography>
      <Typography >{form.values.is_super_admin}</Typography>
      </Grid>

      <Grid item>
      <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__usersFields['is_client'].label}</Typography>
      <Typography >{form.values.is_client}</Typography>
      </Grid>

      <Grid item>
      <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__usersFields['is_active'].label}</Typography>
      <Typography >{form.values.is_active}</Typography>
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__usersFields['0=inactive'].label}</Typography>
        <Typography >{form.values.0=inactive}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__usersFields['email_verified'].label}</Typography>
         <Typography >{form.values.email_verified}</Typography>
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__usersFields['0=unverified'].label}</Typography>
        <Typography >{form.values.0=unverified}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__usersFields['email_verification_code'].label}</Typography>
        <Typography >{form.values.email_verification_code}</Typography> 
      </Grid>

      <Grid item>
      <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__usersFields['online_status'].label}</Typography>
      <Typography >{form.values.online_status}</Typography>
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__usersFields['0=offline'].label}</Typography>
        <Typography >{form.values.0=offline}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__usersFields['avatar'].label}</Typography>
        <Typography >{form.values.avatar}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__usersFields['last_ip'].label}</Typography>
        <Typography >{form.values.last_ip}</Typography> 
      </Grid>

      <Grid item>
      <Typography variant='h6' style={{ marginBottom: 10 }}>{vips__usersFields['last_login'].label}</Typography>
      <Typography>{(form.values.last_login).toLocaleDateString() + ' ' + (form.values.last_login).toLocaleTimeString().slice(0,-6)}</Typography>
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__usersFields['emp_id'].label}</Typography>
        <Typography >{form.values.emp_id}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__usersFields['city'].label}</Typography>
        <Typography >{form.values.city}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__usersFields['state'].label}</Typography>
        <Typography >{form.values.state}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__usersFields['country'].label}</Typography>
        <Typography >{form.values.country}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__usersFields['postal_code'].label}</Typography>
        <Typography >{form.values.postal_code}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__usersFields['language'].label}</Typography>
        <Typography >{form.values.language}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__usersFields['address'].label}</Typography>
        <Typography >{form.values.address}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__usersFields['phone'].label}</Typography>
        <Typography >{form.values.phone}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__usersFields['mobile'].label}</Typography>
        <Typography >{form.values.mobile}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__usersFields['skype'].label}</Typography>
        <Typography >{form.values.skype}</Typography> 
      </Grid>

      <Grid item>
        <DatePickerFormItem
          name={'joining_date'}
          schema={vips__usersFields}
        />
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__usersFields['gender'].label}</Typography>
        <Typography >{form.values.gender}</Typography> 
      </Grid>

      <Grid item>
        <DatePickerFormItem
          name={'dob'}
          schema={vips__usersFields}
        />
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__usersFields['maritial_status'].label}</Typography>
        <Typography >{form.values.maritial_status}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__usersFields['father_name'].label}</Typography>
        <Typography >{form.values.father_name}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__usersFields['mother_name'].label}</Typography>
        <Typography >{form.values.mother_name}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__usersFields['permission'].label}</Typography>
        <Typography >{form.values.permission}</Typography> 
      </Grid>

      <Grid item>
      <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__usersFields['can_view_all_users'].label}</Typography>
      <Typography >{form.values.can_view_all_users}</Typography>
      </Grid>

      <Grid item>
      <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__usersFields['primary_manager'].label}</Typography>
      <Typography >{form.values.primary_manager}</Typography>
      </Grid>

      <Grid item>
      <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__usersFields['secondary_manager'].label}</Typography>
      <Typography >{form.values.secondary_manager}</Typography>
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__usersFields['remember_token'].label}</Typography>
        <Typography >{form.values.remember_token}</Typography> 
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
  export default Vips__usersForm;
