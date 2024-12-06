const vips__paymentsFields = {
  id: { type: 'id', label: 'ID' },

  user_id: { type: 'int', label: 'user_id' },

  client_id: { type: 'int', label: 'client_id' },

  receipt_number: { type: 'string', label: 'receipt_number' },

  invoice_id: { type: 'int', label: 'invoice_id' },

  transaction_id: { type: 'string', label: 'transaction_id' },

  payment_method: { type: 'string', label: 'payment_method' },

  date: { type: 'datetime', label: 'date' },

  amount: { type: 'string', label: 'amount' },

  notes: { type: 'string', label: 'notes' },

  status: {
    type: 'enum',
    label: 'status',

    options: [
      { value: 'in_progress', label: 'in_progress' },

      { value: 'successful', label: 'successful' },

      { value: 'failed', label: 'failed' },
    ],
  },
};

export default vips__paymentsFields;
