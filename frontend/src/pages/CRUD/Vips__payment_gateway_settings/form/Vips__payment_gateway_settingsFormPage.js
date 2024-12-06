import React, { useState, useEffect } from 'react';
import Vips__payment_gateway_settingsForm from 'pages/CRUD/Vips__payment_gateway_settings/form/Vips__payment_gateway_settingsForm';
import { push } from 'connected-react-router';
import actions from 'actions/vips__payment_gateway_settings/vips__payment_gateway_settingsFormActions';
import { connect } from 'react-redux';

const Vips__payment_gateway_settingsFormPage = (props) => {
  const { dispatch, match, saveLoading, findLoading, record, currentUser } =
    props;

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
        <Vips__payment_gateway_settingsForm
          saveLoading={saveLoading}
          findLoading={findLoading}
          currentUser={currentUser}
          record={isEditing() || isProfile() ? record : {}}
          isEditing={isEditing()}
          isProfile={isProfile()}
          onSubmit={doSubmit}
          onCancel={() =>
            dispatch(push('/admin/vips__payment_gateway_settings'))
          }
        />
      )}
    </React.Fragment>
  );
};

function mapStateToProps(store) {
  return {
    findLoading: store.vips__payment_gateway_settings.form.findLoading,
    saveLoading: store.vips__payment_gateway_settings.form.saveLoading,
    record: store.vips__payment_gateway_settings.form.record,
    currentUser: store.auth.currentUser,
  };
}

export default connect(mapStateToProps)(Vips__payment_gateway_settingsFormPage);
