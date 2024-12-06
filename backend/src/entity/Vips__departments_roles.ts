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
 * Schema for vips__departments_roles entity
 */
// @ts-ignore
export const vips__departments_rolesSchema = TypeBox.Type.Object({
    id: TypeBox.Type.String({ format: 'uuid' }),

        role_id: TypeBox.Type.Number({ default: 0 }),

        department_id: TypeBox.Type.Number({ default: 0 }),

}, { additionalProperties: false });

/**
 * Input type for editing and creating vips__departments_roles
 */
// @ts-ignore
export const vips__departments_rolesInputSchema = TypeBox.Type.Object({

        role_id: TypeBox.Type.Number({ default: 0 }),

        department_id: TypeBox.Type.Number({ default: 0 }),

}, { additionalProperties: false });

export type Vips__departments_rolesInput = TypeBox.Static<typeof vips__departments_rolesInputSchema>;

@Entity()
// @ts-ignore
export class Vips__departments_roles implements TypeBox.Static<typeof vips__departments_rolesSchema> {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @DeleteDateColumn()
    deletedAt?: Date;

        @Column({ type: 'integer', default: 0 })
        role_id!: number;

        @Column({ type: 'integer', default: 0 })
        department_id!: number;

}
