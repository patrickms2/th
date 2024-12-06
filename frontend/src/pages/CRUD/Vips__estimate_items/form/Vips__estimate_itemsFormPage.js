import React, { useState, useEffect } from 'react';
import Vips__estimate_itemsForm from 'pages/CRUD/Vips__estimate_items/form/Vips__estimate_itemsForm';
import { push } from 'connected-react-router';
import actions from 'actions/vips__estimate_items/vips__estimate_itemsFormActions';
import { connect } from 'react-redux';

const Vips__estimate_itemsFormPage = (props) => {
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
        <Vips__estimate_itemsForm
          saveLoading={saveLoading}
          findLoading={findLoading}
          currentUser={currentUser}
          record={isEditing() || isProfile() ? record : {}}
          isEditing={isEditing()}
          isProfile={isProfile()}
          onSubmit={doSubmit}
          onCancel={() => dispatch(push('/admin/vips__estimate_items'))}
        />
      )}
    </React.Fragment>
  );
};

function mapStateToProps(store) {
  return {
    findLoading: store.vips__estimate_items.form.findLoading,
    saveLoading: store.vips__estimate_items.form.saveLoading,
    record: store.vips__estimate_items.form.record,
    currentUser: store.auth.currentUser,
  };
}

export default connect(mapStateToProps)(Vips__estimate_itemsFormPage);
