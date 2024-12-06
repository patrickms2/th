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
 * Schema for vips__timesheets entity
 */
// @ts-ignore
export const vips__timesheetsSchema = TypeBox.Type.Object({
    id: TypeBox.Type.String({ format: 'uuid' }),

        project_id: TypeBox.Type.Number({ default: 0 }),

        module_id: TypeBox.Type.Number({ default: 0 }),

        module_related_id: TypeBox.Type.Number({ default: 0 }),

        start_time: TypeBox.Type.String({ format: 'date-time' }),

        end_time: TypeBox.Type.String({ format: 'date-time' }),

        decimal_time: TypeBox.Type.Number({ default: 0 }),

        hour_time: TypeBox.Type.String({ default: '' }),

        note: TypeBox.Type.String({ default: '' }),

        created_user_id: TypeBox.Type.Number({ default: 0 }),

}, { additionalProperties: false });

/**
 * Input type for editing and creating vips__timesheets
 */
// @ts-ignore
export const vips__timesheetsInputSchema = TypeBox.Type.Object({

        project_id: TypeBox.Type.Number({ default: 0 }),

        module_id: TypeBox.Type.Number({ default: 0 }),

        module_related_id: TypeBox.Type.Number({ default: 0 }),

        start_time: TypeBox.Type.String({ format: 'date-time' }),

        end_time: TypeBox.Type.String({ format: 'date-time' }),

        decimal_time: TypeBox.Type.Number({ default: 0 }),

        hour_time: TypeBox.Type.String({ default: '' }),

        note: TypeBox.Type.String({ default: '' }),

        created_user_id: TypeBox.Type.Number({ default: 0 }),

}, { additionalProperties: false });

export type Vips__timesheetsInput = TypeBox.Static<typeof vips__timesheetsInputSchema>;

@Entity()
// @ts-ignore
export class Vips__timesheets implements Omit<TypeBox.Static<typeof vips__timesheetsSchema>, 'start_time' | 'end_time'> {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @DeleteDateColumn()
    deletedAt?: Date;

        @Column({ type: 'integer', default: 0 })
        project_id!: number;

        @Column({ type: 'integer', default: 0 })
        module_id!: number;

        @Column({ type: 'integer', default: 0 })
        module_related_id!: number;

        @Column({ type: 'datetime', nullable: true })
        start_time?: Date;

        @Column({ type: 'datetime', nullable: true })
        end_time?: Date;

        @Column({ type: 'decimal', default: 0 })
        decimal_time!: number;

        @Column({ default: '' })
        hour_time!: string;

        @Column({ default: '' })
        note!: string;

        @Column({ type: 'integer', default: 0 })
        created_user_id!: number;

}
