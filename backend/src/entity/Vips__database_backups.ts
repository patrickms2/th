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
 * Schema for vips__database_backups entity
 */
// @ts-ignore
export const vips__database_backupsSchema = TypeBox.Type.Object({
    id: TypeBox.Type.String({ format: 'uuid' }),

        user_id: TypeBox.Type.Number({ default: 0 }),

        file_name: TypeBox.Type.String({ default: '' }),

        status: TypeBox.Type.Number({ default: 0 }),

}, { additionalProperties: false });

/**
 * Input type for editing and creating vips__database_backups
 */
// @ts-ignore
export const vips__database_backupsInputSchema = TypeBox.Type.Object({

        user_id: TypeBox.Type.Number({ default: 0 }),

        file_name: TypeBox.Type.String({ default: '' }),

        status: TypeBox.Type.Number({ default: 0 }),

}, { additionalProperties: false });

export type Vips__database_backupsInput = TypeBox.Static<typeof vips__database_backupsInputSchema>;

@Entity()
// @ts-ignore
export class Vips__database_backups implements TypeBox.Static<typeof vips__database_backupsSchema> {
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
        file_name!: string;

        @Column({ type: 'integer', default: 0 })
        status!: number;

}
