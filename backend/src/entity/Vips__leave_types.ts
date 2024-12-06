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
 * Schema for vips__leave_types entity
 */
// @ts-ignore
export const vips__leave_typesSchema = TypeBox.Type.Object({
    id: TypeBox.Type.String({ format: 'uuid' }),

        leave_type: TypeBox.Type.String({ default: '' }),

        no_of_leaves: TypeBox.Type.Number({ default: 0 }),

        color: TypeBox.Type.String({ default: '' }),

}, { additionalProperties: false });

/**
 * Input type for editing and creating vips__leave_types
 */
// @ts-ignore
export const vips__leave_typesInputSchema = TypeBox.Type.Object({

        leave_type: TypeBox.Type.String({ default: '' }),

        no_of_leaves: TypeBox.Type.Number({ default: 0 }),

        color: TypeBox.Type.String({ default: '' }),

}, { additionalProperties: false });

export type Vips__leave_typesInput = TypeBox.Static<typeof vips__leave_typesInputSchema>;

@Entity()
// @ts-ignore
export class Vips__leave_types implements TypeBox.Static<typeof vips__leave_typesSchema> {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @DeleteDateColumn()
    deletedAt?: Date;

        @Column({ default: '' })
        leave_type!: string;

        @Column({ type: 'integer', default: 0 })
        no_of_leaves!: number;

        @Column({ default: '' })
        color!: string;

}
