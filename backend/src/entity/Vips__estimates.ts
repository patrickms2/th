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

        Draft = 'draft',

        Sent = 'sent',

        Expired = 'expired',

        Declined = 'declined',

        Accepted = 'accepted',

}

/**
 * Schema for vips__estimates entity
 */
// @ts-ignore
export const vips__estimatesSchema = TypeBox.Type.Object({
    id: TypeBox.Type.String({ format: 'uuid' }),

        user_id: TypeBox.Type.Number({ default: 0 }),

        client_id: TypeBox.Type.Number({ default: 0 }),

        invoice_id: TypeBox.Type.Number({ default: 0 }),

        estimate_number: TypeBox.Type.String({ default: '' }),

        estimate_date: TypeBox.Type.Optional(TypeBox.Type.String({ format: 'date' })),

        valid_till: TypeBox.Type.Optional(TypeBox.Type.String({ format: 'date' })),

        sub_total: TypeBox.Type.String({ default: '' }),

        total_tax: TypeBox.Type.String({ default: '' }),

        discount_type: TypeBox.Type.Enum(Discount_type),

        discount: TypeBox.Type.String({ default: '' }),

        total_discount: TypeBox.Type.String({ default: '' }),

        adjustment: TypeBox.Type.String({ default: '' }),

        total_amount: TypeBox.Type.String({ default: '' }),

        reference: TypeBox.Type.String({ default: '' }),

        note: TypeBox.Type.String({ default: '' }),

        status: TypeBox.Type.Enum(Status),

}, { additionalProperties: false });

/**
 * Input type for editing and creating vips__estimates
 */
// @ts-ignore
export const vips__estimatesInputSchema = TypeBox.Type.Object({

        user_id: TypeBox.Type.Number({ default: 0 }),

        client_id: TypeBox.Type.Number({ default: 0 }),

        invoice_id: TypeBox.Type.Number({ default: 0 }),

        estimate_number: TypeBox.Type.String({ default: '' }),

        estimate_date: TypeBox.Type.Optional(TypeBox.Type.String({ format: 'date' })),

        valid_till: TypeBox.Type.Optional(TypeBox.Type.String({ format: 'date' })),

        sub_total: TypeBox.Type.String({ default: '' }),

        total_tax: TypeBox.Type.String({ default: '' }),

        discount_type: TypeBox.Type.Enum(Discount_type),

        discount: TypeBox.Type.String({ default: '' }),

        total_discount: TypeBox.Type.String({ default: '' }),

        adjustment: TypeBox.Type.String({ default: '' }),

        total_amount: TypeBox.Type.String({ default: '' }),

        reference: TypeBox.Type.String({ default: '' }),

        note: TypeBox.Type.String({ default: '' }),

        status: TypeBox.Type.Enum(Status),

}, { additionalProperties: false });

export type Vips__estimatesInput = TypeBox.Static<typeof vips__estimatesInputSchema>;

@Entity()
// @ts-ignore
export class Vips__estimates implements TypeBox.Static<typeof vips__estimatesSchema> {
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

        @Column({ type: 'integer', default: 0 })
        invoice_id!: number;

        @Column({ default: '' })
        estimate_number!: string;

        @Column({ type: 'date', nullable: true })
        estimate_date?: string;

        @Column({ type: 'date', nullable: true })
        valid_till?: string;

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
        reference!: string;

        @Column({ default: '' })
        note!: string;

        @Column({ type: 'enum', enum: Status })
        status!: Status;

}
