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
 * Schema for vips__payment_gateway_settings entity
 */
// @ts-ignore
export const vips__payment_gateway_settingsSchema = TypeBox.Type.Object({
    id: TypeBox.Type.String({ format: 'uuid' }),

        paypal_checkout_label: TypeBox.Type.String({ default: '' }),

        paypal_checkout_client_id: TypeBox.Type.String({ default: '' }),

        paypal_checkout_status: TypeBox.Type.Number({ default: 0 }),

        0=inactive: TypeBox.Type.String({ default: '' }),

        stripe_label: TypeBox.Type.String({ default: '' }),

        stripe_api_key: TypeBox.Type.String({ default: '' }),

        stripe_secret_key: TypeBox.Type.String({ default: '' }),

        stripe_status: TypeBox.Type.Number({ default: 0 }),

        0=inactive: TypeBox.Type.String({ default: '' }),

}, { additionalProperties: false });

/**
 * Input type for editing and creating vips__payment_gateway_settings
 */
// @ts-ignore
export const vips__payment_gateway_settingsInputSchema = TypeBox.Type.Object({

        paypal_checkout_label: TypeBox.Type.String({ default: '' }),

        paypal_checkout_client_id: TypeBox.Type.String({ default: '' }),

        paypal_checkout_status: TypeBox.Type.Number({ default: 0 }),

        0=inactive: TypeBox.Type.String({ default: '' }),

        stripe_label: TypeBox.Type.String({ default: '' }),

        stripe_api_key: TypeBox.Type.String({ default: '' }),

        stripe_secret_key: TypeBox.Type.String({ default: '' }),

        stripe_status: TypeBox.Type.Number({ default: 0 }),

        0=inactive: TypeBox.Type.String({ default: '' }),

}, { additionalProperties: false });

export type Vips__payment_gateway_settingsInput = TypeBox.Static<typeof vips__payment_gateway_settingsInputSchema>;

@Entity()
// @ts-ignore
export class Vips__payment_gateway_settings implements TypeBox.Static<typeof vips__payment_gateway_settingsSchema> {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @DeleteDateColumn()
    deletedAt?: Date;

        @Column({ default: '' })
        paypal_checkout_label!: string;

        @Column({ default: '' })
        paypal_checkout_client_id!: string;

        @Column({ type: 'integer', default: 0 })
        paypal_checkout_status!: number;

        @Column({ default: '' })
        0=inactive!: string;

        @Column({ default: '' })
        stripe_label!: string;

        @Column({ default: '' })
        stripe_api_key!: string;

        @Column({ default: '' })
        stripe_secret_key!: string;

        @Column({ type: 'integer', default: 0 })
        stripe_status!: number;

        @Column({ default: '' })
        0=inactive!: string;

}
