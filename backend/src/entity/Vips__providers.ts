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
 * Schema for vips__providers entity
 */
// @ts-ignore
export const vips__providersSchema = TypeBox.Type.Object({
    id: TypeBox.Type.String({ format: 'uuid' }),

        firstname: TypeBox.Type.String({ default: '' }),

        lastname: TypeBox.Type.String({ default: '' }),

        email: TypeBox.Type.String(),

        color: TypeBox.Type.String({ default: '' }),

        status: TypeBox.Type.Number({ default: 0 }),

        0=inactive: TypeBox.Type.String({ default: '' }),

}, { additionalProperties: false });

/**
 * Input type for editing and creating vips__providers
 */
// @ts-ignore
export const vips__providersInputSchema = TypeBox.Type.Object({

        firstname: TypeBox.Type.String({ default: '' }),

        lastname: TypeBox.Type.String({ default: '' }),

        email: TypeBox.Type.String(),

        color: TypeBox.Type.String({ default: '' }),

        status: TypeBox.Type.Number({ default: 0 }),

        0=inactive: TypeBox.Type.String({ default: '' }),

}, { additionalProperties: false });

export type Vips__providersInput = TypeBox.Static<typeof vips__providersInputSchema>;

@Entity()
// @ts-ignore
export class Vips__providers implements TypeBox.Static<typeof vips__providersSchema> {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @DeleteDateColumn()
    deletedAt?: Date;

        @Column({ default: '' })
        firstname!: string;

        @Column({ default: '' })
        lastname!: string;

        @Column({ default: '' })
        email!: string;

        @Column({ default: '' })
        color!: string;

        @Column({ type: 'integer', default: 0 })
        status!: number;

        @Column({ default: '' })
        0=inactive!: string;

}
