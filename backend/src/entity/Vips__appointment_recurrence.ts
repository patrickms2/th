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
 * Schema for vips__appointment_recurrence entity
 */
// @ts-ignore
export const vips__appointment_recurrenceSchema = TypeBox.Type.Object({
    id: TypeBox.Type.String({ format: 'uuid' }),

        appointment_id: TypeBox.Type.Number({ default: 0 }),

        start_date_time: TypeBox.Type.String({ format: 'date-time' }),

        end_date_time: TypeBox.Type.String({ format: 'date-time' }),

        status: TypeBox.Type.Number({ default: 0 }),

        2=confirmed: TypeBox.Type.String({ default: '' }),

        3=finished: TypeBox.Type.String({ default: '' }),

        4=canceled: TypeBox.Type.String({ default: '' }),

}, { additionalProperties: false });

/**
 * Input type for editing and creating vips__appointment_recurrence
 */
// @ts-ignore
export const vips__appointment_recurrenceInputSchema = TypeBox.Type.Object({

        appointment_id: TypeBox.Type.Number({ default: 0 }),

        start_date_time: TypeBox.Type.String({ format: 'date-time' }),

        end_date_time: TypeBox.Type.String({ format: 'date-time' }),

        status: TypeBox.Type.Number({ default: 0 }),

        2=confirmed: TypeBox.Type.String({ default: '' }),

        3=finished: TypeBox.Type.String({ default: '' }),

        4=canceled: TypeBox.Type.String({ default: '' }),

}, { additionalProperties: false });

export type Vips__appointment_recurrenceInput = TypeBox.Static<typeof vips__appointment_recurrenceInputSchema>;

@Entity()
// @ts-ignore
export class Vips__appointment_recurrence implements Omit<TypeBox.Static<typeof vips__appointment_recurrenceSchema>, 'start_date_time' | 'end_date_time'> {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @DeleteDateColumn()
    deletedAt?: Date;

        @Column({ type: 'integer', default: 0 })
        appointment_id!: number;

        @Column({ type: 'datetime', nullable: true })
        start_date_time?: Date;

        @Column({ type: 'datetime', nullable: true })
        end_date_time?: Date;

        @Column({ type: 'integer', default: 0 })
        status!: number;

        @Column({ default: '' })
        2=confirmed!: string;

        @Column({ default: '' })
        3=finished!: string;

        @Column({ default: '' })
        4=canceled!: string;

}
