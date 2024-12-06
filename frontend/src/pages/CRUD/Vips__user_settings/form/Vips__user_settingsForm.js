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

import vips__user_settingsFields from 'pages/CRUD/Vips__user_settings/helpers/vips__user_settingsFields';
import IniValues from 'components/FormItems/iniValues';
import PreparedValues from 'components/FormItems/preparedValues';
import FormValidations from 'components/FormItems/formValidations';
import Widget from 'components/Widget';

const Vips__user_settingsForm = (props) => {
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
    return IniValues(vips__user_settingsFields, record || {});
  };

  const formValidations = () => {
    return FormValidations(vips__user_settingsFields, record || {});
  };

  const handleSubmit = (values) => {
    const { id, ...data } = PreparedValues(
      vips__user_settingsFields,
      values || {},
    );
    onSubmit(id, data);
  };

  const title = () => {
    if (isProfile) {
      return 'Edit My Profile';
    }
    return isEditing ? 'Edit Vips__user_settings' : 'Add Vips__user_settings';
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
                  schema={vips__user_settingsFields}
                  autoFocus
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'company_legal_name'}
                  schema={vips__user_settingsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'company_short_name'}
                  schema={vips__user_settingsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'contact_person'}
                  schema={vips__user_settingsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'company_address'}
                  schema={vips__user_settingsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'company_country'}
                  schema={vips__user_settingsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'company_city'}
                  schema={vips__user_settingsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'company_zipcode'}
                  schema={vips__user_settingsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'company_phone'}
                  schema={vips__user_settingsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'company_email'}
                  schema={vips__user_settingsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'company_website'}
                  schema={vips__user_settingsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'company_from_email'}
                  schema={vips__user_settingsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'post_mark'}
                  schema={vips__user_settingsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'smtp_protocol'}
                  schema={vips__user_settingsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'smtp_host'}
                  schema={vips__user_settingsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'smtp_user'}
                  schema={vips__user_settingsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'smtp_password'}
                  schema={vips__user_settingsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'smtp_port'}
                  schema={vips__user_settingsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'smtp_encryption'}
                  schema={vips__user_settingsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'mail_from_name'}
                  schema={vips__user_settingsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'sparkpost_secret'}
                  schema={vips__user_settingsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'mailgun_domain'}
                  schema={vips__user_settingsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'mailgun_secret'}
                  schema={vips__user_settingsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'mandrill_secret'}
                  schema={vips__user_settingsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'is_announcement_notification'}
                  schema={vips__user_settingsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'is_team_notification'}
                  schema={vips__user_settingsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'active_cronjob'}
                  schema={vips__user_settingsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'automatic_backup'}
                  schema={vips__user_settingsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'daily_report_emails'}
                  schema={vips__user_settingsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'last_autobackup'}
                  schema={vips__user_settingsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'cronjob_link'}
                  schema={vips__user_settingsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'last_cronjob_run'}
                  schema={vips__user_settingsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'reminder_alert_before_hours'}
                  schema={vips__user_settingsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem name={'12'} schema={vips__user_settingsFields} />
              </Grid>

              <Grid item>
                <InputFormItem name={'24'} schema={vips__user_settingsFields} />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'reminder_alert_before_days'}
                  schema={vips__user_settingsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem name={'2'} schema={vips__user_settingsFields} />
              </Grid>

              <Grid item>
                <InputFormItem name={'3'} schema={vips__user_settingsFields} />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'task'}
                  schema={vips__user_settingsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'defect'}
                  schema={vips__user_settingsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'login_background'}
                  schema={vips__user_settingsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'company_logo'}
                  schema={vips__user_settingsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'company_sidebar_logo'}
                  schema={vips__user_settingsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'sidebar_background_images'}
                  schema={vips__user_settingsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'default_language'}
                  schema={vips__user_settingsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'default_locale'}
                  schema={vips__user_settingsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'timezone'}
                  schema={vips__user_settingsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'tables_pagination_limit'}
                  schema={vips__user_settingsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'date_format'}
                  schema={vips__user_settingsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'time_format'}
                  schema={vips__user_settingsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'date_time_format'}
                  schema={vips__user_settingsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'php_date_format'}
                  schema={vips__user_settingsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'php_time_format'}
                  schema={vips__user_settingsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'php_date_time_format'}
                  schema={vips__user_settingsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'currency_id'}
                  schema={vips__user_settingsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'purchase_key'}
                  schema={vips__user_settingsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'unique_coder'}
                  schema={vips__user_settingsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'update_url'}
                  schema={vips__user_settingsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'is_collapsed_menu'}
                  schema={vips__user_settingsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'is_sidebar_background'}
                  schema={vips__user_settingsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'theme_layout'}
                  schema={vips__user_settingsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'sidebar_bg_color'}
                  schema={vips__user_settingsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'sidebar_transparent_bg_image'}
                  schema={vips__user_settingsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'sidebar_bg_custom_color'}
                  schema={vips__user_settingsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'sidebar_font_color'}
                  schema={vips__user_settingsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'sidebar_width'}
                  schema={vips__user_settingsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'sidebar_bg_image'}
                  schema={vips__user_settingsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'product_version'}
                  schema={vips__user_settingsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'is_demo'}
                  schema={vips__user_settingsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'allowed_for_registration'}
                  schema={vips__user_settingsFields}
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
export default Vips__user_settingsForm;
