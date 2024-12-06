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

import vips__appointmentFields from 'pages/CRUD/Vips__appointment/helpers/vips__appointmentFields';
import IniValues from 'components/FormItems/iniValues';
import PreparedValues from 'components/FormItems/preparedValues';
import FormValidations from 'components/FormItems/formValidations';
import Widget from 'components/Widget';

const Vips__appointmentForm = (props) => {
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
    return IniValues(vips__appointmentFields, record || {});
  };

  const formValidations = () => {
    return FormValidations(vips__appointmentFields, record || {});
  };

  const handleSubmit = (values) => {
    const { id, ...data } = PreparedValues(
      vips__appointmentFields,
      values || {},
    );
    onSubmit(id, data);
  };

  const title = () => {
    if (isProfile) {
      return 'Edit My Profile';
    }
    return isEditing ? 'Edit Vips__appointment' : 'Add Vips__appointment';
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
                  name={'generated_id'}
                  schema={vips__appointmentFields}
                  autoFocus
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'user_id'}
                  schema={vips__appointmentFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'title'}
                  schema={vips__appointmentFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'client_id'}
                  schema={vips__appointmentFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'provider_id'}
                  schema={vips__appointmentFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'attendees'}
                  schema={vips__appointmentFields}
                />
              </Grid>

              <Grid item>
                <DatePickerFormItem
                  name={'start_date_time'}
                  schema={vips__appointmentFields}
                  showTimeInput
                />
              </Grid>

              <Grid item>
                <DatePickerFormItem
                  name={'end_date_time'}
                  schema={vips__appointmentFields}
                  showTimeInput
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'location'}
                  schema={vips__appointmentFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem name={'note'} schema={vips__appointmentFields} />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'recurrence'}
                  schema={vips__appointmentFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'recurrence_occurrences'}
                  schema={vips__appointmentFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'recurrence_pattern'}
                  schema={vips__appointmentFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'status'}
                  schema={vips__appointmentFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'2=confirmed'}
                  schema={vips__appointmentFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'3=finished'}
                  schema={vips__appointmentFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'4=canceled'}
                  schema={vips__appointmentFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'send_confirmation'}
                  schema={vips__appointmentFields}
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
export default Vips__appointmentForm;
