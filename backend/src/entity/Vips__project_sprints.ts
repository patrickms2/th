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
 * Schema for vips__project_sprints entity
 */
// @ts-ignore
export const vips__project_sprintsSchema = TypeBox.Type.Object({
    id: TypeBox.Type.String({ format: 'uuid' }),

        project_id: TypeBox.Type.Number({ default: 0 }),

        sprint_name: TypeBox.Type.String({ default: '' }),

        start_date: TypeBox.Type.Optional(TypeBox.Type.String({ format: 'date' })),

        end_date: TypeBox.Type.Optional(TypeBox.Type.String({ format: 'date' })),

        hours: TypeBox.Type.String({ default: '' }),

        status: TypeBox.Type.Number({ default: 0 }),

        2=inprogress: TypeBox.Type.String({ default: '' }),

        3=closed: TypeBox.Type.String({ default: '' }),

        description: TypeBox.Type.String({ default: '' }),

}, { additionalProperties: false });

/**
 * Input type for editing and creating vips__project_sprints
 */
// @ts-ignore
export const vips__project_sprintsInputSchema = TypeBox.Type.Object({

        project_id: TypeBox.Type.Number({ default: 0 }),

        sprint_name: TypeBox.Type.String({ default: '' }),

        start_date: TypeBox.Type.Optional(TypeBox.Type.String({ format: 'date' })),

        end_date: TypeBox.Type.Optional(TypeBox.Type.String({ format: 'date' })),

        hours: TypeBox.Type.String({ default: '' }),

        status: TypeBox.Type.Number({ default: 0 }),

        2=inprogress: TypeBox.Type.String({ default: '' }),

        3=closed: TypeBox.Type.String({ default: '' }),

        description: TypeBox.Type.String({ default: '' }),

}, { additionalProperties: false });

export type Vips__project_sprintsInput = TypeBox.Static<typeof vips__project_sprintsInputSchema>;

@Entity()
// @ts-ignore
export class Vips__project_sprints implements TypeBox.Static<typeof vips__project_sprintsSchema> {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @DeleteDateColumn()
    deletedAt?: Date;

        @Column({ type: 'integer', default: 0 })
        project_id!: number;

        @Column({ default: '' })
        sprint_name!: string;

        @Column({ type: 'date', nullable: true })
        start_date?: string;

        @Column({ type: 'date', nullable: true })
        end_date?: string;

        @Column({ default: '' })
        hours!: string;

        @Column({ type: 'integer', default: 0 })
        status!: number;

        @Column({ default: '' })
        2=inprogress!: string;

        @Column({ default: '' })
        3=closed!: string;

        @Column({ default: '' })
        description!: string;

}
