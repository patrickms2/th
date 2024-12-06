import auth from 'reducers/auth';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import users from 'reducers/users/usersReducers';

import vips__announcements from 'reducers/vips__announcements/vips__announcementsReducers';

import vips__appointment from 'reducers/vips__appointment/vips__appointmentReducers';

import vips__appointment_recurrence from 'reducers/vips__appointment_recurrence/vips__appointment_recurrenceReducers';

import vips__clients from 'reducers/vips__clients/vips__clientsReducers';

import vips__countries from 'reducers/vips__countries/vips__countriesReducers';

import vips__currency from 'reducers/vips__currency/vips__currencyReducers';

import vips__custom_fields from 'reducers/vips__custom_fields/vips__custom_fieldsReducers';

import vips__dashboard_settings from 'reducers/vips__dashboard_settings/vips__dashboard_settingsReducers';

import vips__database_backups from 'reducers/vips__database_backups/vips__database_backupsReducers';

import vips__defect_attachments from 'reducers/vips__defect_attachments/vips__defect_attachmentsReducers';

import vips__defect_comments from 'reducers/vips__defect_comments/vips__defect_commentsReducers';

import vips__defect_user from 'reducers/vips__defect_user/vips__defect_userReducers';

import vips__defects from 'reducers/vips__defects/vips__defectsReducers';

import vips__defects_history from 'reducers/vips__defects_history/vips__defects_historyReducers';

import vips__department_role_menu from 'reducers/vips__department_role_menu/vips__department_role_menuReducers';

import vips__departments from 'reducers/vips__departments/vips__departmentsReducers';

import vips__departments_roles from 'reducers/vips__departments_roles/vips__departments_rolesReducers';

import vips__email_inbox from 'reducers/vips__email_inbox/vips__email_inboxReducers';

import vips__email_inbox_attachment from 'reducers/vips__email_inbox_attachment/vips__email_inbox_attachmentReducers';

import vips__email_template from 'reducers/vips__email_template/vips__email_templateReducers';

import vips__email_template_groups from 'reducers/vips__email_template_groups/vips__email_template_groupsReducers';

import vips__estimate_item_taxes from 'reducers/vips__estimate_item_taxes/vips__estimate_item_taxesReducers';

import vips__estimate_items from 'reducers/vips__estimate_items/vips__estimate_itemsReducers';

import vips__estimate_settings from 'reducers/vips__estimate_settings/vips__estimate_settingsReducers';

import vips__estimates from 'reducers/vips__estimates/vips__estimatesReducers';

import vips__files from 'reducers/vips__files/vips__filesReducers';

import vips__folders from 'reducers/vips__folders/vips__foldersReducers';

import vips__form from 'reducers/vips__form/vips__formReducers';

import vips__holidays from 'reducers/vips__holidays/vips__holidaysReducers';

import vips__incident_attachments from 'reducers/vips__incident_attachments/vips__incident_attachmentsReducers';

import vips__incident_comments from 'reducers/vips__incident_comments/vips__incident_commentsReducers';

import vips__incident_history from 'reducers/vips__incident_history/vips__incident_historyReducers';

import vips__incident_user from 'reducers/vips__incident_user/vips__incident_userReducers';

import vips__incidents from 'reducers/vips__incidents/vips__incidentsReducers';

import vips__invoice_item_taxes from 'reducers/vips__invoice_item_taxes/vips__invoice_item_taxesReducers';

import vips__invoice_items from 'reducers/vips__invoice_items/vips__invoice_itemsReducers';

import vips__invoice_settings from 'reducers/vips__invoice_settings/vips__invoice_settingsReducers';

import vips__invoices from 'reducers/vips__invoices/vips__invoicesReducers';

import vips__item_tax from 'reducers/vips__item_tax/vips__item_taxReducers';

import vips__items from 'reducers/vips__items/vips__itemsReducers';

import vips__knowledge_base_article from 'reducers/vips__knowledge_base_article/vips__knowledge_base_articleReducers';

import vips__knowledge_base_category from 'reducers/vips__knowledge_base_category/vips__knowledge_base_categoryReducers';

import vips__languages from 'reducers/vips__languages/vips__languagesReducers';

import vips__leave_attachments from 'reducers/vips__leave_attachments/vips__leave_attachmentsReducers';

import vips__leave_types from 'reducers/vips__leave_types/vips__leave_typesReducers';

import vips__leaves from 'reducers/vips__leaves/vips__leavesReducers';

import vips__locales from 'reducers/vips__locales/vips__localesReducers';

import vips__meeting_members from 'reducers/vips__meeting_members/vips__meeting_membersReducers';

import vips__meetings from 'reducers/vips__meetings/vips__meetingsReducers';

import vips__menus from 'reducers/vips__menus/vips__menusReducers';

import vips__modules from 'reducers/vips__modules/vips__modulesReducers';

import vips__notifications from 'reducers/vips__notifications/vips__notificationsReducers';

import vips__password_resets from 'reducers/vips__password_resets/vips__password_resetsReducers';

import vips__payment_gateway_settings from 'reducers/vips__payment_gateway_settings/vips__payment_gateway_settingsReducers';

import vips__payment_methods from 'reducers/vips__payment_methods/vips__payment_methodsReducers';

import vips__payments from 'reducers/vips__payments/vips__paymentsReducers';

import vips__project_attachments from 'reducers/vips__project_attachments/vips__project_attachmentsReducers';

import vips__project_comments from 'reducers/vips__project_comments/vips__project_commentsReducers';

import vips__project_sprint_members from 'reducers/vips__project_sprint_members/vips__project_sprint_membersReducers';

import vips__project_sprint_task_members from 'reducers/vips__project_sprint_task_members/vips__project_sprint_task_membersReducers';

import vips__project_sprint_tasks from 'reducers/vips__project_sprint_tasks/vips__project_sprint_tasksReducers';

import vips__project_sprints from 'reducers/vips__project_sprints/vips__project_sprintsReducers';

import vips__project_user from 'reducers/vips__project_user/vips__project_userReducers';

import vips__projects from 'reducers/vips__projects/vips__projectsReducers';

import vips__providers from 'reducers/vips__providers/vips__providersReducers';

import vips__roles from 'reducers/vips__roles/vips__rolesReducers';

import vips__slack_integration from 'reducers/vips__slack_integration/vips__slack_integrationReducers';

import vips__slack_settings from 'reducers/vips__slack_settings/vips__slack_settingsReducers';

import vips__task_attachments from 'reducers/vips__task_attachments/vips__task_attachmentsReducers';

import vips__task_comments from 'reducers/vips__task_comments/vips__task_commentsReducers';

import vips__task_user from 'reducers/vips__task_user/vips__task_userReducers';

import vips__tasks from 'reducers/vips__tasks/vips__tasksReducers';

import vips__taxes from 'reducers/vips__taxes/vips__taxesReducers';

import vips__teams from 'reducers/vips__teams/vips__teamsReducers';

import vips__teams_members from 'reducers/vips__teams_members/vips__teams_membersReducers';

import vips__timer_logs from 'reducers/vips__timer_logs/vips__timer_logsReducers';

import vips__timesheets from 'reducers/vips__timesheets/vips__timesheetsReducers';

import vips__todos from 'reducers/vips__todos/vips__todosReducers';

import vips__translations from 'reducers/vips__translations/vips__translationsReducers';

import vips__user_activities from 'reducers/vips__user_activities/vips__user_activitiesReducers';

import vips__user_role_department from 'reducers/vips__user_role_department/vips__user_role_departmentReducers';

import vips__user_settings from 'reducers/vips__user_settings/vips__user_settingsReducers';

import vips__users from 'reducers/vips__users/vips__usersReducers';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    auth,

    users,

    vips__announcements,

    vips__appointment,

    vips__appointment_recurrence,

    vips__clients,

    vips__countries,

    vips__currency,

    vips__custom_fields,

    vips__dashboard_settings,

    vips__database_backups,

    vips__defect_attachments,

    vips__defect_comments,

    vips__defect_user,

    vips__defects,

    vips__defects_history,

    vips__department_role_menu,

    vips__departments,

    vips__departments_roles,

    vips__email_inbox,

    vips__email_inbox_attachment,

    vips__email_template,

    vips__email_template_groups,

    vips__estimate_item_taxes,

    vips__estimate_items,

    vips__estimate_settings,

    vips__estimates,

    vips__files,

    vips__folders,

    vips__form,

    vips__holidays,

    vips__incident_attachments,

    vips__incident_comments,

    vips__incident_history,

    vips__incident_user,

    vips__incidents,

    vips__invoice_item_taxes,

    vips__invoice_items,

    vips__invoice_settings,

    vips__invoices,

    vips__item_tax,

    vips__items,

    vips__knowledge_base_article,

    vips__knowledge_base_category,

    vips__languages,

    vips__leave_attachments,

    vips__leave_types,

    vips__leaves,

    vips__locales,

    vips__meeting_members,

    vips__meetings,

    vips__menus,

    vips__modules,

    vips__notifications,

    vips__password_resets,

    vips__payment_gateway_settings,

    vips__payment_methods,

    vips__payments,

    vips__project_attachments,

    vips__project_comments,

    vips__project_sprint_members,

    vips__project_sprint_task_members,

    vips__project_sprint_tasks,

    vips__project_sprints,

    vips__project_user,

    vips__projects,

    vips__providers,

    vips__roles,

    vips__slack_integration,

    vips__slack_settings,

    vips__task_attachments,

    vips__task_comments,

    vips__task_user,

    vips__tasks,

    vips__taxes,

    vips__teams,

    vips__teams_members,

    vips__timer_logs,

    vips__timesheets,

    vips__todos,

    vips__translations,

    vips__user_activities,

    vips__user_role_department,

    vips__user_settings,

    vips__users,
  });
