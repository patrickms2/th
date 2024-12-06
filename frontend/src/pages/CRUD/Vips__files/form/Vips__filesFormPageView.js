import React, { useState, useEffect } from 'react';
import Vips__filesFormView from 'pages/CRUD/Vips__files/form/Vips__filesFormView';
import { push } from 'connected-react-router';
import actions from 'actions/vips__files/vips__filesFormActions';
import { connect } from 'react-redux';

const Vips__filesFormPageView = (props) => {
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
        <Vips__filesFormView
          findLoading={findLoading}
          currentUser={currentUser}
          record={isEditing() || isProfile() ? record : {}}
          onSubmit={doSubmit}
          onCancel={() => dispatch(push('/admin/vips__files'))}
        />
      )}
    </React.Fragment>
  );
};

function mapStateToProps(store) {
  return {
    findLoading: store.vips__files.form.findLoading,
    record: store.vips__files.form.record,
    currentUser: store.auth.currentUser,
  };
}

export default connect(mapStateToProps)(Vips__filesFormPageView);