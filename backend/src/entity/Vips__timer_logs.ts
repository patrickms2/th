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
 * Schema for vips__timer_logs entity
 */
// @ts-ignore
export const vips__timer_logsSchema = TypeBox.Type.Object({
    id: TypeBox.Type.String({ format: 'uuid' }),

        user_id: TypeBox.Type.Number({ default: 0 }),

        project_id: TypeBox.Type.Number({ default: 0 }),

        reference_id: TypeBox.Type.Number({ default: 0 }),

        is_task_timer: TypeBox.Type.Number({ default: 0 }),

        is_defect_timer: TypeBox.Type.Number({ default: 0 }),

        is_incident_timer: TypeBox.Type.Number({ default: 0 }),

        start_time: TypeBox.Type.String({ format: 'date-time' }),

}, { additionalProperties: false });

/**
 * Input type for editing and creating vips__timer_logs
 */
// @ts-ignore
export const vips__timer_logsInputSchema = TypeBox.Type.Object({

        user_id: TypeBox.Type.Number({ default: 0 }),

        project_id: TypeBox.Type.Number({ default: 0 }),

        reference_id: TypeBox.Type.Number({ default: 0 }),

        is_task_timer: TypeBox.Type.Number({ default: 0 }),

        is_defect_timer: TypeBox.Type.Number({ default: 0 }),

        is_incident_timer: TypeBox.Type.Number({ default: 0 }),

        start_time: TypeBox.Type.String({ format: 'date-time' }),

}, { additionalProperties: false });

export type Vips__timer_logsInput = TypeBox.Static<typeof vips__timer_logsInputSchema>;

@Entity()
// @ts-ignore
export class Vips__timer_logs implements Omit<TypeBox.Static<typeof vips__timer_logsSchema>, 'start_time'> {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @DeleteDateColumn()
    deletedAt?: Date;

        @Column({ type: 'integer', default: 0 })
        user_id!: number;

        @Column({ type: 'integer', default: 0 })
        project_id!: number;

        @Column({ type: 'integer', default: 0 })
        reference_id!: number;

        @Column({ type: 'integer', default: 0 })
        is_task_timer!: number;

        @Column({ type: 'integer', default: 0 })
        is_defect_timer!: number;

        @Column({ type: 'integer', default: 0 })
        is_incident_timer!: number;

        @Column({ type: 'datetime', nullable: true })
        start_time?: Date;

}
