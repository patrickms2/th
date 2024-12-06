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
 * Schema for vips__locales entity
 */
// @ts-ignore
export const vips__localesSchema = TypeBox.Type.Object({
    id: TypeBox.Type.String({ format: 'uuid' }),

        name: TypeBox.Type.String({ default: '' }),

        locale: TypeBox.Type.String({ default: '' }),

        status: TypeBox.Type.Number({ default: 0 }),

        1=active: TypeBox.Type.String({ default: '' }),

}, { additionalProperties: false });

/**
 * Input type for editing and creating vips__locales
 */
// @ts-ignore
export const vips__localesInputSchema = TypeBox.Type.Object({

        name: TypeBox.Type.String({ default: '' }),

        locale: TypeBox.Type.String({ default: '' }),

        status: TypeBox.Type.Number({ default: 0 }),

        1=active: TypeBox.Type.String({ default: '' }),

}, { additionalProperties: false });

export type Vips__localesInput = TypeBox.Static<typeof vips__localesInputSchema>;

@Entity()
// @ts-ignore
export class Vips__locales implements TypeBox.Static<typeof vips__localesSchema> {
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
        locale!: string;

        @Column({ type: 'integer', default: 0 })
        status!: number;

        @Column({ default: '' })
        1=active!: string;

}
