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

import vips__usersFields from 'pages/CRUD/Vips__users/helpers/vips__usersFields';
import IniValues from 'components/FormItems/iniValues';
import PreparedValues from 'components/FormItems/preparedValues';
import FormValidations from 'components/FormItems/formValidations';
import Widget from 'components/Widget';

const Vips__usersForm = (props) => {
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
    return IniValues(vips__usersFields, record || {});
  };

  const formValidations = () => {
    return FormValidations(vips__usersFields, record || {});
  };

  const handleSubmit = (values) => {
    const { id, ...data } = PreparedValues(vips__usersFields, values || {});
    onSubmit(id, data);
  };

  const title = () => {
    if (isProfile) {
      return 'Edit My Profile';
    }
    return isEditing ? 'Edit Vips__users' : 'Add Vips__users';
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
                  name={'user_generated_id'}
                  schema={vips__usersFields}
                  autoFocus
                />
              </Grid>

              <Grid item>
                <InputFormItem name={'firstname'} schema={vips__usersFields} />
              </Grid>

              <Grid item>
                <InputFormItem name={'lastname'} schema={vips__usersFields} />
              </Grid>

              <Grid item>
                <InputFormItem name={'username'} schema={vips__usersFields} />
              </Grid>

              <Grid item>
                <InputFormItem name={'email'} schema={vips__usersFields} />
              </Grid>

              <Grid item>
                <InputFormItem name={'password'} schema={vips__usersFields} />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'is_super_admin'}
                  schema={vips__usersFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem name={'is_client'} schema={vips__usersFields} />
              </Grid>

              <Grid item>
                <InputFormItem name={'is_active'} schema={vips__usersFields} />
              </Grid>

              <Grid item>
                <InputFormItem name={'0=inactive'} schema={vips__usersFields} />
              </Grid>

              <Grid item>
                <SelectFormItem
                  name={'email_verified'}
                  schema={vips__usersFields}
                  form={form}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'0=unverified'}
                  schema={vips__usersFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'email_verification_code'}
                  schema={vips__usersFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'online_status'}
                  schema={vips__usersFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem name={'0=offline'} schema={vips__usersFields} />
              </Grid>

              <Grid item>
                <InputFormItem name={'avatar'} schema={vips__usersFields} />
              </Grid>

              <Grid item>
                <InputFormItem name={'last_ip'} schema={vips__usersFields} />
              </Grid>

              <Grid item>
                <DatePickerFormItem
                  name={'last_login'}
                  schema={vips__usersFields}
                  showTimeInput
                />
              </Grid>

              <Grid item>
                <InputFormItem name={'emp_id'} schema={vips__usersFields} />
              </Grid>

              <Grid item>
                <InputFormItem name={'city'} schema={vips__usersFields} />
              </Grid>

              <Grid item>
                <InputFormItem name={'state'} schema={vips__usersFields} />
              </Grid>

              <Grid item>
                <InputFormItem name={'country'} schema={vips__usersFields} />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'postal_code'}
                  schema={vips__usersFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem name={'language'} schema={vips__usersFields} />
              </Grid>

              <Grid item>
                <InputFormItem name={'address'} schema={vips__usersFields} />
              </Grid>

              <Grid item>
                <InputFormItem name={'phone'} schema={vips__usersFields} />
              </Grid>

              <Grid item>
                <InputFormItem name={'mobile'} schema={vips__usersFields} />
              </Grid>

              <Grid item>
                <InputFormItem name={'skype'} schema={vips__usersFields} />
              </Grid>

              <Grid item>
                <DatePickerFormItem
                  name={'joining_date'}
                  schema={vips__usersFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem name={'gender'} schema={vips__usersFields} />
              </Grid>

              <Grid item>
                <DatePickerFormItem name={'dob'} schema={vips__usersFields} />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'maritial_status'}
                  schema={vips__usersFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'father_name'}
                  schema={vips__usersFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'mother_name'}
                  schema={vips__usersFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem name={'permission'} schema={vips__usersFields} />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'can_view_all_users'}
                  schema={vips__usersFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'primary_manager'}
                  schema={vips__usersFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'secondary_manager'}
                  schema={vips__usersFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'remember_token'}
                  schema={vips__usersFields}
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
export default Vips__usersForm;
