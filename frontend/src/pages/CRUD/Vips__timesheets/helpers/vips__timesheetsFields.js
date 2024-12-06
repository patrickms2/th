const vips__timesheetsFields = {
  id: { type: 'id', label: 'ID' },

  project_id: { type: 'int', label: 'project_id' },

  module_id: { type: 'int', label: 'module_id' },

  module_related_id: { type: 'int', label: 'module_related_id' },

  start_time: { type: 'datetime', label: 'start_time' },

  end_time: { type: 'datetime', label: 'end_time' },

  decimal_time: { type: 'decimal', label: 'decimal_time' },

  hour_time: { type: 'string', label: 'hour_time' },

  note: { type: 'string', label: 'note' },

  created_user_id: { type: 'int', label: 'created_user_id' },
};

export default vips__timesheetsFields;
