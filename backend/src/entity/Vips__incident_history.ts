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
 * Schema for vips__incident_history entity
 */
// @ts-ignore
export const vips__incident_historySchema = TypeBox.Type.Object({
    id: TypeBox.Type.String({ format: 'uuid' }),

        incident_id: TypeBox.Type.Number({ default: 0 }),

        description: TypeBox.Type.String({ default: '' }),

        created_by_id: TypeBox.Type.Number({ default: 0 }),

        commented_by_id: TypeBox.Type.Number({ default: 0 }),

        solved_by_id: TypeBox.Type.Number({ default: 0 }),

        closed_by_id: TypeBox.Type.Number({ default: 0 }),

        updated_by_id: TypeBox.Type.Number({ default: 0 }),

}, { additionalProperties: false });

/**
 * Input type for editing and creating vips__incident_history
 */
// @ts-ignore
export const vips__incident_historyInputSchema = TypeBox.Type.Object({

        incident_id: TypeBox.Type.Number({ default: 0 }),

        description: TypeBox.Type.String({ default: '' }),

        created_by_id: TypeBox.Type.Number({ default: 0 }),

        commented_by_id: TypeBox.Type.Number({ default: 0 }),

        solved_by_id: TypeBox.Type.Number({ default: 0 }),

        closed_by_id: TypeBox.Type.Number({ default: 0 }),

        updated_by_id: TypeBox.Type.Number({ default: 0 }),

}, { additionalProperties: false });

export type Vips__incident_historyInput = TypeBox.Static<typeof vips__incident_historyInputSchema>;

@Entity()
// @ts-ignore
export class Vips__incident_history implements TypeBox.Static<typeof vips__incident_historySchema> {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @DeleteDateColumn()
    deletedAt?: Date;

        @Column({ type: 'integer', default: 0 })
        incident_id!: number;

        @Column({ default: '' })
        description!: string;

        @Column({ type: 'integer', default: 0 })
        created_by_id!: number;

        @Column({ type: 'integer', default: 0 })
        commented_by_id!: number;

        @Column({ type: 'integer', default: 0 })
        solved_by_id!: number;

        @Column({ type: 'integer', default: 0 })
        closed_by_id!: number;

        @Column({ type: 'integer', default: 0 })
        updated_by_id!: number;

}
