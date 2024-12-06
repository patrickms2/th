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

import vips__projectsFields from 'pages/CRUD/Vips__projects/helpers/vips__projectsFields';
import IniValues from 'components/FormItems/iniValues';
import PreparedValues from 'components/FormItems/preparedValues';
import FormValidations from 'components/FormItems/formValidations';
import Widget from 'components/Widget';

const Vips__projectsForm = (props) => {
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
    return IniValues(vips__projectsFields, record || {});
  };

  const formValidations = () => {
    return FormValidations(vips__projectsFields, record || {});
  };

  const handleSubmit = (values) => {
    const { id, ...data } = PreparedValues(vips__projectsFields, values || {});
    onSubmit(id, data);
  };

  const title = () => {
    if (isProfile) {
      return 'Edit My Profile';
    }
    return isEditing ? 'Edit Vips__projects' : 'Add Vips__projects';
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
                <InputFormItem name={'user_id'} schema={vips__projectsFields} />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'generated_id'}
                  schema={vips__projectsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'project_name'}
                  schema={vips__projectsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'project_version'}
                  schema={vips__projectsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'client_id'}
                  schema={vips__projectsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'progress'}
                  schema={vips__projectsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'project_hours'}
                  schema={vips__projectsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem name={'1=task'} schema={vips__projectsFields} />
              </Grid>

              <Grid item>
                <DatePickerFormItem
                  name={'start_date'}
                  schema={vips__projectsFields}
                />
              </Grid>

              <Grid item>
                <DatePickerFormItem
                  name={'end_date'}
                  schema={vips__projectsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'billing_type'}
                  schema={vips__projectsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'2=hourly'}
                  schema={vips__projectsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'price_rate'}
                  schema={vips__projectsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'estimated_hours'}
                  schema={vips__projectsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'actual_hours'}
                  schema={vips__projectsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem name={'status'} schema={vips__projectsFields} />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'2=inprogress'}
                  schema={vips__projectsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'3=onhold'}
                  schema={vips__projectsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'4=cancel'}
                  schema={vips__projectsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'5=completed'}
                  schema={vips__projectsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'demo_url'}
                  schema={vips__projectsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'description'}
                  schema={vips__projectsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'project_logo'}
                  schema={vips__projectsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'assign_to'}
                  schema={vips__projectsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'assign_members'}
                  schema={vips__projectsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem name={'notes'} schema={vips__projectsFields} />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'is_overdue'}
                  schema={vips__projectsFields}
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
export default Vips__projectsForm;
