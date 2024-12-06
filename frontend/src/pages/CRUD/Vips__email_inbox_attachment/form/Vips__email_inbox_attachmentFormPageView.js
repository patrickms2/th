import React, { useState, useEffect } from 'react';
import Vips__email_inbox_attachmentFormView from 'pages/CRUD/Vips__email_inbox_attachment/form/Vips__email_inbox_attachmentFormView';
import { push } from 'connected-react-router';
import actions from 'actions/vips__email_inbox_attachment/vips__email_inbox_attachmentFormActions';
import { connect } from 'react-redux';

const Vips__email_inbox_attachmentFormPageView = (props) => {
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
        <Vips__email_inbox_attachmentFormView
          findLoading={findLoading}
          currentUser={currentUser}
          record={isEditing() || isProfile() ? record : {}}
          onSubmit={doSubmit}
          onCancel={() => dispatch(push('/admin/vips__email_inbox_attachment'))}
        />
      )}
    </React.Fragment>
  );
};

function mapStateToProps(store) {
  return {
    findLoading: store.vips__email_inbox_attachment.form.findLoading,
    record: store.vips__email_inbox_attachment.form.record,
    currentUser: store.auth.currentUser,
  };
}

export default connect(mapStateToProps)(
  Vips__email_inbox_attachmentFormPageView,
);
