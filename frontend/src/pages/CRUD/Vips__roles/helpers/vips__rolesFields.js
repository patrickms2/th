
const vips__rolesFields = {
	id: { type: 'id', label: 'ID' },

    name: { type: 'string', label: 'name',

    },

    slug: { type: 'string', label: 'slug',

    },

    description: { type: 'string', label: 'description',

    },

    status: { type: 'enum', label: 'status',

    options: [

    { value: '1', label: '1' },

    { value: '0', label: '0' },

]

    },

    0=inactive: { type: 'string', label: '0=inactive',

    },

}

export default vips__rolesFields;
