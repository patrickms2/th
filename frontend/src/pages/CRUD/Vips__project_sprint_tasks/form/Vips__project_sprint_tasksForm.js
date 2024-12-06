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

import vips__project_sprint_tasksFields from 'pages/CRUD/Vips__project_sprint_tasks/helpers/vips__project_sprint_tasksFields';
import IniValues from 'components/FormItems/iniValues';
import PreparedValues from 'components/FormItems/preparedValues';
import FormValidations from 'components/FormItems/formValidations';
import Widget from 'components/Widget';

const Vips__project_sprint_tasksForm = (props) => {
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
    return IniValues(vips__project_sprint_tasksFields, record || {});
  };

  const formValidations = () => {
    return FormValidations(vips__project_sprint_tasksFields, record || {});
  };

  const handleSubmit = (values) => {
    const { id, ...data } = PreparedValues(
      vips__project_sprint_tasksFields,
      values || {},
    );
    onSubmit(id, data);
  };

  const title = () => {
    if (isProfile) {
      return 'Edit My Profile';
    }
    return isEditing
      ? 'Edit Vips__project_sprint_tasks'
      : 'Add Vips__project_sprint_tasks';
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
                  name={'project_sprint_id'}
                  schema={vips__project_sprint_tasksFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'project_id'}
                  schema={vips__project_sprint_tasksFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'name'}
                  schema={vips__project_sprint_tasksFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'description'}
                  schema={vips__project_sprint_tasksFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'status'}
                  schema={vips__project_sprint_tasksFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'2=onhold'}
                  schema={vips__project_sprint_tasksFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'3=closed'}
                  schema={vips__project_sprint_tasksFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'4=released|story:1=open'}
                  schema={vips__project_sprint_tasksFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'2=inprogress'}
                  schema={vips__project_sprint_tasksFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'3=closed'}
                  schema={vips__project_sprint_tasksFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'type'}
                  schema={vips__project_sprint_tasksFields}
                />
              </Grid>

              <Grid item>
                <DatePickerFormItem
                  name={'start_date'}
                  schema={vips__project_sprint_tasksFields}
                />
              </Grid>

              <Grid item>
                <DatePickerFormItem
                  name={'end_date'}
                  schema={vips__project_sprint_tasksFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'estimated_hours'}
                  schema={vips__project_sprint_tasksFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'assign_to'}
                  schema={vips__project_sprint_tasksFields}
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
export default Vips__project_sprint_tasksForm;
