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
 * Schema for vips__user_role_department entity
 */
// @ts-ignore
export const vips__user_role_departmentSchema = TypeBox.Type.Object({
    id: TypeBox.Type.String({ format: 'uuid' }),

        department_id: TypeBox.Type.Number({ default: 0 }),

        role_id: TypeBox.Type.Number({ default: 0 }),

        user_id: TypeBox.Type.Number({ default: 0 }),

}, { additionalProperties: false });

/**
 * Input type for editing and creating vips__user_role_department
 */
// @ts-ignore
export const vips__user_role_departmentInputSchema = TypeBox.Type.Object({

        department_id: TypeBox.Type.Number({ default: 0 }),

        role_id: TypeBox.Type.Number({ default: 0 }),

        user_id: TypeBox.Type.Number({ default: 0 }),

}, { additionalProperties: false });

export type Vips__user_role_departmentInput = TypeBox.Static<typeof vips__user_role_departmentInputSchema>;

@Entity()
// @ts-ignore
export class Vips__user_role_department implements TypeBox.Static<typeof vips__user_role_departmentSchema> {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @DeleteDateColumn()
    deletedAt?: Date;

        @Column({ type: 'integer', default: 0 })
        department_id!: number;

        @Column({ type: 'integer', default: 0 })
        role_id!: number;

        @Column({ type: 'integer', default: 0 })
        user_id!: number;

}
