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

import vips__project_userFields from 'pages/CRUD/Vips__project_user/helpers/vips__project_userFields';
import IniValues from 'components/FormItems/iniValues';
import PreparedValues from 'components/FormItems/preparedValues';
import FormValidations from 'components/FormItems/formValidations';
import Widget from 'components/Widget';

const Vips__project_userForm = (props) => {
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
    return IniValues(vips__project_userFields, record || {});
  };

  const formValidations = () => {
    return FormValidations(vips__project_userFields, record || {});
  };

  const handleSubmit = (values) => {
    const { id, ...data } = PreparedValues(
      vips__project_userFields,
      values || {},
    );
    onSubmit(id, data);
  };

  const title = () => {
    if (isProfile) {
      return 'Edit My Profile';
    }
    return isEditing ? 'Edit Vips__project_user' : 'Add Vips__project_user';
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
                  schema={vips__project_userFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'project_id'}
                  schema={vips__project_userFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'view'}
                  schema={vips__project_userFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'1=yes'}
                  schema={vips__project_userFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'edit'}
                  schema={vips__project_userFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'1=yes'}
                  schema={vips__project_userFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'1=yes'}
                  schema={vips__project_userFields}
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
export default Vips__project_userForm;
