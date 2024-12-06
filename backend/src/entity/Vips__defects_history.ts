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
 * Schema for vips__defects_history entity
 */
// @ts-ignore
export const vips__defects_historySchema = TypeBox.Type.Object({
    id: TypeBox.Type.String({ format: 'uuid' }),

        defect_id: TypeBox.Type.Number({ default: 0 }),

        description: TypeBox.Type.String({ default: '' }),

        created_by_id: TypeBox.Type.Number({ default: 0 }),

        commented_by_id: TypeBox.Type.Number({ default: 0 }),

        solved_by_id: TypeBox.Type.Number({ default: 0 }),

        closed_by_id: TypeBox.Type.Number({ default: 0 }),

        updated_by_id: TypeBox.Type.Number({ default: 0 }),

}, { additionalProperties: false });

/**
 * Input type for editing and creating vips__defects_history
 */
// @ts-ignore
export const vips__defects_historyInputSchema = TypeBox.Type.Object({

        defect_id: TypeBox.Type.Number({ default: 0 }),

        description: TypeBox.Type.String({ default: '' }),

        created_by_id: TypeBox.Type.Number({ default: 0 }),

        commented_by_id: TypeBox.Type.Number({ default: 0 }),

        solved_by_id: TypeBox.Type.Number({ default: 0 }),

        closed_by_id: TypeBox.Type.Number({ default: 0 }),

        updated_by_id: TypeBox.Type.Number({ default: 0 }),

}, { additionalProperties: false });

export type Vips__defects_historyInput = TypeBox.Static<typeof vips__defects_historyInputSchema>;

@Entity()
// @ts-ignore
export class Vips__defects_history implements TypeBox.Static<typeof vips__defects_historySchema> {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @DeleteDateColumn()
    deletedAt?: Date;

        @Column({ type: 'integer', default: 0 })
        defect_id!: number;

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
