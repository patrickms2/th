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

import vips__announcementsFields from 'pages/CRUD/Vips__announcements/helpers/vips__announcementsFields';
import IniValues from 'components/FormItems/iniValues';
import PreparedValues from 'components/FormItems/preparedValues';
import FormValidations from 'components/FormItems/formValidations';
import Widget from 'components/Widget';

const Vips__announcementsForm = (props) => {
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
    return IniValues(vips__announcementsFields, record || {});
  };

  const formValidations = () => {
    return FormValidations(vips__announcementsFields, record || {});
  };

  const handleSubmit = (values) => {
    const { id, ...data } = PreparedValues(
      vips__announcementsFields,
      values || {},
    );
    onSubmit(id, data);
  };

  const title = () => {
    if (isProfile) {
      return 'Edit My Profile';
    }
    return isEditing ? 'Edit Vips__announcements' : 'Add Vips__announcements';
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
                  name={'user_id'}
                  schema={vips__announcementsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'title'}
                  schema={vips__announcementsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'description'}
                  schema={vips__announcementsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'status'}
                  schema={vips__announcementsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'1=publish'}
                  schema={vips__announcementsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'2=completed'}
                  schema={vips__announcementsFields}
                />
              </Grid>

              <Grid item>
                <DatePickerFormItem
                  name={'start_date'}
                  schema={vips__announcementsFields}
                />
              </Grid>

              <Grid item>
                <DatePickerFormItem
                  name={'end_date'}
                  schema={vips__announcementsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'all_client'}
                  schema={vips__announcementsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'1=all'}
                  schema={vips__announcementsFields}
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
export default Vips__announcementsForm;