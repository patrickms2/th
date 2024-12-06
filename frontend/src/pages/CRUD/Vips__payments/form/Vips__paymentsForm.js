import { Formik } from 'formik';
import React, { Component } from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Loader from 'components/Loader';
// eslint-disable-next-line no-unused-vars
import InputFormItem from 'components/FormItems/items/InputFormItem';
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

import vips__paymentsFields from 'pages/CRUD/Vips__payments/helpers/vips__paymentsFields';
import IniValues from 'components/FormItems/iniValues';
import PreparedValues from 'components/FormItems/preparedValues';
import FormValidations from 'components/FormItems/formValidations';
import Widget from 'components/Widget';

const Vips__paymentsForm = (props) => {
  const {
    isEditing,
    isProfile,
    findLoading,
    saveLoading,
    record,
    onSubmit,
    onCancel,
    modal,
  } = props;

  const iniValues = () => {
    return IniValues(vips__paymentsFields, record || {});
  };

  const formValidations = () => {
    return FormValidations(vips__paymentsFields, record || {});
  };

  const handleSubmit = (values) => {
    const { id, ...data } = PreparedValues(vips__paymentsFields, values || {});
    onSubmit(id, data);
  };

  const title = () => {
    if (isProfile) {
      return 'Edit My Profile';
    }
    return isEditing ? 'Edit Vips__payments' : 'Add Vips__payments';
  };

  const renderForm = () => (
    <Widget title={title()} collapse close>
      <Formik
        onSubmit={handleSubmit}
        initialValues={iniValues()}
        validationSchema={formValidations()}
      >
        {(form) => (
          <form onSubmit={form.handleSubmit}>
            <Grid container spacing={3} direction='column'>
              <Grid item>
                <InputFormItem name={'user_id'} schema={vips__paymentsFields} />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'client_id'}
                  schema={vips__paymentsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'receipt_number'}
                  schema={vips__paymentsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'invoice_id'}
                  schema={vips__paymentsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'transaction_id'}
                  schema={vips__paymentsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'payment_method'}
                  schema={vips__paymentsFields}
                />
              </Grid>

              <Grid item>
                <DatePickerFormItem
                  name={'date'}
                  schema={vips__paymentsFields}
                  showTimeInput
                />
              </Grid>

              <Grid item>
                <InputFormItem name={'amount'} schema={vips__paymentsFields} />
              </Grid>

              <Grid item>
                <InputFormItem name={'notes'} schema={vips__paymentsFields} />
              </Grid>

              <Grid item>
                <SelectFormItem
                  name={'status'}
                  schema={vips__paymentsFields}
                  form={form}
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} mt={2}>
              <Grid item>
                <Button
                  color='primary'
                  variant='contained'
                  onClick={form.handleSubmit}
                >
                  Save
                </Button>
              </Grid>
              <Grid item>
                <Button
                  color='primary'
                  variant='outlined'
                  onClick={form.handleReset}
                >
                  Reset
                </Button>
              </Grid>
              <Grid item>
                <Button
                  color='primary'
                  variant='outlined'
                  onClick={() => onCancel()}
                >
                  Cancel
                </Button>
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
  if (isEditing && !record) {
    return <Loader />;
  }
  return renderForm();
};
export default Vips__paymentsForm;
