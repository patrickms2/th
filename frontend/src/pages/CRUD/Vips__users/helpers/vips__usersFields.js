
const vips__usersFields = {
	id: { type: 'id', label: 'ID' },

    user_generated_id: { type: 'string', label: 'user_generated_id',

    },

    firstname: { type: 'string', label: 'firstname',

    },

    lastname: { type: 'string', label: 'lastname',

    },

    username: { type: 'string', label: 'username',

    },

    email: { type: 'string', label: 'email',

    },

    password: { type: 'string', label: 'password',

    },

    is_super_admin: { type: 'int', label: 'is_super_admin',

    },

    is_client: { type: 'int', label: 'is_client',

    },

    is_active: { type: 'int', label: 'is_active',

    },

    0=inactive: { type: 'string', label: '0=inactive',

    },

    email_verified: { type: 'enum', label: 'email_verified',

    options: [

    { value: '1', label: '1' },

    { value: '0', label: '0' },

]

    },

    0=unverified: { type: 'string', label: '0=unverified',

    },

    email_verification_code: { type: 'string', label: 'email_verification_code',

    },

    online_status: { type: 'int', label: 'online_status',

    },

    0=offline: { type: 'string', label: '0=offline',

    },

    avatar: { type: 'string', label: 'avatar',

    },

    last_ip: { type: 'string', label: 'last_ip',

    },

    last_login: { type: 'datetime', label: 'last_login',

    },

    emp_id: { type: 'string', label: 'emp_id',

    },

    city: { type: 'string', label: 'city',

    },

    state: { type: 'string', label: 'state',

    },

    country: { type: 'string', label: 'country',

    },

    postal_code: { type: 'string', label: 'postal_code',

    },

    language: { type: 'string', label: 'language',

    },

    address: { type: 'string', label: 'address',

    },

    phone: { type: 'string', label: 'phone',

    },

    mobile: { type: 'string', label: 'mobile',

    },

    skype: { type: 'string', label: 'skype',

    },

    joining_date: { type: 'date', label: 'joining_date',

    },

    gender: { type: 'string', label: 'gender',

    },

    dob: { type: 'date', label: 'dob',

    },

    maritial_status: { type: 'string', label: 'maritial_status',

    },

    father_name: { type: 'string', label: 'father_name',

    },

    mother_name: { type: 'string', label: 'mother_name',

    },

    permission: { type: 'string', label: 'permission',

    },

    can_view_all_users: { type: 'int', label: 'can_view_all_users',

    },

    primary_manager: { type: 'int', label: 'primary_manager',

    },

    secondary_manager: { type: 'int', label: 'secondary_manager',

    },

    remember_token: { type: 'string', label: 'remember_token',

    },

}

export default vips__usersFields;
