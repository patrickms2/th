
const vips__appointmentFields = {
	id: { type: 'id', label: 'ID' },

    generated_id: { type: 'string', label: 'generated_id',

    },

    user_id: { type: 'int', label: 'user_id',

    },

    title: { type: 'string', label: 'title',

    },

    client_id: { type: 'int', label: 'client_id',

    },

    provider_id: { type: 'int', label: 'provider_id',

    },

    attendees: { type: 'string', label: 'attendees',

    },

    start_date_time: { type: 'datetime', label: 'start_date_time',

    },

    end_date_time: { type: 'datetime', label: 'end_date_time',

    },

    location: { type: 'string', label: 'location',

    },

    note: { type: 'string', label: 'note',

    },

    recurrence: { type: 'int', label: 'recurrence',

    },

    recurrence_occurrences: { type: 'int', label: 'recurrence_occurrences',

    },

    recurrence_pattern: { type: 'string', label: 'recurrence_pattern',

    },

    status: { type: 'int', label: 'status',

    },

    2=confirmed: { type: 'string', label: '2=confirmed',

    },

    3=finished: { type: 'string', label: '3=finished',

    },

    4=canceled: { type: 'string', label: '4=canceled',

    },

    send_confirmation: { type: 'int', label: 'send_confirmation',

    },

}

export default vips__appointmentFields;
