import React, { useState, useEffect } from 'react';
import Vips__project_sprint_membersFormView from 'pages/CRUD/Vips__project_sprint_members/form/Vips__project_sprint_membersFormView';
import { push } from 'connected-react-router';
import actions from 'actions/vips__project_sprint_members/vips__project_sprint_membersFormActions';
import { connect } from 'react-redux';

const Vips__project_sprint_membersFormPageView = (props) => {
  const { dispatch, match, findLoading, record, currentUser } = props;

  const [dispatched, setDispatched] = useState(false);

  const isEditing = () => {
    return !!match.params.id;
  };

  const isProfile = () => {
    return match.url === '/app/profile';
  };

  const doSubmit = (id, data) => {
    if (isEditing() || isProfile()) {
      dispatch(actions.doUpdate(id, data, isProfile()));
    } else {
      dispatch(actions.doCreate(data));
    }
  };

  useEffect(() => {
    if (isEditing()) {
      dispatch(actions.doFind(match.params.id));
    } else {
      if (isProfile()) {
        const currentUser = JSON.parse(localStorage.getItem('user'));
        const currentUserId = currentUser.user.id;
        dispatch(actions.doFind(currentUserId));
      } else {
        dispatch(actions.doNew());
      }
    }
    setDispatched(true);
  }, [match, dispatch]);

  return (
    <React.Fragment>
      {dispatched && (
        <Vips__project_sprint_membersFormView
          findLoading={findLoading}
          currentUser={currentUser}
          record={isEditing() || isProfile() ? record : {}}
          onSubmit={doSubmit}
          onCancel={() => dispatch(push('/admin/vips__project_sprint_members'))}
        />
      )}
    </React.Fragment>
  );
};

function mapStateToProps(store) {
  return {
    findLoading: store.vips__project_sprint_members.form.findLoading,
    record: store.vips__project_sprint_members.form.record,
    currentUser: store.auth.currentUser,
  };
}

export default connect(mapStateToProps)(
  Vips__project_sprint_membersFormPageView,
);
