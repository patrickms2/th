import { Formik } from 'formik';
import React, { Component, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as dataFormat from 'pages/CRUD/Vips__invoices/table/Vips__invoicesDataFormatters';
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

import vips__invoicesFields from 'pages/CRUD/Vips__invoices/helpers/vips__invoicesFields';
import IniValues from 'components/FormItems/iniValues';
import PreparedValues from 'components/FormItems/preparedValues';
import FormValidations from 'components/FormItems/formValidations';
import Widget from 'components/Widget';

const Vips__invoicesForm = (props) => {
  const { findLoading, record, onCancel } = props;

  const iniValues = () => {
    return IniValues(vips__invoicesFields, record || {});
  };
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  const renderForm = () => (
    <Widget title={'View vips__invoices'} collapse close>
      <Formik initialValues={iniValues()}>
        {(form) => (
          <form>
            <Grid container spacing={3} direction='column'>
              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {vips__invoicesFields['parent_id'].label}
                </Typography>
                <Typography>{form.values.parent_id}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {vips__invoicesFields['user_id'].label}
                </Typography>
                <Typography>{form.values.user_id}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {vips__invoicesFields['client_id'].label}
                </Typography>
                <Typography>{form.values.client_id}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {vips__invoicesFields['project_id'].label}
                </Typography>
                <Typography>{form.values.project_id}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {vips__invoicesFields['estimate_id'].label}
                </Typography>
                <Typography>{form.values.estimate_id}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {vips__invoicesFields['invoice_number'].label}
                </Typography>
                <Typography>{form.values.invoice_number}</Typography>
              </Grid>

              <Grid item>
                <DatePickerFormItem
                  name={'invoice_date'}
                  schema={vips__invoicesFields}
                />
              </Grid>

              <Grid item>
                <DatePickerFormItem
                  name={'due_date'}
                  schema={vips__invoicesFields}
                />
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {vips__invoicesFields['sub_total'].label}
                </Typography>
                <Typography>{form.values.sub_total}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {vips__invoicesFields['total_tax'].label}
                </Typography>
                <Typography>{form.values.total_tax}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {vips__invoicesFields['discount_type'].label}
                </Typography>
                <Typography>{form.values.discount_type}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {vips__invoicesFields['discount'].label}
                </Typography>
                <Typography>{form.values.discount}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {vips__invoicesFields['total_discount'].label}
                </Typography>
                <Typography>{form.values.total_discount}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {vips__invoicesFields['adjustment'].label}
                </Typography>
                <Typography>{form.values.adjustment}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {vips__invoicesFields['total_amount'].label}
                </Typography>
                <Typography>{form.values.total_amount}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {vips__invoicesFields['total_due_amount'].label}
                </Typography>
                <Typography>{form.values.total_due_amount}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {vips__invoicesFields['reference'].label}
                </Typography>
                <Typography>{form.values.reference}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {vips__invoicesFields['note'].label}
                </Typography>
                <Typography>{form.values.note}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {vips__invoicesFields['recurrence'].label}
                </Typography>
                <Typography>{form.values.recurrence}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {vips__invoicesFields['recurrence_occurrences'].label}
                </Typography>
                <Typography>{form.values.recurrence_occurrences}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {vips__invoicesFields['recurrence_pattern'].label}
                </Typography>
                <Typography>{form.values.recurrence_pattern}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {vips__invoicesFields['is_recurrence_generated'].label}
                </Typography>
                <Typography>{form.values.is_recurrence_generated}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {vips__invoicesFields['last_overdue_reminder_date'].label}
                </Typography>
                <Typography>
                  {form.values.last_overdue_reminder_date.toLocaleDateString() +
                    ' ' +
                    form.values.last_overdue_reminder_date
                      .toLocaleTimeString()
                      .slice(0, -6)}
                </Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {vips__invoicesFields['status'].label}
                </Typography>
                <Typography>{form.values.status}</Typography>
              </Grid>

              <Grid container ml={3} mt={3}>
                <Grid item>
                  <Button
                    color='primary'
                    variant='outlined'
                    onClick={() => onCancel()}
                  >
                    Back
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </Widget>
  );
  if (findLoading) {
    return <Loader />;
  }
  return renderForm();
};
export default Vips__invoicesForm;
