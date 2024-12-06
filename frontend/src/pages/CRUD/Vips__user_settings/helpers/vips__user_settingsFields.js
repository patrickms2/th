const vips__user_settingsFields = {
  id: { type: 'id', label: 'ID' },

  company_name: { type: 'string', label: 'company_name' },

  company_legal_name: { type: 'string', label: 'company_legal_name' },

  company_short_name: { type: 'string', label: 'company_short_name' },

  contact_person: { type: 'string', label: 'contact_person' },

  company_address: { type: 'string', label: 'company_address' },

  company_country: { type: 'int', label: 'company_country' },

  company_city: { type: 'string', label: 'company_city' },

  company_zipcode: { type: 'string', label: 'company_zipcode' },

  company_phone: { type: 'string', label: 'company_phone' },

  company_email: { type: 'string', label: 'company_email' },

  company_website: { type: 'string', label: 'company_website' },

  company_from_email: { type: 'string', label: 'company_from_email' },

  post_mark: { type: 'int', label: 'post_mark' },

  smtp_protocol: { type: 'string', label: 'smtp_protocol' },

  smtp_host: { type: 'string', label: 'smtp_host' },

  smtp_user: { type: 'string', label: 'smtp_user' },

  smtp_password: { type: 'string', label: 'smtp_password' },

  smtp_port: { type: 'string', label: 'smtp_port' },

  smtp_encryption: { type: 'string', label: 'smtp_encryption' },

  mail_from_name: { type: 'string', label: 'mail_from_name' },

  sparkpost_secret: { type: 'string', label: 'sparkpost_secret' },

  mailgun_domain: { type: 'string', label: 'mailgun_domain' },

  mailgun_secret: { type: 'string', label: 'mailgun_secret' },

  mandrill_secret: { type: 'string', label: 'mandrill_secret' },

  is_announcement_notification: {
    type: 'int',
    label: 'is_announcement_notification',
  },

  is_team_notification: { type: 'int', label: 'is_team_notification' },

  active_cronjob: { type: 'int', label: 'active_cronjob' },

  automatic_backup: { type: 'int', label: 'automatic_backup' },

  daily_report_emails: { type: 'string', label: 'daily_report_emails' },

  last_autobackup: { type: 'string', label: 'last_autobackup' },

  cronjob_link: { type: 'string', label: 'cronjob_link' },

  last_cronjob_run: { type: 'string', label: 'last_cronjob_run' },

  reminder_alert_before_hours: {
    type: 'string',
    label: 'reminder_alert_before_hours',
  },

  12: { type: 'string', label: '12' },

  24: { type: 'int', label: '24' },

  reminder_alert_before_days: {
    type: 'string',
    label: 'reminder_alert_before_days',
  },

  2: { type: 'string', label: '2' },

  3: { type: 'string', label: '3' },

  task: { type: 'string', label: 'task' },

  defect: { type: 'string', label: 'defect' },

  login_background: { type: 'string', label: 'login_background' },

  company_logo: { type: 'string', label: 'company_logo' },

  company_sidebar_logo: { type: 'string', label: 'company_sidebar_logo' },

  sidebar_background_images: {
    type: 'string',
    label: 'sidebar_background_images',
  },

  default_language: { type: 'string', label: 'default_language' },

  default_locale: { type: 'string', label: 'default_locale' },

  timezone: { type: 'string', label: 'timezone' },

  tables_pagination_limit: { type: 'int', label: 'tables_pagination_limit' },

  date_format: { type: 'string', label: 'date_format' },

  time_format: { type: 'string', label: 'time_format' },

  date_time_format: { type: 'string', label: 'date_time_format' },

  php_date_format: { type: 'string', label: 'php_date_format' },

  php_time_format: { type: 'string', label: 'php_time_format' },

  php_date_time_format: { type: 'string', label: 'php_date_time_format' },

  currency_id: { type: 'int', label: 'currency_id' },

  purchase_key: { type: 'string', label: 'purchase_key' },

  unique_coder: { type: 'string', label: 'unique_coder' },

  update_url: { type: 'string', label: 'update_url' },

  is_collapsed_menu: { type: 'int', label: 'is_collapsed_menu' },

  is_sidebar_background: { type: 'int', label: 'is_sidebar_background' },

  theme_layout: { type: 'string', label: 'theme_layout' },

  sidebar_bg_color: { type: 'string', label: 'sidebar_bg_color' },

  sidebar_transparent_bg_image: {
    type: 'string',
    label: 'sidebar_transparent_bg_image',
  },

  sidebar_bg_custom_color: { type: 'string', label: 'sidebar_bg_custom_color' },

  sidebar_font_color: { type: 'string', label: 'sidebar_font_color' },

  sidebar_width: { type: 'string', label: 'sidebar_width' },

  sidebar_bg_image: { type: 'int', label: 'sidebar_bg_image' },

  product_version: { type: 'string', label: 'product_version' },

  is_demo: { type: 'int', label: 'is_demo' },

  allowed_for_registration: { type: 'int', label: 'allowed_for_registration' },
};

export default vips__user_settingsFields;
