const vips__estimatesFields = {
  id: { type: 'id', label: 'ID' },

  user_id: { type: 'int', label: 'user_id' },

  client_id: { type: 'int', label: 'client_id' },

  invoice_id: { type: 'int', label: 'invoice_id' },

  estimate_number: { type: 'string', label: 'estimate_number' },

  estimate_date: { type: 'date', label: 'estimate_date' },

  valid_till: { type: 'date', label: 'valid_till' },

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

  reference: { type: 'string', label: 'reference' },

  note: { type: 'string', label: 'note' },

  status: {
    type: 'enum',
    label: 'status',

    options: [
      { value: 'draft', label: 'draft' },

      { value: 'sent', label: 'sent' },

      { value: 'expired', label: 'expired' },

      { value: 'declined', label: 'declined' },

      { value: 'accepted', label: 'accepted' },
    ],
  },
};

export default vips__estimatesFields;
