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

import vips__invoicesFields from 'pages/CRUD/Vips__invoices/helpers/vips__invoicesFields';
import IniValues from 'components/FormItems/iniValues';
import PreparedValues from 'components/FormItems/preparedValues';
import FormValidations from 'components/FormItems/formValidations';
import Widget from 'components/Widget';

const Vips__invoicesForm = (props) => {
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
    return IniValues(vips__invoicesFields, record || {});
  };

  const formValidations = () => {
    return FormValidations(vips__invoicesFields, record || {});
  };

  const handleSubmit = (values) => {
    const { id, ...data } = PreparedValues(vips__invoicesFields, values || {});
    onSubmit(id, data);
  };

  const title = () => {
    if (isProfile) {
      return 'Edit My Profile';
    }
    return isEditing ? 'Edit Vips__invoices' : 'Add Vips__invoices';
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
                <InputFormItem
                  name={'parent_id'}
                  schema={vips__invoicesFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem name={'user_id'} schema={vips__invoicesFields} />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'client_id'}
                  schema={vips__invoicesFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'project_id'}
                  schema={vips__invoicesFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'estimate_id'}
                  schema={vips__invoicesFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'invoice_number'}
                  schema={vips__invoicesFields}
                />
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
                <InputFormItem
                  name={'sub_total'}
                  schema={vips__invoicesFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'total_tax'}
                  schema={vips__invoicesFields}
                />
              </Grid>

              <Grid item>
                <SelectFormItem
                  name={'discount_type'}
                  schema={vips__invoicesFields}
                  form={form}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'discount'}
                  schema={vips__invoicesFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'total_discount'}
                  schema={vips__invoicesFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'adjustment'}
                  schema={vips__invoicesFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'total_amount'}
                  schema={vips__invoicesFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'total_due_amount'}
                  schema={vips__invoicesFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'reference'}
                  schema={vips__invoicesFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem name={'note'} schema={vips__invoicesFields} />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'recurrence'}
                  schema={vips__invoicesFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'recurrence_occurrences'}
                  schema={vips__invoicesFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'recurrence_pattern'}
                  schema={vips__invoicesFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'is_recurrence_generated'}
                  schema={vips__invoicesFields}
                />
              </Grid>

              <Grid item>
                <DatePickerFormItem
                  name={'last_overdue_reminder_date'}
                  schema={vips__invoicesFields}
                  showTimeInput
                />
              </Grid>

              <Grid item>
                <SelectFormItem
                  name={'status'}
                  schema={vips__invoicesFields}
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
export default Vips__invoicesForm;
