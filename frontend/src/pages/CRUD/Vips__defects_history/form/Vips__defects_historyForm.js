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

import vips__defects_historyFields from 'pages/CRUD/Vips__defects_history/helpers/vips__defects_historyFields';
import IniValues from 'components/FormItems/iniValues';
import PreparedValues from 'components/FormItems/preparedValues';
import FormValidations from 'components/FormItems/formValidations';
import Widget from 'components/Widget';

const Vips__defects_historyForm = (props) => {
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
    return IniValues(vips__defects_historyFields, record || {});
  };

  const formValidations = () => {
    return FormValidations(vips__defects_historyFields, record || {});
  };

  const handleSubmit = (values) => {
    const { id, ...data } = PreparedValues(
      vips__defects_historyFields,
      values || {},
    );
    onSubmit(id, data);
  };

  const title = () => {
    if (isProfile) {
      return 'Edit My Profile';
    }
    return isEditing
      ? 'Edit Vips__defects_history'
      : 'Add Vips__defects_history';
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
                  name={'defect_id'}
                  schema={vips__defects_historyFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'description'}
                  schema={vips__defects_historyFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'created_by_id'}
                  schema={vips__defects_historyFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'commented_by_id'}
                  schema={vips__defects_historyFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'solved_by_id'}
                  schema={vips__defects_historyFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'closed_by_id'}
                  schema={vips__defects_historyFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'updated_by_id'}
                  schema={vips__defects_historyFields}
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
export default Vips__defects_historyForm;
