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
 * Schema for vips__currency entity
 */
// @ts-ignore
export const vips__currencySchema = TypeBox.Type.Object({
    id: TypeBox.Type.String({ format: 'uuid' }),

        code: TypeBox.Type.String({ default: '' }),

        name: TypeBox.Type.String({ default: '' }),

        symbol: TypeBox.Type.String({ default: '' }),

}, { additionalProperties: false });

/**
 * Input type for editing and creating vips__currency
 */
// @ts-ignore
export const vips__currencyInputSchema = TypeBox.Type.Object({

        code: TypeBox.Type.String({ default: '' }),

        name: TypeBox.Type.String({ default: '' }),

        symbol: TypeBox.Type.String({ default: '' }),

}, { additionalProperties: false });

export type Vips__currencyInput = TypeBox.Static<typeof vips__currencyInputSchema>;

@Entity()
// @ts-ignore
export class Vips__currency implements TypeBox.Static<typeof vips__currencySchema> {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @DeleteDateColumn()
    deletedAt?: Date;

        @Column({ default: '' })
        code!: string;

        @Column({ default: '' })
        name!: string;

        @Column({ default: '' })
        symbol!: string;

}
