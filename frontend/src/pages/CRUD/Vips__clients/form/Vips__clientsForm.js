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

import vips__clientsFields from 'pages/CRUD/Vips__clients/helpers/vips__clientsFields';
import IniValues from 'components/FormItems/iniValues';
import PreparedValues from 'components/FormItems/preparedValues';
import FormValidations from 'components/FormItems/formValidations';
import Widget from 'components/Widget';

const Vips__clientsForm = (props) => {
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
    return IniValues(vips__clientsFields, record || {});
  };

  const formValidations = () => {
    return FormValidations(vips__clientsFields, record || {});
  };

  const handleSubmit = (values) => {
    const { id, ...data } = PreparedValues(vips__clientsFields, values || {});
    onSubmit(id, data);
  };

  const title = () => {
    if (isProfile) {
      return 'Edit My Profile';
    }
    return isEditing ? 'Edit Vips__clients' : 'Add Vips__clients';
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
                  name={'company_name'}
                  schema={vips__clientsFields}
                  autoFocus
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'company_email'}
                  schema={vips__clientsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem name={'user_id'} schema={vips__clientsFields} />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'company_phone'}
                  schema={vips__clientsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'company_mobile'}
                  schema={vips__clientsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'company_zipcode'}
                  schema={vips__clientsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'company_city'}
                  schema={vips__clientsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'company_country'}
                  schema={vips__clientsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'company_fax'}
                  schema={vips__clientsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'company_address'}
                  schema={vips__clientsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem name={'website'} schema={vips__clientsFields} />
              </Grid>

              <Grid item>
                <InputFormItem name={'skype_id'} schema={vips__clientsFields} />
              </Grid>

              <Grid item>
                <InputFormItem name={'facebook'} schema={vips__clientsFields} />
              </Grid>

              <Grid item>
                <InputFormItem name={'twitter'} schema={vips__clientsFields} />
              </Grid>

              <Grid item>
                <InputFormItem name={'linkedin'} schema={vips__clientsFields} />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'hosting_company'}
                  schema={vips__clientsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'host_name'}
                  schema={vips__clientsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'host_username'}
                  schema={vips__clientsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'host_password'}
                  schema={vips__clientsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'host_port'}
                  schema={vips__clientsFields}
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
export default Vips__clientsForm;
