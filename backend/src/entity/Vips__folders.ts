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
 * Schema for vips__folders entity
 */
// @ts-ignore
export const vips__foldersSchema = TypeBox.Type.Object({
    id: TypeBox.Type.String({ format: 'uuid' }),

        user_id: TypeBox.Type.Number({ default: 0 }),

        folder_name: TypeBox.Type.String({ default: '' }),

        parent_folder: TypeBox.Type.Number({ default: 0 }),

}, { additionalProperties: false });

/**
 * Input type for editing and creating vips__folders
 */
// @ts-ignore
export const vips__foldersInputSchema = TypeBox.Type.Object({

        user_id: TypeBox.Type.Number({ default: 0 }),

        folder_name: TypeBox.Type.String({ default: '' }),

        parent_folder: TypeBox.Type.Number({ default: 0 }),

}, { additionalProperties: false });

export type Vips__foldersInput = TypeBox.Static<typeof vips__foldersInputSchema>;

@Entity()
// @ts-ignore
export class Vips__folders implements TypeBox.Static<typeof vips__foldersSchema> {
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

        @Column({ default: '' })
        folder_name!: string;

        @Column({ type: 'integer', default: 0 })
        parent_folder!: number;

}
