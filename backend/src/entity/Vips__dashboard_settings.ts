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
 * Schema for vips__dashboard_settings entity
 */
// @ts-ignore
export const vips__dashboard_settingsSchema = TypeBox.Type.Object({
    id: TypeBox.Type.String({ format: 'uuid' }),

        is_projects_widget: TypeBox.Type.Number({ default: 0 }),

        is_tasks_widget: TypeBox.Type.Number({ default: 0 }),

        is_defects_widget: TypeBox.Type.Number({ default: 0 }),

        is_incidents_widget: TypeBox.Type.Number({ default: 0 }),

        is_estimates_widget: TypeBox.Type.Number({ default: 0 }),

        is_invoices_widget: TypeBox.Type.Number({ default: 0 }),

        is_payments_widget: TypeBox.Type.Number({ default: 0 }),

        is_leaves_widget: TypeBox.Type.Number({ default: 0 }),

        is_users_widget: TypeBox.Type.Number({ default: 0 }),

        is_clients_widget: TypeBox.Type.Number({ default: 0 }),

        is_teams_widget: TypeBox.Type.Number({ default: 0 }),

        is_articles_widget: TypeBox.Type.Number({ default: 0 }),

        is_projects_status_chart: TypeBox.Type.Number({ default: 0 }),

        is_tasks_status_chart: TypeBox.Type.Number({ default: 0 }),

        is_monthly_report_chart: TypeBox.Type.Number({ default: 0 }),

        is_projects_list: TypeBox.Type.Number({ default: 0 }),

        is_tasks_list: TypeBox.Type.Number({ default: 0 }),

        is_defects_list: TypeBox.Type.Number({ default: 0 }),

        is_incidents_list: TypeBox.Type.Number({ default: 0 }),

        is_estimates_list: TypeBox.Type.Number({ default: 0 }),

        is_invoices_list: TypeBox.Type.Number({ default: 0 }),

        is_todos_list: TypeBox.Type.Number({ default: 0 }),

        is_activities_list: TypeBox.Type.Number({ default: 0 }),

        is_meetings_list: TypeBox.Type.Number({ default: 0 }),

        is_announcement_list: TypeBox.Type.Number({ default: 0 }),

}, { additionalProperties: false });

/**
 * Input type for editing and creating vips__dashboard_settings
 */
// @ts-ignore
export const vips__dashboard_settingsInputSchema = TypeBox.Type.Object({

        is_projects_widget: TypeBox.Type.Number({ default: 0 }),

        is_tasks_widget: TypeBox.Type.Number({ default: 0 }),

        is_defects_widget: TypeBox.Type.Number({ default: 0 }),

        is_incidents_widget: TypeBox.Type.Number({ default: 0 }),

        is_estimates_widget: TypeBox.Type.Number({ default: 0 }),

        is_invoices_widget: TypeBox.Type.Number({ default: 0 }),

        is_payments_widget: TypeBox.Type.Number({ default: 0 }),

        is_leaves_widget: TypeBox.Type.Number({ default: 0 }),

        is_users_widget: TypeBox.Type.Number({ default: 0 }),

        is_clients_widget: TypeBox.Type.Number({ default: 0 }),

        is_teams_widget: TypeBox.Type.Number({ default: 0 }),

        is_articles_widget: TypeBox.Type.Number({ default: 0 }),

        is_projects_status_chart: TypeBox.Type.Number({ default: 0 }),

        is_tasks_status_chart: TypeBox.Type.Number({ default: 0 }),

        is_monthly_report_chart: TypeBox.Type.Number({ default: 0 }),

        is_projects_list: TypeBox.Type.Number({ default: 0 }),

        is_tasks_list: TypeBox.Type.Number({ default: 0 }),

        is_defects_list: TypeBox.Type.Number({ default: 0 }),

        is_incidents_list: TypeBox.Type.Number({ default: 0 }),

        is_estimates_list: TypeBox.Type.Number({ default: 0 }),

        is_invoices_list: TypeBox.Type.Number({ default: 0 }),

        is_todos_list: TypeBox.Type.Number({ default: 0 }),

        is_activities_list: TypeBox.Type.Number({ default: 0 }),

        is_meetings_list: TypeBox.Type.Number({ default: 0 }),

        is_announcement_list: TypeBox.Type.Number({ default: 0 }),

}, { additionalProperties: false });

export type Vips__dashboard_settingsInput = TypeBox.Static<typeof vips__dashboard_settingsInputSchema>;

@Entity()
// @ts-ignore
export class Vips__dashboard_settings implements TypeBox.Static<typeof vips__dashboard_settingsSchema> {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @DeleteDateColumn()
    deletedAt?: Date;

        @Column({ type: 'integer', default: 0 })
        is_projects_widget!: number;

        @Column({ type: 'integer', default: 0 })
        is_tasks_widget!: number;

        @Column({ type: 'integer', default: 0 })
        is_defects_widget!: number;

        @Column({ type: 'integer', default: 0 })
        is_incidents_widget!: number;

        @Column({ type: 'integer', default: 0 })
        is_estimates_widget!: number;

        @Column({ type: 'integer', default: 0 })
        is_invoices_widget!: number;

        @Column({ type: 'integer', default: 0 })
        is_payments_widget!: number;

        @Column({ type: 'integer', default: 0 })
        is_leaves_widget!: number;

        @Column({ type: 'integer', default: 0 })
        is_users_widget!: number;

        @Column({ type: 'integer', default: 0 })
        is_clients_widget!: number;

        @Column({ type: 'integer', default: 0 })
        is_teams_widget!: number;

        @Column({ type: 'integer', default: 0 })
        is_articles_widget!: number;

        @Column({ type: 'integer', default: 0 })
        is_projects_status_chart!: number;

        @Column({ type: 'integer', default: 0 })
        is_tasks_status_chart!: number;

        @Column({ type: 'integer', default: 0 })
        is_monthly_report_chart!: number;

        @Column({ type: 'integer', default: 0 })
        is_projects_list!: number;

        @Column({ type: 'integer', default: 0 })
        is_tasks_list!: number;

        @Column({ type: 'integer', default: 0 })
        is_defects_list!: number;

        @Column({ type: 'integer', default: 0 })
        is_incidents_list!: number;

        @Column({ type: 'integer', default: 0 })
        is_estimates_list!: number;

        @Column({ type: 'integer', default: 0 })
        is_invoices_list!: number;

        @Column({ type: 'integer', default: 0 })
        is_todos_list!: number;

        @Column({ type: 'integer', default: 0 })
        is_activities_list!: number;

        @Column({ type: 'integer', default: 0 })
        is_meetings_list!: number;

        @Column({ type: 'integer', default: 0 })
        is_announcement_list!: number;

}
