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
 * Schema for vips__department_role_menu entity
 */
// @ts-ignore
export const vips__department_role_menuSchema = TypeBox.Type.Object({
    id: TypeBox.Type.String({ format: 'uuid' }),

        department_id: TypeBox.Type.Number({ default: 0 }),

        role_id: TypeBox.Type.Number({ default: 0 }),

        menu_id: TypeBox.Type.Number({ default: 0 }),

        view: TypeBox.Type.Number({ default: 0 }),

        created: TypeBox.Type.Number({ default: 0 }),

        edited: TypeBox.Type.Number({ default: 0 }),

        deleted: TypeBox.Type.Number({ default: 0 }),

}, { additionalProperties: false });

/**
 * Input type for editing and creating vips__department_role_menu
 */
// @ts-ignore
export const vips__department_role_menuInputSchema = TypeBox.Type.Object({

        department_id: TypeBox.Type.Number({ default: 0 }),

        role_id: TypeBox.Type.Number({ default: 0 }),

        menu_id: TypeBox.Type.Number({ default: 0 }),

        view: TypeBox.Type.Number({ default: 0 }),

        created: TypeBox.Type.Number({ default: 0 }),

        edited: TypeBox.Type.Number({ default: 0 }),

        deleted: TypeBox.Type.Number({ default: 0 }),

}, { additionalProperties: false });

export type Vips__department_role_menuInput = TypeBox.Static<typeof vips__department_role_menuInputSchema>;

@Entity()
// @ts-ignore
export class Vips__department_role_menu implements TypeBox.Static<typeof vips__department_role_menuSchema> {
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
        menu_id!: number;

        @Column({ type: 'integer', default: 0 })
        view!: number;

        @Column({ type: 'integer', default: 0 })
        created!: number;

        @Column({ type: 'integer', default: 0 })
        edited!: number;

        @Column({ type: 'integer', default: 0 })
        deleted!: number;

}
