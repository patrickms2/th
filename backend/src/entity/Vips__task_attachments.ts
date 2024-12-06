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
 * Schema for vips__task_attachments entity
 */
// @ts-ignore
export const vips__task_attachmentsSchema = TypeBox.Type.Object({
    id: TypeBox.Type.String({ format: 'uuid' }),

        task_id: TypeBox.Type.Number({ default: 0 }),

        file_name: TypeBox.Type.String({ default: '' }),

        file_hash: TypeBox.Type.String({ default: '' }),

        file_extension: TypeBox.Type.String({ default: '' }),

}, { additionalProperties: false });

/**
 * Input type for editing and creating vips__task_attachments
 */
// @ts-ignore
export const vips__task_attachmentsInputSchema = TypeBox.Type.Object({

        task_id: TypeBox.Type.Number({ default: 0 }),

        file_name: TypeBox.Type.String({ default: '' }),

        file_hash: TypeBox.Type.String({ default: '' }),

        file_extension: TypeBox.Type.String({ default: '' }),

}, { additionalProperties: false });

export type Vips__task_attachmentsInput = TypeBox.Static<typeof vips__task_attachmentsInputSchema>;

@Entity()
// @ts-ignore
export class Vips__task_attachments implements TypeBox.Static<typeof vips__task_attachmentsSchema> {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @DeleteDateColumn()
    deletedAt?: Date;

        @Column({ type: 'integer', default: 0 })
        task_id!: number;

        @Column({ default: '' })
        file_name!: string;

        @Column({ default: '' })
        file_hash!: string;

        @Column({ default: '' })
        file_extension!: string;

}
