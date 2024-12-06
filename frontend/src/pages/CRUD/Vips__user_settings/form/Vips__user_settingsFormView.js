import { Formik } from 'formik';
import React, { Component, useEffect }  from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as dataFormat from 'pages/CRUD/Vips__user_settings/table/Vips__user_settingsDataFormatters';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Loader from 'components/Loader';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
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
import ItemsList from 'components/FormItems/items/ItemsList';

import vips__user_settingsFields from 'pages/CRUD/Vips__user_settings/helpers/vips__user_settingsFields';
import IniValues from 'components/FormItems/iniValues';
import PreparedValues from 'components/FormItems/preparedValues';
import FormValidations from 'components/FormItems/formValidations';
import Widget from 'components/Widget';

const Vips__user_settingsForm = (props) => {

  const {
  findLoading,
  record,
  onCancel,
  } = props;

  const iniValues = () => {
  return IniValues(vips__user_settingsFields, record || {});
  }
  const dispatch = useDispatch();

useEffect(() => {

}, []);

  const renderForm = () => (
  <Widget title={'View vips__user_settings'} collapse close>
  <Formik
  initialValues={iniValues()}
  >
  {(form) => (
  <form>
    <Grid container spacing={3} direction="column">

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__user_settingsFields['company_name'].label}</Typography>
        <Typography >{form.values.company_name}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__user_settingsFields['company_legal_name'].label}</Typography>
        <Typography >{form.values.company_legal_name}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__user_settingsFields['company_short_name'].label}</Typography>
        <Typography >{form.values.company_short_name}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__user_settingsFields['contact_person'].label}</Typography>
        <Typography >{form.values.contact_person}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__user_settingsFields['company_address'].label}</Typography>
        <Typography >{form.values.company_address}</Typography> 
      </Grid>

      <Grid item>
      <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__user_settingsFields['company_country'].label}</Typography>
      <Typography >{form.values.company_country}</Typography>
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__user_settingsFields['company_city'].label}</Typography>
        <Typography >{form.values.company_city}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__user_settingsFields['company_zipcode'].label}</Typography>
        <Typography >{form.values.company_zipcode}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__user_settingsFields['company_phone'].label}</Typography>
        <Typography >{form.values.company_phone}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__user_settingsFields['company_email'].label}</Typography>
        <Typography >{form.values.company_email}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__user_settingsFields['company_website'].label}</Typography>
        <Typography >{form.values.company_website}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__user_settingsFields['company_from_email'].label}</Typography>
        <Typography >{form.values.company_from_email}</Typography> 
      </Grid>

      <Grid item>
      <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__user_settingsFields['post_mark'].label}</Typography>
      <Typography >{form.values.post_mark}</Typography>
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__user_settingsFields['smtp_protocol'].label}</Typography>
        <Typography >{form.values.smtp_protocol}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__user_settingsFields['smtp_host'].label}</Typography>
        <Typography >{form.values.smtp_host}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__user_settingsFields['smtp_user'].label}</Typography>
        <Typography >{form.values.smtp_user}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__user_settingsFields['smtp_password'].label}</Typography>
        <Typography >{form.values.smtp_password}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__user_settingsFields['smtp_port'].label}</Typography>
        <Typography >{form.values.smtp_port}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__user_settingsFields['smtp_encryption'].label}</Typography>
        <Typography >{form.values.smtp_encryption}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__user_settingsFields['mail_from_name'].label}</Typography>
        <Typography >{form.values.mail_from_name}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__user_settingsFields['sparkpost_secret'].label}</Typography>
        <Typography >{form.values.sparkpost_secret}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__user_settingsFields['mailgun_domain'].label}</Typography>
        <Typography >{form.values.mailgun_domain}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__user_settingsFields['mailgun_secret'].label}</Typography>
        <Typography >{form.values.mailgun_secret}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__user_settingsFields['mandrill_secret'].label}</Typography>
        <Typography >{form.values.mandrill_secret}</Typography> 
      </Grid>

      <Grid item>
      <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__user_settingsFields['is_announcement_notification'].label}</Typography>
      <Typography >{form.values.is_announcement_notification}</Typography>
      </Grid>

      <Grid item>
      <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__user_settingsFields['is_team_notification'].label}</Typography>
      <Typography >{form.values.is_team_notification}</Typography>
      </Grid>

      <Grid item>
      <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__user_settingsFields['active_cronjob'].label}</Typography>
      <Typography >{form.values.active_cronjob}</Typography>
      </Grid>

      <Grid item>
      <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__user_settingsFields['automatic_backup'].label}</Typography>
      <Typography >{form.values.automatic_backup}</Typography>
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__user_settingsFields['daily_report_emails'].label}</Typography>
        <Typography >{form.values.daily_report_emails}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__user_settingsFields['last_autobackup'].label}</Typography>
        <Typography >{form.values.last_autobackup}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__user_settingsFields['cronjob_link'].label}</Typography>
        <Typography >{form.values.cronjob_link}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__user_settingsFields['last_cronjob_run'].label}</Typography>
        <Typography >{form.values.last_cronjob_run}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__user_settingsFields['reminder_alert_before_hours'].label}</Typography>
        <Typography >{form.values.reminder_alert_before_hours}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__user_settingsFields['12'].label}</Typography>
        <Typography >{form.values.12}</Typography> 
      </Grid>

      <Grid item>
      <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__user_settingsFields['24'].label}</Typography>
      <Typography >{form.values.24}</Typography>
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__user_settingsFields['reminder_alert_before_days'].label}</Typography>
        <Typography >{form.values.reminder_alert_before_days}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__user_settingsFields['2'].label}</Typography>
        <Typography >{form.values.2}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__user_settingsFields['3'].label}</Typography>
        <Typography >{form.values.3}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__user_settingsFields['task'].label}</Typography>
        <Typography >{form.values.task}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__user_settingsFields['defect'].label}</Typography>
        <Typography >{form.values.defect}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__user_settingsFields['login_background'].label}</Typography>
        <Typography >{form.values.login_background}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__user_settingsFields['company_logo'].label}</Typography>
        <Typography >{form.values.company_logo}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__user_settingsFields['company_sidebar_logo'].label}</Typography>
        <Typography >{form.values.company_sidebar_logo}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__user_settingsFields['sidebar_background_images'].label}</Typography>
        <Typography >{form.values.sidebar_background_images}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__user_settingsFields['default_language'].label}</Typography>
        <Typography >{form.values.default_language}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__user_settingsFields['default_locale'].label}</Typography>
        <Typography >{form.values.default_locale}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__user_settingsFields['timezone'].label}</Typography>
        <Typography >{form.values.timezone}</Typography> 
      </Grid>

      <Grid item>
      <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__user_settingsFields['tables_pagination_limit'].label}</Typography>
      <Typography >{form.values.tables_pagination_limit}</Typography>
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__user_settingsFields['date_format'].label}</Typography>
        <Typography >{form.values.date_format}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__user_settingsFields['time_format'].label}</Typography>
        <Typography >{form.values.time_format}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__user_settingsFields['date_time_format'].label}</Typography>
        <Typography >{form.values.date_time_format}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__user_settingsFields['php_date_format'].label}</Typography>
        <Typography >{form.values.php_date_format}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__user_settingsFields['php_time_format'].label}</Typography>
        <Typography >{form.values.php_time_format}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__user_settingsFields['php_date_time_format'].label}</Typography>
        <Typography >{form.values.php_date_time_format}</Typography> 
      </Grid>

      <Grid item>
      <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__user_settingsFields['currency_id'].label}</Typography>
      <Typography >{form.values.currency_id}</Typography>
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__user_settingsFields['purchase_key'].label}</Typography>
        <Typography >{form.values.purchase_key}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__user_settingsFields['unique_coder'].label}</Typography>
        <Typography >{form.values.unique_coder}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__user_settingsFields['update_url'].label}</Typography>
        <Typography >{form.values.update_url}</Typography> 
      </Grid>

      <Grid item>
      <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__user_settingsFields['is_collapsed_menu'].label}</Typography>
      <Typography >{form.values.is_collapsed_menu}</Typography>
      </Grid>

      <Grid item>
      <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__user_settingsFields['is_sidebar_background'].label}</Typography>
      <Typography >{form.values.is_sidebar_background}</Typography>
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__user_settingsFields['theme_layout'].label}</Typography>
        <Typography >{form.values.theme_layout}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__user_settingsFields['sidebar_bg_color'].label}</Typography>
        <Typography >{form.values.sidebar_bg_color}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__user_settingsFields['sidebar_transparent_bg_image'].label}</Typography>
        <Typography >{form.values.sidebar_transparent_bg_image}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__user_settingsFields['sidebar_bg_custom_color'].label}</Typography>
        <Typography >{form.values.sidebar_bg_custom_color}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__user_settingsFields['sidebar_font_color'].label}</Typography>
        <Typography >{form.values.sidebar_font_color}</Typography> 
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__user_settingsFields['sidebar_width'].label}</Typography>
        <Typography >{form.values.sidebar_width}</Typography> 
      </Grid>

      <Grid item>
      <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__user_settingsFields['sidebar_bg_image'].label}</Typography>
      <Typography >{form.values.sidebar_bg_image}</Typography>
      </Grid>

      <Grid item>
        <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__user_settingsFields['product_version'].label}</Typography>
        <Typography >{form.values.product_version}</Typography> 
      </Grid>

      <Grid item>
      <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__user_settingsFields['is_demo'].label}</Typography>
      <Typography >{form.values.is_demo}</Typography>
      </Grid>

      <Grid item>
      <Typography variant="h6" style={{ marginBottom: 10, }}>{vips__user_settingsFields['allowed_for_registration'].label}</Typography>
      <Typography >{form.values.allowed_for_registration}</Typography>
      </Grid>

  <Grid container ml={3}  mt={3}>
    <Grid item>
      <Button
        color="primary"
        variant="outlined"
        onClick={() => onCancel()}
      >
      Back
      </Button>
    </Grid>
  </Grid>
</Grid>
      </form>
      )
      }
    </Formik>
  </Widget>
  );
  if (findLoading) {
  return <Loader />;
  }
  return renderForm();
  }
  export default Vips__user_settingsForm;
