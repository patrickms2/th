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
 * Schema for vips__projects entity
 */
// @ts-ignore
export const vips__projectsSchema = TypeBox.Type.Object({
    id: TypeBox.Type.String({ format: 'uuid' }),

        user_id: TypeBox.Type.Number({ default: 0 }),

        generated_id: TypeBox.Type.String({ default: '' }),

        project_name: TypeBox.Type.String({ default: '' }),

        project_version: TypeBox.Type.String({ default: '' }),

        client_id: TypeBox.Type.Number({ default: 0 }),

        progress: TypeBox.Type.Number({ default: 0 }),

        project_hours: TypeBox.Type.Number({ default: 0 }),

        1=task: TypeBox.Type.String({ default: '' }),

        start_date: TypeBox.Type.Optional(TypeBox.Type.String({ format: 'date' })),

        end_date: TypeBox.Type.Optional(TypeBox.Type.String({ format: 'date' })),

        billing_type: TypeBox.Type.Number({ default: 0 }),

        2=hourly: TypeBox.Type.String({ default: '' }),

        price_rate: TypeBox.Type.String({ default: '' }),

        estimated_hours: TypeBox.Type.String({ default: '' }),

        actual_hours: TypeBox.Type.String({ default: '' }),

        status: TypeBox.Type.Number({ default: 0 }),

        2=inprogress: TypeBox.Type.String({ default: '' }),

        3=onhold: TypeBox.Type.String({ default: '' }),

        4=cancel: TypeBox.Type.String({ default: '' }),

        5=completed: TypeBox.Type.String({ default: '' }),

        demo_url: TypeBox.Type.String({ default: '' }),

        description: TypeBox.Type.String({ default: '' }),

        project_logo: TypeBox.Type.String({ default: '' }),

        assign_to: TypeBox.Type.Number({ default: 0 }),

        assign_members: TypeBox.Type.String({ default: '' }),

        notes: TypeBox.Type.String({ default: '' }),

        is_overdue: TypeBox.Type.Number({ default: 0 }),

}, { additionalProperties: false });

/**
 * Input type for editing and creating vips__projects
 */
// @ts-ignore
export const vips__projectsInputSchema = TypeBox.Type.Object({

        user_id: TypeBox.Type.Number({ default: 0 }),

        generated_id: TypeBox.Type.String({ default: '' }),

        project_name: TypeBox.Type.String({ default: '' }),

        project_version: TypeBox.Type.String({ default: '' }),

        client_id: TypeBox.Type.Number({ default: 0 }),

        progress: TypeBox.Type.Number({ default: 0 }),

        project_hours: TypeBox.Type.Number({ default: 0 }),

        1=task: TypeBox.Type.String({ default: '' }),

        start_date: TypeBox.Type.Optional(TypeBox.Type.String({ format: 'date' })),

        end_date: TypeBox.Type.Optional(TypeBox.Type.String({ format: 'date' })),

        billing_type: TypeBox.Type.Number({ default: 0 }),

        2=hourly: TypeBox.Type.String({ default: '' }),

        price_rate: TypeBox.Type.String({ default: '' }),

        estimated_hours: TypeBox.Type.String({ default: '' }),

        actual_hours: TypeBox.Type.String({ default: '' }),

        status: TypeBox.Type.Number({ default: 0 }),

        2=inprogress: TypeBox.Type.String({ default: '' }),

        3=onhold: TypeBox.Type.String({ default: '' }),

        4=cancel: TypeBox.Type.String({ default: '' }),

        5=completed: TypeBox.Type.String({ default: '' }),

        demo_url: TypeBox.Type.String({ default: '' }),

        description: TypeBox.Type.String({ default: '' }),

        project_logo: TypeBox.Type.String({ default: '' }),

        assign_to: TypeBox.Type.Number({ default: 0 }),

        assign_members: TypeBox.Type.String({ default: '' }),

        notes: TypeBox.Type.String({ default: '' }),

        is_overdue: TypeBox.Type.Number({ default: 0 }),

}, { additionalProperties: false });

export type Vips__projectsInput = TypeBox.Static<typeof vips__projectsInputSchema>;

@Entity()
// @ts-ignore
export class Vips__projects implements TypeBox.Static<typeof vips__projectsSchema> {
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
        generated_id!: string;

        @Column({ default: '' })
        project_name!: string;

        @Column({ default: '' })
        project_version!: string;

        @Column({ type: 'integer', default: 0 })
        client_id!: number;

        @Column({ type: 'integer', default: 0 })
        progress!: number;

        @Column({ type: 'integer', default: 0 })
        project_hours!: number;

        @Column({ default: '' })
        1=task!: string;

        @Column({ type: 'date', nullable: true })
        start_date?: string;

        @Column({ type: 'date', nullable: true })
        end_date?: string;

        @Column({ type: 'integer', default: 0 })
        billing_type!: number;

        @Column({ default: '' })
        2=hourly!: string;

        @Column({ default: '' })
        price_rate!: string;

        @Column({ default: '' })
        estimated_hours!: string;

        @Column({ default: '' })
        actual_hours!: string;

        @Column({ type: 'integer', default: 0 })
        status!: number;

        @Column({ default: '' })
        2=inprogress!: string;

        @Column({ default: '' })
        3=onhold!: string;

        @Column({ default: '' })
        4=cancel!: string;

        @Column({ default: '' })
        5=completed!: string;

        @Column({ default: '' })
        demo_url!: string;

        @Column({ default: '' })
        description!: string;

        @Column({ default: '' })
        project_logo!: string;

        @Column({ type: 'integer', default: 0 })
        assign_to!: number;

        @Column({ default: '' })
        assign_members!: string;

        @Column({ default: '' })
        notes!: string;

        @Column({ type: 'integer', default: 0 })
        is_overdue!: number;

}
