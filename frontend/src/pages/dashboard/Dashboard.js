import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { CircularProgress, Box, Grid } from '@mui/material';
import {
  useManagementDispatch,
  useManagementState,
} from '../../context/ManagementContext';
import InfoIcon from '@mui/icons-material/Info';
import axios from 'axios';
// styles
import useStyles from './styles';
// components
import Widget from '../../components/Widget/Widget';

const Dashboard = () => {
  let classes = useStyles();
  const managementDispatch = useManagementDispatch();
  const managementValue = useManagementState();

  const [users, setUsers] = useState(0);
  const [vips__announcements, setVips__announcements] = useState(0);
  const [vips__appointment, setVips__appointment] = useState(0);
  const [vips__appointment_recurrence, setVips__appointment_recurrence] =
    useState(0);
  const [vips__clients, setVips__clients] = useState(0);
  const [vips__countries, setVips__countries] = useState(0);
  const [vips__currency, setVips__currency] = useState(0);
  const [vips__custom_fields, setVips__custom_fields] = useState(0);
  const [vips__dashboard_settings, setVips__dashboard_settings] = useState(0);
  const [vips__database_backups, setVips__database_backups] = useState(0);
  const [vips__defect_attachments, setVips__defect_attachments] = useState(0);
  const [vips__defect_comments, setVips__defect_comments] = useState(0);
  const [vips__defect_user, setVips__defect_user] = useState(0);
  const [vips__defects, setVips__defects] = useState(0);
  const [vips__defects_history, setVips__defects_history] = useState(0);
  const [vips__department_role_menu, setVips__department_role_menu] =
    useState(0);
  const [vips__departments, setVips__departments] = useState(0);
  const [vips__departments_roles, setVips__departments_roles] = useState(0);
  const [vips__email_inbox, setVips__email_inbox] = useState(0);
  const [vips__email_inbox_attachment, setVips__email_inbox_attachment] =
    useState(0);
  const [vips__email_template, setVips__email_template] = useState(0);
  const [vips__email_template_groups, setVips__email_template_groups] =
    useState(0);
  const [vips__estimate_item_taxes, setVips__estimate_item_taxes] = useState(0);
  const [vips__estimate_items, setVips__estimate_items] = useState(0);
  const [vips__estimate_settings, setVips__estimate_settings] = useState(0);
  const [vips__estimates, setVips__estimates] = useState(0);
  const [vips__files, setVips__files] = useState(0);
  const [vips__folders, setVips__folders] = useState(0);
  const [vips__form, setVips__form] = useState(0);
  const [vips__holidays, setVips__holidays] = useState(0);
  const [vips__incident_attachments, setVips__incident_attachments] =
    useState(0);
  const [vips__incident_comments, setVips__incident_comments] = useState(0);
  const [vips__incident_history, setVips__incident_history] = useState(0);
  const [vips__incident_user, setVips__incident_user] = useState(0);
  const [vips__incidents, setVips__incidents] = useState(0);
  const [vips__invoice_item_taxes, setVips__invoice_item_taxes] = useState(0);
  const [vips__invoice_items, setVips__invoice_items] = useState(0);
  const [vips__invoice_settings, setVips__invoice_settings] = useState(0);
  const [vips__invoices, setVips__invoices] = useState(0);
  const [vips__item_tax, setVips__item_tax] = useState(0);
  const [vips__items, setVips__items] = useState(0);
  const [vips__knowledge_base_article, setVips__knowledge_base_article] =
    useState(0);
  const [vips__knowledge_base_category, setVips__knowledge_base_category] =
    useState(0);
  const [vips__languages, setVips__languages] = useState(0);
  const [vips__leave_attachments, setVips__leave_attachments] = useState(0);
  const [vips__leave_types, setVips__leave_types] = useState(0);
  const [vips__leaves, setVips__leaves] = useState(0);
  const [vips__locales, setVips__locales] = useState(0);
  const [vips__meeting_members, setVips__meeting_members] = useState(0);
  const [vips__meetings, setVips__meetings] = useState(0);
  const [vips__menus, setVips__menus] = useState(0);
  const [vips__modules, setVips__modules] = useState(0);
  const [vips__notifications, setVips__notifications] = useState(0);
  const [vips__password_resets, setVips__password_resets] = useState(0);
  const [vips__payment_gateway_settings, setVips__payment_gateway_settings] =
    useState(0);
  const [vips__payment_methods, setVips__payment_methods] = useState(0);
  const [vips__payments, setVips__payments] = useState(0);
  const [vips__project_attachments, setVips__project_attachments] = useState(0);
  const [vips__project_comments, setVips__project_comments] = useState(0);
  const [vips__project_sprint_members, setVips__project_sprint_members] =
    useState(0);
  const [
    vips__project_sprint_task_members,
    setVips__project_sprint_task_members,
  ] = useState(0);
  const [vips__project_sprint_tasks, setVips__project_sprint_tasks] =
    useState(0);
  const [vips__project_sprints, setVips__project_sprints] = useState(0);
  const [vips__project_user, setVips__project_user] = useState(0);
  const [vips__projects, setVips__projects] = useState(0);
  const [vips__providers, setVips__providers] = useState(0);
  const [vips__roles, setVips__roles] = useState(0);
  const [vips__slack_integration, setVips__slack_integration] = useState(0);
  const [vips__slack_settings, setVips__slack_settings] = useState(0);
  const [vips__task_attachments, setVips__task_attachments] = useState(0);
  const [vips__task_comments, setVips__task_comments] = useState(0);
  const [vips__task_user, setVips__task_user] = useState(0);
  const [vips__tasks, setVips__tasks] = useState(0);
  const [vips__taxes, setVips__taxes] = useState(0);
  const [vips__teams, setVips__teams] = useState(0);
  const [vips__teams_members, setVips__teams_members] = useState(0);
  const [vips__timer_logs, setVips__timer_logs] = useState(0);
  const [vips__timesheets, setVips__timesheets] = useState(0);
  const [vips__todos, setVips__todos] = useState(0);
  const [vips__translations, setVips__translations] = useState(0);
  const [vips__user_activities, setVips__user_activities] = useState(0);
  const [vips__user_role_department, setVips__user_role_department] =
    useState(0);
  const [vips__user_settings, setVips__user_settings] = useState(0);
  const [vips__users, setVips__users] = useState(0);

  const [currentUser, setCurrentUser] = useState(null);

  async function loadData() {
    const fns = [
      setUsers,
      setVips__announcements,
      setVips__appointment,
      setVips__appointment_recurrence,
      setVips__clients,
      setVips__countries,
      setVips__currency,
      setVips__custom_fields,
      setVips__dashboard_settings,
      setVips__database_backups,
      setVips__defect_attachments,
      setVips__defect_comments,
      setVips__defect_user,
      setVips__defects,
      setVips__defects_history,
      setVips__department_role_menu,
      setVips__departments,
      setVips__departments_roles,
      setVips__email_inbox,
      setVips__email_inbox_attachment,
      setVips__email_template,
      setVips__email_template_groups,
      setVips__estimate_item_taxes,
      setVips__estimate_items,
      setVips__estimate_settings,
      setVips__estimates,
      setVips__files,
      setVips__folders,
      setVips__form,
      setVips__holidays,
      setVips__incident_attachments,
      setVips__incident_comments,
      setVips__incident_history,
      setVips__incident_user,
      setVips__incidents,
      setVips__invoice_item_taxes,
      setVips__invoice_items,
      setVips__invoice_settings,
      setVips__invoices,
      setVips__item_tax,
      setVips__items,
      setVips__knowledge_base_article,
      setVips__knowledge_base_category,
      setVips__languages,
      setVips__leave_attachments,
      setVips__leave_types,
      setVips__leaves,
      setVips__locales,
      setVips__meeting_members,
      setVips__meetings,
      setVips__menus,
      setVips__modules,
      setVips__notifications,
      setVips__password_resets,
      setVips__payment_gateway_settings,
      setVips__payment_methods,
      setVips__payments,
      setVips__project_attachments,
      setVips__project_comments,
      setVips__project_sprint_members,
      setVips__project_sprint_task_members,
      setVips__project_sprint_tasks,
      setVips__project_sprints,
      setVips__project_user,
      setVips__projects,
      setVips__providers,
      setVips__roles,
      setVips__slack_integration,
      setVips__slack_settings,
      setVips__task_attachments,
      setVips__task_comments,
      setVips__task_user,
      setVips__tasks,
      setVips__taxes,
      setVips__teams,
      setVips__teams_members,
      setVips__timer_logs,
      setVips__timesheets,
      setVips__todos,
      setVips__translations,
      setVips__user_activities,
      setVips__user_role_department,
      setVips__user_settings,
      setVips__users,
    ];

    const responseUsers = axios.get(`/users/count`);
    const responseVips__announcements = axios.get(`/vips__announcements/count`);
    const responseVips__appointment = axios.get(`/vips__appointment/count`);
    const responseVips__appointment_recurrence = axios.get(
      `/vips__appointment_recurrence/count`,
    );
    const responseVips__clients = axios.get(`/vips__clients/count`);
    const responseVips__countries = axios.get(`/vips__countries/count`);
    const responseVips__currency = axios.get(`/vips__currency/count`);
    const responseVips__custom_fields = axios.get(`/vips__custom_fields/count`);
    const responseVips__dashboard_settings = axios.get(
      `/vips__dashboard_settings/count`,
    );
    const responseVips__database_backups = axios.get(
      `/vips__database_backups/count`,
    );
    const responseVips__defect_attachments = axios.get(
      `/vips__defect_attachments/count`,
    );
    const responseVips__defect_comments = axios.get(
      `/vips__defect_comments/count`,
    );
    const responseVips__defect_user = axios.get(`/vips__defect_user/count`);
    const responseVips__defects = axios.get(`/vips__defects/count`);
    const responseVips__defects_history = axios.get(
      `/vips__defects_history/count`,
    );
    const responseVips__department_role_menu = axios.get(
      `/vips__department_role_menu/count`,
    );
    const responseVips__departments = axios.get(`/vips__departments/count`);
    const responseVips__departments_roles = axios.get(
      `/vips__departments_roles/count`,
    );
    const responseVips__email_inbox = axios.get(`/vips__email_inbox/count`);
    const responseVips__email_inbox_attachment = axios.get(
      `/vips__email_inbox_attachment/count`,
    );
    const responseVips__email_template = axios.get(
      `/vips__email_template/count`,
    );
    const responseVips__email_template_groups = axios.get(
      `/vips__email_template_groups/count`,
    );
    const responseVips__estimate_item_taxes = axios.get(
      `/vips__estimate_item_taxes/count`,
    );
    const responseVips__estimate_items = axios.get(
      `/vips__estimate_items/count`,
    );
    const responseVips__estimate_settings = axios.get(
      `/vips__estimate_settings/count`,
    );
    const responseVips__estimates = axios.get(`/vips__estimates/count`);
    const responseVips__files = axios.get(`/vips__files/count`);
    const responseVips__folders = axios.get(`/vips__folders/count`);
    const responseVips__form = axios.get(`/vips__form/count`);
    const responseVips__holidays = axios.get(`/vips__holidays/count`);
    const responseVips__incident_attachments = axios.get(
      `/vips__incident_attachments/count`,
    );
    const responseVips__incident_comments = axios.get(
      `/vips__incident_comments/count`,
    );
    const responseVips__incident_history = axios.get(
      `/vips__incident_history/count`,
    );
    const responseVips__incident_user = axios.get(`/vips__incident_user/count`);
    const responseVips__incidents = axios.get(`/vips__incidents/count`);
    const responseVips__invoice_item_taxes = axios.get(
      `/vips__invoice_item_taxes/count`,
    );
    const responseVips__invoice_items = axios.get(`/vips__invoice_items/count`);
    const responseVips__invoice_settings = axios.get(
      `/vips__invoice_settings/count`,
    );
    const responseVips__invoices = axios.get(`/vips__invoices/count`);
    const responseVips__item_tax = axios.get(`/vips__item_tax/count`);
    const responseVips__items = axios.get(`/vips__items/count`);
    const responseVips__knowledge_base_article = axios.get(
      `/vips__knowledge_base_article/count`,
    );
    const responseVips__knowledge_base_category = axios.get(
      `/vips__knowledge_base_category/count`,
    );
    const responseVips__languages = axios.get(`/vips__languages/count`);
    const responseVips__leave_attachments = axios.get(
      `/vips__leave_attachments/count`,
    );
    const responseVips__leave_types = axios.get(`/vips__leave_types/count`);
    const responseVips__leaves = axios.get(`/vips__leaves/count`);
    const responseVips__locales = axios.get(`/vips__locales/count`);
    const responseVips__meeting_members = axios.get(
      `/vips__meeting_members/count`,
    );
    const responseVips__meetings = axios.get(`/vips__meetings/count`);
    const responseVips__menus = axios.get(`/vips__menus/count`);
    const responseVips__modules = axios.get(`/vips__modules/count`);
    const responseVips__notifications = axios.get(`/vips__notifications/count`);
    const responseVips__password_resets = axios.get(
      `/vips__password_resets/count`,
    );
    const responseVips__payment_gateway_settings = axios.get(
      `/vips__payment_gateway_settings/count`,
    );
    const responseVips__payment_methods = axios.get(
      `/vips__payment_methods/count`,
    );
    const responseVips__payments = axios.get(`/vips__payments/count`);
    const responseVips__project_attachments = axios.get(
      `/vips__project_attachments/count`,
    );
    const responseVips__project_comments = axios.get(
      `/vips__project_comments/count`,
    );
    const responseVips__project_sprint_members = axios.get(
      `/vips__project_sprint_members/count`,
    );
    const responseVips__project_sprint_task_members = axios.get(
      `/vips__project_sprint_task_members/count`,
    );
    const responseVips__project_sprint_tasks = axios.get(
      `/vips__project_sprint_tasks/count`,
    );
    const responseVips__project_sprints = axios.get(
      `/vips__project_sprints/count`,
    );
    const responseVips__project_user = axios.get(`/vips__project_user/count`);
    const responseVips__projects = axios.get(`/vips__projects/count`);
    const responseVips__providers = axios.get(`/vips__providers/count`);
    const responseVips__roles = axios.get(`/vips__roles/count`);
    const responseVips__slack_integration = axios.get(
      `/vips__slack_integration/count`,
    );
    const responseVips__slack_settings = axios.get(
      `/vips__slack_settings/count`,
    );
    const responseVips__task_attachments = axios.get(
      `/vips__task_attachments/count`,
    );
    const responseVips__task_comments = axios.get(`/vips__task_comments/count`);
    const responseVips__task_user = axios.get(`/vips__task_user/count`);
    const responseVips__tasks = axios.get(`/vips__tasks/count`);
    const responseVips__taxes = axios.get(`/vips__taxes/count`);
    const responseVips__teams = axios.get(`/vips__teams/count`);
    const responseVips__teams_members = axios.get(`/vips__teams_members/count`);
    const responseVips__timer_logs = axios.get(`/vips__timer_logs/count`);
    const responseVips__timesheets = axios.get(`/vips__timesheets/count`);
    const responseVips__todos = axios.get(`/vips__todos/count`);
    const responseVips__translations = axios.get(`/vips__translations/count`);
    const responseVips__user_activities = axios.get(
      `/vips__user_activities/count`,
    );
    const responseVips__user_role_department = axios.get(
      `/vips__user_role_department/count`,
    );
    const responseVips__user_settings = axios.get(`/vips__user_settings/count`);
    const responseVips__users = axios.get(`/vips__users/count`);
    Promise.allSettled([
      responseUsers,
      responseVips__announcements,
      responseVips__appointment,
      responseVips__appointment_recurrence,
      responseVips__clients,
      responseVips__countries,
      responseVips__currency,
      responseVips__custom_fields,
      responseVips__dashboard_settings,
      responseVips__database_backups,
      responseVips__defect_attachments,
      responseVips__defect_comments,
      responseVips__defect_user,
      responseVips__defects,
      responseVips__defects_history,
      responseVips__department_role_menu,
      responseVips__departments,
      responseVips__departments_roles,
      responseVips__email_inbox,
      responseVips__email_inbox_attachment,
      responseVips__email_template,
      responseVips__email_template_groups,
      responseVips__estimate_item_taxes,
      responseVips__estimate_items,
      responseVips__estimate_settings,
      responseVips__estimates,
      responseVips__files,
      responseVips__folders,
      responseVips__form,
      responseVips__holidays,
      responseVips__incident_attachments,
      responseVips__incident_comments,
      responseVips__incident_history,
      responseVips__incident_user,
      responseVips__incidents,
      responseVips__invoice_item_taxes,
      responseVips__invoice_items,
      responseVips__invoice_settings,
      responseVips__invoices,
      responseVips__item_tax,
      responseVips__items,
      responseVips__knowledge_base_article,
      responseVips__knowledge_base_category,
      responseVips__languages,
      responseVips__leave_attachments,
      responseVips__leave_types,
      responseVips__leaves,
      responseVips__locales,
      responseVips__meeting_members,
      responseVips__meetings,
      responseVips__menus,
      responseVips__modules,
      responseVips__notifications,
      responseVips__password_resets,
      responseVips__payment_gateway_settings,
      responseVips__payment_methods,
      responseVips__payments,
      responseVips__project_attachments,
      responseVips__project_comments,
      responseVips__project_sprint_members,
      responseVips__project_sprint_task_members,
      responseVips__project_sprint_tasks,
      responseVips__project_sprints,
      responseVips__project_user,
      responseVips__projects,
      responseVips__providers,
      responseVips__roles,
      responseVips__slack_integration,
      responseVips__slack_settings,
      responseVips__task_attachments,
      responseVips__task_comments,
      responseVips__task_user,
      responseVips__tasks,
      responseVips__taxes,
      responseVips__teams,
      responseVips__teams_members,
      responseVips__timer_logs,
      responseVips__timesheets,
      responseVips__todos,
      responseVips__translations,
      responseVips__user_activities,
      responseVips__user_role_department,
      responseVips__user_settings,
      responseVips__users,
    ]).then((res) =>
      res.forEach((el, i) => {
        if (el.status === 'fulfilled') {
          fns[i](el.value.data.count);
        }
      }),
    );
  }
  useEffect(() => {
    setCurrentUser(managementValue.currentUser);
    loadData();
  }, [managementDispatch, managementValue]);

  if (!currentUser) {
    return (
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        minHeight='100vh'
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <div>
      <h1 className='page-title'>
        Welcome, {currentUser.firstName}! <br />
        <small>
          <small>Your role is {currentUser.role}</small>
        </small>
      </h1>
      <Grid container alignItems='center' columns={12} spacing={3}>
        {
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <Link to={'/admin/users'} style={{ textDecoration: 'none' }}>
              <Widget title={'Users'}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <InfoIcon color='primary' sx={{ mr: 1 }} />
                  <p className={classes.widgetText}>
                    Users:{' '}
                    <span className={classes.widgetTextCount}>{users}</span>
                  </p>
                </div>
              </Widget>
            </Link>
          </Grid>
        }

        {
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <Link
              to={'/admin/vips__announcements'}
              style={{ textDecoration: 'none' }}
            >
              <Widget title={'Vips__announcements'}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <InfoIcon color='primary' sx={{ mr: 1 }} />
                  <p className={classes.widgetText}>
                    Vips__announcements:{' '}
                    <span className={classes.widgetTextCount}>
                      {vips__announcements}
                    </span>
                  </p>
                </div>
              </Widget>
            </Link>
          </Grid>
        }

        {
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <Link
              to={'/admin/vips__appointment'}
              style={{ textDecoration: 'none' }}
            >
              <Widget title={'Vips__appointment'}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <InfoIcon color='primary' sx={{ mr: 1 }} />
                  <p className={classes.widgetText}>
                    Vips__appointment:{' '}
                    <span className={classes.widgetTextCount}>
                      {vips__appointment}
                    </span>
                  </p>
                </div>
              </Widget>
            </Link>
          </Grid>
        }

        {
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <Link
              to={'/admin/vips__appointment_recurrence'}
              style={{ textDecoration: 'none' }}
            >
              <Widget title={'Vips__appointment_recurrence'}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <InfoIcon color='primary' sx={{ mr: 1 }} />
                  <p className={classes.widgetText}>
                    Vips__appointment_recurrence:{' '}
                    <span className={classes.widgetTextCount}>
                      {vips__appointment_recurrence}
                    </span>
                  </p>
                </div>
              </Widget>
            </Link>
          </Grid>
        }

        {
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <Link
              to={'/admin/vips__clients'}
              style={{ textDecoration: 'none' }}
            >
              <Widget title={'Vips__clients'}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <InfoIcon color='primary' sx={{ mr: 1 }} />
                  <p className={classes.widgetText}>
                    Vips__clients:{' '}
                    <span className={classes.widgetTextCount}>
                      {vips__clients}
                    </span>
                  </p>
                </div>
              </Widget>
            </Link>
          </Grid>
        }

        {
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <Link
              to={'/admin/vips__countries'}
              style={{ textDecoration: 'none' }}
            >
              <Widget title={'Vips__countries'}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <InfoIcon color='primary' sx={{ mr: 1 }} />
                  <p className={classes.widgetText}>
                    Vips__countries:{' '}
                    <span className={classes.widgetTextCount}>
                      {vips__countries}
                    </span>
                  </p>
                </div>
              </Widget>
            </Link>
          </Grid>
        }

        {
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <Link
              to={'/admin/vips__currency'}
              style={{ textDecoration: 'none' }}
            >
              <Widget title={'Vips__currency'}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <InfoIcon color='primary' sx={{ mr: 1 }} />
                  <p className={classes.widgetText}>
                    Vips__currency:{' '}
                    <span className={classes.widgetTextCount}>
                      {vips__currency}
                    </span>
                  </p>
                </div>
              </Widget>
            </Link>
          </Grid>
        }

        {
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <Link
              to={'/admin/vips__custom_fields'}
              style={{ textDecoration: 'none' }}
            >
              <Widget title={'Vips__custom_fields'}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <InfoIcon color='primary' sx={{ mr: 1 }} />
                  <p className={classes.widgetText}>
                    Vips__custom_fields:{' '}
                    <span className={classes.widgetTextCount}>
                      {vips__custom_fields}
                    </span>
                  </p>
                </div>
              </Widget>
            </Link>
          </Grid>
        }

        {
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <Link
              to={'/admin/vips__dashboard_settings'}
              style={{ textDecoration: 'none' }}
            >
              <Widget title={'Vips__dashboard_settings'}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <InfoIcon color='primary' sx={{ mr: 1 }} />
                  <p className={classes.widgetText}>
                    Vips__dashboard_settings:{' '}
                    <span className={classes.widgetTextCount}>
                      {vips__dashboard_settings}
                    </span>
                  </p>
                </div>
              </Widget>
            </Link>
          </Grid>
        }

        {
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <Link
              to={'/admin/vips__database_backups'}
              style={{ textDecoration: 'none' }}
            >
              <Widget title={'Vips__database_backups'}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <InfoIcon color='primary' sx={{ mr: 1 }} />
                  <p className={classes.widgetText}>
                    Vips__database_backups:{' '}
                    <span className={classes.widgetTextCount}>
                      {vips__database_backups}
                    </span>
                  </p>
                </div>
              </Widget>
            </Link>
          </Grid>
        }

        {
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <Link
              to={'/admin/vips__defect_attachments'}
              style={{ textDecoration: 'none' }}
            >
              <Widget title={'Vips__defect_attachments'}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <InfoIcon color='primary' sx={{ mr: 1 }} />
                  <p className={classes.widgetText}>
                    Vips__defect_attachments:{' '}
                    <span className={classes.widgetTextCount}>
                      {vips__defect_attachments}
                    </span>
                  </p>
                </div>
              </Widget>
            </Link>
          </Grid>
        }

        {
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <Link
              to={'/admin/vips__defect_comments'}
              style={{ textDecoration: 'none' }}
            >
              <Widget title={'Vips__defect_comments'}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <InfoIcon color='primary' sx={{ mr: 1 }} />
                  <p className={classes.widgetText}>
                    Vips__defect_comments:{' '}
                    <span className={classes.widgetTextCount}>
                      {vips__defect_comments}
                    </span>
                  </p>
                </div>
              </Widget>
            </Link>
          </Grid>
        }

        {
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <Link
              to={'/admin/vips__defect_user'}
              style={{ textDecoration: 'none' }}
            >
              <Widget title={'Vips__defect_user'}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <InfoIcon color='primary' sx={{ mr: 1 }} />
                  <p className={classes.widgetText}>
                    Vips__defect_user:{' '}
                    <span className={classes.widgetTextCount}>
                      {vips__defect_user}
                    </span>
                  </p>
                </div>
              </Widget>
            </Link>
          </Grid>
        }

        {
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <Link
              to={'/admin/vips__defects'}
              style={{ textDecoration: 'none' }}
            >
              <Widget title={'Vips__defects'}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <InfoIcon color='primary' sx={{ mr: 1 }} />
                  <p className={classes.widgetText}>
                    Vips__defects:{' '}
                    <span className={classes.widgetTextCount}>
                      {vips__defects}
                    </span>
                  </p>
                </div>
              </Widget>
            </Link>
          </Grid>
        }

        {
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <Link
              to={'/admin/vips__defects_history'}
              style={{ textDecoration: 'none' }}
            >
              <Widget title={'Vips__defects_history'}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <InfoIcon color='primary' sx={{ mr: 1 }} />
                  <p className={classes.widgetText}>
                    Vips__defects_history:{' '}
                    <span className={classes.widgetTextCount}>
                      {vips__defects_history}
                    </span>
                  </p>
                </div>
              </Widget>
            </Link>
          </Grid>
        }

        {
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <Link
              to={'/admin/vips__department_role_menu'}
              style={{ textDecoration: 'none' }}
            >
              <Widget title={'Vips__department_role_menu'}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <InfoIcon color='primary' sx={{ mr: 1 }} />
                  <p className={classes.widgetText}>
                    Vips__department_role_menu:{' '}
                    <span className={classes.widgetTextCount}>
                      {vips__department_role_menu}
                    </span>
                  </p>
                </div>
              </Widget>
            </Link>
          </Grid>
        }

        {
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <Link
              to={'/admin/vips__departments'}
              style={{ textDecoration: 'none' }}
            >
              <Widget title={'Vips__departments'}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <InfoIcon color='primary' sx={{ mr: 1 }} />
                  <p className={classes.widgetText}>
                    Vips__departments:{' '}
                    <span className={classes.widgetTextCount}>
                      {vips__departments}
                    </span>
                  </p>
                </div>
              </Widget>
            </Link>
          </Grid>
        }

        {
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <Link
              to={'/admin/vips__departments_roles'}
              style={{ textDecoration: 'none' }}
            >
              <Widget title={'Vips__departments_roles'}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <InfoIcon color='primary' sx={{ mr: 1 }} />
                  <p className={classes.widgetText}>
                    Vips__departments_roles:{' '}
                    <span className={classes.widgetTextCount}>
                      {vips__departments_roles}
                    </span>
                  </p>
                </div>
              </Widget>
            </Link>
          </Grid>
        }

        {
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <Link
              to={'/admin/vips__email_inbox'}
              style={{ textDecoration: 'none' }}
            >
              <Widget title={'Vips__email_inbox'}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <InfoIcon color='primary' sx={{ mr: 1 }} />
                  <p className={classes.widgetText}>
                    Vips__email_inbox:{' '}
                    <span className={classes.widgetTextCount}>
                      {vips__email_inbox}
                    </span>
                  </p>
                </div>
              </Widget>
            </Link>
          </Grid>
        }

        {
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <Link
              to={'/admin/vips__email_inbox_attachment'}
              style={{ textDecoration: 'none' }}
            >
              <Widget title={'Vips__email_inbox_attachment'}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <InfoIcon color='primary' sx={{ mr: 1 }} />
                  <p className={classes.widgetText}>
                    Vips__email_inbox_attachment:{' '}
                    <span className={classes.widgetTextCount}>
                      {vips__email_inbox_attachment}
                    </span>
                  </p>
                </div>
              </Widget>
            </Link>
          </Grid>
        }

        {
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <Link
              to={'/admin/vips__email_template'}
              style={{ textDecoration: 'none' }}
            >
              <Widget title={'Vips__email_template'}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <InfoIcon color='primary' sx={{ mr: 1 }} />
                  <p className={classes.widgetText}>
                    Vips__email_template:{' '}
                    <span className={classes.widgetTextCount}>
                      {vips__email_template}
                    </span>
                  </p>
                </div>
              </Widget>
            </Link>
          </Grid>
        }

        {
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <Link
              to={'/admin/vips__email_template_groups'}
              style={{ textDecoration: 'none' }}
            >
              <Widget title={'Vips__email_template_groups'}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <InfoIcon color='primary' sx={{ mr: 1 }} />
                  <p className={classes.widgetText}>
                    Vips__email_template_groups:{' '}
                    <span className={classes.widgetTextCount}>
                      {vips__email_template_groups}
                    </span>
                  </p>
                </div>
              </Widget>
            </Link>
          </Grid>
        }

        {
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <Link
              to={'/admin/vips__estimate_item_taxes'}
              style={{ textDecoration: 'none' }}
            >
              <Widget title={'Vips__estimate_item_taxes'}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <InfoIcon color='primary' sx={{ mr: 1 }} />
                  <p className={classes.widgetText}>
                    Vips__estimate_item_taxes:{' '}
                    <span className={classes.widgetTextCount}>
                      {vips__estimate_item_taxes}
                    </span>
                  </p>
                </div>
              </Widget>
            </Link>
          </Grid>
        }

        {
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <Link
              to={'/admin/vips__estimate_items'}
              style={{ textDecoration: 'none' }}
            >
              <Widget title={'Vips__estimate_items'}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <InfoIcon color='primary' sx={{ mr: 1 }} />
                  <p className={classes.widgetText}>
                    Vips__estimate_items:{' '}
                    <span className={classes.widgetTextCount}>
                      {vips__estimate_items}
                    </span>
                  </p>
                </div>
              </Widget>
            </Link>
          </Grid>
        }

        {
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <Link
              to={'/admin/vips__estimate_settings'}
              style={{ textDecoration: 'none' }}
            >
              <Widget title={'Vips__estimate_settings'}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <InfoIcon color='primary' sx={{ mr: 1 }} />
                  <p className={classes.widgetText}>
                    Vips__estimate_settings:{' '}
                    <span className={classes.widgetTextCount}>
                      {vips__estimate_settings}
                    </span>
                  </p>
                </div>
              </Widget>
            </Link>
          </Grid>
        }

        {
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <Link
              to={'/admin/vips__estimates'}
              style={{ textDecoration: 'none' }}
            >
              <Widget title={'Vips__estimates'}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <InfoIcon color='primary' sx={{ mr: 1 }} />
                  <p className={classes.widgetText}>
                    Vips__estimates:{' '}
                    <span className={classes.widgetTextCount}>
                      {vips__estimates}
                    </span>
                  </p>
                </div>
              </Widget>
            </Link>
          </Grid>
        }

        {
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <Link to={'/admin/vips__files'} style={{ textDecoration: 'none' }}>
              <Widget title={'Vips__files'}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <InfoIcon color='primary' sx={{ mr: 1 }} />
                  <p className={classes.widgetText}>
                    Vips__files:{' '}
                    <span className={classes.widgetTextCount}>
                      {vips__files}
                    </span>
                  </p>
                </div>
              </Widget>
            </Link>
          </Grid>
        }

        {
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <Link
              to={'/admin/vips__folders'}
              style={{ textDecoration: 'none' }}
            >
              <Widget title={'Vips__folders'}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <InfoIcon color='primary' sx={{ mr: 1 }} />
                  <p className={classes.widgetText}>
                    Vips__folders:{' '}
                    <span className={classes.widgetTextCount}>
                      {vips__folders}
                    </span>
                  </p>
                </div>
              </Widget>
            </Link>
          </Grid>
        }

        {
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <Link to={'/admin/vips__form'} style={{ textDecoration: 'none' }}>
              <Widget title={'Vips__form'}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <InfoIcon color='primary' sx={{ mr: 1 }} />
                  <p className={classes.widgetText}>
                    Vips__form:{' '}
                    <span className={classes.widgetTextCount}>
                      {vips__form}
                    </span>
                  </p>
                </div>
              </Widget>
            </Link>
          </Grid>
        }

        {
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <Link
              to={'/admin/vips__holidays'}
              style={{ textDecoration: 'none' }}
            >
              <Widget title={'Vips__holidays'}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <InfoIcon color='primary' sx={{ mr: 1 }} />
                  <p className={classes.widgetText}>
                    Vips__holidays:{' '}
                    <span className={classes.widgetTextCount}>
                      {vips__holidays}
                    </span>
                  </p>
                </div>
              </Widget>
            </Link>
          </Grid>
        }

        {
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <Link
              to={'/admin/vips__incident_attachments'}
              style={{ textDecoration: 'none' }}
            >
              <Widget title={'Vips__incident_attachments'}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <InfoIcon color='primary' sx={{ mr: 1 }} />
                  <p className={classes.widgetText}>
                    Vips__incident_attachments:{' '}
                    <span className={classes.widgetTextCount}>
                      {vips__incident_attachments}
                    </span>
                  </p>
                </div>
              </Widget>
            </Link>
          </Grid>
        }

        {
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <Link
              to={'/admin/vips__incident_comments'}
              style={{ textDecoration: 'none' }}
            >
              <Widget title={'Vips__incident_comments'}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <InfoIcon color='primary' sx={{ mr: 1 }} />
                  <p className={classes.widgetText}>
                    Vips__incident_comments:{' '}
                    <span className={classes.widgetTextCount}>
                      {vips__incident_comments}
                    </span>
                  </p>
                </div>
              </Widget>
            </Link>
          </Grid>
        }

        {
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <Link
              to={'/admin/vips__incident_history'}
              style={{ textDecoration: 'none' }}
            >
              <Widget title={'Vips__incident_history'}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <InfoIcon color='primary' sx={{ mr: 1 }} />
                  <p className={classes.widgetText}>
                    Vips__incident_history:{' '}
                    <span className={classes.widgetTextCount}>
                      {vips__incident_history}
                    </span>
                  </p>
                </div>
              </Widget>
            </Link>
          </Grid>
        }

        {
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <Link
              to={'/admin/vips__incident_user'}
              style={{ textDecoration: 'none' }}
            >
              <Widget title={'Vips__incident_user'}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <InfoIcon color='primary' sx={{ mr: 1 }} />
                  <p className={classes.widgetText}>
                    Vips__incident_user:{' '}
                    <span className={classes.widgetTextCount}>
                      {vips__incident_user}
                    </span>
                  </p>
                </div>
              </Widget>
            </Link>
          </Grid>
        }

        {
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <Link
              to={'/admin/vips__incidents'}
              style={{ textDecoration: 'none' }}
            >
              <Widget title={'Vips__incidents'}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <InfoIcon color='primary' sx={{ mr: 1 }} />
                  <p className={classes.widgetText}>
                    Vips__incidents:{' '}
                    <span className={classes.widgetTextCount}>
                      {vips__incidents}
                    </span>
                  </p>
                </div>
              </Widget>
            </Link>
          </Grid>
        }

        {
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <Link
              to={'/admin/vips__invoice_item_taxes'}
              style={{ textDecoration: 'none' }}
            >
              <Widget title={'Vips__invoice_item_taxes'}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <InfoIcon color='primary' sx={{ mr: 1 }} />
                  <p className={classes.widgetText}>
                    Vips__invoice_item_taxes:{' '}
                    <span className={classes.widgetTextCount}>
                      {vips__invoice_item_taxes}
                    </span>
                  </p>
                </div>
              </Widget>
            </Link>
          </Grid>
        }

        {
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <Link
              to={'/admin/vips__invoice_items'}
              style={{ textDecoration: 'none' }}
            >
              <Widget title={'Vips__invoice_items'}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <InfoIcon color='primary' sx={{ mr: 1 }} />
                  <p className={classes.widgetText}>
                    Vips__invoice_items:{' '}
                    <span className={classes.widgetTextCount}>
                      {vips__invoice_items}
                    </span>
                  </p>
                </div>
              </Widget>
            </Link>
          </Grid>
        }

        {
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <Link
              to={'/admin/vips__invoice_settings'}
              style={{ textDecoration: 'none' }}
            >
              <Widget title={'Vips__invoice_settings'}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <InfoIcon color='primary' sx={{ mr: 1 }} />
                  <p className={classes.widgetText}>
                    Vips__invoice_settings:{' '}
                    <span className={classes.widgetTextCount}>
                      {vips__invoice_settings}
                    </span>
                  </p>
                </div>
              </Widget>
            </Link>
          </Grid>
        }

        {
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <Link
              to={'/admin/vips__invoices'}
              style={{ textDecoration: 'none' }}
            >
              <Widget title={'Vips__invoices'}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <InfoIcon color='primary' sx={{ mr: 1 }} />
                  <p className={classes.widgetText}>
                    Vips__invoices:{' '}
                    <span className={classes.widgetTextCount}>
                      {vips__invoices}
                    </span>
                  </p>
                </div>
              </Widget>
            </Link>
          </Grid>
        }

        {
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <Link
              to={'/admin/vips__item_tax'}
              style={{ textDecoration: 'none' }}
            >
              <Widget title={'Vips__item_tax'}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <InfoIcon color='primary' sx={{ mr: 1 }} />
                  <p className={classes.widgetText}>
                    Vips__item_tax:{' '}
                    <span className={classes.widgetTextCount}>
                      {vips__item_tax}
                    </span>
                  </p>
                </div>
              </Widget>
            </Link>
          </Grid>
        }

        {
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <Link to={'/admin/vips__items'} style={{ textDecoration: 'none' }}>
              <Widget title={'Vips__items'}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <InfoIcon color='primary' sx={{ mr: 1 }} />
                  <p className={classes.widgetText}>
                    Vips__items:{' '}
                    <span className={classes.widgetTextCount}>
                      {vips__items}
                    </span>
                  </p>
                </div>
              </Widget>
            </Link>
          </Grid>
        }

        {
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <Link
              to={'/admin/vips__knowledge_base_article'}
              style={{ textDecoration: 'none' }}
            >
              <Widget title={'Vips__knowledge_base_article'}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <InfoIcon color='primary' sx={{ mr: 1 }} />
                  <p className={classes.widgetText}>
                    Vips__knowledge_base_article:{' '}
                    <span className={classes.widgetTextCount}>
                      {vips__knowledge_base_article}
                    </span>
                  </p>
                </div>
              </Widget>
            </Link>
          </Grid>
        }

        {
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <Link
              to={'/admin/vips__knowledge_base_category'}
              style={{ textDecoration: 'none' }}
            >
              <Widget title={'Vips__knowledge_base_category'}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <InfoIcon color='primary' sx={{ mr: 1 }} />
                  <p className={classes.widgetText}>
                    Vips__knowledge_base_category:{' '}
                    <span className={classes.widgetTextCount}>
                      {vips__knowledge_base_category}
                    </span>
                  </p>
                </div>
              </Widget>
            </Link>
          </Grid>
        }

        {
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <Link
              to={'/admin/vips__languages'}
              style={{ textDecoration: 'none' }}
            >
              <Widget title={'Vips__languages'}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <InfoIcon color='primary' sx={{ mr: 1 }} />
                  <p className={classes.widgetText}>
                    Vips__languages:{' '}
                    <span className={classes.widgetTextCount}>
                      {vips__languages}
                    </span>
                  </p>
                </div>
              </Widget>
            </Link>
          </Grid>
        }

        {
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <Link
              to={'/admin/vips__leave_attachments'}
              style={{ textDecoration: 'none' }}
            >
              <Widget title={'Vips__leave_attachments'}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <InfoIcon color='primary' sx={{ mr: 1 }} />
                  <p className={classes.widgetText}>
                    Vips__leave_attachments:{' '}
                    <span className={classes.widgetTextCount}>
                      {vips__leave_attachments}
                    </span>
                  </p>
                </div>
              </Widget>
            </Link>
          </Grid>
        }

        {
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <Link
              to={'/admin/vips__leave_types'}
              style={{ textDecoration: 'none' }}
            >
              <Widget title={'Vips__leave_types'}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <InfoIcon color='primary' sx={{ mr: 1 }} />
                  <p className={classes.widgetText}>
                    Vips__leave_types:{' '}
                    <span className={classes.widgetTextCount}>
                      {vips__leave_types}
                    </span>
                  </p>
                </div>
              </Widget>
            </Link>
          </Grid>
        }

        {
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <Link to={'/admin/vips__leaves'} style={{ textDecoration: 'none' }}>
              <Widget title={'Vips__leaves'}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <InfoIcon color='primary' sx={{ mr: 1 }} />
                  <p className={classes.widgetText}>
                    Vips__leaves:{' '}
                    <span className={classes.widgetTextCount}>
                      {vips__leaves}
                    </span>
                  </p>
                </div>
              </Widget>
            </Link>
          </Grid>
        }

        {
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <Link
              to={'/admin/vips__locales'}
              style={{ textDecoration: 'none' }}
            >
              <Widget title={'Vips__locales'}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <InfoIcon color='primary' sx={{ mr: 1 }} />
                  <p className={classes.widgetText}>
                    Vips__locales:{' '}
                    <span className={classes.widgetTextCount}>
                      {vips__locales}
                    </span>
                  </p>
                </div>
              </Widget>
            </Link>
          </Grid>
        }

        {
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <Link
              to={'/admin/vips__meeting_members'}
              style={{ textDecoration: 'none' }}
            >
              <Widget title={'Vips__meeting_members'}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <InfoIcon color='primary' sx={{ mr: 1 }} />
                  <p className={classes.widgetText}>
                    Vips__meeting_members:{' '}
                    <span className={classes.widgetTextCount}>
                      {vips__meeting_members}
                    </span>
                  </p>
                </div>
              </Widget>
            </Link>
          </Grid>
        }

        {
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <Link
              to={'/admin/vips__meetings'}
              style={{ textDecoration: 'none' }}
            >
              <Widget title={'Vips__meetings'}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <InfoIcon color='primary' sx={{ mr: 1 }} />
                  <p className={classes.widgetText}>
                    Vips__meetings:{' '}
                    <span className={classes.widgetTextCount}>
                      {vips__meetings}
                    </span>
                  </p>
                </div>
              </Widget>
            </Link>
          </Grid>
        }

        {
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <Link to={'/admin/vips__menus'} style={{ textDecoration: 'none' }}>
              <Widget title={'Vips__menus'}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <InfoIcon color='primary' sx={{ mr: 1 }} />
                  <p className={classes.widgetText}>
                    Vips__menus:{' '}
                    <span className={classes.widgetTextCount}>
                      {vips__menus}
                    </span>
                  </p>
                </div>
              </Widget>
            </Link>
          </Grid>
        }

        {
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <Link
              to={'/admin/vips__modules'}
              style={{ textDecoration: 'none' }}
            >
              <Widget title={'Vips__modules'}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <InfoIcon color='primary' sx={{ mr: 1 }} />
                  <p className={classes.widgetText}>
                    Vips__modules:{' '}
                    <span className={classes.widgetTextCount}>
                      {vips__modules}
                    </span>
                  </p>
                </div>
              </Widget>
            </Link>
          </Grid>
        }

        {
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <Link
              to={'/admin/vips__notifications'}
              style={{ textDecoration: 'none' }}
            >
              <Widget title={'Vips__notifications'}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <InfoIcon color='primary' sx={{ mr: 1 }} />
                  <p className={classes.widgetText}>
                    Vips__notifications:{' '}
                    <span className={classes.widgetTextCount}>
                      {vips__notifications}
                    </span>
                  </p>
                </div>
              </Widget>
            </Link>
          </Grid>
        }

        {
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <Link
              to={'/admin/vips__password_resets'}
              style={{ textDecoration: 'none' }}
            >
              <Widget title={'Vips__password_resets'}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <InfoIcon color='primary' sx={{ mr: 1 }} />
                  <p className={classes.widgetText}>
                    Vips__password_resets:{' '}
                    <span className={classes.widgetTextCount}>
                      {vips__password_resets}
                    </span>
                  </p>
                </div>
              </Widget>
            </Link>
          </Grid>
        }

        {
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <Link
              to={'/admin/vips__payment_gateway_settings'}
              style={{ textDecoration: 'none' }}
            >
              <Widget title={'Vips__payment_gateway_settings'}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <InfoIcon color='primary' sx={{ mr: 1 }} />
                  <p className={classes.widgetText}>
                    Vips__payment_gateway_settings:{' '}
                    <span className={classes.widgetTextCount}>
                      {vips__payment_gateway_settings}
                    </span>
                  </p>
                </div>
              </Widget>
            </Link>
          </Grid>
        }

        {
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <Link
              to={'/admin/vips__payment_methods'}
              style={{ textDecoration: 'none' }}
            >
              <Widget title={'Vips__payment_methods'}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <InfoIcon color='primary' sx={{ mr: 1 }} />
                  <p className={classes.widgetText}>
                    Vips__payment_methods:{' '}
                    <span className={classes.widgetTextCount}>
                      {vips__payment_methods}
                    </span>
                  </p>
                </div>
              </Widget>
            </Link>
          </Grid>
        }

        {
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <Link
              to={'/admin/vips__payments'}
              style={{ textDecoration: 'none' }}
            >
              <Widget title={'Vips__payments'}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <InfoIcon color='primary' sx={{ mr: 1 }} />
                  <p className={classes.widgetText}>
                    Vips__payments:{' '}
                    <span className={classes.widgetTextCount}>
                      {vips__payments}
                    </span>
                  </p>
                </div>
              </Widget>
            </Link>
          </Grid>
        }

        {
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <Link
              to={'/admin/vips__project_attachments'}
              style={{ textDecoration: 'none' }}
            >
              <Widget title={'Vips__project_attachments'}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <InfoIcon color='primary' sx={{ mr: 1 }} />
                  <p className={classes.widgetText}>
                    Vips__project_attachments:{' '}
                    <span className={classes.widgetTextCount}>
                      {vips__project_attachments}
                    </span>
                  </p>
                </div>
              </Widget>
            </Link>
          </Grid>
        }

        {
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <Link
              to={'/admin/vips__project_comments'}
              style={{ textDecoration: 'none' }}
            >
              <Widget title={'Vips__project_comments'}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <InfoIcon color='primary' sx={{ mr: 1 }} />
                  <p className={classes.widgetText}>
                    Vips__project_comments:{' '}
                    <span className={classes.widgetTextCount}>
                      {vips__project_comments}
                    </span>
                  </p>
                </div>
              </Widget>
            </Link>
          </Grid>
        }

        {
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <Link
              to={'/admin/vips__project_sprint_members'}
              style={{ textDecoration: 'none' }}
            >
              <Widget title={'Vips__project_sprint_members'}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <InfoIcon color='primary' sx={{ mr: 1 }} />
                  <p className={classes.widgetText}>
                    Vips__project_sprint_members:{' '}
                    <span className={classes.widgetTextCount}>
                      {vips__project_sprint_members}
                    </span>
                  </p>
                </div>
              </Widget>
            </Link>
          </Grid>
        }

        {
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <Link
              to={'/admin/vips__project_sprint_task_members'}
              style={{ textDecoration: 'none' }}
            >
              <Widget title={'Vips__project_sprint_task_members'}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <InfoIcon color='primary' sx={{ mr: 1 }} />
                  <p className={classes.widgetText}>
                    Vips__project_sprint_task_members:{' '}
                    <span className={classes.widgetTextCount}>
                      {vips__project_sprint_task_members}
                    </span>
                  </p>
                </div>
              </Widget>
            </Link>
          </Grid>
        }

        {
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <Link
              to={'/admin/vips__project_sprint_tasks'}
              style={{ textDecoration: 'none' }}
            >
              <Widget title={'Vips__project_sprint_tasks'}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <InfoIcon color='primary' sx={{ mr: 1 }} />
                  <p className={classes.widgetText}>
                    Vips__project_sprint_tasks:{' '}
                    <span className={classes.widgetTextCount}>
                      {vips__project_sprint_tasks}
                    </span>
                  </p>
                </div>
              </Widget>
            </Link>
          </Grid>
        }

        {
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <Link
              to={'/admin/vips__project_sprints'}
              style={{ textDecoration: 'none' }}
            >
              <Widget title={'Vips__project_sprints'}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <InfoIcon color='primary' sx={{ mr: 1 }} />
                  <p className={classes.widgetText}>
                    Vips__project_sprints:{' '}
                    <span className={classes.widgetTextCount}>
                      {vips__project_sprints}
                    </span>
                  </p>
                </div>
              </Widget>
            </Link>
          </Grid>
        }

        {
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <Link
              to={'/admin/vips__project_user'}
              style={{ textDecoration: 'none' }}
            >
              <Widget title={'Vips__project_user'}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <InfoIcon color='primary' sx={{ mr: 1 }} />
                  <p className={classes.widgetText}>
                    Vips__project_user:{' '}
                    <span className={classes.widgetTextCount}>
                      {vips__project_user}
                    </span>
                  </p>
                </div>
              </Widget>
            </Link>
          </Grid>
        }

        {
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <Link
              to={'/admin/vips__projects'}
              style={{ textDecoration: 'none' }}
            >
              <Widget title={'Vips__projects'}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <InfoIcon color='primary' sx={{ mr: 1 }} />
                  <p className={classes.widgetText}>
                    Vips__projects:{' '}
                    <span className={classes.widgetTextCount}>
                      {vips__projects}
                    </span>
                  </p>
                </div>
              </Widget>
            </Link>
          </Grid>
        }

        {
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <Link
              to={'/admin/vips__providers'}
              style={{ textDecoration: 'none' }}
            >
              <Widget title={'Vips__providers'}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <InfoIcon color='primary' sx={{ mr: 1 }} />
                  <p className={classes.widgetText}>
                    Vips__providers:{' '}
                    <span className={classes.widgetTextCount}>
                      {vips__providers}
                    </span>
                  </p>
                </div>
              </Widget>
            </Link>
          </Grid>
        }

        {
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <Link to={'/admin/vips__roles'} style={{ textDecoration: 'none' }}>
              <Widget title={'Vips__roles'}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <InfoIcon color='primary' sx={{ mr: 1 }} />
                  <p className={classes.widgetText}>
                    Vips__roles:{' '}
                    <span className={classes.widgetTextCount}>
                      {vips__roles}
                    </span>
                  </p>
                </div>
              </Widget>
            </Link>
          </Grid>
        }

        {
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <Link
              to={'/admin/vips__slack_integration'}
              style={{ textDecoration: 'none' }}
            >
              <Widget title={'Vips__slack_integration'}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <InfoIcon color='primary' sx={{ mr: 1 }} />
                  <p className={classes.widgetText}>
                    Vips__slack_integration:{' '}
                    <span className={classes.widgetTextCount}>
                      {vips__slack_integration}
                    </span>
                  </p>
                </div>
              </Widget>
            </Link>
          </Grid>
        }

        {
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <Link
              to={'/admin/vips__slack_settings'}
              style={{ textDecoration: 'none' }}
            >
              <Widget title={'Vips__slack_settings'}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <InfoIcon color='primary' sx={{ mr: 1 }} />
                  <p className={classes.widgetText}>
                    Vips__slack_settings:{' '}
                    <span className={classes.widgetTextCount}>
                      {vips__slack_settings}
                    </span>
                  </p>
                </div>
              </Widget>
            </Link>
          </Grid>
        }

        {
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <Link
              to={'/admin/vips__task_attachments'}
              style={{ textDecoration: 'none' }}
            >
              <Widget title={'Vips__task_attachments'}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <InfoIcon color='primary' sx={{ mr: 1 }} />
                  <p className={classes.widgetText}>
                    Vips__task_attachments:{' '}
                    <span className={classes.widgetTextCount}>
                      {vips__task_attachments}
                    </span>
                  </p>
                </div>
              </Widget>
            </Link>
          </Grid>
        }

        {
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <Link
              to={'/admin/vips__task_comments'}
              style={{ textDecoration: 'none' }}
            >
              <Widget title={'Vips__task_comments'}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <InfoIcon color='primary' sx={{ mr: 1 }} />
                  <p className={classes.widgetText}>
                    Vips__task_comments:{' '}
                    <span className={classes.widgetTextCount}>
                      {vips__task_comments}
                    </span>
                  </p>
                </div>
              </Widget>
            </Link>
          </Grid>
        }

        {
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <Link
              to={'/admin/vips__task_user'}
              style={{ textDecoration: 'none' }}
            >
              <Widget title={'Vips__task_user'}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <InfoIcon color='primary' sx={{ mr: 1 }} />
                  <p className={classes.widgetText}>
                    Vips__task_user:{' '}
                    <span className={classes.widgetTextCount}>
                      {vips__task_user}
                    </span>
                  </p>
                </div>
              </Widget>
            </Link>
          </Grid>
        }

        {
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <Link to={'/admin/vips__tasks'} style={{ textDecoration: 'none' }}>
              <Widget title={'Vips__tasks'}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <InfoIcon color='primary' sx={{ mr: 1 }} />
                  <p className={classes.widgetText}>
                    Vips__tasks:{' '}
                    <span className={classes.widgetTextCount}>
                      {vips__tasks}
                    </span>
                  </p>
                </div>
              </Widget>
            </Link>
          </Grid>
        }

        {
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <Link to={'/admin/vips__taxes'} style={{ textDecoration: 'none' }}>
              <Widget title={'Vips__taxes'}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <InfoIcon color='primary' sx={{ mr: 1 }} />
                  <p className={classes.widgetText}>
                    Vips__taxes:{' '}
                    <span className={classes.widgetTextCount}>
                      {vips__taxes}
                    </span>
                  </p>
                </div>
              </Widget>
            </Link>
          </Grid>
        }

        {
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <Link to={'/admin/vips__teams'} style={{ textDecoration: 'none' }}>
              <Widget title={'Vips__teams'}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <InfoIcon color='primary' sx={{ mr: 1 }} />
                  <p className={classes.widgetText}>
                    Vips__teams:{' '}
                    <span className={classes.widgetTextCount}>
                      {vips__teams}
                    </span>
                  </p>
                </div>
              </Widget>
            </Link>
          </Grid>
        }

        {
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <Link
              to={'/admin/vips__teams_members'}
              style={{ textDecoration: 'none' }}
            >
              <Widget title={'Vips__teams_members'}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <InfoIcon color='primary' sx={{ mr: 1 }} />
                  <p className={classes.widgetText}>
                    Vips__teams_members:{' '}
                    <span className={classes.widgetTextCount}>
                      {vips__teams_members}
                    </span>
                  </p>
                </div>
              </Widget>
            </Link>
          </Grid>
        }

        {
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <Link
              to={'/admin/vips__timer_logs'}
              style={{ textDecoration: 'none' }}
            >
              <Widget title={'Vips__timer_logs'}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <InfoIcon color='primary' sx={{ mr: 1 }} />
                  <p className={classes.widgetText}>
                    Vips__timer_logs:{' '}
                    <span className={classes.widgetTextCount}>
                      {vips__timer_logs}
                    </span>
                  </p>
                </div>
              </Widget>
            </Link>
          </Grid>
        }

        {
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <Link
              to={'/admin/vips__timesheets'}
              style={{ textDecoration: 'none' }}
            >
              <Widget title={'Vips__timesheets'}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <InfoIcon color='primary' sx={{ mr: 1 }} />
                  <p className={classes.widgetText}>
                    Vips__timesheets:{' '}
                    <span className={classes.widgetTextCount}>
                      {vips__timesheets}
                    </span>
                  </p>
                </div>
              </Widget>
            </Link>
          </Grid>
        }

        {
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <Link to={'/admin/vips__todos'} style={{ textDecoration: 'none' }}>
              <Widget title={'Vips__todos'}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <InfoIcon color='primary' sx={{ mr: 1 }} />
                  <p className={classes.widgetText}>
                    Vips__todos:{' '}
                    <span className={classes.widgetTextCount}>
                      {vips__todos}
                    </span>
                  </p>
                </div>
              </Widget>
            </Link>
          </Grid>
        }

        {
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <Link
              to={'/admin/vips__translations'}
              style={{ textDecoration: 'none' }}
            >
              <Widget title={'Vips__translations'}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <InfoIcon color='primary' sx={{ mr: 1 }} />
                  <p className={classes.widgetText}>
                    Vips__translations:{' '}
                    <span className={classes.widgetTextCount}>
                      {vips__translations}
                    </span>
                  </p>
                </div>
              </Widget>
            </Link>
          </Grid>
        }

        {
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <Link
              to={'/admin/vips__user_activities'}
              style={{ textDecoration: 'none' }}
            >
              <Widget title={'Vips__user_activities'}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <InfoIcon color='primary' sx={{ mr: 1 }} />
                  <p className={classes.widgetText}>
                    Vips__user_activities:{' '}
                    <span className={classes.widgetTextCount}>
                      {vips__user_activities}
                    </span>
                  </p>
                </div>
              </Widget>
            </Link>
          </Grid>
        }

        {
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <Link
              to={'/admin/vips__user_role_department'}
              style={{ textDecoration: 'none' }}
            >
              <Widget title={'Vips__user_role_department'}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <InfoIcon color='primary' sx={{ mr: 1 }} />
                  <p className={classes.widgetText}>
                    Vips__user_role_department:{' '}
                    <span className={classes.widgetTextCount}>
                      {vips__user_role_department}
                    </span>
                  </p>
                </div>
              </Widget>
            </Link>
          </Grid>
        }

        {
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <Link
              to={'/admin/vips__user_settings'}
              style={{ textDecoration: 'none' }}
            >
              <Widget title={'Vips__user_settings'}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <InfoIcon color='primary' sx={{ mr: 1 }} />
                  <p className={classes.widgetText}>
                    Vips__user_settings:{' '}
                    <span className={classes.widgetTextCount}>
                      {vips__user_settings}
                    </span>
                  </p>
                </div>
              </Widget>
            </Link>
          </Grid>
        }

        {
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <Link to={'/admin/vips__users'} style={{ textDecoration: 'none' }}>
              <Widget title={'Vips__users'}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <InfoIcon color='primary' sx={{ mr: 1 }} />
                  <p className={classes.widgetText}>
                    Vips__users:{' '}
                    <span className={classes.widgetTextCount}>
                      {vips__users}
                    </span>
                  </p>
                </div>
              </Widget>
            </Link>
          </Grid>
        }
      </Grid>
    </div>
  );
};

export default Dashboard;
