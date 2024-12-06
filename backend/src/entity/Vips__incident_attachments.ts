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
 * Schema for vips__incident_attachments entity
 */
// @ts-ignore
export const vips__incident_attachmentsSchema = TypeBox.Type.Object({
    id: TypeBox.Type.String({ format: 'uuid' }),

        incident_id: TypeBox.Type.Number({ default: 0 }),

        file_name: TypeBox.Type.String({ default: '' }),

        file_hash: TypeBox.Type.String({ default: '' }),

        file_extension: TypeBox.Type.String({ default: '' }),

}, { additionalProperties: false });

/**
 * Input type for editing and creating vips__incident_attachments
 */
// @ts-ignore
export const vips__incident_attachmentsInputSchema = TypeBox.Type.Object({

        incident_id: TypeBox.Type.Number({ default: 0 }),

        file_name: TypeBox.Type.String({ default: '' }),

        file_hash: TypeBox.Type.String({ default: '' }),

        file_extension: TypeBox.Type.String({ default: '' }),

}, { additionalProperties: false });

export type Vips__incident_attachmentsInput = TypeBox.Static<typeof vips__incident_attachmentsInputSchema>;

@Entity()
// @ts-ignore
export class Vips__incident_attachments implements TypeBox.Static<typeof vips__incident_attachmentsSchema> {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @DeleteDateColumn()
    deletedAt?: Date;

        @Column({ type: 'integer', default: 0 })
        incident_id!: number;

        @Column({ default: '' })
        file_name!: string;

        @Column({ default: '' })
        file_hash!: string;

        @Column({ default: '' })
        file_extension!: string;

}
