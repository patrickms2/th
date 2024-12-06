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

import vips__dashboard_settingsFields from 'pages/CRUD/Vips__dashboard_settings/helpers/vips__dashboard_settingsFields';
import IniValues from 'components/FormItems/iniValues';
import PreparedValues from 'components/FormItems/preparedValues';
import FormValidations from 'components/FormItems/formValidations';
import Widget from 'components/Widget';

const Vips__dashboard_settingsForm = (props) => {
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
    return IniValues(vips__dashboard_settingsFields, record || {});
  };

  const formValidations = () => {
    return FormValidations(vips__dashboard_settingsFields, record || {});
  };

  const handleSubmit = (values) => {
    const { id, ...data } = PreparedValues(
      vips__dashboard_settingsFields,
      values || {},
    );
    onSubmit(id, data);
  };

  const title = () => {
    if (isProfile) {
      return 'Edit My Profile';
    }
    return isEditing
      ? 'Edit Vips__dashboard_settings'
      : 'Add Vips__dashboard_settings';
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
                  name={'is_projects_widget'}
                  schema={vips__dashboard_settingsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'is_tasks_widget'}
                  schema={vips__dashboard_settingsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'is_defects_widget'}
                  schema={vips__dashboard_settingsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'is_incidents_widget'}
                  schema={vips__dashboard_settingsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'is_estimates_widget'}
                  schema={vips__dashboard_settingsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'is_invoices_widget'}
                  schema={vips__dashboard_settingsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'is_payments_widget'}
                  schema={vips__dashboard_settingsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'is_leaves_widget'}
                  schema={vips__dashboard_settingsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'is_users_widget'}
                  schema={vips__dashboard_settingsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'is_clients_widget'}
                  schema={vips__dashboard_settingsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'is_teams_widget'}
                  schema={vips__dashboard_settingsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'is_articles_widget'}
                  schema={vips__dashboard_settingsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'is_projects_status_chart'}
                  schema={vips__dashboard_settingsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'is_tasks_status_chart'}
                  schema={vips__dashboard_settingsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'is_monthly_report_chart'}
                  schema={vips__dashboard_settingsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'is_projects_list'}
                  schema={vips__dashboard_settingsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'is_tasks_list'}
                  schema={vips__dashboard_settingsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'is_defects_list'}
                  schema={vips__dashboard_settingsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'is_incidents_list'}
                  schema={vips__dashboard_settingsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'is_estimates_list'}
                  schema={vips__dashboard_settingsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'is_invoices_list'}
                  schema={vips__dashboard_settingsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'is_todos_list'}
                  schema={vips__dashboard_settingsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'is_activities_list'}
                  schema={vips__dashboard_settingsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'is_meetings_list'}
                  schema={vips__dashboard_settingsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'is_announcement_list'}
                  schema={vips__dashboard_settingsFields}
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
export default Vips__dashboard_settingsForm;
