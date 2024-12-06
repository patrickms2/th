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
 * Schema for vips__password_resets entity
 */
// @ts-ignore
export const vips__password_resetsSchema = TypeBox.Type.Object({
    id: TypeBox.Type.String({ format: 'uuid' }),

        email: TypeBox.Type.String(),

        token: TypeBox.Type.String({ default: '' }),

        key: TypeBox.Type.String({ default: '' }),

}, { additionalProperties: false });

/**
 * Input type for editing and creating vips__password_resets
 */
// @ts-ignore
export const vips__password_resetsInputSchema = TypeBox.Type.Object({

        email: TypeBox.Type.String(),

        token: TypeBox.Type.String({ default: '' }),

        key: TypeBox.Type.String({ default: '' }),

}, { additionalProperties: false });

export type Vips__password_resetsInput = TypeBox.Static<typeof vips__password_resetsInputSchema>;

@Entity()
// @ts-ignore
export class Vips__password_resets implements TypeBox.Static<typeof vips__password_resetsSchema> {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @DeleteDateColumn()
    deletedAt?: Date;

        @Column({ default: '' })
        email!: string;

        @Column({ default: '' })
        token!: string;

        @Column({ default: '' })
        key!: string;

}
