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
 * Schema for vips__estimate_item_taxes entity
 */
// @ts-ignore
export const vips__estimate_item_taxesSchema = TypeBox.Type.Object({
    id: TypeBox.Type.String({ format: 'uuid' }),

        estimate_item_id: TypeBox.Type.Number({ default: 0 }),

        tax_id: TypeBox.Type.Number({ default: 0 }),

        item_tax: TypeBox.Type.String({ default: '' }),

}, { additionalProperties: false });

/**
 * Input type for editing and creating vips__estimate_item_taxes
 */
// @ts-ignore
export const vips__estimate_item_taxesInputSchema = TypeBox.Type.Object({

        estimate_item_id: TypeBox.Type.Number({ default: 0 }),

        tax_id: TypeBox.Type.Number({ default: 0 }),

        item_tax: TypeBox.Type.String({ default: '' }),

}, { additionalProperties: false });

export type Vips__estimate_item_taxesInput = TypeBox.Static<typeof vips__estimate_item_taxesInputSchema>;

@Entity()
// @ts-ignore
export class Vips__estimate_item_taxes implements TypeBox.Static<typeof vips__estimate_item_taxesSchema> {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @DeleteDateColumn()
    deletedAt?: Date;

        @Column({ type: 'integer', default: 0 })
        estimate_item_id!: number;

        @Column({ type: 'integer', default: 0 })
        tax_id!: number;

        @Column({ default: '' })
        item_tax!: string;

}
