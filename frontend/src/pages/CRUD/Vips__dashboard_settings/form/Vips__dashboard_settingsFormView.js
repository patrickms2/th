import { Formik } from 'formik';
import React, { Component, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as dataFormat from 'pages/CRUD/Vips__dashboard_settings/table/Vips__dashboard_settingsDataFormatters';
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

import vips__dashboard_settingsFields from 'pages/CRUD/Vips__dashboard_settings/helpers/vips__dashboard_settingsFields';
import IniValues from 'components/FormItems/iniValues';
import PreparedValues from 'components/FormItems/preparedValues';
import FormValidations from 'components/FormItems/formValidations';
import Widget from 'components/Widget';

const Vips__dashboard_settingsForm = (props) => {
  const { findLoading, record, onCancel } = props;

  const iniValues = () => {
    return IniValues(vips__dashboard_settingsFields, record || {});
  };
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  const renderForm = () => (
    <Widget title={'View vips__dashboard_settings'} collapse close>
      <Formik initialValues={iniValues()}>
        {(form) => (
          <form>
            <Grid container spacing={3} direction='column'>
              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {vips__dashboard_settingsFields['is_projects_widget'].label}
                </Typography>
                <Typography>{form.values.is_projects_widget}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {vips__dashboard_settingsFields['is_tasks_widget'].label}
                </Typography>
                <Typography>{form.values.is_tasks_widget}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {vips__dashboard_settingsFields['is_defects_widget'].label}
                </Typography>
                <Typography>{form.values.is_defects_widget}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {vips__dashboard_settingsFields['is_incidents_widget'].label}
                </Typography>
                <Typography>{form.values.is_incidents_widget}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {vips__dashboard_settingsFields['is_estimates_widget'].label}
                </Typography>
                <Typography>{form.values.is_estimates_widget}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {vips__dashboard_settingsFields['is_invoices_widget'].label}
                </Typography>
                <Typography>{form.values.is_invoices_widget}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {vips__dashboard_settingsFields['is_payments_widget'].label}
                </Typography>
                <Typography>{form.values.is_payments_widget}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {vips__dashboard_settingsFields['is_leaves_widget'].label}
                </Typography>
                <Typography>{form.values.is_leaves_widget}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {vips__dashboard_settingsFields['is_users_widget'].label}
                </Typography>
                <Typography>{form.values.is_users_widget}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {vips__dashboard_settingsFields['is_clients_widget'].label}
                </Typography>
                <Typography>{form.values.is_clients_widget}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {vips__dashboard_settingsFields['is_teams_widget'].label}
                </Typography>
                <Typography>{form.values.is_teams_widget}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {vips__dashboard_settingsFields['is_articles_widget'].label}
                </Typography>
                <Typography>{form.values.is_articles_widget}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {
                    vips__dashboard_settingsFields['is_projects_status_chart']
                      .label
                  }
                </Typography>
                <Typography>{form.values.is_projects_status_chart}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {
                    vips__dashboard_settingsFields['is_tasks_status_chart']
                      .label
                  }
                </Typography>
                <Typography>{form.values.is_tasks_status_chart}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {
                    vips__dashboard_settingsFields['is_monthly_report_chart']
                      .label
                  }
                </Typography>
                <Typography>{form.values.is_monthly_report_chart}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {vips__dashboard_settingsFields['is_projects_list'].label}
                </Typography>
                <Typography>{form.values.is_projects_list}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {vips__dashboard_settingsFields['is_tasks_list'].label}
                </Typography>
                <Typography>{form.values.is_tasks_list}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {vips__dashboard_settingsFields['is_defects_list'].label}
                </Typography>
                <Typography>{form.values.is_defects_list}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {vips__dashboard_settingsFields['is_incidents_list'].label}
                </Typography>
                <Typography>{form.values.is_incidents_list}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {vips__dashboard_settingsFields['is_estimates_list'].label}
                </Typography>
                <Typography>{form.values.is_estimates_list}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {vips__dashboard_settingsFields['is_invoices_list'].label}
                </Typography>
                <Typography>{form.values.is_invoices_list}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {vips__dashboard_settingsFields['is_todos_list'].label}
                </Typography>
                <Typography>{form.values.is_todos_list}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {vips__dashboard_settingsFields['is_activities_list'].label}
                </Typography>
                <Typography>{form.values.is_activities_list}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {vips__dashboard_settingsFields['is_meetings_list'].label}
                </Typography>
                <Typography>{form.values.is_meetings_list}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {vips__dashboard_settingsFields['is_announcement_list'].label}
                </Typography>
                <Typography>{form.values.is_announcement_list}</Typography>
              </Grid>

              <Grid container ml={3} mt={3}>
                <Grid item>
                  <Button
                    color='primary'
                    variant='outlined'
                    onClick={() => onCancel()}
                  >
                    Back
                  </Button>
                </Grid>
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
  return renderForm();
};
export default Vips__dashboard_settingsForm;
