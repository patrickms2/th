import React, { useState, useEffect } from 'react';
import Vips__invoice_settingsFormView from 'pages/CRUD/Vips__invoice_settings/form/Vips__invoice_settingsFormView';
import { push } from 'connected-react-router';
import actions from 'actions/vips__invoice_settings/vips__invoice_settingsFormActions';
import { connect } from 'react-redux';

const Vips__invoice_settingsFormPageView = (props) => {
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
        <Vips__invoice_settingsFormView
          findLoading={findLoading}
          currentUser={currentUser}
          record={isEditing() || isProfile() ? record : {}}
          onSubmit={doSubmit}
          onCancel={() => dispatch(push('/admin/vips__invoice_settings'))}
        />
      )}
    </React.Fragment>
  );
};

function mapStateToProps(store) {
  return {
    findLoading: store.vips__invoice_settings.form.findLoading,
    record: store.vips__invoice_settings.form.record,
    currentUser: store.auth.currentUser,
  };
}

export default connect(mapStateToProps)(Vips__invoice_settingsFormPageView);
