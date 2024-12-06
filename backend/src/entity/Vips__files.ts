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
 * Schema for vips__files entity
 */
// @ts-ignore
export const vips__filesSchema = TypeBox.Type.Object({
    id: TypeBox.Type.String({ format: 'uuid' }),

        user_id: TypeBox.Type.Number({ default: 0 }),

        folder_id: TypeBox.Type.Number({ default: 0 }),

        file_name: TypeBox.Type.String({ default: '' }),

        file_extension: TypeBox.Type.String({ default: '' }),

        file_size: TypeBox.Type.Number({ default: 0 }),

        file_hash: TypeBox.Type.String({ default: '' }),

}, { additionalProperties: false });

/**
 * Input type for editing and creating vips__files
 */
// @ts-ignore
export const vips__filesInputSchema = TypeBox.Type.Object({

        user_id: TypeBox.Type.Number({ default: 0 }),

        folder_id: TypeBox.Type.Number({ default: 0 }),

        file_name: TypeBox.Type.String({ default: '' }),

        file_extension: TypeBox.Type.String({ default: '' }),

        file_size: TypeBox.Type.Number({ default: 0 }),

        file_hash: TypeBox.Type.String({ default: '' }),

}, { additionalProperties: false });

export type Vips__filesInput = TypeBox.Static<typeof vips__filesInputSchema>;

@Entity()
// @ts-ignore
export class Vips__files implements TypeBox.Static<typeof vips__filesSchema> {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @DeleteDateColumn()
    deletedAt?: Date;

        @Column({ type: 'integer', default: 0 })
        user_id!: number;

        @Column({ type: 'integer', default: 0 })
        folder_id!: number;

        @Column({ default: '' })
        file_name!: string;

        @Column({ default: '' })
        file_extension!: string;

        @Column({ type: 'integer', default: 0 })
        file_size!: number;

        @Column({ default: '' })
        file_hash!: string;

}
