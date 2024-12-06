import React, { useState, useEffect } from 'react';
import Vips__appointment_recurrenceFormView from 'pages/CRUD/Vips__appointment_recurrence/form/Vips__appointment_recurrenceFormView';
import { push } from 'connected-react-router';
import actions from 'actions/vips__appointment_recurrence/vips__appointment_recurrenceFormActions';
import { connect } from 'react-redux';

const Vips__appointment_recurrenceFormPageView = (props) => {
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
        <Vips__appointment_recurrenceFormView
          findLoading={findLoading}
          currentUser={currentUser}
          record={isEditing() || isProfile() ? record : {}}
          onSubmit={doSubmit}
          onCancel={() => dispatch(push('/admin/vips__appointment_recurrence'))}
        />
      )}
    </React.Fragment>
  );
};

function mapStateToProps(store) {
  return {
    findLoading: store.vips__appointment_recurrence.form.findLoading,
    record: store.vips__appointment_recurrence.form.record,
    currentUser: store.auth.currentUser,
  };
}

export default connect(mapStateToProps)(
  Vips__appointment_recurrenceFormPageView,
);
