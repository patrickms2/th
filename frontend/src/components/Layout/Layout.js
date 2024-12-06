import React, { useEffect } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import classnames from 'classnames';

import SettingsIcon from '@mui/icons-material/Settings';
import GithubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

import { Fab, IconButton } from '@mui/material';
import { connect } from 'react-redux';
// styles
import useStyles from './styles';

// components
import Header from '../Header';
import Sidebar from '../Sidebar';
import Footer from '../Footer';
import { Link } from '../Wrappers';
import ColorChangeThemePopper from './components/ColorChangeThemePopper';

import EditUser from '../../pages/user/EditUser';

// pages
import Dashboard from '../../pages/dashboard';
import BreadCrumbs from '../../components/BreadCrumbs';

// context
import { useLayoutState } from '../../context/LayoutContext';

import UsersFormPage from 'pages/CRUD/Users/form/UsersFormPage';
import UsersFormPageView from 'pages/CRUD/Users/form/UsersFormPageView';
import UsersTablePage from 'pages/CRUD/Users/table/UsersTablePage';

import Vips__announcementsFormPage from 'pages/CRUD/Vips__announcements/form/Vips__announcementsFormPage';
import Vips__announcementsFormPageView from 'pages/CRUD/Vips__announcements/form/Vips__announcementsFormPageView';
import Vips__announcementsTablePage from 'pages/CRUD/Vips__announcements/table/Vips__announcementsTablePage';

import Vips__appointmentFormPage from 'pages/CRUD/Vips__appointment/form/Vips__appointmentFormPage';
import Vips__appointmentFormPageView from 'pages/CRUD/Vips__appointment/form/Vips__appointmentFormPageView';
import Vips__appointmentTablePage from 'pages/CRUD/Vips__appointment/table/Vips__appointmentTablePage';

import Vips__appointment_recurrenceFormPage from 'pages/CRUD/Vips__appointment_recurrence/form/Vips__appointment_recurrenceFormPage';
import Vips__appointment_recurrenceFormPageView from 'pages/CRUD/Vips__appointment_recurrence/form/Vips__appointment_recurrenceFormPageView';
import Vips__appointment_recurrenceTablePage from 'pages/CRUD/Vips__appointment_recurrence/table/Vips__appointment_recurrenceTablePage';

import Vips__clientsFormPage from 'pages/CRUD/Vips__clients/form/Vips__clientsFormPage';
import Vips__clientsFormPageView from 'pages/CRUD/Vips__clients/form/Vips__clientsFormPageView';
import Vips__clientsTablePage from 'pages/CRUD/Vips__clients/table/Vips__clientsTablePage';

import Vips__countriesFormPage from 'pages/CRUD/Vips__countries/form/Vips__countriesFormPage';
import Vips__countriesFormPageView from 'pages/CRUD/Vips__countries/form/Vips__countriesFormPageView';
import Vips__countriesTablePage from 'pages/CRUD/Vips__countries/table/Vips__countriesTablePage';

import Vips__currencyFormPage from 'pages/CRUD/Vips__currency/form/Vips__currencyFormPage';
import Vips__currencyFormPageView from 'pages/CRUD/Vips__currency/form/Vips__currencyFormPageView';
import Vips__currencyTablePage from 'pages/CRUD/Vips__currency/table/Vips__currencyTablePage';

import Vips__custom_fieldsFormPage from 'pages/CRUD/Vips__custom_fields/form/Vips__custom_fieldsFormPage';
import Vips__custom_fieldsFormPageView from 'pages/CRUD/Vips__custom_fields/form/Vips__custom_fieldsFormPageView';
import Vips__custom_fieldsTablePage from 'pages/CRUD/Vips__custom_fields/table/Vips__custom_fieldsTablePage';

import Vips__dashboard_settingsFormPage from 'pages/CRUD/Vips__dashboard_settings/form/Vips__dashboard_settingsFormPage';
import Vips__dashboard_settingsFormPageView from 'pages/CRUD/Vips__dashboard_settings/form/Vips__dashboard_settingsFormPageView';
import Vips__dashboard_settingsTablePage from 'pages/CRUD/Vips__dashboard_settings/table/Vips__dashboard_settingsTablePage';

import Vips__database_backupsFormPage from 'pages/CRUD/Vips__database_backups/form/Vips__database_backupsFormPage';
import Vips__database_backupsFormPageView from 'pages/CRUD/Vips__database_backups/form/Vips__database_backupsFormPageView';
import Vips__database_backupsTablePage from 'pages/CRUD/Vips__database_backups/table/Vips__database_backupsTablePage';

import Vips__defect_attachmentsFormPage from 'pages/CRUD/Vips__defect_attachments/form/Vips__defect_attachmentsFormPage';
import Vips__defect_attachmentsFormPageView from 'pages/CRUD/Vips__defect_attachments/form/Vips__defect_attachmentsFormPageView';
import Vips__defect_attachmentsTablePage from 'pages/CRUD/Vips__defect_attachments/table/Vips__defect_attachmentsTablePage';

import Vips__defect_commentsFormPage from 'pages/CRUD/Vips__defect_comments/form/Vips__defect_commentsFormPage';
import Vips__defect_commentsFormPageView from 'pages/CRUD/Vips__defect_comments/form/Vips__defect_commentsFormPageView';
import Vips__defect_commentsTablePage from 'pages/CRUD/Vips__defect_comments/table/Vips__defect_commentsTablePage';

import Vips__defect_userFormPage from 'pages/CRUD/Vips__defect_user/form/Vips__defect_userFormPage';
import Vips__defect_userFormPageView from 'pages/CRUD/Vips__defect_user/form/Vips__defect_userFormPageView';
import Vips__defect_userTablePage from 'pages/CRUD/Vips__defect_user/table/Vips__defect_userTablePage';

import Vips__defectsFormPage from 'pages/CRUD/Vips__defects/form/Vips__defectsFormPage';
import Vips__defectsFormPageView from 'pages/CRUD/Vips__defects/form/Vips__defectsFormPageView';
import Vips__defectsTablePage from 'pages/CRUD/Vips__defects/table/Vips__defectsTablePage';

import Vips__defects_historyFormPage from 'pages/CRUD/Vips__defects_history/form/Vips__defects_historyFormPage';
import Vips__defects_historyFormPageView from 'pages/CRUD/Vips__defects_history/form/Vips__defects_historyFormPageView';
import Vips__defects_historyTablePage from 'pages/CRUD/Vips__defects_history/table/Vips__defects_historyTablePage';

import Vips__department_role_menuFormPage from 'pages/CRUD/Vips__department_role_menu/form/Vips__department_role_menuFormPage';
import Vips__department_role_menuFormPageView from 'pages/CRUD/Vips__department_role_menu/form/Vips__department_role_menuFormPageView';
import Vips__department_role_menuTablePage from 'pages/CRUD/Vips__department_role_menu/table/Vips__department_role_menuTablePage';

import Vips__departmentsFormPage from 'pages/CRUD/Vips__departments/form/Vips__departmentsFormPage';
import Vips__departmentsFormPageView from 'pages/CRUD/Vips__departments/form/Vips__departmentsFormPageView';
import Vips__departmentsTablePage from 'pages/CRUD/Vips__departments/table/Vips__departmentsTablePage';

import Vips__departments_rolesFormPage from 'pages/CRUD/Vips__departments_roles/form/Vips__departments_rolesFormPage';
import Vips__departments_rolesFormPageView from 'pages/CRUD/Vips__departments_roles/form/Vips__departments_rolesFormPageView';
import Vips__departments_rolesTablePage from 'pages/CRUD/Vips__departments_roles/table/Vips__departments_rolesTablePage';

import Vips__email_inboxFormPage from 'pages/CRUD/Vips__email_inbox/form/Vips__email_inboxFormPage';
import Vips__email_inboxFormPageView from 'pages/CRUD/Vips__email_inbox/form/Vips__email_inboxFormPageView';
import Vips__email_inboxTablePage from 'pages/CRUD/Vips__email_inbox/table/Vips__email_inboxTablePage';

import Vips__email_inbox_attachmentFormPage from 'pages/CRUD/Vips__email_inbox_attachment/form/Vips__email_inbox_attachmentFormPage';
import Vips__email_inbox_attachmentFormPageView from 'pages/CRUD/Vips__email_inbox_attachment/form/Vips__email_inbox_attachmentFormPageView';
import Vips__email_inbox_attachmentTablePage from 'pages/CRUD/Vips__email_inbox_attachment/table/Vips__email_inbox_attachmentTablePage';

import Vips__email_templateFormPage from 'pages/CRUD/Vips__email_template/form/Vips__email_templateFormPage';
import Vips__email_templateFormPageView from 'pages/CRUD/Vips__email_template/form/Vips__email_templateFormPageView';
import Vips__email_templateTablePage from 'pages/CRUD/Vips__email_template/table/Vips__email_templateTablePage';

import Vips__email_template_groupsFormPage from 'pages/CRUD/Vips__email_template_groups/form/Vips__email_template_groupsFormPage';
import Vips__email_template_groupsFormPageView from 'pages/CRUD/Vips__email_template_groups/form/Vips__email_template_groupsFormPageView';
import Vips__email_template_groupsTablePage from 'pages/CRUD/Vips__email_template_groups/table/Vips__email_template_groupsTablePage';

import Vips__estimate_item_taxesFormPage from 'pages/CRUD/Vips__estimate_item_taxes/form/Vips__estimate_item_taxesFormPage';
import Vips__estimate_item_taxesFormPageView from 'pages/CRUD/Vips__estimate_item_taxes/form/Vips__estimate_item_taxesFormPageView';
import Vips__estimate_item_taxesTablePage from 'pages/CRUD/Vips__estimate_item_taxes/table/Vips__estimate_item_taxesTablePage';

import Vips__estimate_itemsFormPage from 'pages/CRUD/Vips__estimate_items/form/Vips__estimate_itemsFormPage';
import Vips__estimate_itemsFormPageView from 'pages/CRUD/Vips__estimate_items/form/Vips__estimate_itemsFormPageView';
import Vips__estimate_itemsTablePage from 'pages/CRUD/Vips__estimate_items/table/Vips__estimate_itemsTablePage';

import Vips__estimate_settingsFormPage from 'pages/CRUD/Vips__estimate_settings/form/Vips__estimate_settingsFormPage';
import Vips__estimate_settingsFormPageView from 'pages/CRUD/Vips__estimate_settings/form/Vips__estimate_settingsFormPageView';
import Vips__estimate_settingsTablePage from 'pages/CRUD/Vips__estimate_settings/table/Vips__estimate_settingsTablePage';

import Vips__estimatesFormPage from 'pages/CRUD/Vips__estimates/form/Vips__estimatesFormPage';
import Vips__estimatesFormPageView from 'pages/CRUD/Vips__estimates/form/Vips__estimatesFormPageView';
import Vips__estimatesTablePage from 'pages/CRUD/Vips__estimates/table/Vips__estimatesTablePage';

import Vips__filesFormPage from 'pages/CRUD/Vips__files/form/Vips__filesFormPage';
import Vips__filesFormPageView from 'pages/CRUD/Vips__files/form/Vips__filesFormPageView';
import Vips__filesTablePage from 'pages/CRUD/Vips__files/table/Vips__filesTablePage';

import Vips__foldersFormPage from 'pages/CRUD/Vips__folders/form/Vips__foldersFormPage';
import Vips__foldersFormPageView from 'pages/CRUD/Vips__folders/form/Vips__foldersFormPageView';
import Vips__foldersTablePage from 'pages/CRUD/Vips__folders/table/Vips__foldersTablePage';

import Vips__formFormPage from 'pages/CRUD/Vips__form/form/Vips__formFormPage';
import Vips__formFormPageView from 'pages/CRUD/Vips__form/form/Vips__formFormPageView';
import Vips__formTablePage from 'pages/CRUD/Vips__form/table/Vips__formTablePage';

import Vips__holidaysFormPage from 'pages/CRUD/Vips__holidays/form/Vips__holidaysFormPage';
import Vips__holidaysFormPageView from 'pages/CRUD/Vips__holidays/form/Vips__holidaysFormPageView';
import Vips__holidaysTablePage from 'pages/CRUD/Vips__holidays/table/Vips__holidaysTablePage';

import Vips__incident_attachmentsFormPage from 'pages/CRUD/Vips__incident_attachments/form/Vips__incident_attachmentsFormPage';
import Vips__incident_attachmentsFormPageView from 'pages/CRUD/Vips__incident_attachments/form/Vips__incident_attachmentsFormPageView';
import Vips__incident_attachmentsTablePage from 'pages/CRUD/Vips__incident_attachments/table/Vips__incident_attachmentsTablePage';

import Vips__incident_commentsFormPage from 'pages/CRUD/Vips__incident_comments/form/Vips__incident_commentsFormPage';
import Vips__incident_commentsFormPageView from 'pages/CRUD/Vips__incident_comments/form/Vips__incident_commentsFormPageView';
import Vips__incident_commentsTablePage from 'pages/CRUD/Vips__incident_comments/table/Vips__incident_commentsTablePage';

import Vips__incident_historyFormPage from 'pages/CRUD/Vips__incident_history/form/Vips__incident_historyFormPage';
import Vips__incident_historyFormPageView from 'pages/CRUD/Vips__incident_history/form/Vips__incident_historyFormPageView';
import Vips__incident_historyTablePage from 'pages/CRUD/Vips__incident_history/table/Vips__incident_historyTablePage';

import Vips__incident_userFormPage from 'pages/CRUD/Vips__incident_user/form/Vips__incident_userFormPage';
import Vips__incident_userFormPageView from 'pages/CRUD/Vips__incident_user/form/Vips__incident_userFormPageView';
import Vips__incident_userTablePage from 'pages/CRUD/Vips__incident_user/table/Vips__incident_userTablePage';

import Vips__incidentsFormPage from 'pages/CRUD/Vips__incidents/form/Vips__incidentsFormPage';
import Vips__incidentsFormPageView from 'pages/CRUD/Vips__incidents/form/Vips__incidentsFormPageView';
import Vips__incidentsTablePage from 'pages/CRUD/Vips__incidents/table/Vips__incidentsTablePage';

import Vips__invoice_item_taxesFormPage from 'pages/CRUD/Vips__invoice_item_taxes/form/Vips__invoice_item_taxesFormPage';
import Vips__invoice_item_taxesFormPageView from 'pages/CRUD/Vips__invoice_item_taxes/form/Vips__invoice_item_taxesFormPageView';
import Vips__invoice_item_taxesTablePage from 'pages/CRUD/Vips__invoice_item_taxes/table/Vips__invoice_item_taxesTablePage';

import Vips__invoice_itemsFormPage from 'pages/CRUD/Vips__invoice_items/form/Vips__invoice_itemsFormPage';
import Vips__invoice_itemsFormPageView from 'pages/CRUD/Vips__invoice_items/form/Vips__invoice_itemsFormPageView';
import Vips__invoice_itemsTablePage from 'pages/CRUD/Vips__invoice_items/table/Vips__invoice_itemsTablePage';

import Vips__invoice_settingsFormPage from 'pages/CRUD/Vips__invoice_settings/form/Vips__invoice_settingsFormPage';
import Vips__invoice_settingsFormPageView from 'pages/CRUD/Vips__invoice_settings/form/Vips__invoice_settingsFormPageView';
import Vips__invoice_settingsTablePage from 'pages/CRUD/Vips__invoice_settings/table/Vips__invoice_settingsTablePage';

import Vips__invoicesFormPage from 'pages/CRUD/Vips__invoices/form/Vips__invoicesFormPage';
import Vips__invoicesFormPageView from 'pages/CRUD/Vips__invoices/form/Vips__invoicesFormPageView';
import Vips__invoicesTablePage from 'pages/CRUD/Vips__invoices/table/Vips__invoicesTablePage';

import Vips__item_taxFormPage from 'pages/CRUD/Vips__item_tax/form/Vips__item_taxFormPage';
import Vips__item_taxFormPageView from 'pages/CRUD/Vips__item_tax/form/Vips__item_taxFormPageView';
import Vips__item_taxTablePage from 'pages/CRUD/Vips__item_tax/table/Vips__item_taxTablePage';

import Vips__itemsFormPage from 'pages/CRUD/Vips__items/form/Vips__itemsFormPage';
import Vips__itemsFormPageView from 'pages/CRUD/Vips__items/form/Vips__itemsFormPageView';
import Vips__itemsTablePage from 'pages/CRUD/Vips__items/table/Vips__itemsTablePage';

import Vips__knowledge_base_articleFormPage from 'pages/CRUD/Vips__knowledge_base_article/form/Vips__knowledge_base_articleFormPage';
import Vips__knowledge_base_articleFormPageView from 'pages/CRUD/Vips__knowledge_base_article/form/Vips__knowledge_base_articleFormPageView';
import Vips__knowledge_base_articleTablePage from 'pages/CRUD/Vips__knowledge_base_article/table/Vips__knowledge_base_articleTablePage';

import Vips__knowledge_base_categoryFormPage from 'pages/CRUD/Vips__knowledge_base_category/form/Vips__knowledge_base_categoryFormPage';
import Vips__knowledge_base_categoryFormPageView from 'pages/CRUD/Vips__knowledge_base_category/form/Vips__knowledge_base_categoryFormPageView';
import Vips__knowledge_base_categoryTablePage from 'pages/CRUD/Vips__knowledge_base_category/table/Vips__knowledge_base_categoryTablePage';

import Vips__languagesFormPage from 'pages/CRUD/Vips__languages/form/Vips__languagesFormPage';
import Vips__languagesFormPageView from 'pages/CRUD/Vips__languages/form/Vips__languagesFormPageView';
import Vips__languagesTablePage from 'pages/CRUD/Vips__languages/table/Vips__languagesTablePage';

import Vips__leave_attachmentsFormPage from 'pages/CRUD/Vips__leave_attachments/form/Vips__leave_attachmentsFormPage';
import Vips__leave_attachmentsFormPageView from 'pages/CRUD/Vips__leave_attachments/form/Vips__leave_attachmentsFormPageView';
import Vips__leave_attachmentsTablePage from 'pages/CRUD/Vips__leave_attachments/table/Vips__leave_attachmentsTablePage';

import Vips__leave_typesFormPage from 'pages/CRUD/Vips__leave_types/form/Vips__leave_typesFormPage';
import Vips__leave_typesFormPageView from 'pages/CRUD/Vips__leave_types/form/Vips__leave_typesFormPageView';
import Vips__leave_typesTablePage from 'pages/CRUD/Vips__leave_types/table/Vips__leave_typesTablePage';

import Vips__leavesFormPage from 'pages/CRUD/Vips__leaves/form/Vips__leavesFormPage';
import Vips__leavesFormPageView from 'pages/CRUD/Vips__leaves/form/Vips__leavesFormPageView';
import Vips__leavesTablePage from 'pages/CRUD/Vips__leaves/table/Vips__leavesTablePage';

import Vips__localesFormPage from 'pages/CRUD/Vips__locales/form/Vips__localesFormPage';
import Vips__localesFormPageView from 'pages/CRUD/Vips__locales/form/Vips__localesFormPageView';
import Vips__localesTablePage from 'pages/CRUD/Vips__locales/table/Vips__localesTablePage';

import Vips__meeting_membersFormPage from 'pages/CRUD/Vips__meeting_members/form/Vips__meeting_membersFormPage';
import Vips__meeting_membersFormPageView from 'pages/CRUD/Vips__meeting_members/form/Vips__meeting_membersFormPageView';
import Vips__meeting_membersTablePage from 'pages/CRUD/Vips__meeting_members/table/Vips__meeting_membersTablePage';

import Vips__meetingsFormPage from 'pages/CRUD/Vips__meetings/form/Vips__meetingsFormPage';
import Vips__meetingsFormPageView from 'pages/CRUD/Vips__meetings/form/Vips__meetingsFormPageView';
import Vips__meetingsTablePage from 'pages/CRUD/Vips__meetings/table/Vips__meetingsTablePage';

import Vips__menusFormPage from 'pages/CRUD/Vips__menus/form/Vips__menusFormPage';
import Vips__menusFormPageView from 'pages/CRUD/Vips__menus/form/Vips__menusFormPageView';
import Vips__menusTablePage from 'pages/CRUD/Vips__menus/table/Vips__menusTablePage';

import Vips__modulesFormPage from 'pages/CRUD/Vips__modules/form/Vips__modulesFormPage';
import Vips__modulesFormPageView from 'pages/CRUD/Vips__modules/form/Vips__modulesFormPageView';
import Vips__modulesTablePage from 'pages/CRUD/Vips__modules/table/Vips__modulesTablePage';

import Vips__notificationsFormPage from 'pages/CRUD/Vips__notifications/form/Vips__notificationsFormPage';
import Vips__notificationsFormPageView from 'pages/CRUD/Vips__notifications/form/Vips__notificationsFormPageView';
import Vips__notificationsTablePage from 'pages/CRUD/Vips__notifications/table/Vips__notificationsTablePage';

import Vips__password_resetsFormPage from 'pages/CRUD/Vips__password_resets/form/Vips__password_resetsFormPage';
import Vips__password_resetsFormPageView from 'pages/CRUD/Vips__password_resets/form/Vips__password_resetsFormPageView';
import Vips__password_resetsTablePage from 'pages/CRUD/Vips__password_resets/table/Vips__password_resetsTablePage';

import Vips__payment_gateway_settingsFormPage from 'pages/CRUD/Vips__payment_gateway_settings/form/Vips__payment_gateway_settingsFormPage';
import Vips__payment_gateway_settingsFormPageView from 'pages/CRUD/Vips__payment_gateway_settings/form/Vips__payment_gateway_settingsFormPageView';
import Vips__payment_gateway_settingsTablePage from 'pages/CRUD/Vips__payment_gateway_settings/table/Vips__payment_gateway_settingsTablePage';

import Vips__payment_methodsFormPage from 'pages/CRUD/Vips__payment_methods/form/Vips__payment_methodsFormPage';
import Vips__payment_methodsFormPageView from 'pages/CRUD/Vips__payment_methods/form/Vips__payment_methodsFormPageView';
import Vips__payment_methodsTablePage from 'pages/CRUD/Vips__payment_methods/table/Vips__payment_methodsTablePage';

import Vips__paymentsFormPage from 'pages/CRUD/Vips__payments/form/Vips__paymentsFormPage';
import Vips__paymentsFormPageView from 'pages/CRUD/Vips__payments/form/Vips__paymentsFormPageView';
import Vips__paymentsTablePage from 'pages/CRUD/Vips__payments/table/Vips__paymentsTablePage';

import Vips__project_attachmentsFormPage from 'pages/CRUD/Vips__project_attachments/form/Vips__project_attachmentsFormPage';
import Vips__project_attachmentsFormPageView from 'pages/CRUD/Vips__project_attachments/form/Vips__project_attachmentsFormPageView';
import Vips__project_attachmentsTablePage from 'pages/CRUD/Vips__project_attachments/table/Vips__project_attachmentsTablePage';

import Vips__project_commentsFormPage from 'pages/CRUD/Vips__project_comments/form/Vips__project_commentsFormPage';
import Vips__project_commentsFormPageView from 'pages/CRUD/Vips__project_comments/form/Vips__project_commentsFormPageView';
import Vips__project_commentsTablePage from 'pages/CRUD/Vips__project_comments/table/Vips__project_commentsTablePage';

import Vips__project_sprint_membersFormPage from 'pages/CRUD/Vips__project_sprint_members/form/Vips__project_sprint_membersFormPage';
import Vips__project_sprint_membersFormPageView from 'pages/CRUD/Vips__project_sprint_members/form/Vips__project_sprint_membersFormPageView';
import Vips__project_sprint_membersTablePage from 'pages/CRUD/Vips__project_sprint_members/table/Vips__project_sprint_membersTablePage';

import Vips__project_sprint_task_membersFormPage from 'pages/CRUD/Vips__project_sprint_task_members/form/Vips__project_sprint_task_membersFormPage';
import Vips__project_sprint_task_membersFormPageView from 'pages/CRUD/Vips__project_sprint_task_members/form/Vips__project_sprint_task_membersFormPageView';
import Vips__project_sprint_task_membersTablePage from 'pages/CRUD/Vips__project_sprint_task_members/table/Vips__project_sprint_task_membersTablePage';

import Vips__project_sprint_tasksFormPage from 'pages/CRUD/Vips__project_sprint_tasks/form/Vips__project_sprint_tasksFormPage';
import Vips__project_sprint_tasksFormPageView from 'pages/CRUD/Vips__project_sprint_tasks/form/Vips__project_sprint_tasksFormPageView';
import Vips__project_sprint_tasksTablePage from 'pages/CRUD/Vips__project_sprint_tasks/table/Vips__project_sprint_tasksTablePage';

import Vips__project_sprintsFormPage from 'pages/CRUD/Vips__project_sprints/form/Vips__project_sprintsFormPage';
import Vips__project_sprintsFormPageView from 'pages/CRUD/Vips__project_sprints/form/Vips__project_sprintsFormPageView';
import Vips__project_sprintsTablePage from 'pages/CRUD/Vips__project_sprints/table/Vips__project_sprintsTablePage';

import Vips__project_userFormPage from 'pages/CRUD/Vips__project_user/form/Vips__project_userFormPage';
import Vips__project_userFormPageView from 'pages/CRUD/Vips__project_user/form/Vips__project_userFormPageView';
import Vips__project_userTablePage from 'pages/CRUD/Vips__project_user/table/Vips__project_userTablePage';

import Vips__projectsFormPage from 'pages/CRUD/Vips__projects/form/Vips__projectsFormPage';
import Vips__projectsFormPageView from 'pages/CRUD/Vips__projects/form/Vips__projectsFormPageView';
import Vips__projectsTablePage from 'pages/CRUD/Vips__projects/table/Vips__projectsTablePage';

import Vips__providersFormPage from 'pages/CRUD/Vips__providers/form/Vips__providersFormPage';
import Vips__providersFormPageView from 'pages/CRUD/Vips__providers/form/Vips__providersFormPageView';
import Vips__providersTablePage from 'pages/CRUD/Vips__providers/table/Vips__providersTablePage';

import Vips__rolesFormPage from 'pages/CRUD/Vips__roles/form/Vips__rolesFormPage';
import Vips__rolesFormPageView from 'pages/CRUD/Vips__roles/form/Vips__rolesFormPageView';
import Vips__rolesTablePage from 'pages/CRUD/Vips__roles/table/Vips__rolesTablePage';

import Vips__slack_integrationFormPage from 'pages/CRUD/Vips__slack_integration/form/Vips__slack_integrationFormPage';
import Vips__slack_integrationFormPageView from 'pages/CRUD/Vips__slack_integration/form/Vips__slack_integrationFormPageView';
import Vips__slack_integrationTablePage from 'pages/CRUD/Vips__slack_integration/table/Vips__slack_integrationTablePage';

import Vips__slack_settingsFormPage from 'pages/CRUD/Vips__slack_settings/form/Vips__slack_settingsFormPage';
import Vips__slack_settingsFormPageView from 'pages/CRUD/Vips__slack_settings/form/Vips__slack_settingsFormPageView';
import Vips__slack_settingsTablePage from 'pages/CRUD/Vips__slack_settings/table/Vips__slack_settingsTablePage';

import Vips__task_attachmentsFormPage from 'pages/CRUD/Vips__task_attachments/form/Vips__task_attachmentsFormPage';
import Vips__task_attachmentsFormPageView from 'pages/CRUD/Vips__task_attachments/form/Vips__task_attachmentsFormPageView';
import Vips__task_attachmentsTablePage from 'pages/CRUD/Vips__task_attachments/table/Vips__task_attachmentsTablePage';

import Vips__task_commentsFormPage from 'pages/CRUD/Vips__task_comments/form/Vips__task_commentsFormPage';
import Vips__task_commentsFormPageView from 'pages/CRUD/Vips__task_comments/form/Vips__task_commentsFormPageView';
import Vips__task_commentsTablePage from 'pages/CRUD/Vips__task_comments/table/Vips__task_commentsTablePage';

import Vips__task_userFormPage from 'pages/CRUD/Vips__task_user/form/Vips__task_userFormPage';
import Vips__task_userFormPageView from 'pages/CRUD/Vips__task_user/form/Vips__task_userFormPageView';
import Vips__task_userTablePage from 'pages/CRUD/Vips__task_user/table/Vips__task_userTablePage';

import Vips__tasksFormPage from 'pages/CRUD/Vips__tasks/form/Vips__tasksFormPage';
import Vips__tasksFormPageView from 'pages/CRUD/Vips__tasks/form/Vips__tasksFormPageView';
import Vips__tasksTablePage from 'pages/CRUD/Vips__tasks/table/Vips__tasksTablePage';

import Vips__taxesFormPage from 'pages/CRUD/Vips__taxes/form/Vips__taxesFormPage';
import Vips__taxesFormPageView from 'pages/CRUD/Vips__taxes/form/Vips__taxesFormPageView';
import Vips__taxesTablePage from 'pages/CRUD/Vips__taxes/table/Vips__taxesTablePage';

import Vips__teamsFormPage from 'pages/CRUD/Vips__teams/form/Vips__teamsFormPage';
import Vips__teamsFormPageView from 'pages/CRUD/Vips__teams/form/Vips__teamsFormPageView';
import Vips__teamsTablePage from 'pages/CRUD/Vips__teams/table/Vips__teamsTablePage';

import Vips__teams_membersFormPage from 'pages/CRUD/Vips__teams_members/form/Vips__teams_membersFormPage';
import Vips__teams_membersFormPageView from 'pages/CRUD/Vips__teams_members/form/Vips__teams_membersFormPageView';
import Vips__teams_membersTablePage from 'pages/CRUD/Vips__teams_members/table/Vips__teams_membersTablePage';

import Vips__timer_logsFormPage from 'pages/CRUD/Vips__timer_logs/form/Vips__timer_logsFormPage';
import Vips__timer_logsFormPageView from 'pages/CRUD/Vips__timer_logs/form/Vips__timer_logsFormPageView';
import Vips__timer_logsTablePage from 'pages/CRUD/Vips__timer_logs/table/Vips__timer_logsTablePage';

import Vips__timesheetsFormPage from 'pages/CRUD/Vips__timesheets/form/Vips__timesheetsFormPage';
import Vips__timesheetsFormPageView from 'pages/CRUD/Vips__timesheets/form/Vips__timesheetsFormPageView';
import Vips__timesheetsTablePage from 'pages/CRUD/Vips__timesheets/table/Vips__timesheetsTablePage';

import Vips__todosFormPage from 'pages/CRUD/Vips__todos/form/Vips__todosFormPage';
import Vips__todosFormPageView from 'pages/CRUD/Vips__todos/form/Vips__todosFormPageView';
import Vips__todosTablePage from 'pages/CRUD/Vips__todos/table/Vips__todosTablePage';

import Vips__translationsFormPage from 'pages/CRUD/Vips__translations/form/Vips__translationsFormPage';
import Vips__translationsFormPageView from 'pages/CRUD/Vips__translations/form/Vips__translationsFormPageView';
import Vips__translationsTablePage from 'pages/CRUD/Vips__translations/table/Vips__translationsTablePage';

import Vips__user_activitiesFormPage from 'pages/CRUD/Vips__user_activities/form/Vips__user_activitiesFormPage';
import Vips__user_activitiesFormPageView from 'pages/CRUD/Vips__user_activities/form/Vips__user_activitiesFormPageView';
import Vips__user_activitiesTablePage from 'pages/CRUD/Vips__user_activities/table/Vips__user_activitiesTablePage';

import Vips__user_role_departmentFormPage from 'pages/CRUD/Vips__user_role_department/form/Vips__user_role_departmentFormPage';
import Vips__user_role_departmentFormPageView from 'pages/CRUD/Vips__user_role_department/form/Vips__user_role_departmentFormPageView';
import Vips__user_role_departmentTablePage from 'pages/CRUD/Vips__user_role_department/table/Vips__user_role_departmentTablePage';

import Vips__user_settingsFormPage from 'pages/CRUD/Vips__user_settings/form/Vips__user_settingsFormPage';
import Vips__user_settingsFormPageView from 'pages/CRUD/Vips__user_settings/form/Vips__user_settingsFormPageView';
import Vips__user_settingsTablePage from 'pages/CRUD/Vips__user_settings/table/Vips__user_settingsTablePage';

import Vips__usersFormPage from 'pages/CRUD/Vips__users/form/Vips__usersFormPage';
import Vips__usersFormPageView from 'pages/CRUD/Vips__users/form/Vips__usersFormPageView';
import Vips__usersTablePage from 'pages/CRUD/Vips__users/table/Vips__usersTablePage';

import SearchResults from '../../pages/searchResults/SearchResults';

const Redirect = (props) => {
  useEffect(() => window.location.replace(props.url));
  return <span>Redirecting...</span>;
};

function Layout(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);
  const id = open ? 'add-section-popover' : undefined;
  const handleClick = (event) => {
    setAnchorEl(open ? null : event.currentTarget);
  };

  // global
  let layoutState = useLayoutState();

  return (
    <div className={classes.root}>
      <Header history={props.history} />
      <Sidebar />
      <div
        className={classnames(classes.content, {
          [classes.contentShift]: layoutState.isSidebarOpened,
        })}
      >
        <div className={classes.fakeToolbar} />
        <BreadCrumbs />
        <Switch>
          <Route path='/admin/search' component={SearchResults} />
          <Route path='/admin/dashboard' component={Dashboard} />
          <Route path='/admin/user/edit' component={EditUser} />
          <Route
            path={'/admin/api-docs'}
            exact
            component={(props) => (
              <Redirect
                url={
                  process.env.NODE_ENV === 'production'
                    ? window.location.origin + '/api-docs'
                    : 'http://localhost:8080/api-docs'
                }
                {...props}
              />
            )}
          />

          <Route path={'/admin/users'} exact component={UsersTablePage} />
          <Route path={'/admin/users/new'} exact component={UsersFormPage} />
          <Route
            path={'/admin/users/:id/edit'}
            exact
            component={UsersFormPage}
          />
          <Route
            path={'/admin/users/:id/show'}
            exact
            component={UsersFormPageView}
          />

          <Route
            path={'/admin/vips__announcements'}
            exact
            component={Vips__announcementsTablePage}
          />
          <Route
            path={'/admin/vips__announcements/new'}
            exact
            component={Vips__announcementsFormPage}
          />
          <Route
            path={'/admin/vips__announcements/:id/edit'}
            exact
            component={Vips__announcementsFormPage}
          />
          <Route
            path={'/admin/vips__announcements/:id/show'}
            exact
            component={Vips__announcementsFormPageView}
          />

          <Route
            path={'/admin/vips__appointment'}
            exact
            component={Vips__appointmentTablePage}
          />
          <Route
            path={'/admin/vips__appointment/new'}
            exact
            component={Vips__appointmentFormPage}
          />
          <Route
            path={'/admin/vips__appointment/:id/edit'}
            exact
            component={Vips__appointmentFormPage}
          />
          <Route
            path={'/admin/vips__appointment/:id/show'}
            exact
            component={Vips__appointmentFormPageView}
          />

          <Route
            path={'/admin/vips__appointment_recurrence'}
            exact
            component={Vips__appointment_recurrenceTablePage}
          />
          <Route
            path={'/admin/vips__appointment_recurrence/new'}
            exact
            component={Vips__appointment_recurrenceFormPage}
          />
          <Route
            path={'/admin/vips__appointment_recurrence/:id/edit'}
            exact
            component={Vips__appointment_recurrenceFormPage}
          />
          <Route
            path={'/admin/vips__appointment_recurrence/:id/show'}
            exact
            component={Vips__appointment_recurrenceFormPageView}
          />

          <Route
            path={'/admin/vips__clients'}
            exact
            component={Vips__clientsTablePage}
          />
          <Route
            path={'/admin/vips__clients/new'}
            exact
            component={Vips__clientsFormPage}
          />
          <Route
            path={'/admin/vips__clients/:id/edit'}
            exact
            component={Vips__clientsFormPage}
          />
          <Route
            path={'/admin/vips__clients/:id/show'}
            exact
            component={Vips__clientsFormPageView}
          />

          <Route
            path={'/admin/vips__countries'}
            exact
            component={Vips__countriesTablePage}
          />
          <Route
            path={'/admin/vips__countries/new'}
            exact
            component={Vips__countriesFormPage}
          />
          <Route
            path={'/admin/vips__countries/:id/edit'}
            exact
            component={Vips__countriesFormPage}
          />
          <Route
            path={'/admin/vips__countries/:id/show'}
            exact
            component={Vips__countriesFormPageView}
          />

          <Route
            path={'/admin/vips__currency'}
            exact
            component={Vips__currencyTablePage}
          />
          <Route
            path={'/admin/vips__currency/new'}
            exact
            component={Vips__currencyFormPage}
          />
          <Route
            path={'/admin/vips__currency/:id/edit'}
            exact
            component={Vips__currencyFormPage}
          />
          <Route
            path={'/admin/vips__currency/:id/show'}
            exact
            component={Vips__currencyFormPageView}
          />

          <Route
            path={'/admin/vips__custom_fields'}
            exact
            component={Vips__custom_fieldsTablePage}
          />
          <Route
            path={'/admin/vips__custom_fields/new'}
            exact
            component={Vips__custom_fieldsFormPage}
          />
          <Route
            path={'/admin/vips__custom_fields/:id/edit'}
            exact
            component={Vips__custom_fieldsFormPage}
          />
          <Route
            path={'/admin/vips__custom_fields/:id/show'}
            exact
            component={Vips__custom_fieldsFormPageView}
          />

          <Route
            path={'/admin/vips__dashboard_settings'}
            exact
            component={Vips__dashboard_settingsTablePage}
          />
          <Route
            path={'/admin/vips__dashboard_settings/new'}
            exact
            component={Vips__dashboard_settingsFormPage}
          />
          <Route
            path={'/admin/vips__dashboard_settings/:id/edit'}
            exact
            component={Vips__dashboard_settingsFormPage}
          />
          <Route
            path={'/admin/vips__dashboard_settings/:id/show'}
            exact
            component={Vips__dashboard_settingsFormPageView}
          />

          <Route
            path={'/admin/vips__database_backups'}
            exact
            component={Vips__database_backupsTablePage}
          />
          <Route
            path={'/admin/vips__database_backups/new'}
            exact
            component={Vips__database_backupsFormPage}
          />
          <Route
            path={'/admin/vips__database_backups/:id/edit'}
            exact
            component={Vips__database_backupsFormPage}
          />
          <Route
            path={'/admin/vips__database_backups/:id/show'}
            exact
            component={Vips__database_backupsFormPageView}
          />

          <Route
            path={'/admin/vips__defect_attachments'}
            exact
            component={Vips__defect_attachmentsTablePage}
          />
          <Route
            path={'/admin/vips__defect_attachments/new'}
            exact
            component={Vips__defect_attachmentsFormPage}
          />
          <Route
            path={'/admin/vips__defect_attachments/:id/edit'}
            exact
            component={Vips__defect_attachmentsFormPage}
          />
          <Route
            path={'/admin/vips__defect_attachments/:id/show'}
            exact
            component={Vips__defect_attachmentsFormPageView}
          />

          <Route
            path={'/admin/vips__defect_comments'}
            exact
            component={Vips__defect_commentsTablePage}
          />
          <Route
            path={'/admin/vips__defect_comments/new'}
            exact
            component={Vips__defect_commentsFormPage}
          />
          <Route
            path={'/admin/vips__defect_comments/:id/edit'}
            exact
            component={Vips__defect_commentsFormPage}
          />
          <Route
            path={'/admin/vips__defect_comments/:id/show'}
            exact
            component={Vips__defect_commentsFormPageView}
          />

          <Route
            path={'/admin/vips__defect_user'}
            exact
            component={Vips__defect_userTablePage}
          />
          <Route
            path={'/admin/vips__defect_user/new'}
            exact
            component={Vips__defect_userFormPage}
          />
          <Route
            path={'/admin/vips__defect_user/:id/edit'}
            exact
            component={Vips__defect_userFormPage}
          />
          <Route
            path={'/admin/vips__defect_user/:id/show'}
            exact
            component={Vips__defect_userFormPageView}
          />

          <Route
            path={'/admin/vips__defects'}
            exact
            component={Vips__defectsTablePage}
          />
          <Route
            path={'/admin/vips__defects/new'}
            exact
            component={Vips__defectsFormPage}
          />
          <Route
            path={'/admin/vips__defects/:id/edit'}
            exact
            component={Vips__defectsFormPage}
          />
          <Route
            path={'/admin/vips__defects/:id/show'}
            exact
            component={Vips__defectsFormPageView}
          />

          <Route
            path={'/admin/vips__defects_history'}
            exact
            component={Vips__defects_historyTablePage}
          />
          <Route
            path={'/admin/vips__defects_history/new'}
            exact
            component={Vips__defects_historyFormPage}
          />
          <Route
            path={'/admin/vips__defects_history/:id/edit'}
            exact
            component={Vips__defects_historyFormPage}
          />
          <Route
            path={'/admin/vips__defects_history/:id/show'}
            exact
            component={Vips__defects_historyFormPageView}
          />

          <Route
            path={'/admin/vips__department_role_menu'}
            exact
            component={Vips__department_role_menuTablePage}
          />
          <Route
            path={'/admin/vips__department_role_menu/new'}
            exact
            component={Vips__department_role_menuFormPage}
          />
          <Route
            path={'/admin/vips__department_role_menu/:id/edit'}
            exact
            component={Vips__department_role_menuFormPage}
          />
          <Route
            path={'/admin/vips__department_role_menu/:id/show'}
            exact
            component={Vips__department_role_menuFormPageView}
          />

          <Route
            path={'/admin/vips__departments'}
            exact
            component={Vips__departmentsTablePage}
          />
          <Route
            path={'/admin/vips__departments/new'}
            exact
            component={Vips__departmentsFormPage}
          />
          <Route
            path={'/admin/vips__departments/:id/edit'}
            exact
            component={Vips__departmentsFormPage}
          />
          <Route
            path={'/admin/vips__departments/:id/show'}
            exact
            component={Vips__departmentsFormPageView}
          />

          <Route
            path={'/admin/vips__departments_roles'}
            exact
            component={Vips__departments_rolesTablePage}
          />
          <Route
            path={'/admin/vips__departments_roles/new'}
            exact
            component={Vips__departments_rolesFormPage}
          />
          <Route
            path={'/admin/vips__departments_roles/:id/edit'}
            exact
            component={Vips__departments_rolesFormPage}
          />
          <Route
            path={'/admin/vips__departments_roles/:id/show'}
            exact
            component={Vips__departments_rolesFormPageView}
          />

          <Route
            path={'/admin/vips__email_inbox'}
            exact
            component={Vips__email_inboxTablePage}
          />
          <Route
            path={'/admin/vips__email_inbox/new'}
            exact
            component={Vips__email_inboxFormPage}
          />
          <Route
            path={'/admin/vips__email_inbox/:id/edit'}
            exact
            component={Vips__email_inboxFormPage}
          />
          <Route
            path={'/admin/vips__email_inbox/:id/show'}
            exact
            component={Vips__email_inboxFormPageView}
          />

          <Route
            path={'/admin/vips__email_inbox_attachment'}
            exact
            component={Vips__email_inbox_attachmentTablePage}
          />
          <Route
            path={'/admin/vips__email_inbox_attachment/new'}
            exact
            component={Vips__email_inbox_attachmentFormPage}
          />
          <Route
            path={'/admin/vips__email_inbox_attachment/:id/edit'}
            exact
            component={Vips__email_inbox_attachmentFormPage}
          />
          <Route
            path={'/admin/vips__email_inbox_attachment/:id/show'}
            exact
            component={Vips__email_inbox_attachmentFormPageView}
          />

          <Route
            path={'/admin/vips__email_template'}
            exact
            component={Vips__email_templateTablePage}
          />
          <Route
            path={'/admin/vips__email_template/new'}
            exact
            component={Vips__email_templateFormPage}
          />
          <Route
            path={'/admin/vips__email_template/:id/edit'}
            exact
            component={Vips__email_templateFormPage}
          />
          <Route
            path={'/admin/vips__email_template/:id/show'}
            exact
            component={Vips__email_templateFormPageView}
          />

          <Route
            path={'/admin/vips__email_template_groups'}
            exact
            component={Vips__email_template_groupsTablePage}
          />
          <Route
            path={'/admin/vips__email_template_groups/new'}
            exact
            component={Vips__email_template_groupsFormPage}
          />
          <Route
            path={'/admin/vips__email_template_groups/:id/edit'}
            exact
            component={Vips__email_template_groupsFormPage}
          />
          <Route
            path={'/admin/vips__email_template_groups/:id/show'}
            exact
            component={Vips__email_template_groupsFormPageView}
          />

          <Route
            path={'/admin/vips__estimate_item_taxes'}
            exact
            component={Vips__estimate_item_taxesTablePage}
          />
          <Route
            path={'/admin/vips__estimate_item_taxes/new'}
            exact
            component={Vips__estimate_item_taxesFormPage}
          />
          <Route
            path={'/admin/vips__estimate_item_taxes/:id/edit'}
            exact
            component={Vips__estimate_item_taxesFormPage}
          />
          <Route
            path={'/admin/vips__estimate_item_taxes/:id/show'}
            exact
            component={Vips__estimate_item_taxesFormPageView}
          />

          <Route
            path={'/admin/vips__estimate_items'}
            exact
            component={Vips__estimate_itemsTablePage}
          />
          <Route
            path={'/admin/vips__estimate_items/new'}
            exact
            component={Vips__estimate_itemsFormPage}
          />
          <Route
            path={'/admin/vips__estimate_items/:id/edit'}
            exact
            component={Vips__estimate_itemsFormPage}
          />
          <Route
            path={'/admin/vips__estimate_items/:id/show'}
            exact
            component={Vips__estimate_itemsFormPageView}
          />

          <Route
            path={'/admin/vips__estimate_settings'}
            exact
            component={Vips__estimate_settingsTablePage}
          />
          <Route
            path={'/admin/vips__estimate_settings/new'}
            exact
            component={Vips__estimate_settingsFormPage}
          />
          <Route
            path={'/admin/vips__estimate_settings/:id/edit'}
            exact
            component={Vips__estimate_settingsFormPage}
          />
          <Route
            path={'/admin/vips__estimate_settings/:id/show'}
            exact
            component={Vips__estimate_settingsFormPageView}
          />

          <Route
            path={'/admin/vips__estimates'}
            exact
            component={Vips__estimatesTablePage}
          />
          <Route
            path={'/admin/vips__estimates/new'}
            exact
            component={Vips__estimatesFormPage}
          />
          <Route
            path={'/admin/vips__estimates/:id/edit'}
            exact
            component={Vips__estimatesFormPage}
          />
          <Route
            path={'/admin/vips__estimates/:id/show'}
            exact
            component={Vips__estimatesFormPageView}
          />

          <Route
            path={'/admin/vips__files'}
            exact
            component={Vips__filesTablePage}
          />
          <Route
            path={'/admin/vips__files/new'}
            exact
            component={Vips__filesFormPage}
          />
          <Route
            path={'/admin/vips__files/:id/edit'}
            exact
            component={Vips__filesFormPage}
          />
          <Route
            path={'/admin/vips__files/:id/show'}
            exact
            component={Vips__filesFormPageView}
          />

          <Route
            path={'/admin/vips__folders'}
            exact
            component={Vips__foldersTablePage}
          />
          <Route
            path={'/admin/vips__folders/new'}
            exact
            component={Vips__foldersFormPage}
          />
          <Route
            path={'/admin/vips__folders/:id/edit'}
            exact
            component={Vips__foldersFormPage}
          />
          <Route
            path={'/admin/vips__folders/:id/show'}
            exact
            component={Vips__foldersFormPageView}
          />

          <Route
            path={'/admin/vips__form'}
            exact
            component={Vips__formTablePage}
          />
          <Route
            path={'/admin/vips__form/new'}
            exact
            component={Vips__formFormPage}
          />
          <Route
            path={'/admin/vips__form/:id/edit'}
            exact
            component={Vips__formFormPage}
          />
          <Route
            path={'/admin/vips__form/:id/show'}
            exact
            component={Vips__formFormPageView}
          />

          <Route
            path={'/admin/vips__holidays'}
            exact
            component={Vips__holidaysTablePage}
          />
          <Route
            path={'/admin/vips__holidays/new'}
            exact
            component={Vips__holidaysFormPage}
          />
          <Route
            path={'/admin/vips__holidays/:id/edit'}
            exact
            component={Vips__holidaysFormPage}
          />
          <Route
            path={'/admin/vips__holidays/:id/show'}
            exact
            component={Vips__holidaysFormPageView}
          />

          <Route
            path={'/admin/vips__incident_attachments'}
            exact
            component={Vips__incident_attachmentsTablePage}
          />
          <Route
            path={'/admin/vips__incident_attachments/new'}
            exact
            component={Vips__incident_attachmentsFormPage}
          />
          <Route
            path={'/admin/vips__incident_attachments/:id/edit'}
            exact
            component={Vips__incident_attachmentsFormPage}
          />
          <Route
            path={'/admin/vips__incident_attachments/:id/show'}
            exact
            component={Vips__incident_attachmentsFormPageView}
          />

          <Route
            path={'/admin/vips__incident_comments'}
            exact
            component={Vips__incident_commentsTablePage}
          />
          <Route
            path={'/admin/vips__incident_comments/new'}
            exact
            component={Vips__incident_commentsFormPage}
          />
          <Route
            path={'/admin/vips__incident_comments/:id/edit'}
            exact
            component={Vips__incident_commentsFormPage}
          />
          <Route
            path={'/admin/vips__incident_comments/:id/show'}
            exact
            component={Vips__incident_commentsFormPageView}
          />

          <Route
            path={'/admin/vips__incident_history'}
            exact
            component={Vips__incident_historyTablePage}
          />
          <Route
            path={'/admin/vips__incident_history/new'}
            exact
            component={Vips__incident_historyFormPage}
          />
          <Route
            path={'/admin/vips__incident_history/:id/edit'}
            exact
            component={Vips__incident_historyFormPage}
          />
          <Route
            path={'/admin/vips__incident_history/:id/show'}
            exact
            component={Vips__incident_historyFormPageView}
          />

          <Route
            path={'/admin/vips__incident_user'}
            exact
            component={Vips__incident_userTablePage}
          />
          <Route
            path={'/admin/vips__incident_user/new'}
            exact
            component={Vips__incident_userFormPage}
          />
          <Route
            path={'/admin/vips__incident_user/:id/edit'}
            exact
            component={Vips__incident_userFormPage}
          />
          <Route
            path={'/admin/vips__incident_user/:id/show'}
            exact
            component={Vips__incident_userFormPageView}
          />

          <Route
            path={'/admin/vips__incidents'}
            exact
            component={Vips__incidentsTablePage}
          />
          <Route
            path={'/admin/vips__incidents/new'}
            exact
            component={Vips__incidentsFormPage}
          />
          <Route
            path={'/admin/vips__incidents/:id/edit'}
            exact
            component={Vips__incidentsFormPage}
          />
          <Route
            path={'/admin/vips__incidents/:id/show'}
            exact
            component={Vips__incidentsFormPageView}
          />

          <Route
            path={'/admin/vips__invoice_item_taxes'}
            exact
            component={Vips__invoice_item_taxesTablePage}
          />
          <Route
            path={'/admin/vips__invoice_item_taxes/new'}
            exact
            component={Vips__invoice_item_taxesFormPage}
          />
          <Route
            path={'/admin/vips__invoice_item_taxes/:id/edit'}
            exact
            component={Vips__invoice_item_taxesFormPage}
          />
          <Route
            path={'/admin/vips__invoice_item_taxes/:id/show'}
            exact
            component={Vips__invoice_item_taxesFormPageView}
          />

          <Route
            path={'/admin/vips__invoice_items'}
            exact
            component={Vips__invoice_itemsTablePage}
          />
          <Route
            path={'/admin/vips__invoice_items/new'}
            exact
            component={Vips__invoice_itemsFormPage}
          />
          <Route
            path={'/admin/vips__invoice_items/:id/edit'}
            exact
            component={Vips__invoice_itemsFormPage}
          />
          <Route
            path={'/admin/vips__invoice_items/:id/show'}
            exact
            component={Vips__invoice_itemsFormPageView}
          />

          <Route
            path={'/admin/vips__invoice_settings'}
            exact
            component={Vips__invoice_settingsTablePage}
          />
          <Route
            path={'/admin/vips__invoice_settings/new'}
            exact
            component={Vips__invoice_settingsFormPage}
          />
          <Route
            path={'/admin/vips__invoice_settings/:id/edit'}
            exact
            component={Vips__invoice_settingsFormPage}
          />
          <Route
            path={'/admin/vips__invoice_settings/:id/show'}
            exact
            component={Vips__invoice_settingsFormPageView}
          />

          <Route
            path={'/admin/vips__invoices'}
            exact
            component={Vips__invoicesTablePage}
          />
          <Route
            path={'/admin/vips__invoices/new'}
            exact
            component={Vips__invoicesFormPage}
          />
          <Route
            path={'/admin/vips__invoices/:id/edit'}
            exact
            component={Vips__invoicesFormPage}
          />
          <Route
            path={'/admin/vips__invoices/:id/show'}
            exact
            component={Vips__invoicesFormPageView}
          />

          <Route
            path={'/admin/vips__item_tax'}
            exact
            component={Vips__item_taxTablePage}
          />
          <Route
            path={'/admin/vips__item_tax/new'}
            exact
            component={Vips__item_taxFormPage}
          />
          <Route
            path={'/admin/vips__item_tax/:id/edit'}
            exact
            component={Vips__item_taxFormPage}
          />
          <Route
            path={'/admin/vips__item_tax/:id/show'}
            exact
            component={Vips__item_taxFormPageView}
          />

          <Route
            path={'/admin/vips__items'}
            exact
            component={Vips__itemsTablePage}
          />
          <Route
            path={'/admin/vips__items/new'}
            exact
            component={Vips__itemsFormPage}
          />
          <Route
            path={'/admin/vips__items/:id/edit'}
            exact
            component={Vips__itemsFormPage}
          />
          <Route
            path={'/admin/vips__items/:id/show'}
            exact
            component={Vips__itemsFormPageView}
          />

          <Route
            path={'/admin/vips__knowledge_base_article'}
            exact
            component={Vips__knowledge_base_articleTablePage}
          />
          <Route
            path={'/admin/vips__knowledge_base_article/new'}
            exact
            component={Vips__knowledge_base_articleFormPage}
          />
          <Route
            path={'/admin/vips__knowledge_base_article/:id/edit'}
            exact
            component={Vips__knowledge_base_articleFormPage}
          />
          <Route
            path={'/admin/vips__knowledge_base_article/:id/show'}
            exact
            component={Vips__knowledge_base_articleFormPageView}
          />

          <Route
            path={'/admin/vips__knowledge_base_category'}
            exact
            component={Vips__knowledge_base_categoryTablePage}
          />
          <Route
            path={'/admin/vips__knowledge_base_category/new'}
            exact
            component={Vips__knowledge_base_categoryFormPage}
          />
          <Route
            path={'/admin/vips__knowledge_base_category/:id/edit'}
            exact
            component={Vips__knowledge_base_categoryFormPage}
          />
          <Route
            path={'/admin/vips__knowledge_base_category/:id/show'}
            exact
            component={Vips__knowledge_base_categoryFormPageView}
          />

          <Route
            path={'/admin/vips__languages'}
            exact
            component={Vips__languagesTablePage}
          />
          <Route
            path={'/admin/vips__languages/new'}
            exact
            component={Vips__languagesFormPage}
          />
          <Route
            path={'/admin/vips__languages/:id/edit'}
            exact
            component={Vips__languagesFormPage}
          />
          <Route
            path={'/admin/vips__languages/:id/show'}
            exact
            component={Vips__languagesFormPageView}
          />

          <Route
            path={'/admin/vips__leave_attachments'}
            exact
            component={Vips__leave_attachmentsTablePage}
          />
          <Route
            path={'/admin/vips__leave_attachments/new'}
            exact
            component={Vips__leave_attachmentsFormPage}
          />
          <Route
            path={'/admin/vips__leave_attachments/:id/edit'}
            exact
            component={Vips__leave_attachmentsFormPage}
          />
          <Route
            path={'/admin/vips__leave_attachments/:id/show'}
            exact
            component={Vips__leave_attachmentsFormPageView}
          />

          <Route
            path={'/admin/vips__leave_types'}
            exact
            component={Vips__leave_typesTablePage}
          />
          <Route
            path={'/admin/vips__leave_types/new'}
            exact
            component={Vips__leave_typesFormPage}
          />
          <Route
            path={'/admin/vips__leave_types/:id/edit'}
            exact
            component={Vips__leave_typesFormPage}
          />
          <Route
            path={'/admin/vips__leave_types/:id/show'}
            exact
            component={Vips__leave_typesFormPageView}
          />

          <Route
            path={'/admin/vips__leaves'}
            exact
            component={Vips__leavesTablePage}
          />
          <Route
            path={'/admin/vips__leaves/new'}
            exact
            component={Vips__leavesFormPage}
          />
          <Route
            path={'/admin/vips__leaves/:id/edit'}
            exact
            component={Vips__leavesFormPage}
          />
          <Route
            path={'/admin/vips__leaves/:id/show'}
            exact
            component={Vips__leavesFormPageView}
          />

          <Route
            path={'/admin/vips__locales'}
            exact
            component={Vips__localesTablePage}
          />
          <Route
            path={'/admin/vips__locales/new'}
            exact
            component={Vips__localesFormPage}
          />
          <Route
            path={'/admin/vips__locales/:id/edit'}
            exact
            component={Vips__localesFormPage}
          />
          <Route
            path={'/admin/vips__locales/:id/show'}
            exact
            component={Vips__localesFormPageView}
          />

          <Route
            path={'/admin/vips__meeting_members'}
            exact
            component={Vips__meeting_membersTablePage}
          />
          <Route
            path={'/admin/vips__meeting_members/new'}
            exact
            component={Vips__meeting_membersFormPage}
          />
          <Route
            path={'/admin/vips__meeting_members/:id/edit'}
            exact
            component={Vips__meeting_membersFormPage}
          />
          <Route
            path={'/admin/vips__meeting_members/:id/show'}
            exact
            component={Vips__meeting_membersFormPageView}
          />

          <Route
            path={'/admin/vips__meetings'}
            exact
            component={Vips__meetingsTablePage}
          />
          <Route
            path={'/admin/vips__meetings/new'}
            exact
            component={Vips__meetingsFormPage}
          />
          <Route
            path={'/admin/vips__meetings/:id/edit'}
            exact
            component={Vips__meetingsFormPage}
          />
          <Route
            path={'/admin/vips__meetings/:id/show'}
            exact
            component={Vips__meetingsFormPageView}
          />

          <Route
            path={'/admin/vips__menus'}
            exact
            component={Vips__menusTablePage}
          />
          <Route
            path={'/admin/vips__menus/new'}
            exact
            component={Vips__menusFormPage}
          />
          <Route
            path={'/admin/vips__menus/:id/edit'}
            exact
            component={Vips__menusFormPage}
          />
          <Route
            path={'/admin/vips__menus/:id/show'}
            exact
            component={Vips__menusFormPageView}
          />

          <Route
            path={'/admin/vips__modules'}
            exact
            component={Vips__modulesTablePage}
          />
          <Route
            path={'/admin/vips__modules/new'}
            exact
            component={Vips__modulesFormPage}
          />
          <Route
            path={'/admin/vips__modules/:id/edit'}
            exact
            component={Vips__modulesFormPage}
          />
          <Route
            path={'/admin/vips__modules/:id/show'}
            exact
            component={Vips__modulesFormPageView}
          />

          <Route
            path={'/admin/vips__notifications'}
            exact
            component={Vips__notificationsTablePage}
          />
          <Route
            path={'/admin/vips__notifications/new'}
            exact
            component={Vips__notificationsFormPage}
          />
          <Route
            path={'/admin/vips__notifications/:id/edit'}
            exact
            component={Vips__notificationsFormPage}
          />
          <Route
            path={'/admin/vips__notifications/:id/show'}
            exact
            component={Vips__notificationsFormPageView}
          />

          <Route
            path={'/admin/vips__password_resets'}
            exact
            component={Vips__password_resetsTablePage}
          />
          <Route
            path={'/admin/vips__password_resets/new'}
            exact
            component={Vips__password_resetsFormPage}
          />
          <Route
            path={'/admin/vips__password_resets/:id/edit'}
            exact
            component={Vips__password_resetsFormPage}
          />
          <Route
            path={'/admin/vips__password_resets/:id/show'}
            exact
            component={Vips__password_resetsFormPageView}
          />

          <Route
            path={'/admin/vips__payment_gateway_settings'}
            exact
            component={Vips__payment_gateway_settingsTablePage}
          />
          <Route
            path={'/admin/vips__payment_gateway_settings/new'}
            exact
            component={Vips__payment_gateway_settingsFormPage}
          />
          <Route
            path={'/admin/vips__payment_gateway_settings/:id/edit'}
            exact
            component={Vips__payment_gateway_settingsFormPage}
          />
          <Route
            path={'/admin/vips__payment_gateway_settings/:id/show'}
            exact
            component={Vips__payment_gateway_settingsFormPageView}
          />

          <Route
            path={'/admin/vips__payment_methods'}
            exact
            component={Vips__payment_methodsTablePage}
          />
          <Route
            path={'/admin/vips__payment_methods/new'}
            exact
            component={Vips__payment_methodsFormPage}
          />
          <Route
            path={'/admin/vips__payment_methods/:id/edit'}
            exact
            component={Vips__payment_methodsFormPage}
          />
          <Route
            path={'/admin/vips__payment_methods/:id/show'}
            exact
            component={Vips__payment_methodsFormPageView}
          />

          <Route
            path={'/admin/vips__payments'}
            exact
            component={Vips__paymentsTablePage}
          />
          <Route
            path={'/admin/vips__payments/new'}
            exact
            component={Vips__paymentsFormPage}
          />
          <Route
            path={'/admin/vips__payments/:id/edit'}
            exact
            component={Vips__paymentsFormPage}
          />
          <Route
            path={'/admin/vips__payments/:id/show'}
            exact
            component={Vips__paymentsFormPageView}
          />

          <Route
            path={'/admin/vips__project_attachments'}
            exact
            component={Vips__project_attachmentsTablePage}
          />
          <Route
            path={'/admin/vips__project_attachments/new'}
            exact
            component={Vips__project_attachmentsFormPage}
          />
          <Route
            path={'/admin/vips__project_attachments/:id/edit'}
            exact
            component={Vips__project_attachmentsFormPage}
          />
          <Route
            path={'/admin/vips__project_attachments/:id/show'}
            exact
            component={Vips__project_attachmentsFormPageView}
          />

          <Route
            path={'/admin/vips__project_comments'}
            exact
            component={Vips__project_commentsTablePage}
          />
          <Route
            path={'/admin/vips__project_comments/new'}
            exact
            component={Vips__project_commentsFormPage}
          />
          <Route
            path={'/admin/vips__project_comments/:id/edit'}
            exact
            component={Vips__project_commentsFormPage}
          />
          <Route
            path={'/admin/vips__project_comments/:id/show'}
            exact
            component={Vips__project_commentsFormPageView}
          />

          <Route
            path={'/admin/vips__project_sprint_members'}
            exact
            component={Vips__project_sprint_membersTablePage}
          />
          <Route
            path={'/admin/vips__project_sprint_members/new'}
            exact
            component={Vips__project_sprint_membersFormPage}
          />
          <Route
            path={'/admin/vips__project_sprint_members/:id/edit'}
            exact
            component={Vips__project_sprint_membersFormPage}
          />
          <Route
            path={'/admin/vips__project_sprint_members/:id/show'}
            exact
            component={Vips__project_sprint_membersFormPageView}
          />

          <Route
            path={'/admin/vips__project_sprint_task_members'}
            exact
            component={Vips__project_sprint_task_membersTablePage}
          />
          <Route
            path={'/admin/vips__project_sprint_task_members/new'}
            exact
            component={Vips__project_sprint_task_membersFormPage}
          />
          <Route
            path={'/admin/vips__project_sprint_task_members/:id/edit'}
            exact
            component={Vips__project_sprint_task_membersFormPage}
          />
          <Route
            path={'/admin/vips__project_sprint_task_members/:id/show'}
            exact
            component={Vips__project_sprint_task_membersFormPageView}
          />

          <Route
            path={'/admin/vips__project_sprint_tasks'}
            exact
            component={Vips__project_sprint_tasksTablePage}
          />
          <Route
            path={'/admin/vips__project_sprint_tasks/new'}
            exact
            component={Vips__project_sprint_tasksFormPage}
          />
          <Route
            path={'/admin/vips__project_sprint_tasks/:id/edit'}
            exact
            component={Vips__project_sprint_tasksFormPage}
          />
          <Route
            path={'/admin/vips__project_sprint_tasks/:id/show'}
            exact
            component={Vips__project_sprint_tasksFormPageView}
          />

          <Route
            path={'/admin/vips__project_sprints'}
            exact
            component={Vips__project_sprintsTablePage}
          />
          <Route
            path={'/admin/vips__project_sprints/new'}
            exact
            component={Vips__project_sprintsFormPage}
          />
          <Route
            path={'/admin/vips__project_sprints/:id/edit'}
            exact
            component={Vips__project_sprintsFormPage}
          />
          <Route
            path={'/admin/vips__project_sprints/:id/show'}
            exact
            component={Vips__project_sprintsFormPageView}
          />

          <Route
            path={'/admin/vips__project_user'}
            exact
            component={Vips__project_userTablePage}
          />
          <Route
            path={'/admin/vips__project_user/new'}
            exact
            component={Vips__project_userFormPage}
          />
          <Route
            path={'/admin/vips__project_user/:id/edit'}
            exact
            component={Vips__project_userFormPage}
          />
          <Route
            path={'/admin/vips__project_user/:id/show'}
            exact
            component={Vips__project_userFormPageView}
          />

          <Route
            path={'/admin/vips__projects'}
            exact
            component={Vips__projectsTablePage}
          />
          <Route
            path={'/admin/vips__projects/new'}
            exact
            component={Vips__projectsFormPage}
          />
          <Route
            path={'/admin/vips__projects/:id/edit'}
            exact
            component={Vips__projectsFormPage}
          />
          <Route
            path={'/admin/vips__projects/:id/show'}
            exact
            component={Vips__projectsFormPageView}
          />

          <Route
            path={'/admin/vips__providers'}
            exact
            component={Vips__providersTablePage}
          />
          <Route
            path={'/admin/vips__providers/new'}
            exact
            component={Vips__providersFormPage}
          />
          <Route
            path={'/admin/vips__providers/:id/edit'}
            exact
            component={Vips__providersFormPage}
          />
          <Route
            path={'/admin/vips__providers/:id/show'}
            exact
            component={Vips__providersFormPageView}
          />

          <Route
            path={'/admin/vips__roles'}
            exact
            component={Vips__rolesTablePage}
          />
          <Route
            path={'/admin/vips__roles/new'}
            exact
            component={Vips__rolesFormPage}
          />
          <Route
            path={'/admin/vips__roles/:id/edit'}
            exact
            component={Vips__rolesFormPage}
          />
          <Route
            path={'/admin/vips__roles/:id/show'}
            exact
            component={Vips__rolesFormPageView}
          />

          <Route
            path={'/admin/vips__slack_integration'}
            exact
            component={Vips__slack_integrationTablePage}
          />
          <Route
            path={'/admin/vips__slack_integration/new'}
            exact
            component={Vips__slack_integrationFormPage}
          />
          <Route
            path={'/admin/vips__slack_integration/:id/edit'}
            exact
            component={Vips__slack_integrationFormPage}
          />
          <Route
            path={'/admin/vips__slack_integration/:id/show'}
            exact
            component={Vips__slack_integrationFormPageView}
          />

          <Route
            path={'/admin/vips__slack_settings'}
            exact
            component={Vips__slack_settingsTablePage}
          />
          <Route
            path={'/admin/vips__slack_settings/new'}
            exact
            component={Vips__slack_settingsFormPage}
          />
          <Route
            path={'/admin/vips__slack_settings/:id/edit'}
            exact
            component={Vips__slack_settingsFormPage}
          />
          <Route
            path={'/admin/vips__slack_settings/:id/show'}
            exact
            component={Vips__slack_settingsFormPageView}
          />

          <Route
            path={'/admin/vips__task_attachments'}
            exact
            component={Vips__task_attachmentsTablePage}
          />
          <Route
            path={'/admin/vips__task_attachments/new'}
            exact
            component={Vips__task_attachmentsFormPage}
          />
          <Route
            path={'/admin/vips__task_attachments/:id/edit'}
            exact
            component={Vips__task_attachmentsFormPage}
          />
          <Route
            path={'/admin/vips__task_attachments/:id/show'}
            exact
            component={Vips__task_attachmentsFormPageView}
          />

          <Route
            path={'/admin/vips__task_comments'}
            exact
            component={Vips__task_commentsTablePage}
          />
          <Route
            path={'/admin/vips__task_comments/new'}
            exact
            component={Vips__task_commentsFormPage}
          />
          <Route
            path={'/admin/vips__task_comments/:id/edit'}
            exact
            component={Vips__task_commentsFormPage}
          />
          <Route
            path={'/admin/vips__task_comments/:id/show'}
            exact
            component={Vips__task_commentsFormPageView}
          />

          <Route
            path={'/admin/vips__task_user'}
            exact
            component={Vips__task_userTablePage}
          />
          <Route
            path={'/admin/vips__task_user/new'}
            exact
            component={Vips__task_userFormPage}
          />
          <Route
            path={'/admin/vips__task_user/:id/edit'}
            exact
            component={Vips__task_userFormPage}
          />
          <Route
            path={'/admin/vips__task_user/:id/show'}
            exact
            component={Vips__task_userFormPageView}
          />

          <Route
            path={'/admin/vips__tasks'}
            exact
            component={Vips__tasksTablePage}
          />
          <Route
            path={'/admin/vips__tasks/new'}
            exact
            component={Vips__tasksFormPage}
          />
          <Route
            path={'/admin/vips__tasks/:id/edit'}
            exact
            component={Vips__tasksFormPage}
          />
          <Route
            path={'/admin/vips__tasks/:id/show'}
            exact
            component={Vips__tasksFormPageView}
          />

          <Route
            path={'/admin/vips__taxes'}
            exact
            component={Vips__taxesTablePage}
          />
          <Route
            path={'/admin/vips__taxes/new'}
            exact
            component={Vips__taxesFormPage}
          />
          <Route
            path={'/admin/vips__taxes/:id/edit'}
            exact
            component={Vips__taxesFormPage}
          />
          <Route
            path={'/admin/vips__taxes/:id/show'}
            exact
            component={Vips__taxesFormPageView}
          />

          <Route
            path={'/admin/vips__teams'}
            exact
            component={Vips__teamsTablePage}
          />
          <Route
            path={'/admin/vips__teams/new'}
            exact
            component={Vips__teamsFormPage}
          />
          <Route
            path={'/admin/vips__teams/:id/edit'}
            exact
            component={Vips__teamsFormPage}
          />
          <Route
            path={'/admin/vips__teams/:id/show'}
            exact
            component={Vips__teamsFormPageView}
          />

          <Route
            path={'/admin/vips__teams_members'}
            exact
            component={Vips__teams_membersTablePage}
          />
          <Route
            path={'/admin/vips__teams_members/new'}
            exact
            component={Vips__teams_membersFormPage}
          />
          <Route
            path={'/admin/vips__teams_members/:id/edit'}
            exact
            component={Vips__teams_membersFormPage}
          />
          <Route
            path={'/admin/vips__teams_members/:id/show'}
            exact
            component={Vips__teams_membersFormPageView}
          />

          <Route
            path={'/admin/vips__timer_logs'}
            exact
            component={Vips__timer_logsTablePage}
          />
          <Route
            path={'/admin/vips__timer_logs/new'}
            exact
            component={Vips__timer_logsFormPage}
          />
          <Route
            path={'/admin/vips__timer_logs/:id/edit'}
            exact
            component={Vips__timer_logsFormPage}
          />
          <Route
            path={'/admin/vips__timer_logs/:id/show'}
            exact
            component={Vips__timer_logsFormPageView}
          />

          <Route
            path={'/admin/vips__timesheets'}
            exact
            component={Vips__timesheetsTablePage}
          />
          <Route
            path={'/admin/vips__timesheets/new'}
            exact
            component={Vips__timesheetsFormPage}
          />
          <Route
            path={'/admin/vips__timesheets/:id/edit'}
            exact
            component={Vips__timesheetsFormPage}
          />
          <Route
            path={'/admin/vips__timesheets/:id/show'}
            exact
            component={Vips__timesheetsFormPageView}
          />

          <Route
            path={'/admin/vips__todos'}
            exact
            component={Vips__todosTablePage}
          />
          <Route
            path={'/admin/vips__todos/new'}
            exact
            component={Vips__todosFormPage}
          />
          <Route
            path={'/admin/vips__todos/:id/edit'}
            exact
            component={Vips__todosFormPage}
          />
          <Route
            path={'/admin/vips__todos/:id/show'}
            exact
            component={Vips__todosFormPageView}
          />

          <Route
            path={'/admin/vips__translations'}
            exact
            component={Vips__translationsTablePage}
          />
          <Route
            path={'/admin/vips__translations/new'}
            exact
            component={Vips__translationsFormPage}
          />
          <Route
            path={'/admin/vips__translations/:id/edit'}
            exact
            component={Vips__translationsFormPage}
          />
          <Route
            path={'/admin/vips__translations/:id/show'}
            exact
            component={Vips__translationsFormPageView}
          />

          <Route
            path={'/admin/vips__user_activities'}
            exact
            component={Vips__user_activitiesTablePage}
          />
          <Route
            path={'/admin/vips__user_activities/new'}
            exact
            component={Vips__user_activitiesFormPage}
          />
          <Route
            path={'/admin/vips__user_activities/:id/edit'}
            exact
            component={Vips__user_activitiesFormPage}
          />
          <Route
            path={'/admin/vips__user_activities/:id/show'}
            exact
            component={Vips__user_activitiesFormPageView}
          />

          <Route
            path={'/admin/vips__user_role_department'}
            exact
            component={Vips__user_role_departmentTablePage}
          />
          <Route
            path={'/admin/vips__user_role_department/new'}
            exact
            component={Vips__user_role_departmentFormPage}
          />
          <Route
            path={'/admin/vips__user_role_department/:id/edit'}
            exact
            component={Vips__user_role_departmentFormPage}
          />
          <Route
            path={'/admin/vips__user_role_department/:id/show'}
            exact
            component={Vips__user_role_departmentFormPageView}
          />

          <Route
            path={'/admin/vips__user_settings'}
            exact
            component={Vips__user_settingsTablePage}
          />
          <Route
            path={'/admin/vips__user_settings/new'}
            exact
            component={Vips__user_settingsFormPage}
          />
          <Route
            path={'/admin/vips__user_settings/:id/edit'}
            exact
            component={Vips__user_settingsFormPage}
          />
          <Route
            path={'/admin/vips__user_settings/:id/show'}
            exact
            component={Vips__user_settingsFormPageView}
          />

          <Route
            path={'/admin/vips__users'}
            exact
            component={Vips__usersTablePage}
          />
          <Route
            path={'/admin/vips__users/new'}
            exact
            component={Vips__usersFormPage}
          />
          <Route
            path={'/admin/vips__users/:id/edit'}
            exact
            component={Vips__usersFormPage}
          />
          <Route
            path={'/admin/vips__users/:id/show'}
            exact
            component={Vips__usersFormPageView}
          />
        </Switch>
        <Fab
          color='primary'
          aria-label='settings'
          onClick={(e) => handleClick(e)}
          className={classes.changeThemeFab}
          style={{ zIndex: 100 }}
        >
          <SettingsIcon style={{ color: '#fff' }} />
        </Fab>
        <ColorChangeThemePopper id={id} open={open} anchorEl={anchorEl} />
        <Footer>
          <div>
            <Link
              color={'primary'}
              href={'https://flatlogic.com/'}
              target={'_blank'}
              className={classes.link}
            >
              Flatlogic
            </Link>

            <Link
              color={'primary'}
              href={'https://flatlogic.com/about'}
              target={'_blank'}
              className={classes.link}
            >
              About Us
            </Link>
            <Link
              color={'primary'}
              href={'https://flatlogic.com/blog'}
              target={'_blank'}
              className={classes.link}
            >
              Blog
            </Link>
          </div>

          <div>
            <Link href={'https://www.facebook.com/flatlogic'} target={'_blank'}>
              <IconButton aria-label='facebook'>
                <FacebookIcon style={{ color: '#6E6E6E99' }} />
              </IconButton>
            </Link>
            <Link href={'https://twitter.com/flatlogic'} target={'_blank'}>
              <IconButton aria-label='twitter'>
                <TwitterIcon style={{ color: '#6E6E6E99' }} />
              </IconButton>
            </Link>
            <Link href={'https://github.com/flatlogic'} target={'_blank'}>
              <IconButton
                aria-label='github'
                style={{ padding: '12px 0 12px 12px' }}
              >
                <GithubIcon style={{ color: '#6E6E6E99' }} />
              </IconButton>
            </Link>
          </div>
        </Footer>
      </div>
    </div>
  );
}

export default withRouter(connect()(Layout));
