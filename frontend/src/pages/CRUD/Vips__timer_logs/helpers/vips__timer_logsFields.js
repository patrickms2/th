const vips__timer_logsFields = {
  id: { type: 'id', label: 'ID' },

  user_id: { type: 'int', label: 'user_id' },

  project_id: { type: 'int', label: 'project_id' },

  reference_id: { type: 'int', label: 'reference_id' },

  is_task_timer: { type: 'int', label: 'is_task_timer' },

  is_defect_timer: { type: 'int', label: 'is_defect_timer' },

  is_incident_timer: { type: 'int', label: 'is_incident_timer' },

  start_time: { type: 'datetime', label: 'start_time' },
};

export default vips__timer_logsFields;
