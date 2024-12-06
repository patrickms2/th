import React, { useState, useEffect, useMemo } from 'react';
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import { Drawer, IconButton, List } from '@mui/material';
import { useTheme } from '@mui/material';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import {
  useManagementDispatch,
  useManagementState,
} from '../../context/ManagementContext';

import {
  Home as HomeIcon,
  Apps as CoreIcon,
  Description as DocumentationIcon,
  AccountCircle as ProfileIcon,
} from '@mui/icons-material';

// styles
import useStyles from './styles';
import useStyles2 from './components/SidebarLink/styles';

// components
import SidebarLink from './components/SidebarLink/SidebarLink';

// context
import {
  useLayoutState,
  useLayoutDispatch,
  toggleSidebar,
} from '../../context/LayoutContext';

function Sidebar({ location, structure }) {
  let classes = useStyles();
  let classes2 = useStyles2();
  let theme = useTheme();
  const managementDispatch = useManagementDispatch();
  const managementValue = useManagementState();

  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    setCurrentUser(managementValue.currentUser);
  }, [managementDispatch, managementValue]);

  const toggleDrawer = (value) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    if (value && !isPermanent) toggleSidebar(layoutDispatch);
  };

  // global
  let { isSidebarOpened } = useLayoutState();
  let layoutDispatch = useLayoutDispatch();

  // local
  let [isPermanent, setPermanent] = useState(true);

  const isSidebarOpenedWrapper = useMemo(
    () => (!isPermanent ? !isSidebarOpened : isSidebarOpened),
    [isPermanent, isSidebarOpened],
  );

  useEffect(function () {
    window.addEventListener('resize', handleWindowWidthChange);
    handleWindowWidthChange();
    return function cleanup() {
      window.removeEventListener('resize', handleWindowWidthChange);
    };
  });

  return (
    <Drawer
      variant={isPermanent ? 'permanent' : 'temporary'}
      className={classNames(classes.drawer, {
        [classes.drawerOpen]: isSidebarOpenedWrapper,
        [classes.drawerClose]: !isSidebarOpenedWrapper,
      })}
      classes={{
        paper: classNames({
          [classes.drawerOpen]: isSidebarOpenedWrapper,
          [classes.drawerClose]: !isSidebarOpenedWrapper,
        }),
      }}
      open={isSidebarOpenedWrapper}
      onClose={toggleDrawer(true)}
    >
      <div className={classes.toolbar} />
      <div className={classes.mobileBackButton}>
        <IconButton onClick={() => toggleSidebar(layoutDispatch)}>
          <ArrowBackIcon
            classes={{
              root: classNames(classes.headerIcon, classes.headerIconCollapse),
            }}
          />
        </IconButton>
      </div>
      <List
        className={classes.sidebarList}
        classes={{ padding: classes.padding }}
      >
        <SidebarLink
          label='Dashboard'
          link='/admin/dashboard'
          location={location}
          isSidebarOpened={isSidebarOpenedWrapper}
          icon={<HomeIcon />}
          toggleDrawer={toggleDrawer(true)}
        />

        <SidebarLink
          label='Edit User'
          link='/admin/user/edit'
          location={location}
          isSidebarOpened={isSidebarOpenedWrapper}
          icon={<ProfileIcon />}
          toggleDrawer={toggleDrawer(true)}
        />

        {
          <SidebarLink
            label='Users'
            link='/admin/users'
            location={location}
            isSidebarOpened={isSidebarOpenedWrapper}
            icon={<CoreIcon />}
            toggleDrawer={toggleDrawer(true)}
          />
        }

        {
          <SidebarLink
            label='Vips  announcements'
            link='/admin/vips__announcements'
            location={location}
            isSidebarOpened={isSidebarOpenedWrapper}
            icon={<CoreIcon />}
            toggleDrawer={toggleDrawer(true)}
          />
        }

        {
          <SidebarLink
            label='Vips  appointment'
            link='/admin/vips__appointment'
            location={location}
            isSidebarOpened={isSidebarOpenedWrapper}
            icon={<CoreIcon />}
            toggleDrawer={toggleDrawer(true)}
          />
        }

        {
          <SidebarLink
            label='Vips  appointment recurrence'
            link='/admin/vips__appointment_recurrence'
            location={location}
            isSidebarOpened={isSidebarOpenedWrapper}
            icon={<CoreIcon />}
            toggleDrawer={toggleDrawer(true)}
          />
        }

        {
          <SidebarLink
            label='Vips  clients'
            link='/admin/vips__clients'
            location={location}
            isSidebarOpened={isSidebarOpenedWrapper}
            icon={<CoreIcon />}
            toggleDrawer={toggleDrawer(true)}
          />
        }

        {
          <SidebarLink
            label='Vips  countries'
            link='/admin/vips__countries'
            location={location}
            isSidebarOpened={isSidebarOpenedWrapper}
            icon={<CoreIcon />}
            toggleDrawer={toggleDrawer(true)}
          />
        }

        {
          <SidebarLink
            label='Vips  currency'
            link='/admin/vips__currency'
            location={location}
            isSidebarOpened={isSidebarOpenedWrapper}
            icon={<CoreIcon />}
            toggleDrawer={toggleDrawer(true)}
          />
        }

        {
          <SidebarLink
            label='Vips  custom fields'
            link='/admin/vips__custom_fields'
            location={location}
            isSidebarOpened={isSidebarOpenedWrapper}
            icon={<CoreIcon />}
            toggleDrawer={toggleDrawer(true)}
          />
        }

        {
          <SidebarLink
            label='Vips  dashboard settings'
            link='/admin/vips__dashboard_settings'
            location={location}
            isSidebarOpened={isSidebarOpenedWrapper}
            icon={<CoreIcon />}
            toggleDrawer={toggleDrawer(true)}
          />
        }

        {
          <SidebarLink
            label='Vips  database backups'
            link='/admin/vips__database_backups'
            location={location}
            isSidebarOpened={isSidebarOpenedWrapper}
            icon={<CoreIcon />}
            toggleDrawer={toggleDrawer(true)}
          />
        }

        {
          <SidebarLink
            label='Vips  defect attachments'
            link='/admin/vips__defect_attachments'
            location={location}
            isSidebarOpened={isSidebarOpenedWrapper}
            icon={<CoreIcon />}
            toggleDrawer={toggleDrawer(true)}
          />
        }

        {
          <SidebarLink
            label='Vips  defect comments'
            link='/admin/vips__defect_comments'
            location={location}
            isSidebarOpened={isSidebarOpenedWrapper}
            icon={<CoreIcon />}
            toggleDrawer={toggleDrawer(true)}
          />
        }

        {
          <SidebarLink
            label='Vips  defect user'
            link='/admin/vips__defect_user'
            location={location}
            isSidebarOpened={isSidebarOpenedWrapper}
            icon={<CoreIcon />}
            toggleDrawer={toggleDrawer(true)}
          />
        }

        {
          <SidebarLink
            label='Vips  defects'
            link='/admin/vips__defects'
            location={location}
            isSidebarOpened={isSidebarOpenedWrapper}
            icon={<CoreIcon />}
            toggleDrawer={toggleDrawer(true)}
          />
        }

        {
          <SidebarLink
            label='Vips  defects history'
            link='/admin/vips__defects_history'
            location={location}
            isSidebarOpened={isSidebarOpenedWrapper}
            icon={<CoreIcon />}
            toggleDrawer={toggleDrawer(true)}
          />
        }

        {
          <SidebarLink
            label='Vips  department role menu'
            link='/admin/vips__department_role_menu'
            location={location}
            isSidebarOpened={isSidebarOpenedWrapper}
            icon={<CoreIcon />}
            toggleDrawer={toggleDrawer(true)}
          />
        }

        {
          <SidebarLink
            label='Vips  departments'
            link='/admin/vips__departments'
            location={location}
            isSidebarOpened={isSidebarOpenedWrapper}
            icon={<CoreIcon />}
            toggleDrawer={toggleDrawer(true)}
          />
        }

        {
          <SidebarLink
            label='Vips  departments roles'
            link='/admin/vips__departments_roles'
            location={location}
            isSidebarOpened={isSidebarOpenedWrapper}
            icon={<CoreIcon />}
            toggleDrawer={toggleDrawer(true)}
          />
        }

        {
          <SidebarLink
            label='Vips  email inbox'
            link='/admin/vips__email_inbox'
            location={location}
            isSidebarOpened={isSidebarOpenedWrapper}
            icon={<CoreIcon />}
            toggleDrawer={toggleDrawer(true)}
          />
        }

        {
          <SidebarLink
            label='Vips  email inbox attachment'
            link='/admin/vips__email_inbox_attachment'
            location={location}
            isSidebarOpened={isSidebarOpenedWrapper}
            icon={<CoreIcon />}
            toggleDrawer={toggleDrawer(true)}
          />
        }

        {
          <SidebarLink
            label='Vips  email template'
            link='/admin/vips__email_template'
            location={location}
            isSidebarOpened={isSidebarOpenedWrapper}
            icon={<CoreIcon />}
            toggleDrawer={toggleDrawer(true)}
          />
        }

        {
          <SidebarLink
            label='Vips  email template groups'
            link='/admin/vips__email_template_groups'
            location={location}
            isSidebarOpened={isSidebarOpenedWrapper}
            icon={<CoreIcon />}
            toggleDrawer={toggleDrawer(true)}
          />
        }

        {
          <SidebarLink
            label='Vips  estimate item taxes'
            link='/admin/vips__estimate_item_taxes'
            location={location}
            isSidebarOpened={isSidebarOpenedWrapper}
            icon={<CoreIcon />}
            toggleDrawer={toggleDrawer(true)}
          />
        }

        {
          <SidebarLink
            label='Vips  estimate items'
            link='/admin/vips__estimate_items'
            location={location}
            isSidebarOpened={isSidebarOpenedWrapper}
            icon={<CoreIcon />}
            toggleDrawer={toggleDrawer(true)}
          />
        }

        {
          <SidebarLink
            label='Vips  estimate settings'
            link='/admin/vips__estimate_settings'
            location={location}
            isSidebarOpened={isSidebarOpenedWrapper}
            icon={<CoreIcon />}
            toggleDrawer={toggleDrawer(true)}
          />
        }

        {
          <SidebarLink
            label='Vips  estimates'
            link='/admin/vips__estimates'
            location={location}
            isSidebarOpened={isSidebarOpenedWrapper}
            icon={<CoreIcon />}
            toggleDrawer={toggleDrawer(true)}
          />
        }

        {
          <SidebarLink
            label='Vips  files'
            link='/admin/vips__files'
            location={location}
            isSidebarOpened={isSidebarOpenedWrapper}
            icon={<CoreIcon />}
            toggleDrawer={toggleDrawer(true)}
          />
        }

        {
          <SidebarLink
            label='Vips  folders'
            link='/admin/vips__folders'
            location={location}
            isSidebarOpened={isSidebarOpenedWrapper}
            icon={<CoreIcon />}
            toggleDrawer={toggleDrawer(true)}
          />
        }

        {
          <SidebarLink
            label='Vips  form'
            link='/admin/vips__form'
            location={location}
            isSidebarOpened={isSidebarOpenedWrapper}
            icon={<CoreIcon />}
            toggleDrawer={toggleDrawer(true)}
          />
        }

        {
          <SidebarLink
            label='Vips  holidays'
            link='/admin/vips__holidays'
            location={location}
            isSidebarOpened={isSidebarOpenedWrapper}
            icon={<CoreIcon />}
            toggleDrawer={toggleDrawer(true)}
          />
        }

        {
          <SidebarLink
            label='Vips  incident attachments'
            link='/admin/vips__incident_attachments'
            location={location}
            isSidebarOpened={isSidebarOpenedWrapper}
            icon={<CoreIcon />}
            toggleDrawer={toggleDrawer(true)}
          />
        }

        {
          <SidebarLink
            label='Vips  incident comments'
            link='/admin/vips__incident_comments'
            location={location}
            isSidebarOpened={isSidebarOpenedWrapper}
            icon={<CoreIcon />}
            toggleDrawer={toggleDrawer(true)}
          />
        }

        {
          <SidebarLink
            label='Vips  incident history'
            link='/admin/vips__incident_history'
            location={location}
            isSidebarOpened={isSidebarOpenedWrapper}
            icon={<CoreIcon />}
            toggleDrawer={toggleDrawer(true)}
          />
        }

        {
          <SidebarLink
            label='Vips  incident user'
            link='/admin/vips__incident_user'
            location={location}
            isSidebarOpened={isSidebarOpenedWrapper}
            icon={<CoreIcon />}
            toggleDrawer={toggleDrawer(true)}
          />
        }

        {
          <SidebarLink
            label='Vips  incidents'
            link='/admin/vips__incidents'
            location={location}
            isSidebarOpened={isSidebarOpenedWrapper}
            icon={<CoreIcon />}
            toggleDrawer={toggleDrawer(true)}
          />
        }

        {
          <SidebarLink
            label='Vips  invoice item taxes'
            link='/admin/vips__invoice_item_taxes'
            location={location}
            isSidebarOpened={isSidebarOpenedWrapper}
            icon={<CoreIcon />}
            toggleDrawer={toggleDrawer(true)}
          />
        }

        {
          <SidebarLink
            label='Vips  invoice items'
            link='/admin/vips__invoice_items'
            location={location}
            isSidebarOpened={isSidebarOpenedWrapper}
            icon={<CoreIcon />}
            toggleDrawer={toggleDrawer(true)}
          />
        }

        {
          <SidebarLink
            label='Vips  invoice settings'
            link='/admin/vips__invoice_settings'
            location={location}
            isSidebarOpened={isSidebarOpenedWrapper}
            icon={<CoreIcon />}
            toggleDrawer={toggleDrawer(true)}
          />
        }

        {
          <SidebarLink
            label='Vips  invoices'
            link='/admin/vips__invoices'
            location={location}
            isSidebarOpened={isSidebarOpenedWrapper}
            icon={<CoreIcon />}
            toggleDrawer={toggleDrawer(true)}
          />
        }

        {
          <SidebarLink
            label='Vips  item tax'
            link='/admin/vips__item_tax'
            location={location}
            isSidebarOpened={isSidebarOpenedWrapper}
            icon={<CoreIcon />}
            toggleDrawer={toggleDrawer(true)}
          />
        }

        {
          <SidebarLink
            label='Vips  items'
            link='/admin/vips__items'
            location={location}
            isSidebarOpened={isSidebarOpenedWrapper}
            icon={<CoreIcon />}
            toggleDrawer={toggleDrawer(true)}
          />
        }

        {
          <SidebarLink
            label='Vips  knowledge base article'
            link='/admin/vips__knowledge_base_article'
            location={location}
            isSidebarOpened={isSidebarOpenedWrapper}
            icon={<CoreIcon />}
            toggleDrawer={toggleDrawer(true)}
          />
        }

        {
          <SidebarLink
            label='Vips  knowledge base category'
            link='/admin/vips__knowledge_base_category'
            location={location}
            isSidebarOpened={isSidebarOpenedWrapper}
            icon={<CoreIcon />}
            toggleDrawer={toggleDrawer(true)}
          />
        }

        {
          <SidebarLink
            label='Vips  languages'
            link='/admin/vips__languages'
            location={location}
            isSidebarOpened={isSidebarOpenedWrapper}
            icon={<CoreIcon />}
            toggleDrawer={toggleDrawer(true)}
          />
        }

        {
          <SidebarLink
            label='Vips  leave attachments'
            link='/admin/vips__leave_attachments'
            location={location}
            isSidebarOpened={isSidebarOpenedWrapper}
            icon={<CoreIcon />}
            toggleDrawer={toggleDrawer(true)}
          />
        }

        {
          <SidebarLink
            label='Vips  leave types'
            link='/admin/vips__leave_types'
            location={location}
            isSidebarOpened={isSidebarOpenedWrapper}
            icon={<CoreIcon />}
            toggleDrawer={toggleDrawer(true)}
          />
        }

        {
          <SidebarLink
            label='Vips  leaves'
            link='/admin/vips__leaves'
            location={location}
            isSidebarOpened={isSidebarOpenedWrapper}
            icon={<CoreIcon />}
            toggleDrawer={toggleDrawer(true)}
          />
        }

        {
          <SidebarLink
            label='Vips  locales'
            link='/admin/vips__locales'
            location={location}
            isSidebarOpened={isSidebarOpenedWrapper}
            icon={<CoreIcon />}
            toggleDrawer={toggleDrawer(true)}
          />
        }

        {
          <SidebarLink
            label='Vips  meeting members'
            link='/admin/vips__meeting_members'
            location={location}
            isSidebarOpened={isSidebarOpenedWrapper}
            icon={<CoreIcon />}
            toggleDrawer={toggleDrawer(true)}
          />
        }

        {
          <SidebarLink
            label='Vips  meetings'
            link='/admin/vips__meetings'
            location={location}
            isSidebarOpened={isSidebarOpenedWrapper}
            icon={<CoreIcon />}
            toggleDrawer={toggleDrawer(true)}
          />
        }

        {
          <SidebarLink
            label='Vips  menus'
            link='/admin/vips__menus'
            location={location}
            isSidebarOpened={isSidebarOpenedWrapper}
            icon={<CoreIcon />}
            toggleDrawer={toggleDrawer(true)}
          />
        }

        {
          <SidebarLink
            label='Vips  modules'
            link='/admin/vips__modules'
            location={location}
            isSidebarOpened={isSidebarOpenedWrapper}
            icon={<CoreIcon />}
            toggleDrawer={toggleDrawer(true)}
          />
        }

        {
          <SidebarLink
            label='Vips  notifications'
            link='/admin/vips__notifications'
            location={location}
            isSidebarOpened={isSidebarOpenedWrapper}
            icon={<CoreIcon />}
            toggleDrawer={toggleDrawer(true)}
          />
        }

        {
          <SidebarLink
            label='Vips  password resets'
            link='/admin/vips__password_resets'
            location={location}
            isSidebarOpened={isSidebarOpenedWrapper}
            icon={<CoreIcon />}
            toggleDrawer={toggleDrawer(true)}
          />
        }

        {
          <SidebarLink
            label='Vips  payment gateway settings'
            link='/admin/vips__payment_gateway_settings'
            location={location}
            isSidebarOpened={isSidebarOpenedWrapper}
            icon={<CoreIcon />}
            toggleDrawer={toggleDrawer(true)}
          />
        }

        {
          <SidebarLink
            label='Vips  payment methods'
            link='/admin/vips__payment_methods'
            location={location}
            isSidebarOpened={isSidebarOpenedWrapper}
            icon={<CoreIcon />}
            toggleDrawer={toggleDrawer(true)}
          />
        }

        {
          <SidebarLink
            label='Vips  payments'
            link='/admin/vips__payments'
            location={location}
            isSidebarOpened={isSidebarOpenedWrapper}
            icon={<CoreIcon />}
            toggleDrawer={toggleDrawer(true)}
          />
        }

        {
          <SidebarLink
            label='Vips  project attachments'
            link='/admin/vips__project_attachments'
            location={location}
            isSidebarOpened={isSidebarOpenedWrapper}
            icon={<CoreIcon />}
            toggleDrawer={toggleDrawer(true)}
          />
        }

        {
          <SidebarLink
            label='Vips  project comments'
            link='/admin/vips__project_comments'
            location={location}
            isSidebarOpened={isSidebarOpenedWrapper}
            icon={<CoreIcon />}
            toggleDrawer={toggleDrawer(true)}
          />
        }

        {
          <SidebarLink
            label='Vips  project sprint members'
            link='/admin/vips__project_sprint_members'
            location={location}
            isSidebarOpened={isSidebarOpenedWrapper}
            icon={<CoreIcon />}
            toggleDrawer={toggleDrawer(true)}
          />
        }

        {
          <SidebarLink
            label='Vips  project sprint task members'
            link='/admin/vips__project_sprint_task_members'
            location={location}
            isSidebarOpened={isSidebarOpenedWrapper}
            icon={<CoreIcon />}
            toggleDrawer={toggleDrawer(true)}
          />
        }

        {
          <SidebarLink
            label='Vips  project sprint tasks'
            link='/admin/vips__project_sprint_tasks'
            location={location}
            isSidebarOpened={isSidebarOpenedWrapper}
            icon={<CoreIcon />}
            toggleDrawer={toggleDrawer(true)}
          />
        }

        {
          <SidebarLink
            label='Vips  project sprints'
            link='/admin/vips__project_sprints'
            location={location}
            isSidebarOpened={isSidebarOpenedWrapper}
            icon={<CoreIcon />}
            toggleDrawer={toggleDrawer(true)}
          />
        }

        {
          <SidebarLink
            label='Vips  project user'
            link='/admin/vips__project_user'
            location={location}
            isSidebarOpened={isSidebarOpenedWrapper}
            icon={<CoreIcon />}
            toggleDrawer={toggleDrawer(true)}
          />
        }

        {
          <SidebarLink
            label='Vips  projects'
            link='/admin/vips__projects'
            location={location}
            isSidebarOpened={isSidebarOpenedWrapper}
            icon={<CoreIcon />}
            toggleDrawer={toggleDrawer(true)}
          />
        }

        {
          <SidebarLink
            label='Vips  providers'
            link='/admin/vips__providers'
            location={location}
            isSidebarOpened={isSidebarOpenedWrapper}
            icon={<CoreIcon />}
            toggleDrawer={toggleDrawer(true)}
          />
        }

        {
          <SidebarLink
            label='Vips  roles'
            link='/admin/vips__roles'
            location={location}
            isSidebarOpened={isSidebarOpenedWrapper}
            icon={<CoreIcon />}
            toggleDrawer={toggleDrawer(true)}
          />
        }

        {
          <SidebarLink
            label='Vips  slack integration'
            link='/admin/vips__slack_integration'
            location={location}
            isSidebarOpened={isSidebarOpenedWrapper}
            icon={<CoreIcon />}
            toggleDrawer={toggleDrawer(true)}
          />
        }

        {
          <SidebarLink
            label='Vips  slack settings'
            link='/admin/vips__slack_settings'
            location={location}
            isSidebarOpened={isSidebarOpenedWrapper}
            icon={<CoreIcon />}
            toggleDrawer={toggleDrawer(true)}
          />
        }

        {
          <SidebarLink
            label='Vips  task attachments'
            link='/admin/vips__task_attachments'
            location={location}
            isSidebarOpened={isSidebarOpenedWrapper}
            icon={<CoreIcon />}
            toggleDrawer={toggleDrawer(true)}
          />
        }

        {
          <SidebarLink
            label='Vips  task comments'
            link='/admin/vips__task_comments'
            location={location}
            isSidebarOpened={isSidebarOpenedWrapper}
            icon={<CoreIcon />}
            toggleDrawer={toggleDrawer(true)}
          />
        }

        {
          <SidebarLink
            label='Vips  task user'
            link='/admin/vips__task_user'
            location={location}
            isSidebarOpened={isSidebarOpenedWrapper}
            icon={<CoreIcon />}
            toggleDrawer={toggleDrawer(true)}
          />
        }

        {
          <SidebarLink
            label='Vips  tasks'
            link='/admin/vips__tasks'
            location={location}
            isSidebarOpened={isSidebarOpenedWrapper}
            icon={<CoreIcon />}
            toggleDrawer={toggleDrawer(true)}
          />
        }

        {
          <SidebarLink
            label='Vips  taxes'
            link='/admin/vips__taxes'
            location={location}
            isSidebarOpened={isSidebarOpenedWrapper}
            icon={<CoreIcon />}
            toggleDrawer={toggleDrawer(true)}
          />
        }

        {
          <SidebarLink
            label='Vips  teams'
            link='/admin/vips__teams'
            location={location}
            isSidebarOpened={isSidebarOpenedWrapper}
            icon={<CoreIcon />}
            toggleDrawer={toggleDrawer(true)}
          />
        }

        {
          <SidebarLink
            label='Vips  teams members'
            link='/admin/vips__teams_members'
            location={location}
            isSidebarOpened={isSidebarOpenedWrapper}
            icon={<CoreIcon />}
            toggleDrawer={toggleDrawer(true)}
          />
        }

        {
          <SidebarLink
            label='Vips  timer logs'
            link='/admin/vips__timer_logs'
            location={location}
            isSidebarOpened={isSidebarOpenedWrapper}
            icon={<CoreIcon />}
            toggleDrawer={toggleDrawer(true)}
          />
        }

        {
          <SidebarLink
            label='Vips  timesheets'
            link='/admin/vips__timesheets'
            location={location}
            isSidebarOpened={isSidebarOpenedWrapper}
            icon={<CoreIcon />}
            toggleDrawer={toggleDrawer(true)}
          />
        }

        {
          <SidebarLink
            label='Vips  todos'
            link='/admin/vips__todos'
            location={location}
            isSidebarOpened={isSidebarOpenedWrapper}
            icon={<CoreIcon />}
            toggleDrawer={toggleDrawer(true)}
          />
        }

        {
          <SidebarLink
            label='Vips  translations'
            link='/admin/vips__translations'
            location={location}
            isSidebarOpened={isSidebarOpenedWrapper}
            icon={<CoreIcon />}
            toggleDrawer={toggleDrawer(true)}
          />
        }

        {
          <SidebarLink
            label='Vips  user activities'
            link='/admin/vips__user_activities'
            location={location}
            isSidebarOpened={isSidebarOpenedWrapper}
            icon={<CoreIcon />}
            toggleDrawer={toggleDrawer(true)}
          />
        }

        {
          <SidebarLink
            label='Vips  user role department'
            link='/admin/vips__user_role_department'
            location={location}
            isSidebarOpened={isSidebarOpenedWrapper}
            icon={<CoreIcon />}
            toggleDrawer={toggleDrawer(true)}
          />
        }

        {
          <SidebarLink
            label='Vips  user settings'
            link='/admin/vips__user_settings'
            location={location}
            isSidebarOpened={isSidebarOpenedWrapper}
            icon={<CoreIcon />}
            toggleDrawer={toggleDrawer(true)}
          />
        }

        {
          <SidebarLink
            label='Vips  users'
            link='/admin/vips__users'
            location={location}
            isSidebarOpened={isSidebarOpenedWrapper}
            icon={<CoreIcon />}
            toggleDrawer={toggleDrawer(true)}
          />
        }

        {
          <SidebarLink
            label='API docs'
            link='/admin/api-docs'
            location={location}
            isSidebarOpened={isSidebarOpenedWrapper}
            icon={<DocumentationIcon />}
            toggleDrawer={toggleDrawer(true)}
          />
        }
      </List>
    </Drawer>
  );

  // ##################################################################
  function handleWindowWidthChange() {
    let windowWidth = window.innerWidth;
    let breakpointWidth = theme.breakpoints.values.md;
    let isSmallScreen = windowWidth < breakpointWidth;

    if (isSmallScreen && isPermanent) {
      setPermanent(false);
    } else if (!isSmallScreen && !isPermanent) {
      setPermanent(true);
    }
  }
}

export default withRouter(Sidebar);
