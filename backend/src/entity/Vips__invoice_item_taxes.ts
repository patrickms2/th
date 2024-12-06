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
 * Schema for vips__invoice_item_taxes entity
 */
// @ts-ignore
export const vips__invoice_item_taxesSchema = TypeBox.Type.Object({
    id: TypeBox.Type.String({ format: 'uuid' }),

        invoice_item_id: TypeBox.Type.Number({ default: 0 }),

        tax_id: TypeBox.Type.Number({ default: 0 }),

        item_tax: TypeBox.Type.String({ default: '' }),

}, { additionalProperties: false });

/**
 * Input type for editing and creating vips__invoice_item_taxes
 */
// @ts-ignore
export const vips__invoice_item_taxesInputSchema = TypeBox.Type.Object({

        invoice_item_id: TypeBox.Type.Number({ default: 0 }),

        tax_id: TypeBox.Type.Number({ default: 0 }),

        item_tax: TypeBox.Type.String({ default: '' }),

}, { additionalProperties: false });

export type Vips__invoice_item_taxesInput = TypeBox.Static<typeof vips__invoice_item_taxesInputSchema>;

@Entity()
// @ts-ignore
export class Vips__invoice_item_taxes implements TypeBox.Static<typeof vips__invoice_item_taxesSchema> {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @DeleteDateColumn()
    deletedAt?: Date;

        @Column({ type: 'integer', default: 0 })
        invoice_item_id!: number;

        @Column({ type: 'integer', default: 0 })
        tax_id!: number;

        @Column({ default: '' })
        item_tax!: string;

}
