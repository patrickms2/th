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
 * Schema for vips__tasks entity
 */
// @ts-ignore
export const vips__tasksSchema = TypeBox.Type.Object({
    id: TypeBox.Type.String({ format: 'uuid' }),

        parent_task_id: TypeBox.Type.Number({ default: 0 }),

        generated_id: TypeBox.Type.String({ default: '' }),

        name: TypeBox.Type.String({ default: '' }),

        project_id: TypeBox.Type.Number({ default: 0 }),

        project_version: TypeBox.Type.String({ default: '' }),

        planned_start_date: TypeBox.Type.Optional(TypeBox.Type.String({ format: 'date' })),

        planned_end_date: TypeBox.Type.Optional(TypeBox.Type.String({ format: 'date' })),

        task_start_date: TypeBox.Type.String({ format: 'date-time' }),

        task_end_date: TypeBox.Type.String({ format: 'date-time' }),

        estimated_hours: TypeBox.Type.String({ default: '' }),

        actual_hours: TypeBox.Type.String({ default: '' }),

        status: TypeBox.Type.Number({ default: 0 }),

        2=in: TypeBox.Type.String({ default: '' }),

        3=on: TypeBox.Type.String({ default: '' }),

        4=waiting: TypeBox.Type.String({ default: '' }),

        5=cancel: TypeBox.Type.String({ default: '' }),

        6=completed: TypeBox.Type.String({ default: '' }),

        priority: TypeBox.Type.Number({ default: 0 }),

        2=very: TypeBox.Type.String({ default: '' }),

        3=high: TypeBox.Type.String({ default: '' }),

        4=medium: TypeBox.Type.String({ default: '' }),

        5=low: TypeBox.Type.String({ default: '' }),

        progress: TypeBox.Type.Number({ default: 0 }),

        assign_to: TypeBox.Type.Number({ default: 0 }),

        description: TypeBox.Type.String({ default: '' }),

        notes: TypeBox.Type.String({ default: '' }),

        order: TypeBox.Type.Number({ default: 0 }),

}, { additionalProperties: false });

/**
 * Input type for editing and creating vips__tasks
 */
// @ts-ignore
export const vips__tasksInputSchema = TypeBox.Type.Object({

        parent_task_id: TypeBox.Type.Number({ default: 0 }),

        generated_id: TypeBox.Type.String({ default: '' }),

        name: TypeBox.Type.String({ default: '' }),

        project_id: TypeBox.Type.Number({ default: 0 }),

        project_version: TypeBox.Type.String({ default: '' }),

        planned_start_date: TypeBox.Type.Optional(TypeBox.Type.String({ format: 'date' })),

        planned_end_date: TypeBox.Type.Optional(TypeBox.Type.String({ format: 'date' })),

        task_start_date: TypeBox.Type.String({ format: 'date-time' }),

        task_end_date: TypeBox.Type.String({ format: 'date-time' }),

        estimated_hours: TypeBox.Type.String({ default: '' }),

        actual_hours: TypeBox.Type.String({ default: '' }),

        status: TypeBox.Type.Number({ default: 0 }),

        2=in: TypeBox.Type.String({ default: '' }),

        3=on: TypeBox.Type.String({ default: '' }),

        4=waiting: TypeBox.Type.String({ default: '' }),

        5=cancel: TypeBox.Type.String({ default: '' }),

        6=completed: TypeBox.Type.String({ default: '' }),

        priority: TypeBox.Type.Number({ default: 0 }),

        2=very: TypeBox.Type.String({ default: '' }),

        3=high: TypeBox.Type.String({ default: '' }),

        4=medium: TypeBox.Type.String({ default: '' }),

        5=low: TypeBox.Type.String({ default: '' }),

        progress: TypeBox.Type.Number({ default: 0 }),

        assign_to: TypeBox.Type.Number({ default: 0 }),

        description: TypeBox.Type.String({ default: '' }),

        notes: TypeBox.Type.String({ default: '' }),

        order: TypeBox.Type.Number({ default: 0 }),

}, { additionalProperties: false });

export type Vips__tasksInput = TypeBox.Static<typeof vips__tasksInputSchema>;

@Entity()
// @ts-ignore
export class Vips__tasks implements Omit<TypeBox.Static<typeof vips__tasksSchema>, 'task_start_date' | 'task_end_date'> {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @DeleteDateColumn()
    deletedAt?: Date;

        @Column({ type: 'integer', default: 0 })
        parent_task_id!: number;

        @Column({ default: '' })
        generated_id!: string;

        @Column({ default: '' })
        name!: string;

        @Column({ type: 'integer', default: 0 })
        project_id!: number;

        @Column({ default: '' })
        project_version!: string;

        @Column({ type: 'date', nullable: true })
        planned_start_date?: string;

        @Column({ type: 'date', nullable: true })
        planned_end_date?: string;

        @Column({ type: 'datetime', nullable: true })
        task_start_date?: Date;

        @Column({ type: 'datetime', nullable: true })
        task_end_date?: Date;

        @Column({ default: '' })
        estimated_hours!: string;

        @Column({ default: '' })
        actual_hours!: string;

        @Column({ type: 'integer', default: 0 })
        status!: number;

        @Column({ default: '' })
        2=in!: string;

        @Column({ default: '' })
        3=on!: string;

        @Column({ default: '' })
        4=waiting!: string;

        @Column({ default: '' })
        5=cancel!: string;

        @Column({ default: '' })
        6=completed!: string;

        @Column({ type: 'integer', default: 0 })
        priority!: number;

        @Column({ default: '' })
        2=very!: string;

        @Column({ default: '' })
        3=high!: string;

        @Column({ default: '' })
        4=medium!: string;

        @Column({ default: '' })
        5=low!: string;

        @Column({ type: 'integer', default: 0 })
        progress!: number;

        @Column({ type: 'integer', default: 0 })
        assign_to!: number;

        @Column({ default: '' })
        description!: string;

        @Column({ default: '' })
        notes!: string;

        @Column({ type: 'integer', default: 0 })
        order!: number;

}
