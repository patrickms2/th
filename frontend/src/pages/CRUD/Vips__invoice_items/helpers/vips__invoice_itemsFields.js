const vips__invoice_itemsFields = {
  id: { type: 'id', label: 'ID' },

  invoice_id: { type: 'int', label: 'invoice_id' },

  item_name: { type: 'string', label: 'item_name' },

  item_description: { type: 'string', label: 'item_description' },

  item_unit: { type: 'string', label: 'item_unit' },

  unit_price: { type: 'string', label: 'unit_price' },

  quantity: { type: 'int', label: 'quantity' },

  total_item_amount: { type: 'string', label: 'total_item_amount' },
};

export default vips__invoice_itemsFields;
