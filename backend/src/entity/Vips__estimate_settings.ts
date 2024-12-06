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
 * Schema for vips__estimate_settings entity
 */
// @ts-ignore
export const vips__estimate_settingsSchema = TypeBox.Type.Object({
    id: TypeBox.Type.String({ format: 'uuid' }),

        estimate_prefix: TypeBox.Type.String({ default: '' }),

        due_after: TypeBox.Type.Number({ default: 0 }),

        estimate_logo: TypeBox.Type.String({ default: '' }),

        template: TypeBox.Type.String({ default: '' }),

        client_note: TypeBox.Type.String({ default: '' }),

        terms_conditions: TypeBox.Type.String({ default: '' }),

        auto_remind: TypeBox.Type.Number({ default: 0 }),

        auto_remind_before: TypeBox.Type.Number({ default: 0 }),

        auto_convert_to_invoice_on_client_accept: TypeBox.Type.Number({ default: 0 }),

}, { additionalProperties: false });

/**
 * Input type for editing and creating vips__estimate_settings
 */
// @ts-ignore
export const vips__estimate_settingsInputSchema = TypeBox.Type.Object({

        estimate_prefix: TypeBox.Type.String({ default: '' }),

        due_after: TypeBox.Type.Number({ default: 0 }),

        estimate_logo: TypeBox.Type.String({ default: '' }),

        template: TypeBox.Type.String({ default: '' }),

        client_note: TypeBox.Type.String({ default: '' }),

        terms_conditions: TypeBox.Type.String({ default: '' }),

        auto_remind: TypeBox.Type.Number({ default: 0 }),

        auto_remind_before: TypeBox.Type.Number({ default: 0 }),

        auto_convert_to_invoice_on_client_accept: TypeBox.Type.Number({ default: 0 }),

}, { additionalProperties: false });

export type Vips__estimate_settingsInput = TypeBox.Static<typeof vips__estimate_settingsInputSchema>;

@Entity()
// @ts-ignore
export class Vips__estimate_settings implements TypeBox.Static<typeof vips__estimate_settingsSchema> {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @DeleteDateColumn()
    deletedAt?: Date;

        @Column({ default: '' })
        estimate_prefix!: string;

        @Column({ type: 'integer', default: 0 })
        due_after!: number;

        @Column({ default: '' })
        estimate_logo!: string;

        @Column({ default: '' })
        template!: string;

        @Column({ default: '' })
        client_note!: string;

        @Column({ default: '' })
        terms_conditions!: string;

        @Column({ type: 'integer', default: 0 })
        auto_remind!: number;

        @Column({ type: 'integer', default: 0 })
        auto_remind_before!: number;

        @Column({ type: 'integer', default: 0 })
        auto_convert_to_invoice_on_client_accept!: number;

}
