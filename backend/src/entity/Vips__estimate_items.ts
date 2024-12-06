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
 * Schema for vips__estimate_items entity
 */
// @ts-ignore
export const vips__estimate_itemsSchema = TypeBox.Type.Object({
    id: TypeBox.Type.String({ format: 'uuid' }),

        estimate_id: TypeBox.Type.Number({ default: 0 }),

        item_name: TypeBox.Type.String({ default: '' }),

        item_description: TypeBox.Type.String({ default: '' }),

        item_unit: TypeBox.Type.String({ default: '' }),

        unit_price: TypeBox.Type.String({ default: '' }),

        quantity: TypeBox.Type.Number({ default: 0 }),

        total_item_amount: TypeBox.Type.String({ default: '' }),

}, { additionalProperties: false });

/**
 * Input type for editing and creating vips__estimate_items
 */
// @ts-ignore
export const vips__estimate_itemsInputSchema = TypeBox.Type.Object({

        estimate_id: TypeBox.Type.Number({ default: 0 }),

        item_name: TypeBox.Type.String({ default: '' }),

        item_description: TypeBox.Type.String({ default: '' }),

        item_unit: TypeBox.Type.String({ default: '' }),

        unit_price: TypeBox.Type.String({ default: '' }),

        quantity: TypeBox.Type.Number({ default: 0 }),

        total_item_amount: TypeBox.Type.String({ default: '' }),

}, { additionalProperties: false });

export type Vips__estimate_itemsInput = TypeBox.Static<typeof vips__estimate_itemsInputSchema>;

@Entity()
// @ts-ignore
export class Vips__estimate_items implements TypeBox.Static<typeof vips__estimate_itemsSchema> {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @DeleteDateColumn()
    deletedAt?: Date;

        @Column({ type: 'integer', default: 0 })
        estimate_id!: number;

        @Column({ default: '' })
        item_name!: string;

        @Column({ default: '' })
        item_description!: string;

        @Column({ default: '' })
        item_unit!: string;

        @Column({ default: '' })
        unit_price!: string;

        @Column({ type: 'integer', default: 0 })
        quantity!: number;

        @Column({ default: '' })
        total_item_amount!: string;

}
