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

import vips__estimatesFields from 'pages/CRUD/Vips__estimates/helpers/vips__estimatesFields';
import IniValues from 'components/FormItems/iniValues';
import PreparedValues from 'components/FormItems/preparedValues';
import FormValidations from 'components/FormItems/formValidations';
import Widget from 'components/Widget';

const Vips__estimatesForm = (props) => {
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
    return IniValues(vips__estimatesFields, record || {});
  };

  const formValidations = () => {
    return FormValidations(vips__estimatesFields, record || {});
  };

  const handleSubmit = (values) => {
    const { id, ...data } = PreparedValues(vips__estimatesFields, values || {});
    onSubmit(id, data);
  };

  const title = () => {
    if (isProfile) {
      return 'Edit My Profile';
    }
    return isEditing ? 'Edit Vips__estimates' : 'Add Vips__estimates';
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
                  schema={vips__estimatesFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'client_id'}
                  schema={vips__estimatesFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'invoice_id'}
                  schema={vips__estimatesFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'estimate_number'}
                  schema={vips__estimatesFields}
                />
              </Grid>

              <Grid item>
                <DatePickerFormItem
                  name={'estimate_date'}
                  schema={vips__estimatesFields}
                />
              </Grid>

              <Grid item>
                <DatePickerFormItem
                  name={'valid_till'}
                  schema={vips__estimatesFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'sub_total'}
                  schema={vips__estimatesFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'total_tax'}
                  schema={vips__estimatesFields}
                />
              </Grid>

              <Grid item>
                <SelectFormItem
                  name={'discount_type'}
                  schema={vips__estimatesFields}
                  form={form}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'discount'}
                  schema={vips__estimatesFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'total_discount'}
                  schema={vips__estimatesFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'adjustment'}
                  schema={vips__estimatesFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'total_amount'}
                  schema={vips__estimatesFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'reference'}
                  schema={vips__estimatesFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem name={'note'} schema={vips__estimatesFields} />
              </Grid>

              <Grid item>
                <SelectFormItem
                  name={'status'}
                  schema={vips__estimatesFields}
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
export default Vips__estimatesForm;
