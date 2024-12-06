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

export enum Discount_type {

        Percent = 'percent',

        Fixed = 'fixed',

}

export enum Status {

        Paid = 'paid',

        PartiallyPaid = 'partially_paid',

        Unpaid = 'unpaid',

}

/**
 * Schema for vips__invoices entity
 */
// @ts-ignore
export const vips__invoicesSchema = TypeBox.Type.Object({
    id: TypeBox.Type.String({ format: 'uuid' }),

        parent_id: TypeBox.Type.Number({ default: 0 }),

        user_id: TypeBox.Type.Number({ default: 0 }),

        client_id: TypeBox.Type.Number({ default: 0 }),

        project_id: TypeBox.Type.Number({ default: 0 }),

        estimate_id: TypeBox.Type.Number({ default: 0 }),

        invoice_number: TypeBox.Type.String({ default: '' }),

        invoice_date: TypeBox.Type.Optional(TypeBox.Type.String({ format: 'date' })),

        due_date: TypeBox.Type.Optional(TypeBox.Type.String({ format: 'date' })),

        sub_total: TypeBox.Type.String({ default: '' }),

        total_tax: TypeBox.Type.String({ default: '' }),

        discount_type: TypeBox.Type.Enum(Discount_type),

        discount: TypeBox.Type.String({ default: '' }),

        total_discount: TypeBox.Type.String({ default: '' }),

        adjustment: TypeBox.Type.String({ default: '' }),

        total_amount: TypeBox.Type.String({ default: '' }),

        total_due_amount: TypeBox.Type.String({ default: '' }),

        reference: TypeBox.Type.String({ default: '' }),

        note: TypeBox.Type.String({ default: '' }),

        recurrence: TypeBox.Type.Number({ default: 0 }),

        recurrence_occurrences: TypeBox.Type.Number({ default: 0 }),

        recurrence_pattern: TypeBox.Type.String({ default: '' }),

        is_recurrence_generated: TypeBox.Type.Number({ default: 0 }),

        last_overdue_reminder_date: TypeBox.Type.String({ format: 'date-time' }),

        status: TypeBox.Type.Enum(Status),

}, { additionalProperties: false });

/**
 * Input type for editing and creating vips__invoices
 */
// @ts-ignore
export const vips__invoicesInputSchema = TypeBox.Type.Object({

        parent_id: TypeBox.Type.Number({ default: 0 }),

        user_id: TypeBox.Type.Number({ default: 0 }),

        client_id: TypeBox.Type.Number({ default: 0 }),

        project_id: TypeBox.Type.Number({ default: 0 }),

        estimate_id: TypeBox.Type.Number({ default: 0 }),

        invoice_number: TypeBox.Type.String({ default: '' }),

        invoice_date: TypeBox.Type.Optional(TypeBox.Type.String({ format: 'date' })),

        due_date: TypeBox.Type.Optional(TypeBox.Type.String({ format: 'date' })),

        sub_total: TypeBox.Type.String({ default: '' }),

        total_tax: TypeBox.Type.String({ default: '' }),

        discount_type: TypeBox.Type.Enum(Discount_type),

        discount: TypeBox.Type.String({ default: '' }),

        total_discount: TypeBox.Type.String({ default: '' }),

        adjustment: TypeBox.Type.String({ default: '' }),

        total_amount: TypeBox.Type.String({ default: '' }),

        total_due_amount: TypeBox.Type.String({ default: '' }),

        reference: TypeBox.Type.String({ default: '' }),

        note: TypeBox.Type.String({ default: '' }),

        recurrence: TypeBox.Type.Number({ default: 0 }),

        recurrence_occurrences: TypeBox.Type.Number({ default: 0 }),

        recurrence_pattern: TypeBox.Type.String({ default: '' }),

        is_recurrence_generated: TypeBox.Type.Number({ default: 0 }),

        last_overdue_reminder_date: TypeBox.Type.String({ format: 'date-time' }),

        status: TypeBox.Type.Enum(Status),

}, { additionalProperties: false });

export type Vips__invoicesInput = TypeBox.Static<typeof vips__invoicesInputSchema>;

@Entity()
// @ts-ignore
export class Vips__invoices implements Omit<TypeBox.Static<typeof vips__invoicesSchema>, 'last_overdue_reminder_date'> {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @DeleteDateColumn()
    deletedAt?: Date;

        @Column({ type: 'integer', default: 0 })
        parent_id!: number;

        @Column({ type: 'integer', default: 0 })
        user_id!: number;

        @Column({ type: 'integer', default: 0 })
        client_id!: number;

        @Column({ type: 'integer', default: 0 })
        project_id!: number;

        @Column({ type: 'integer', default: 0 })
        estimate_id!: number;

        @Column({ default: '' })
        invoice_number!: string;

        @Column({ type: 'date', nullable: true })
        invoice_date?: string;

        @Column({ type: 'date', nullable: true })
        due_date?: string;

        @Column({ default: '' })
        sub_total!: string;

        @Column({ default: '' })
        total_tax!: string;

        @Column({ type: 'enum', enum: Discount_type })
        discount_type!: Discount_type;

        @Column({ default: '' })
        discount!: string;

        @Column({ default: '' })
        total_discount!: string;

        @Column({ default: '' })
        adjustment!: string;

        @Column({ default: '' })
        total_amount!: string;

        @Column({ default: '' })
        total_due_amount!: string;

        @Column({ default: '' })
        reference!: string;

        @Column({ default: '' })
        note!: string;

        @Column({ type: 'integer', default: 0 })
        recurrence!: number;

        @Column({ type: 'integer', default: 0 })
        recurrence_occurrences!: number;

        @Column({ default: '' })
        recurrence_pattern!: string;

        @Column({ type: 'integer', default: 0 })
        is_recurrence_generated!: number;

        @Column({ type: 'datetime', nullable: true })
        last_overdue_reminder_date?: Date;

        @Column({ type: 'enum', enum: Status })
        status!: Status;

}
