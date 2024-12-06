import { SelectQueryBuilder } from 'typeorm';

export type EntityQuery<T> = {
    [K in keyof T]?: T[K];
};

/**
 * Applies filter query for any entity query builder
 */

export function applyFilters<T>(qb: SelectQueryBuilder<T>, query?: any) {

    let { company_name } = query;

    if(company_name){
        qb.where("e.company_name like :name", { name:  `%${company_name}%` });
    }
    let { company_legal_name } = query;

    if(company_legal_name){
        qb.where("e.company_legal_name like :name", { name:  `%${company_legal_name}%` });
    }
    let { company_short_name } = query;

    if(company_short_name){
        qb.where("e.company_short_name like :name", { name:  `%${company_short_name}%` });
    }
    let { contact_person } = query;

    if(contact_person){
        qb.where("e.contact_person like :name", { name:  `%${contact_person}%` });
    }
    let { company_address } = query;

    if(company_address){
        qb.where("e.company_address like :name", { name:  `%${company_address}%` });
    }
    let { company_city } = query;

    if(company_city){
        qb.where("e.company_city like :name", { name:  `%${company_city}%` });
    }
    let { company_zipcode } = query;

    if(company_zipcode){
        qb.where("e.company_zipcode like :name", { name:  `%${company_zipcode}%` });
    }
    let { company_phone } = query;

    if(company_phone){
        qb.where("e.company_phone like :name", { name:  `%${company_phone}%` });
    }
    let { company_email } = query;

    if(company_email){
        qb.where("e.company_email like :name", { name:  `%${company_email}%` });
    }
    let { company_website } = query;

    if(company_website){
        qb.where("e.company_website like :name", { name:  `%${company_website}%` });
    }
    let { company_from_email } = query;

    if(company_from_email){
        qb.where("e.company_from_email like :name", { name:  `%${company_from_email}%` });
    }
    let { smtp_protocol } = query;

    if(smtp_protocol){
        qb.where("e.smtp_protocol like :name", { name:  `%${smtp_protocol}%` });
    }
    let { smtp_host } = query;

    if(smtp_host){
        qb.where("e.smtp_host like :name", { name:  `%${smtp_host}%` });
    }
    let { smtp_user } = query;

    if(smtp_user){
        qb.where("e.smtp_user like :name", { name:  `%${smtp_user}%` });
    }
    let { smtp_password } = query;

    if(smtp_password){
        qb.where("e.smtp_password like :name", { name:  `%${smtp_password}%` });
    }
    let { smtp_port } = query;

    if(smtp_port){
        qb.where("e.smtp_port like :name", { name:  `%${smtp_port}%` });
    }
    let { smtp_encryption } = query;

    if(smtp_encryption){
        qb.where("e.smtp_encryption like :name", { name:  `%${smtp_encryption}%` });
    }
    let { mail_from_name } = query;

    if(mail_from_name){
        qb.where("e.mail_from_name like :name", { name:  `%${mail_from_name}%` });
    }
    let { sparkpost_secret } = query;

    if(sparkpost_secret){
        qb.where("e.sparkpost_secret like :name", { name:  `%${sparkpost_secret}%` });
    }
    let { mailgun_domain } = query;

    if(mailgun_domain){
        qb.where("e.mailgun_domain like :name", { name:  `%${mailgun_domain}%` });
    }
    let { mailgun_secret } = query;

    if(mailgun_secret){
        qb.where("e.mailgun_secret like :name", { name:  `%${mailgun_secret}%` });
    }
    let { mandrill_secret } = query;

    if(mandrill_secret){
        qb.where("e.mandrill_secret like :name", { name:  `%${mandrill_secret}%` });
    }
    let { daily_report_emails } = query;

    if(daily_report_emails){
        qb.where("e.daily_report_emails like :name", { name:  `%${daily_report_emails}%` });
    }
    let { last_autobackup } = query;

    if(last_autobackup){
        qb.where("e.last_autobackup like :name", { name:  `%${last_autobackup}%` });
    }
    let { cronjob_link } = query;

    if(cronjob_link){
        qb.where("e.cronjob_link like :name", { name:  `%${cronjob_link}%` });
    }
    let { last_cronjob_run } = query;

    if(last_cronjob_run){
        qb.where("e.last_cronjob_run like :name", { name:  `%${last_cronjob_run}%` });
    }
    let { reminder_alert_before_hours } = query;

    if(reminder_alert_before_hours){
        qb.where("e.reminder_alert_before_hours like :name", { name:  `%${reminder_alert_before_hours}%` });
    }
    let { 12 } = query;

    if(12){
        qb.where("e.12 like :name", { name:  `%${12}%` });
    }
    let { reminder_alert_before_days } = query;

    if(reminder_alert_before_days){
        qb.where("e.reminder_alert_before_days like :name", { name:  `%${reminder_alert_before_days}%` });
    }
    let { 2 } = query;

    if(2){
        qb.where("e.2 like :name", { name:  `%${2}%` });
    }
    let { 3 } = query;

    if(3){
        qb.where("e.3 like :name", { name:  `%${3}%` });
    }
    let { task } = query;

    if(task){
        qb.where("e.task like :name", { name:  `%${task}%` });
    }
    let { defect } = query;

    if(defect){
        qb.where("e.defect like :name", { name:  `%${defect}%` });
    }
    let { login_background } = query;

    if(login_background){
        qb.where("e.login_background like :name", { name:  `%${login_background}%` });
    }
    let { company_logo } = query;

    if(company_logo){
        qb.where("e.company_logo like :name", { name:  `%${company_logo}%` });
    }
    let { company_sidebar_logo } = query;

    if(company_sidebar_logo){
        qb.where("e.company_sidebar_logo like :name", { name:  `%${company_sidebar_logo}%` });
    }
    let { sidebar_background_images } = query;

    if(sidebar_background_images){
        qb.where("e.sidebar_background_images like :name", { name:  `%${sidebar_background_images}%` });
    }
    let { default_language } = query;

    if(default_language){
        qb.where("e.default_language like :name", { name:  `%${default_language}%` });
    }
    let { default_locale } = query;

    if(default_locale){
        qb.where("e.default_locale like :name", { name:  `%${default_locale}%` });
    }
    let { timezone } = query;

    if(timezone){
        qb.where("e.timezone like :name", { name:  `%${timezone}%` });
    }
    let { date_format } = query;

    if(date_format){
        qb.where("e.date_format like :name", { name:  `%${date_format}%` });
    }
    let { time_format } = query;

    if(time_format){
        qb.where("e.time_format like :name", { name:  `%${time_format}%` });
    }
    let { date_time_format } = query;

    if(date_time_format){
        qb.where("e.date_time_format like :name", { name:  `%${date_time_format}%` });
    }
    let { php_date_format } = query;

    if(php_date_format){
        qb.where("e.php_date_format like :name", { name:  `%${php_date_format}%` });
    }
    let { php_time_format } = query;

    if(php_time_format){
        qb.where("e.php_time_format like :name", { name:  `%${php_time_format}%` });
    }
    let { php_date_time_format } = query;

    if(php_date_time_format){
        qb.where("e.php_date_time_format like :name", { name:  `%${php_date_time_format}%` });
    }
    let { purchase_key } = query;

    if(purchase_key){
        qb.where("e.purchase_key like :name", { name:  `%${purchase_key}%` });
    }
    let { unique_coder } = query;

    if(unique_coder){
        qb.where("e.unique_coder like :name", { name:  `%${unique_coder}%` });
    }
    let { update_url } = query;

    if(update_url){
        qb.where("e.update_url like :name", { name:  `%${update_url}%` });
    }
    let { theme_layout } = query;

    if(theme_layout){
        qb.where("e.theme_layout like :name", { name:  `%${theme_layout}%` });
    }
    let { sidebar_bg_color } = query;

    if(sidebar_bg_color){
        qb.where("e.sidebar_bg_color like :name", { name:  `%${sidebar_bg_color}%` });
    }
    let { sidebar_transparent_bg_image } = query;

    if(sidebar_transparent_bg_image){
        qb.where("e.sidebar_transparent_bg_image like :name", { name:  `%${sidebar_transparent_bg_image}%` });
    }
    let { sidebar_bg_custom_color } = query;

    if(sidebar_bg_custom_color){
        qb.where("e.sidebar_bg_custom_color like :name", { name:  `%${sidebar_bg_custom_color}%` });
    }
    let { sidebar_font_color } = query;

    if(sidebar_font_color){
        qb.where("e.sidebar_font_color like :name", { name:  `%${sidebar_font_color}%` });
    }
    let { sidebar_width } = query;

    if(sidebar_width){
        qb.where("e.sidebar_width like :name", { name:  `%${sidebar_width}%` });
    }
    let { product_version } = query;

    if(product_version){
        qb.where("e.product_version like :name", { name:  `%${product_version}%` });
    }
    return qb;
}
