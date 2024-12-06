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
 * Schema for vips__user_activities entity
 */
// @ts-ignore
export const vips__user_activitiesSchema = TypeBox.Type.Object({
    id: TypeBox.Type.String({ format: 'uuid' }),

        user_id: TypeBox.Type.Number({ default: 0 }),

        module: TypeBox.Type.String({ default: '' }),

        self_parent_id: TypeBox.Type.Number({ default: 0 }),

        module_field_id: TypeBox.Type.Number({ default: 0 }),

        action: TypeBox.Type.String({ default: '' }),

        description: TypeBox.Type.String({ default: '' }),

        ip_address: TypeBox.Type.String({ default: '' }),

        diff_for_humans: TypeBox.Type.String({ default: '' }),

}, { additionalProperties: false });

/**
 * Input type for editing and creating vips__user_activities
 */
// @ts-ignore
export const vips__user_activitiesInputSchema = TypeBox.Type.Object({

        user_id: TypeBox.Type.Number({ default: 0 }),

        module: TypeBox.Type.String({ default: '' }),

        self_parent_id: TypeBox.Type.Number({ default: 0 }),

        module_field_id: TypeBox.Type.Number({ default: 0 }),

        action: TypeBox.Type.String({ default: '' }),

        description: TypeBox.Type.String({ default: '' }),

        ip_address: TypeBox.Type.String({ default: '' }),

        diff_for_humans: TypeBox.Type.String({ default: '' }),

}, { additionalProperties: false });

export type Vips__user_activitiesInput = TypeBox.Static<typeof vips__user_activitiesInputSchema>;

@Entity()
// @ts-ignore
export class Vips__user_activities implements TypeBox.Static<typeof vips__user_activitiesSchema> {
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
        module!: string;

        @Column({ type: 'integer', default: 0 })
        self_parent_id!: number;

        @Column({ type: 'integer', default: 0 })
        module_field_id!: number;

        @Column({ default: '' })
        action!: string;

        @Column({ default: '' })
        description!: string;

        @Column({ default: '' })
        ip_address!: string;

        @Column({ default: '' })
        diff_for_humans!: string;

}
