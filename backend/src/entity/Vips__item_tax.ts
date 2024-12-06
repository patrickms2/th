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
 * Schema for vips__item_tax entity
 */
// @ts-ignore
export const vips__item_taxSchema = TypeBox.Type.Object({
    id: TypeBox.Type.String({ format: 'uuid' }),

        item_id: TypeBox.Type.Number({ default: 0 }),

        tax_id: TypeBox.Type.Number({ default: 0 }),

}, { additionalProperties: false });

/**
 * Input type for editing and creating vips__item_tax
 */
// @ts-ignore
export const vips__item_taxInputSchema = TypeBox.Type.Object({

        item_id: TypeBox.Type.Number({ default: 0 }),

        tax_id: TypeBox.Type.Number({ default: 0 }),

}, { additionalProperties: false });

export type Vips__item_taxInput = TypeBox.Static<typeof vips__item_taxInputSchema>;

@Entity()
// @ts-ignore
export class Vips__item_tax implements TypeBox.Static<typeof vips__item_taxSchema> {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @DeleteDateColumn()
    deletedAt?: Date;

        @Column({ type: 'integer', default: 0 })
        item_id!: number;

        @Column({ type: 'integer', default: 0 })
        tax_id!: number;

}
