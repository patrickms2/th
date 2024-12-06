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
 * Schema for vips__incidents entity
 */
// @ts-ignore
export const vips__incidentsSchema = TypeBox.Type.Object({
    id: TypeBox.Type.String({ format: 'uuid' }),

        create_user_id: TypeBox.Type.Number({ default: 0 }),

        generated_id: TypeBox.Type.String({ default: '' }),

        project_id: TypeBox.Type.Number({ default: 0 }),

        project_version: TypeBox.Type.String({ default: '' }),

        incident_type: TypeBox.Type.Number({ default: 0 }),

        2=info: TypeBox.Type.String({ default: '' }),

        incident_name: TypeBox.Type.String({ default: '' }),

        start_date: TypeBox.Type.Optional(TypeBox.Type.String({ format: 'date' })),

        end_date: TypeBox.Type.Optional(TypeBox.Type.String({ format: 'date' })),

        estimated_hours: TypeBox.Type.String({ default: '' }),

        actual_hours: TypeBox.Type.String({ default: '' }),

        description: TypeBox.Type.String({ default: '' }),

        status: TypeBox.Type.Number({ default: 0 }),

        2=assigned: TypeBox.Type.String({ default: '' }),

        3=in: TypeBox.Type.String({ default: '' }),

        4=solved: TypeBox.Type.String({ default: '' }),

        5=deferred: TypeBox.Type.String({ default: '' }),

        6=re-open: TypeBox.Type.String({ default: '' }),

        7=closed: TypeBox.Type.String({ default: '' }),

        assigned_group_id: TypeBox.Type.Number({ default: 0 }),

        assign_to: TypeBox.Type.String({ default: '' }),

        priority: TypeBox.Type.Number({ default: 0 }),

        2=medium: TypeBox.Type.String({ default: '' }),

        3=high: TypeBox.Type.String({ default: '' }),

        4=very: TypeBox.Type.String({ default: '' }),

        5=urgent: TypeBox.Type.String({ default: '' }),

        notes: TypeBox.Type.String({ default: '' }),

        orders: TypeBox.Type.Number({ default: 0 }),

}, { additionalProperties: false });

/**
 * Input type for editing and creating vips__incidents
 */
// @ts-ignore
export const vips__incidentsInputSchema = TypeBox.Type.Object({

        create_user_id: TypeBox.Type.Number({ default: 0 }),

        generated_id: TypeBox.Type.String({ default: '' }),

        project_id: TypeBox.Type.Number({ default: 0 }),

        project_version: TypeBox.Type.String({ default: '' }),

        incident_type: TypeBox.Type.Number({ default: 0 }),

        2=info: TypeBox.Type.String({ default: '' }),

        incident_name: TypeBox.Type.String({ default: '' }),

        start_date: TypeBox.Type.Optional(TypeBox.Type.String({ format: 'date' })),

        end_date: TypeBox.Type.Optional(TypeBox.Type.String({ format: 'date' })),

        estimated_hours: TypeBox.Type.String({ default: '' }),

        actual_hours: TypeBox.Type.String({ default: '' }),

        description: TypeBox.Type.String({ default: '' }),

        status: TypeBox.Type.Number({ default: 0 }),

        2=assigned: TypeBox.Type.String({ default: '' }),

        3=in: TypeBox.Type.String({ default: '' }),

        4=solved: TypeBox.Type.String({ default: '' }),

        5=deferred: TypeBox.Type.String({ default: '' }),

        6=re-open: TypeBox.Type.String({ default: '' }),

        7=closed: TypeBox.Type.String({ default: '' }),

        assigned_group_id: TypeBox.Type.Number({ default: 0 }),

        assign_to: TypeBox.Type.String({ default: '' }),

        priority: TypeBox.Type.Number({ default: 0 }),

        2=medium: TypeBox.Type.String({ default: '' }),

        3=high: TypeBox.Type.String({ default: '' }),

        4=very: TypeBox.Type.String({ default: '' }),

        5=urgent: TypeBox.Type.String({ default: '' }),

        notes: TypeBox.Type.String({ default: '' }),

        orders: TypeBox.Type.Number({ default: 0 }),

}, { additionalProperties: false });

export type Vips__incidentsInput = TypeBox.Static<typeof vips__incidentsInputSchema>;

@Entity()
// @ts-ignore
export class Vips__incidents implements TypeBox.Static<typeof vips__incidentsSchema> {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @DeleteDateColumn()
    deletedAt?: Date;

        @Column({ type: 'integer', default: 0 })
        create_user_id!: number;

        @Column({ default: '' })
        generated_id!: string;

        @Column({ type: 'integer', default: 0 })
        project_id!: number;

        @Column({ default: '' })
        project_version!: string;

        @Column({ type: 'integer', default: 0 })
        incident_type!: number;

        @Column({ default: '' })
        2=info!: string;

        @Column({ default: '' })
        incident_name!: string;

        @Column({ type: 'date', nullable: true })
        start_date?: string;

        @Column({ type: 'date', nullable: true })
        end_date?: string;

        @Column({ default: '' })
        estimated_hours!: string;

        @Column({ default: '' })
        actual_hours!: string;

        @Column({ default: '' })
        description!: string;

        @Column({ type: 'integer', default: 0 })
        status!: number;

        @Column({ default: '' })
        2=assigned!: string;

        @Column({ default: '' })
        3=in!: string;

        @Column({ default: '' })
        4=solved!: string;

        @Column({ default: '' })
        5=deferred!: string;

        @Column({ default: '' })
        6=re-open!: string;

        @Column({ default: '' })
        7=closed!: string;

        @Column({ type: 'integer', default: 0 })
        assigned_group_id!: number;

        @Column({ default: '' })
        assign_to!: string;

        @Column({ type: 'integer', default: 0 })
        priority!: number;

        @Column({ default: '' })
        2=medium!: string;

        @Column({ default: '' })
        3=high!: string;

        @Column({ default: '' })
        4=very!: string;

        @Column({ default: '' })
        5=urgent!: string;

        @Column({ default: '' })
        notes!: string;

        @Column({ type: 'integer', default: 0 })
        orders!: number;

}
