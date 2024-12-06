const vips__invoicesFields = {
  id: { type: 'id', label: 'ID' },

  parent_id: { type: 'int', label: 'parent_id' },

  user_id: { type: 'int', label: 'user_id' },

  client_id: { type: 'int', label: 'client_id' },

  project_id: { type: 'int', label: 'project_id' },

  estimate_id: { type: 'int', label: 'estimate_id' },

  invoice_number: { type: 'string', label: 'invoice_number' },

  invoice_date: { type: 'date', label: 'invoice_date' },

  due_date: { type: 'date', label: 'due_date' },

  sub_total: { type: 'string', label: 'sub_total' },

  total_tax: { type: 'string', label: 'total_tax' },

  discount_type: {
    type: 'enum',
    label: 'discount_type',

    options: [
      { value: 'percent', label: 'percent' },

      { value: 'fixed', label: 'fixed' },
    ],
  },

  discount: { type: 'string', label: 'discount' },

  total_discount: { type: 'string', label: 'total_discount' },

  adjustment: { type: 'string', label: 'adjustment' },

  total_amount: { type: 'string', label: 'total_amount' },

  total_due_amount: { type: 'string', label: 'total_due_amount' },

  reference: { type: 'string', label: 'reference' },

  note: { type: 'string', label: 'note' },

  recurrence: { type: 'int', label: 'recurrence' },

  recurrence_occurrences: { type: 'int', label: 'recurrence_occurrences' },

  recurrence_pattern: { type: 'string', label: 'recurrence_pattern' },

  is_recurrence_generated: { type: 'int', label: 'is_recurrence_generated' },

  last_overdue_reminder_date: {
    type: 'datetime',
    label: 'last_overdue_reminder_date',
  },

  status: {
    type: 'enum',
    label: 'status',

    options: [
      { value: 'paid', label: 'paid' },

      { value: 'partially_paid', label: 'partially_paid' },

      { value: 'unpaid', label: 'unpaid' },
    ],
  },
};

export default vips__invoicesFields;
