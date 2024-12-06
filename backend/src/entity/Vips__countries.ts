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
 * Schema for vips__countries entity
 */
// @ts-ignore
export const vips__countriesSchema = TypeBox.Type.Object({
    id: TypeBox.Type.String({ format: 'uuid' }),

        code: TypeBox.Type.String({ default: '' }),

        name: TypeBox.Type.String({ default: '' }),

}, { additionalProperties: false });

/**
 * Input type for editing and creating vips__countries
 */
// @ts-ignore
export const vips__countriesInputSchema = TypeBox.Type.Object({

        code: TypeBox.Type.String({ default: '' }),

        name: TypeBox.Type.String({ default: '' }),

}, { additionalProperties: false });

export type Vips__countriesInput = TypeBox.Static<typeof vips__countriesInputSchema>;

@Entity()
// @ts-ignore
export class Vips__countries implements TypeBox.Static<typeof vips__countriesSchema> {
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

}
