const vips__estimate_settingsFields = {
  id: { type: 'id', label: 'ID' },

  estimate_prefix: { type: 'string', label: 'estimate_prefix' },

  due_after: { type: 'int', label: 'due_after' },

  estimate_logo: { type: 'string', label: 'estimate_logo' },

  template: { type: 'string', label: 'template' },

  client_note: { type: 'string', label: 'client_note' },

  terms_conditions: { type: 'string', label: 'terms_conditions' },

  auto_remind: { type: 'int', label: 'auto_remind' },

  auto_remind_before: { type: 'int', label: 'auto_remind_before' },

  auto_convert_to_invoice_on_client_accept: {
    type: 'int',
    label: 'auto_convert_to_invoice_on_client_accept',
  },
};

export default vips__estimate_settingsFields;
