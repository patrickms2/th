import { Formik } from 'formik';
import React, { Component, useEffect }  from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as dataFormat from 'pages/CRUD/Vips__leaves/table/Vips__leavesDataFormatters';
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

import vips__leavesFields from 'pages/CRUD/Vips__leaves/helpers/vips__leavesFields';
import IniValues from 'components/FormItems/iniValues';
import PreparedValues from 'components/FormItems/preparedValues';
import FormValidations from 'components/FormItems/formValidations';
import Widget from 'components/Widget';

const Vips__leavesForm = (props) => {

  const {
  findLoading,
  record,
  onCancel,
  } = props;

  const iniValues = () => {
  return IniValues(vips__leavesFields, record || {});
  }
  const dispatch = useDispatch();

useEffect(() => {

}, []);

  const renderForm = () => (
  <Widget title={'View vips__leaves'} collapse close>
  <Formik
  initialValues={iniValues()}
  >
  {(form) => (
  <form>
    <Grid container spacing={3} direction="column">

      <Grid item>
      <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__leavesFields['user_id'].label}</Typography>
      <Typography >{form.values.user_id}</Typography>
      </Grid>

      <Grid item>
      <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__leavesFields['leave_type_id'].label}</Typography>
      <Typography >{form.values.leave_type_id}</Typography>
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__leavesFields['duration'].label}</Typography>
        <Typography >{form.values.duration}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__leavesFields['half'].label}</Typography>
        <Typography >{form.values.half}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__leavesFields['duration_type'].label}</Typography>
        <Typography >{form.values.duration_type}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__leavesFields['second_half'].label}</Typography>
        <Typography >{form.values.second_half}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__leavesFields['leave_day'].label}</Typography>
        <Typography >{form.values.leave_day}</Typography> 
      </Grid>

      <Grid item>
        <DatePickerFormItem
          name={'leave_date'}
          schema={vips__leavesFields}
        />
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__leavesFields['reason'].label}</Typography>
        <Typography >{form.values.reason}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__leavesFields['reject_reason'].label}</Typography>
        <Typography >{form.values.reject_reason}</Typography> 
      </Grid>

      <Grid item>
      <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__leavesFields['status'].label}</Typography>
      <Typography >{form.values.status}</Typography>
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__leavesFields['2=approved'].label}</Typography>
        <Typography >{form.values.2=approved}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__leavesFields['3=rejected'].label}</Typography>
        <Typography >{form.values.3=rejected}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__leavesFields['4=cancel'].label}</Typography>
        <Typography >{form.values.4=cancel}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__leavesFields['5=taken'].label}</Typography>
        <Typography >{form.values.5=taken}</Typography> 
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
  export default Vips__leavesForm;
