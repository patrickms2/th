import axios from 'axios';
import React, { Component, useState, useEffect } from 'react';
import AutocompleteFormItem from 'components/FormItems/items/AutocompleteFormItem';
import { connect } from 'react-redux';

async function selectList(query, limit) {
  const params = { query, limit };
  const response = await axios.get(`/vips__appointment/autocomplete`, {
    params,
  });
  return response.data;
}

const Vips__appointmentSelectItem = (props) => {
  const [items, setItems] = useState([]);

  const fetchToItem = (value, limit) => {
    return selectList(value, limit);
  };

  useEffect(() => {
    async function fetchItems() {
      const response = await fetchToItem();
      setItems(response);
    }
    fetchItems();
  }, []);

  const mapper = {
    intoSelect(originalValue) {
      if (!originalValue) {
        return undefined;
      }

      let label = originalValue.label ? originalValue.label : originalValue.id;

      return {
        id: originalValue.id,
        label,
      };
    },

    intoValue(originalValue) {
      if (!originalValue) {
        return undefined;
      }

      return {
        id: originalValue.value,
        label: originalValue.label,
      };
    },
  };

  const { form, ...rest } = props;

  return (
    <React.Fragment>
      <AutocompleteFormItem
        {...rest}
        fetchFn={fetchToItem}
        mapper={mapper}
        form={form}
        items={items}
      />
    </React.Fragment>
  );
};

const select = (state) => ({
  hasPermissionToCreate: state.vips__appointment.hasPermissionToCreate,
});

export default connect(select)(Vips__appointmentSelectItem);
