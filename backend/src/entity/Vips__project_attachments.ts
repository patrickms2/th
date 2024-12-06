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
 * Schema for vips__project_attachments entity
 */
// @ts-ignore
export const vips__project_attachmentsSchema = TypeBox.Type.Object({
    id: TypeBox.Type.String({ format: 'uuid' }),

        project_id: TypeBox.Type.Number({ default: 0 }),

        file_name: TypeBox.Type.String({ default: '' }),

        file_hash: TypeBox.Type.String({ default: '' }),

        file_extension: TypeBox.Type.String({ default: '' }),

}, { additionalProperties: false });

/**
 * Input type for editing and creating vips__project_attachments
 */
// @ts-ignore
export const vips__project_attachmentsInputSchema = TypeBox.Type.Object({

        project_id: TypeBox.Type.Number({ default: 0 }),

        file_name: TypeBox.Type.String({ default: '' }),

        file_hash: TypeBox.Type.String({ default: '' }),

        file_extension: TypeBox.Type.String({ default: '' }),

}, { additionalProperties: false });

export type Vips__project_attachmentsInput = TypeBox.Static<typeof vips__project_attachmentsInputSchema>;

@Entity()
// @ts-ignore
export class Vips__project_attachments implements TypeBox.Static<typeof vips__project_attachmentsSchema> {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @DeleteDateColumn()
    deletedAt?: Date;

        @Column({ type: 'integer', default: 0 })
        project_id!: number;

        @Column({ default: '' })
        file_name!: string;

        @Column({ default: '' })
        file_hash!: string;

        @Column({ default: '' })
        file_extension!: string;

}
