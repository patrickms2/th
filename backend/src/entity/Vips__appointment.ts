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
 * Schema for vips__appointment entity
 */
// @ts-ignore
export const vips__appointmentSchema = TypeBox.Type.Object({
    id: TypeBox.Type.String({ format: 'uuid' }),

        generated_id: TypeBox.Type.String({ default: '' }),

        user_id: TypeBox.Type.Number({ default: 0 }),

        title: TypeBox.Type.String({ default: '' }),

        client_id: TypeBox.Type.Number({ default: 0 }),

        provider_id: TypeBox.Type.Number({ default: 0 }),

        attendees: TypeBox.Type.String({ default: '' }),

        start_date_time: TypeBox.Type.String({ format: 'date-time' }),

        end_date_time: TypeBox.Type.String({ format: 'date-time' }),

        location: TypeBox.Type.String({ default: '' }),

        note: TypeBox.Type.String({ default: '' }),

        recurrence: TypeBox.Type.Number({ default: 0 }),

        recurrence_occurrences: TypeBox.Type.Number({ default: 0 }),

        recurrence_pattern: TypeBox.Type.String({ default: '' }),

        status: TypeBox.Type.Number({ default: 0 }),

        2=confirmed: TypeBox.Type.String({ default: '' }),

        3=finished: TypeBox.Type.String({ default: '' }),

        4=canceled: TypeBox.Type.String({ default: '' }),

        send_confirmation: TypeBox.Type.Number({ default: 0 }),

}, { additionalProperties: false });

/**
 * Input type for editing and creating vips__appointment
 */
// @ts-ignore
export const vips__appointmentInputSchema = TypeBox.Type.Object({

        generated_id: TypeBox.Type.String({ default: '' }),

        user_id: TypeBox.Type.Number({ default: 0 }),

        title: TypeBox.Type.String({ default: '' }),

        client_id: TypeBox.Type.Number({ default: 0 }),

        provider_id: TypeBox.Type.Number({ default: 0 }),

        attendees: TypeBox.Type.String({ default: '' }),

        start_date_time: TypeBox.Type.String({ format: 'date-time' }),

        end_date_time: TypeBox.Type.String({ format: 'date-time' }),

        location: TypeBox.Type.String({ default: '' }),

        note: TypeBox.Type.String({ default: '' }),

        recurrence: TypeBox.Type.Number({ default: 0 }),

        recurrence_occurrences: TypeBox.Type.Number({ default: 0 }),

        recurrence_pattern: TypeBox.Type.String({ default: '' }),

        status: TypeBox.Type.Number({ default: 0 }),

        2=confirmed: TypeBox.Type.String({ default: '' }),

        3=finished: TypeBox.Type.String({ default: '' }),

        4=canceled: TypeBox.Type.String({ default: '' }),

        send_confirmation: TypeBox.Type.Number({ default: 0 }),

}, { additionalProperties: false });

export type Vips__appointmentInput = TypeBox.Static<typeof vips__appointmentInputSchema>;

@Entity()
// @ts-ignore
export class Vips__appointment implements Omit<TypeBox.Static<typeof vips__appointmentSchema>, 'start_date_time' | 'end_date_time'> {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @DeleteDateColumn()
    deletedAt?: Date;

        @Column({ default: '' })
        generated_id!: string;

        @Column({ type: 'integer', default: 0 })
        user_id!: number;

        @Column({ default: '' })
        title!: string;

        @Column({ type: 'integer', default: 0 })
        client_id!: number;

        @Column({ type: 'integer', default: 0 })
        provider_id!: number;

        @Column({ default: '' })
        attendees!: string;

        @Column({ type: 'datetime', nullable: true })
        start_date_time?: Date;

        @Column({ type: 'datetime', nullable: true })
        end_date_time?: Date;

        @Column({ default: '' })
        location!: string;

        @Column({ default: '' })
        note!: string;

        @Column({ type: 'integer', default: 0 })
        recurrence!: number;

        @Column({ type: 'integer', default: 0 })
        recurrence_occurrences!: number;

        @Column({ default: '' })
        recurrence_pattern!: string;

        @Column({ type: 'integer', default: 0 })
        status!: number;

        @Column({ default: '' })
        2=confirmed!: string;

        @Column({ default: '' })
        3=finished!: string;

        @Column({ default: '' })
        4=canceled!: string;

        @Column({ type: 'integer', default: 0 })
        send_confirmation!: number;

}
