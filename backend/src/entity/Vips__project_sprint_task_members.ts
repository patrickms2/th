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
 * Schema for vips__project_sprint_task_members entity
 */
// @ts-ignore
export const vips__project_sprint_task_membersSchema = TypeBox.Type.Object({
    id: TypeBox.Type.String({ format: 'uuid' }),

        task_id: TypeBox.Type.Number({ default: 0 }),

        user_id: TypeBox.Type.Number({ default: 0 }),

}, { additionalProperties: false });

/**
 * Input type for editing and creating vips__project_sprint_task_members
 */
// @ts-ignore
export const vips__project_sprint_task_membersInputSchema = TypeBox.Type.Object({

        task_id: TypeBox.Type.Number({ default: 0 }),

        user_id: TypeBox.Type.Number({ default: 0 }),

}, { additionalProperties: false });

export type Vips__project_sprint_task_membersInput = TypeBox.Static<typeof vips__project_sprint_task_membersInputSchema>;

@Entity()
// @ts-ignore
export class Vips__project_sprint_task_members implements TypeBox.Static<typeof vips__project_sprint_task_membersSchema> {
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

        @Column({ type: 'integer', default: 0 })
        user_id!: number;

}
