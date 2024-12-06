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
 * Schema for vips__email_inbox_attachment entity
 */
// @ts-ignore
export const vips__email_inbox_attachmentSchema = TypeBox.Type.Object({
    id: TypeBox.Type.String({ format: 'uuid' }),

        mailbox_id: TypeBox.Type.Number({ default: 0 }),

        file_name: TypeBox.Type.String({ default: '' }),

        file_extension: TypeBox.Type.String({ default: '' }),

        file_size: TypeBox.Type.Number({ default: 0 }),

        file_hash: TypeBox.Type.String({ default: '' }),

        mime_type: TypeBox.Type.String({ default: '' }),

}, { additionalProperties: false });

/**
 * Input type for editing and creating vips__email_inbox_attachment
 */
// @ts-ignore
export const vips__email_inbox_attachmentInputSchema = TypeBox.Type.Object({

        mailbox_id: TypeBox.Type.Number({ default: 0 }),

        file_name: TypeBox.Type.String({ default: '' }),

        file_extension: TypeBox.Type.String({ default: '' }),

        file_size: TypeBox.Type.Number({ default: 0 }),

        file_hash: TypeBox.Type.String({ default: '' }),

        mime_type: TypeBox.Type.String({ default: '' }),

}, { additionalProperties: false });

export type Vips__email_inbox_attachmentInput = TypeBox.Static<typeof vips__email_inbox_attachmentInputSchema>;

@Entity()
// @ts-ignore
export class Vips__email_inbox_attachment implements TypeBox.Static<typeof vips__email_inbox_attachmentSchema> {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @DeleteDateColumn()
    deletedAt?: Date;

        @Column({ type: 'integer', default: 0 })
        mailbox_id!: number;

        @Column({ default: '' })
        file_name!: string;

        @Column({ default: '' })
        file_extension!: string;

        @Column({ type: 'integer', default: 0 })
        file_size!: number;

        @Column({ default: '' })
        file_hash!: string;

        @Column({ default: '' })
        mime_type!: string;

}
