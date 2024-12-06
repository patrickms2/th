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
 * Schema for vips__defects entity
 */
// @ts-ignore
export const vips__defectsSchema = TypeBox.Type.Object({
    id: TypeBox.Type.String({ format: 'uuid' }),

        create_user_id: TypeBox.Type.Number({ default: 0 }),

        generated_id: TypeBox.Type.String({ default: '' }),

        project_id: TypeBox.Type.Number({ default: 0 }),

        project_version: TypeBox.Type.String({ default: '' }),

        defect_type: TypeBox.Type.Number({ default: 0 }),

        2=enhancement: TypeBox.Type.String({ default: '' }),

        defect_name: TypeBox.Type.String({ default: '' }),

        start_date: TypeBox.Type.Optional(TypeBox.Type.String({ format: 'date' })),

        end_date: TypeBox.Type.Optional(TypeBox.Type.String({ format: 'date' })),

        estimated_hours: TypeBox.Type.String({ default: '' }),

        actual_hours: TypeBox.Type.String({ default: '' }),

        description: TypeBox.Type.String({ default: '' }),

        status: TypeBox.Type.Number({ default: 0 }),

        2=closed: TypeBox.Type.String({ default: '' }),

        3=in: TypeBox.Type.String({ default: '' }),

        4=open: TypeBox.Type.String({ default: '' }),

        5=solved: TypeBox.Type.String({ default: '' }),

        6=re-open: TypeBox.Type.String({ default: '' }),

        7=deferred: TypeBox.Type.String({ default: '' }),

        assigned_group_id: TypeBox.Type.Number({ default: 0 }),

        assign_member: TypeBox.Type.String({ default: '' }),

        severity: TypeBox.Type.Number({ default: 0 }),

        2=medium: TypeBox.Type.String({ default: '' }),

        3=high: TypeBox.Type.String({ default: '' }),

        4=very: TypeBox.Type.String({ default: '' }),

        5=urgent: TypeBox.Type.String({ default: '' }),

        notes: TypeBox.Type.String({ default: '' }),

        attachment: TypeBox.Type.String({ default: '' }),

        attachment_hash: TypeBox.Type.String({ default: '' }),

        orders: TypeBox.Type.Number({ default: 0 }),

}, { additionalProperties: false });

/**
 * Input type for editing and creating vips__defects
 */
// @ts-ignore
export const vips__defectsInputSchema = TypeBox.Type.Object({

        create_user_id: TypeBox.Type.Number({ default: 0 }),

        generated_id: TypeBox.Type.String({ default: '' }),

        project_id: TypeBox.Type.Number({ default: 0 }),

        project_version: TypeBox.Type.String({ default: '' }),

        defect_type: TypeBox.Type.Number({ default: 0 }),

        2=enhancement: TypeBox.Type.String({ default: '' }),

        defect_name: TypeBox.Type.String({ default: '' }),

        start_date: TypeBox.Type.Optional(TypeBox.Type.String({ format: 'date' })),

        end_date: TypeBox.Type.Optional(TypeBox.Type.String({ format: 'date' })),

        estimated_hours: TypeBox.Type.String({ default: '' }),

        actual_hours: TypeBox.Type.String({ default: '' }),

        description: TypeBox.Type.String({ default: '' }),

        status: TypeBox.Type.Number({ default: 0 }),

        2=closed: TypeBox.Type.String({ default: '' }),

        3=in: TypeBox.Type.String({ default: '' }),

        4=open: TypeBox.Type.String({ default: '' }),

        5=solved: TypeBox.Type.String({ default: '' }),

        6=re-open: TypeBox.Type.String({ default: '' }),

        7=deferred: TypeBox.Type.String({ default: '' }),

        assigned_group_id: TypeBox.Type.Number({ default: 0 }),

        assign_member: TypeBox.Type.String({ default: '' }),

        severity: TypeBox.Type.Number({ default: 0 }),

        2=medium: TypeBox.Type.String({ default: '' }),

        3=high: TypeBox.Type.String({ default: '' }),

        4=very: TypeBox.Type.String({ default: '' }),

        5=urgent: TypeBox.Type.String({ default: '' }),

        notes: TypeBox.Type.String({ default: '' }),

        attachment: TypeBox.Type.String({ default: '' }),

        attachment_hash: TypeBox.Type.String({ default: '' }),

        orders: TypeBox.Type.Number({ default: 0 }),

}, { additionalProperties: false });

export type Vips__defectsInput = TypeBox.Static<typeof vips__defectsInputSchema>;

@Entity()
// @ts-ignore
export class Vips__defects implements TypeBox.Static<typeof vips__defectsSchema> {
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
        defect_type!: number;

        @Column({ default: '' })
        2=enhancement!: string;

        @Column({ default: '' })
        defect_name!: string;

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
        2=closed!: string;

        @Column({ default: '' })
        3=in!: string;

        @Column({ default: '' })
        4=open!: string;

        @Column({ default: '' })
        5=solved!: string;

        @Column({ default: '' })
        6=re-open!: string;

        @Column({ default: '' })
        7=deferred!: string;

        @Column({ type: 'integer', default: 0 })
        assigned_group_id!: number;

        @Column({ default: '' })
        assign_member!: string;

        @Column({ type: 'integer', default: 0 })
        severity!: number;

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

        @Column({ default: '' })
        attachment!: string;

        @Column({ default: '' })
        attachment_hash!: string;

        @Column({ type: 'integer', default: 0 })
        orders!: number;

}
