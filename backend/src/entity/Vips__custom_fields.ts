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
 * Schema for vips__custom_fields entity
 */
// @ts-ignore
export const vips__custom_fieldsSchema = TypeBox.Type.Object({
    id: TypeBox.Type.String({ format: 'uuid' }),

        form_id: TypeBox.Type.Number({ default: 0 }),

        field_label: TypeBox.Type.String({ default: '' }),

        field_column: TypeBox.Type.String({ default: '' }),

        default_value: TypeBox.Type.String({ default: '' }),

        help_text: TypeBox.Type.String({ default: '' }),

        field_type: TypeBox.Type.Number({ default: 0 }),

        is_required: TypeBox.Type.Number({ default: 0 }),

        status: TypeBox.Type.Number({ default: 0 }),

        true=active: TypeBox.Type.String({ default: '' }),

        show_on_details: TypeBox.Type.Number({ default: 0 }),

}, { additionalProperties: false });

/**
 * Input type for editing and creating vips__custom_fields
 */
// @ts-ignore
export const vips__custom_fieldsInputSchema = TypeBox.Type.Object({

        form_id: TypeBox.Type.Number({ default: 0 }),

        field_label: TypeBox.Type.String({ default: '' }),

        field_column: TypeBox.Type.String({ default: '' }),

        default_value: TypeBox.Type.String({ default: '' }),

        help_text: TypeBox.Type.String({ default: '' }),

        field_type: TypeBox.Type.Number({ default: 0 }),

        is_required: TypeBox.Type.Number({ default: 0 }),

        status: TypeBox.Type.Number({ default: 0 }),

        true=active: TypeBox.Type.String({ default: '' }),

        show_on_details: TypeBox.Type.Number({ default: 0 }),

}, { additionalProperties: false });

export type Vips__custom_fieldsInput = TypeBox.Static<typeof vips__custom_fieldsInputSchema>;

@Entity()
// @ts-ignore
export class Vips__custom_fields implements TypeBox.Static<typeof vips__custom_fieldsSchema> {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @DeleteDateColumn()
    deletedAt?: Date;

        @Column({ type: 'integer', default: 0 })
        form_id!: number;

        @Column({ default: '' })
        field_label!: string;

        @Column({ default: '' })
        field_column!: string;

        @Column({ default: '' })
        default_value!: string;

        @Column({ default: '' })
        help_text!: string;

        @Column({ type: 'decimal', default: 0 })
        field_type!: number;

        @Column({ type: 'integer', default: 0 })
        is_required!: number;

        @Column({ type: 'integer', default: 0 })
        status!: number;

        @Column({ default: '' })
        true=active!: string;

        @Column({ type: 'integer', default: 0 })
        show_on_details!: number;

}
