import React, { useState, useEffect } from 'react';
import Vips__knowledge_base_categoryForm from 'pages/CRUD/Vips__knowledge_base_category/form/Vips__knowledge_base_categoryForm';
import { push } from 'connected-react-router';
import actions from 'actions/vips__knowledge_base_category/vips__knowledge_base_categoryFormActions';
import { connect } from 'react-redux';

const Vips__knowledge_base_categoryFormPage = (props) => {
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
        <Vips__knowledge_base_categoryForm
          saveLoading={saveLoading}
          findLoading={findLoading}
          currentUser={currentUser}
          record={isEditing() || isProfile() ? record : {}}
          isEditing={isEditing()}
          isProfile={isProfile()}
          onSubmit={doSubmit}
          onCancel={() =>
            dispatch(push('/admin/vips__knowledge_base_category'))
          }
        />
      )}
    </React.Fragment>
  );
};

function mapStateToProps(store) {
  return {
    findLoading: store.vips__knowledge_base_category.form.findLoading,
    saveLoading: store.vips__knowledge_base_category.form.saveLoading,
    record: store.vips__knowledge_base_category.form.record,
    currentUser: store.auth.currentUser,
  };
}

export default connect(mapStateToProps)(Vips__knowledge_base_categoryFormPage);
