import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    DeleteDateColumn,
    CreateDateColumn,
    UpdateDateColumn,

} from 'typeorm';
import * as TypeBox from '@sinclair/typebox';

import { Nullable } from '../utils';

/**
 * Schema for vips__user_settings entity
 */
// @ts-ignore
export const vips__user_settingsSchema = TypeBox.Type.Object({
    id: TypeBox.Type.String({ format: 'uuid' }),

        company_name: TypeBox.Type.String({ default: '' }),

        company_legal_name: TypeBox.Type.String({ default: '' }),

        company_short_name: TypeBox.Type.String({ default: '' }),

        contact_person: TypeBox.Type.String({ default: '' }),

        company_address: TypeBox.Type.String({ default: '' }),

        company_country: TypeBox.Type.Number({ default: 0 }),

        company_city: TypeBox.Type.String({ default: '' }),

        company_zipcode: TypeBox.Type.String({ default: '' }),

        company_phone: TypeBox.Type.String({ default: '' }),

        company_email: TypeBox.Type.String({ default: '' }),

        company_website: TypeBox.Type.String({ default: '' }),

        company_from_email: TypeBox.Type.String({ default: '' }),

        post_mark: TypeBox.Type.Number({ default: 0 }),

        smtp_protocol: TypeBox.Type.String({ default: '' }),

        smtp_host: TypeBox.Type.String({ default: '' }),

        smtp_user: TypeBox.Type.String({ default: '' }),

        smtp_password: TypeBox.Type.String({ default: '' }),

        smtp_port: TypeBox.Type.String({ default: '' }),

        smtp_encryption: TypeBox.Type.String({ default: '' }),

        mail_from_name: TypeBox.Type.String({ default: '' }),

        sparkpost_secret: TypeBox.Type.String({ default: '' }),

        mailgun_domain: TypeBox.Type.String({ default: '' }),

        mailgun_secret: TypeBox.Type.String({ default: '' }),

        mandrill_secret: TypeBox.Type.String({ default: '' }),

        is_announcement_notification: TypeBox.Type.Number({ default: 0 }),

        is_team_notification: TypeBox.Type.Number({ default: 0 }),

        active_cronjob: TypeBox.Type.Number({ default: 0 }),

        automatic_backup: TypeBox.Type.Number({ default: 0 }),

        daily_report_emails: TypeBox.Type.String({ default: '' }),

        last_autobackup: TypeBox.Type.String({ default: '' }),

        cronjob_link: TypeBox.Type.String({ default: '' }),

        last_cronjob_run: TypeBox.Type.String({ default: '' }),

        reminder_alert_before_hours: TypeBox.Type.String({ default: '' }),

        12: TypeBox.Type.String({ default: '' }),

        24: TypeBox.Type.Number({ default: 0 }),

        reminder_alert_before_days: TypeBox.Type.String({ default: '' }),

        2: TypeBox.Type.String({ default: '' }),

        3: TypeBox.Type.String({ default: '' }),

        task: TypeBox.Type.String({ default: '' }),

        defect: TypeBox.Type.String({ default: '' }),

        login_background: TypeBox.Type.String({ default: '' }),

        company_logo: TypeBox.Type.String({ default: '' }),

        company_sidebar_logo: TypeBox.Type.String({ default: '' }),

        sidebar_background_images: TypeBox.Type.String({ default: '' }),

        default_language: TypeBox.Type.String({ default: '' }),

        default_locale: TypeBox.Type.String({ default: '' }),

        timezone: TypeBox.Type.String({ default: '' }),

        tables_pagination_limit: TypeBox.Type.Number({ default: 0 }),

        date_format: TypeBox.Type.String({ default: '' }),

        time_format: TypeBox.Type.String({ default: '' }),

        date_time_format: TypeBox.Type.String({ default: '' }),

        php_date_format: TypeBox.Type.String({ default: '' }),

        php_time_format: TypeBox.Type.String({ default: '' }),

        php_date_time_format: TypeBox.Type.String({ default: '' }),

        currency_id: TypeBox.Type.Number({ default: 0 }),

        purchase_key: TypeBox.Type.String({ default: '' }),

        unique_coder: TypeBox.Type.String({ default: '' }),

        update_url: TypeBox.Type.String({ default: '' }),

        is_collapsed_menu: TypeBox.Type.Number({ default: 0 }),

        is_sidebar_background: TypeBox.Type.Number({ default: 0 }),

        theme_layout: TypeBox.Type.String({ default: '' }),

        sidebar_bg_color: TypeBox.Type.String({ default: '' }),

        sidebar_transparent_bg_image: TypeBox.Type.String({ default: '' }),

        sidebar_bg_custom_color: TypeBox.Type.String({ default: '' }),

        sidebar_font_color: TypeBox.Type.String({ default: '' }),

        sidebar_width: TypeBox.Type.String({ default: '' }),

        sidebar_bg_image: TypeBox.Type.Number({ default: 0 }),

        product_version: TypeBox.Type.String({ default: '' }),

        is_demo: TypeBox.Type.Number({ default: 0 }),

        allowed_for_registration: TypeBox.Type.Number({ default: 0 }),

}, { additionalProperties: false });

/**
 * Input type for editing and creating vips__user_settings
 */
// @ts-ignore
export const vips__user_settingsInputSchema = TypeBox.Type.Object({

        company_name: TypeBox.Type.String({ default: '' }),

        company_legal_name: TypeBox.Type.String({ default: '' }),

        company_short_name: TypeBox.Type.String({ default: '' }),

        contact_person: TypeBox.Type.String({ default: '' }),

        company_address: TypeBox.Type.String({ default: '' }),

        company_country: TypeBox.Type.Number({ default: 0 }),

        company_city: TypeBox.Type.String({ default: '' }),

        company_zipcode: TypeBox.Type.String({ default: '' }),

        company_phone: TypeBox.Type.String({ default: '' }),

        company_email: TypeBox.Type.String({ default: '' }),

        company_website: TypeBox.Type.String({ default: '' }),

        company_from_email: TypeBox.Type.String({ default: '' }),

        post_mark: TypeBox.Type.Number({ default: 0 }),

        smtp_protocol: TypeBox.Type.String({ default: '' }),

        smtp_host: TypeBox.Type.String({ default: '' }),

        smtp_user: TypeBox.Type.String({ default: '' }),

        smtp_password: TypeBox.Type.String({ default: '' }),

        smtp_port: TypeBox.Type.String({ default: '' }),

        smtp_encryption: TypeBox.Type.String({ default: '' }),

        mail_from_name: TypeBox.Type.String({ default: '' }),

        sparkpost_secret: TypeBox.Type.String({ default: '' }),

        mailgun_domain: TypeBox.Type.String({ default: '' }),

        mailgun_secret: TypeBox.Type.String({ default: '' }),

        mandrill_secret: TypeBox.Type.String({ default: '' }),

        is_announcement_notification: TypeBox.Type.Number({ default: 0 }),

        is_team_notification: TypeBox.Type.Number({ default: 0 }),

        active_cronjob: TypeBox.Type.Number({ default: 0 }),

        automatic_backup: TypeBox.Type.Number({ default: 0 }),

        daily_report_emails: TypeBox.Type.String({ default: '' }),

        last_autobackup: TypeBox.Type.String({ default: '' }),

        cronjob_link: TypeBox.Type.String({ default: '' }),

        last_cronjob_run: TypeBox.Type.String({ default: '' }),

        reminder_alert_before_hours: TypeBox.Type.String({ default: '' }),

        12: TypeBox.Type.String({ default: '' }),

        24: TypeBox.Type.Number({ default: 0 }),

        reminder_alert_before_days: TypeBox.Type.String({ default: '' }),

        2: TypeBox.Type.String({ default: '' }),

        3: TypeBox.Type.String({ default: '' }),

        task: TypeBox.Type.String({ default: '' }),

        defect: TypeBox.Type.String({ default: '' }),

        login_background: TypeBox.Type.String({ default: '' }),

        company_logo: TypeBox.Type.String({ default: '' }),

        company_sidebar_logo: TypeBox.Type.String({ default: '' }),

        sidebar_background_images: TypeBox.Type.String({ default: '' }),

        default_language: TypeBox.Type.String({ default: '' }),

        default_locale: TypeBox.Type.String({ default: '' }),

        timezone: TypeBox.Type.String({ default: '' }),

        tables_pagination_limit: TypeBox.Type.Number({ default: 0 }),

        date_format: TypeBox.Type.String({ default: '' }),

        time_format: TypeBox.Type.String({ default: '' }),

        date_time_format: TypeBox.Type.String({ default: '' }),

        php_date_format: TypeBox.Type.String({ default: '' }),

        php_time_format: TypeBox.Type.String({ default: '' }),

        php_date_time_format: TypeBox.Type.String({ default: '' }),

        currency_id: TypeBox.Type.Number({ default: 0 }),

        purchase_key: TypeBox.Type.String({ default: '' }),

        unique_coder: TypeBox.Type.String({ default: '' }),

        update_url: TypeBox.Type.String({ default: '' }),

        is_collapsed_menu: TypeBox.Type.Number({ default: 0 }),

        is_sidebar_background: TypeBox.Type.Number({ default: 0 }),

        theme_layout: TypeBox.Type.String({ default: '' }),

        sidebar_bg_color: TypeBox.Type.String({ default: '' }),

        sidebar_transparent_bg_image: TypeBox.Type.String({ default: '' }),

        sidebar_bg_custom_color: TypeBox.Type.String({ default: '' }),

        sidebar_font_color: TypeBox.Type.String({ default: '' }),

        sidebar_width: TypeBox.Type.String({ default: '' }),

        sidebar_bg_image: TypeBox.Type.Number({ default: 0 }),

        product_version: TypeBox.Type.String({ default: '' }),

        is_demo: TypeBox.Type.Number({ default: 0 }),

        allowed_for_registration: TypeBox.Type.Number({ default: 0 }),

}, { additionalProperties: false });

export type Vips__user_settingsInput = TypeBox.Static<typeof vips__user_settingsInputSchema>;

@Entity()
// @ts-ignore
export class Vips__user_settings implements TypeBox.Static<typeof vips__user_settingsSchema> {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @DeleteDateColumn()
    deletedAt?: Date;

        @Column({ default: '' })
        company_name!: string;

        @Column({ default: '' })
        company_legal_name!: string;

        @Column({ default: '' })
        company_short_name!: string;

        @Column({ default: '' })
        contact_person!: string;

        @Column({ default: '' })
        company_address!: string;

        @Column({ type: 'integer', default: 0 })
        company_country!: number;

        @Column({ default: '' })
        company_city!: string;

        @Column({ default: '' })
        company_zipcode!: string;

        @Column({ default: '' })
        company_phone!: string;

        @Column({ default: '' })
        company_email!: string;

        @Column({ default: '' })
        company_website!: string;

        @Column({ default: '' })
        company_from_email!: string;

        @Column({ type: 'integer', default: 0 })
        post_mark!: number;

        @Column({ default: '' })
        smtp_protocol!: string;

        @Column({ default: '' })
        smtp_host!: string;

        @Column({ default: '' })
        smtp_user!: string;

        @Column({ default: '' })
        smtp_password!: string;

        @Column({ default: '' })
        smtp_port!: string;

        @Column({ default: '' })
        smtp_encryption!: string;

        @Column({ default: '' })
        mail_from_name!: string;

        @Column({ default: '' })
        sparkpost_secret!: string;

        @Column({ default: '' })
        mailgun_domain!: string;

        @Column({ default: '' })
        mailgun_secret!: string;

        @Column({ default: '' })
        mandrill_secret!: string;

        @Column({ type: 'integer', default: 0 })
        is_announcement_notification!: number;

        @Column({ type: 'integer', default: 0 })
        is_team_notification!: number;

        @Column({ type: 'integer', default: 0 })
        active_cronjob!: number;

        @Column({ type: 'integer', default: 0 })
        automatic_backup!: number;

        @Column({ default: '' })
        daily_report_emails!: string;

        @Column({ default: '' })
        last_autobackup!: string;

        @Column({ default: '' })
        cronjob_link!: string;

        @Column({ default: '' })
        last_cronjob_run!: string;

        @Column({ default: '' })
        reminder_alert_before_hours!: string;

        @Column({ default: '' })
        12!: string;

        @Column({ type: 'integer', default: 0 })
        24!: number;

        @Column({ default: '' })
        reminder_alert_before_days!: string;

        @Column({ default: '' })
        2!: string;

        @Column({ default: '' })
        3!: string;

        @Column({ default: '' })
        task!: string;

        @Column({ default: '' })
        defect!: string;

        @Column({ default: '' })
        login_background!: string;

        @Column({ default: '' })
        company_logo!: string;

        @Column({ default: '' })
        company_sidebar_logo!: string;

        @Column({ default: '' })
        sidebar_background_images!: string;

        @Column({ default: '' })
        default_language!: string;

        @Column({ default: '' })
        default_locale!: string;

        @Column({ default: '' })
        timezone!: string;

        @Column({ type: 'integer', default: 0 })
        tables_pagination_limit!: number;

        @Column({ default: '' })
        date_format!: string;

        @Column({ default: '' })
        time_format!: string;

        @Column({ default: '' })
        date_time_format!: string;

        @Column({ default: '' })
        php_date_format!: string;

        @Column({ default: '' })
        php_time_format!: string;

        @Column({ default: '' })
        php_date_time_format!: string;

        @Column({ type: 'integer', default: 0 })
        currency_id!: number;

        @Column({ default: '' })
        purchase_key!: string;

        @Column({ default: '' })
        unique_coder!: string;

        @Column({ default: '' })
        update_url!: string;

        @Column({ type: 'integer', default: 0 })
        is_collapsed_menu!: number;

        @Column({ type: 'integer', default: 0 })
        is_sidebar_background!: number;

        @Column({ default: '' })
        theme_layout!: string;

        @Column({ default: '' })
        sidebar_bg_color!: string;

        @Column({ default: '' })
        sidebar_transparent_bg_image!: string;

        @Column({ default: '' })
        sidebar_bg_custom_color!: string;

        @Column({ default: '' })
        sidebar_font_color!: string;

        @Column({ default: '' })
        sidebar_width!: string;

        @Column({ type: 'integer', default: 0 })
        sidebar_bg_image!: number;

        @Column({ default: '' })
        product_version!: string;

        @Column({ type: 'integer', default: 0 })
        is_demo!: number;

        @Column({ type: 'integer', default: 0 })
        allowed_for_registration!: number;

}
