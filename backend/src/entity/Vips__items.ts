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
 * Schema for vips__items entity
 */
// @ts-ignore
export const vips__itemsSchema = TypeBox.Type.Object({
    id: TypeBox.Type.String({ format: 'uuid' }),

        name: TypeBox.Type.String({ default: '' }),

        price: TypeBox.Type.String({ default: '' }),

        description: TypeBox.Type.String({ default: '' }),

        unit: TypeBox.Type.String({ default: '' }),

}, { additionalProperties: false });

/**
 * Input type for editing and creating vips__items
 */
// @ts-ignore
export const vips__itemsInputSchema = TypeBox.Type.Object({

        name: TypeBox.Type.String({ default: '' }),

        price: TypeBox.Type.String({ default: '' }),

        description: TypeBox.Type.String({ default: '' }),

        unit: TypeBox.Type.String({ default: '' }),

}, { additionalProperties: false });

export type Vips__itemsInput = TypeBox.Static<typeof vips__itemsInputSchema>;

@Entity()
// @ts-ignore
export class Vips__items implements TypeBox.Static<typeof vips__itemsSchema> {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @DeleteDateColumn()
    deletedAt?: Date;

        @Column({ default: '' })
        name!: string;

        @Column({ default: '' })
        price!: string;

        @Column({ default: '' })
        description!: string;

        @Column({ default: '' })
        unit!: string;

}
