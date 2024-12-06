
const vips__tasksFields = {
	id: { type: 'id', label: 'ID' },

    parent_task_id: { type: 'int', label: 'parent_task_id',

    },

    generated_id: { type: 'string', label: 'generated_id',

    },

    name: { type: 'string', label: 'name',

    },

    project_id: { type: 'int', label: 'project_id',

    },

    project_version: { type: 'string', label: 'project_version',

    },

    planned_start_date: { type: 'date', label: 'planned_start_date',

    },

    planned_end_date: { type: 'date', label: 'planned_end_date',

    },

    task_start_date: { type: 'datetime', label: 'task_start_date',

    },

    task_end_date: { type: 'datetime', label: 'task_end_date',

    },

    estimated_hours: { type: 'string', label: 'estimated_hours',

    },

    actual_hours: { type: 'string', label: 'actual_hours',

    },

    status: { type: 'int', label: 'status',

    },

    2=in: { type: 'string', label: '2=in',

    },

    3=on: { type: 'string', label: '3=on',

    },

    4=waiting: { type: 'string', label: '4=waiting',

    },

    5=cancel: { type: 'string', label: '5=cancel',

    },

    6=completed: { type: 'string', label: '6=completed',

    },

    priority: { type: 'int', label: 'priority',

    },

    2=very: { type: 'string', label: '2=very',

    },

    3=high: { type: 'string', label: '3=high',

    },

    4=medium: { type: 'string', label: '4=medium',

    },

    5=low: { type: 'string', label: '5=low',

    },

    progress: { type: 'int', label: 'progress',

    },

    assign_to: { type: 'int', label: 'assign_to',

    },

    description: { type: 'string', label: 'description',

    },

    notes: { type: 'string', label: 'notes',

    },

    order: { type: 'int', label: 'order',

    },

}

export default vips__tasksFields;
