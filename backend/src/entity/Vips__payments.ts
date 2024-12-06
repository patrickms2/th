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

export enum Status {

        InProgress = 'in_progress',

        Successful = 'successful',

        Failed = 'failed',

}

/**
 * Schema for vips__payments entity
 */
// @ts-ignore
export const vips__paymentsSchema = TypeBox.Type.Object({
    id: TypeBox.Type.String({ format: 'uuid' }),

        user_id: TypeBox.Type.Number({ default: 0 }),

        client_id: TypeBox.Type.Number({ default: 0 }),

        receipt_number: TypeBox.Type.String({ default: '' }),

        invoice_id: TypeBox.Type.Number({ default: 0 }),

        transaction_id: TypeBox.Type.String({ default: '' }),

        payment_method: TypeBox.Type.String({ default: '' }),

        date: TypeBox.Type.String({ format: 'date-time' }),

        amount: TypeBox.Type.String({ default: '' }),

        notes: TypeBox.Type.String({ default: '' }),

        status: TypeBox.Type.Enum(Status),

}, { additionalProperties: false });

/**
 * Input type for editing and creating vips__payments
 */
// @ts-ignore
export const vips__paymentsInputSchema = TypeBox.Type.Object({

        user_id: TypeBox.Type.Number({ default: 0 }),

        client_id: TypeBox.Type.Number({ default: 0 }),

        receipt_number: TypeBox.Type.String({ default: '' }),

        invoice_id: TypeBox.Type.Number({ default: 0 }),

        transaction_id: TypeBox.Type.String({ default: '' }),

        payment_method: TypeBox.Type.String({ default: '' }),

        date: TypeBox.Type.String({ format: 'date-time' }),

        amount: TypeBox.Type.String({ default: '' }),

        notes: TypeBox.Type.String({ default: '' }),

        status: TypeBox.Type.Enum(Status),

}, { additionalProperties: false });

export type Vips__paymentsInput = TypeBox.Static<typeof vips__paymentsInputSchema>;

@Entity()
// @ts-ignore
export class Vips__payments implements Omit<TypeBox.Static<typeof vips__paymentsSchema>, 'date'> {
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
        client_id!: number;

        @Column({ default: '' })
        receipt_number!: string;

        @Column({ type: 'integer', default: 0 })
        invoice_id!: number;

        @Column({ default: '' })
        transaction_id!: string;

        @Column({ default: '' })
        payment_method!: string;

        @Column({ type: 'datetime', nullable: true })
        date?: Date;

        @Column({ default: '' })
        amount!: string;

        @Column({ default: '' })
        notes!: string;

        @Column({ type: 'enum', enum: Status })
        status!: Status;

}
