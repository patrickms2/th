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
 * Schema for vips__project_sprint_tasks entity
 */
// @ts-ignore
export const vips__project_sprint_tasksSchema = TypeBox.Type.Object({
    id: TypeBox.Type.String({ format: 'uuid' }),

        project_sprint_id: TypeBox.Type.Number({ default: 0 }),

        project_id: TypeBox.Type.Number({ default: 0 }),

        name: TypeBox.Type.String({ default: '' }),

        description: TypeBox.Type.String({ default: '' }),

        status: TypeBox.Type.Number({ default: 0 }),

        2=onhold: TypeBox.Type.String({ default: '' }),

        3=closed: TypeBox.Type.String({ default: '' }),

        4=released|story:1=open: TypeBox.Type.String({ default: '' }),

        2=inprogress: TypeBox.Type.String({ default: '' }),

        3=closed: TypeBox.Type.String({ default: '' }),

        type: TypeBox.Type.String({ default: '' }),

        start_date: TypeBox.Type.Optional(TypeBox.Type.String({ format: 'date' })),

        end_date: TypeBox.Type.Optional(TypeBox.Type.String({ format: 'date' })),

        estimated_hours: TypeBox.Type.String({ default: '' }),

        assign_to: TypeBox.Type.Number({ default: 0 }),

}, { additionalProperties: false });

/**
 * Input type for editing and creating vips__project_sprint_tasks
 */
// @ts-ignore
export const vips__project_sprint_tasksInputSchema = TypeBox.Type.Object({

        project_sprint_id: TypeBox.Type.Number({ default: 0 }),

        project_id: TypeBox.Type.Number({ default: 0 }),

        name: TypeBox.Type.String({ default: '' }),

        description: TypeBox.Type.String({ default: '' }),

        status: TypeBox.Type.Number({ default: 0 }),

        2=onhold: TypeBox.Type.String({ default: '' }),

        3=closed: TypeBox.Type.String({ default: '' }),

        4=released|story:1=open: TypeBox.Type.String({ default: '' }),

        2=inprogress: TypeBox.Type.String({ default: '' }),

        3=closed: TypeBox.Type.String({ default: '' }),

        type: TypeBox.Type.String({ default: '' }),

        start_date: TypeBox.Type.Optional(TypeBox.Type.String({ format: 'date' })),

        end_date: TypeBox.Type.Optional(TypeBox.Type.String({ format: 'date' })),

        estimated_hours: TypeBox.Type.String({ default: '' }),

        assign_to: TypeBox.Type.Number({ default: 0 }),

}, { additionalProperties: false });

export type Vips__project_sprint_tasksInput = TypeBox.Static<typeof vips__project_sprint_tasksInputSchema>;

@Entity()
// @ts-ignore
export class Vips__project_sprint_tasks implements TypeBox.Static<typeof vips__project_sprint_tasksSchema> {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @DeleteDateColumn()
    deletedAt?: Date;

        @Column({ type: 'integer', default: 0 })
        project_sprint_id!: number;

        @Column({ type: 'integer', default: 0 })
        project_id!: number;

        @Column({ default: '' })
        name!: string;

        @Column({ default: '' })
        description!: string;

        @Column({ type: 'integer', default: 0 })
        status!: number;

        @Column({ default: '' })
        2=onhold!: string;

        @Column({ default: '' })
        3=closed!: string;

        @Column({ default: '' })
        4=released|story:1=open!: string;

        @Column({ default: '' })
        2=inprogress!: string;

        @Column({ default: '' })
        3=closed!: string;

        @Column({ default: '' })
        type!: string;

        @Column({ type: 'date', nullable: true })
        start_date?: string;

        @Column({ type: 'date', nullable: true })
        end_date?: string;

        @Column({ default: '' })
        estimated_hours!: string;

        @Column({ type: 'integer', default: 0 })
        assign_to!: number;

}
