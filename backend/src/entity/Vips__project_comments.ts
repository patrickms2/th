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
 * Schema for vips__project_comments entity
 */
// @ts-ignore
export const vips__project_commentsSchema = TypeBox.Type.Object({
    id: TypeBox.Type.String({ format: 'uuid' }),

        user_id: TypeBox.Type.Number({ default: 0 }),

        project_id: TypeBox.Type.Number({ default: 0 }),

        parent_id: TypeBox.Type.Number({ default: 0 }),

        comment: TypeBox.Type.String({ default: '' }),

        attachments: TypeBox.Type.String({ default: '' }),

}, { additionalProperties: false });

/**
 * Input type for editing and creating vips__project_comments
 */
// @ts-ignore
export const vips__project_commentsInputSchema = TypeBox.Type.Object({

        user_id: TypeBox.Type.Number({ default: 0 }),

        project_id: TypeBox.Type.Number({ default: 0 }),

        parent_id: TypeBox.Type.Number({ default: 0 }),

        comment: TypeBox.Type.String({ default: '' }),

        attachments: TypeBox.Type.String({ default: '' }),

}, { additionalProperties: false });

export type Vips__project_commentsInput = TypeBox.Static<typeof vips__project_commentsInputSchema>;

@Entity()
// @ts-ignore
export class Vips__project_comments implements TypeBox.Static<typeof vips__project_commentsSchema> {
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
        project_id!: number;

        @Column({ type: 'integer', default: 0 })
        parent_id!: number;

        @Column({ default: '' })
        comment!: string;

        @Column({ default: '' })
        attachments!: string;

}
