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
 * Schema for vips__invoice_settings entity
 */
// @ts-ignore
export const vips__invoice_settingsSchema = TypeBox.Type.Object({
    id: TypeBox.Type.String({ format: 'uuid' }),

        invoice_prefix: TypeBox.Type.String({ default: '' }),

        due_after: TypeBox.Type.Number({ default: 0 }),

        invoice_logo: TypeBox.Type.String({ default: '' }),

        template: TypeBox.Type.String({ default: '' }),

        gst_number: TypeBox.Type.String({ default: '' }),

        show_gst_number: TypeBox.Type.Number({ default: 0 }),

        client_note: TypeBox.Type.String({ default: '' }),

        terms_conditions: TypeBox.Type.String({ default: '' }),

        auto_remind: TypeBox.Type.Number({ default: 0 }),

        auto_remind_after: TypeBox.Type.String({ default: '' }),

        3: TypeBox.Type.String({ default: '' }),

        payment_prefix: TypeBox.Type.String({ default: '' }),

}, { additionalProperties: false });

/**
 * Input type for editing and creating vips__invoice_settings
 */
// @ts-ignore
export const vips__invoice_settingsInputSchema = TypeBox.Type.Object({

        invoice_prefix: TypeBox.Type.String({ default: '' }),

        due_after: TypeBox.Type.Number({ default: 0 }),

        invoice_logo: TypeBox.Type.String({ default: '' }),

        template: TypeBox.Type.String({ default: '' }),

        gst_number: TypeBox.Type.String({ default: '' }),

        show_gst_number: TypeBox.Type.Number({ default: 0 }),

        client_note: TypeBox.Type.String({ default: '' }),

        terms_conditions: TypeBox.Type.String({ default: '' }),

        auto_remind: TypeBox.Type.Number({ default: 0 }),

        auto_remind_after: TypeBox.Type.String({ default: '' }),

        3: TypeBox.Type.String({ default: '' }),

        payment_prefix: TypeBox.Type.String({ default: '' }),

}, { additionalProperties: false });

export type Vips__invoice_settingsInput = TypeBox.Static<typeof vips__invoice_settingsInputSchema>;

@Entity()
// @ts-ignore
export class Vips__invoice_settings implements TypeBox.Static<typeof vips__invoice_settingsSchema> {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @DeleteDateColumn()
    deletedAt?: Date;

        @Column({ default: '' })
        invoice_prefix!: string;

        @Column({ type: 'integer', default: 0 })
        due_after!: number;

        @Column({ default: '' })
        invoice_logo!: string;

        @Column({ default: '' })
        template!: string;

        @Column({ default: '' })
        gst_number!: string;

        @Column({ type: 'integer', default: 0 })
        show_gst_number!: number;

        @Column({ default: '' })
        client_note!: string;

        @Column({ default: '' })
        terms_conditions!: string;

        @Column({ type: 'integer', default: 0 })
        auto_remind!: number;

        @Column({ default: '' })
        auto_remind_after!: string;

        @Column({ default: '' })
        3!: string;

        @Column({ default: '' })
        payment_prefix!: string;

}
