const vips__invoice_settingsFields = {
  id: { type: 'id', label: 'ID' },

  invoice_prefix: { type: 'string', label: 'invoice_prefix' },

  due_after: { type: 'int', label: 'due_after' },

  invoice_logo: { type: 'string', label: 'invoice_logo' },

  template: { type: 'string', label: 'template' },

  gst_number: { type: 'string', label: 'gst_number' },

  show_gst_number: { type: 'int', label: 'show_gst_number' },

  client_note: { type: 'string', label: 'client_note' },

  terms_conditions: { type: 'string', label: 'terms_conditions' },

  auto_remind: { type: 'int', label: 'auto_remind' },

  auto_remind_after: { type: 'string', label: 'auto_remind_after' },

  3: { type: 'string', label: '3' },

  payment_prefix: { type: 'string', label: 'payment_prefix' },
};

export default vips__invoice_settingsFields;
