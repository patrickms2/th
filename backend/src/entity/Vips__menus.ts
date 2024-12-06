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
 * Schema for vips__menus entity
 */
// @ts-ignore
export const vips__menusSchema = TypeBox.Type.Object({
    id: TypeBox.Type.String({ format: 'uuid' }),

        parent_menu_id: TypeBox.Type.Number({ default: 0 }),

        module: TypeBox.Type.String({ default: '' }),

        label: TypeBox.Type.String({ default: '' }),

        text: TypeBox.Type.String({ default: '' }),

        link: TypeBox.Type.String({ default: '' }),

        icon: TypeBox.Type.String({ default: '' }),

        order: TypeBox.Type.Number({ default: 0 }),

        subscription: TypeBox.Type.Number({ default: 0 }),

        0=unsubscription: TypeBox.Type.String({ default: '' }),

        status: TypeBox.Type.Number({ default: 0 }),

        0=inactive: TypeBox.Type.String({ default: '' }),

}, { additionalProperties: false });

/**
 * Input type for editing and creating vips__menus
 */
// @ts-ignore
export const vips__menusInputSchema = TypeBox.Type.Object({

        parent_menu_id: TypeBox.Type.Number({ default: 0 }),

        module: TypeBox.Type.String({ default: '' }),

        label: TypeBox.Type.String({ default: '' }),

        text: TypeBox.Type.String({ default: '' }),

        link: TypeBox.Type.String({ default: '' }),

        icon: TypeBox.Type.String({ default: '' }),

        order: TypeBox.Type.Number({ default: 0 }),

        subscription: TypeBox.Type.Number({ default: 0 }),

        0=unsubscription: TypeBox.Type.String({ default: '' }),

        status: TypeBox.Type.Number({ default: 0 }),

        0=inactive: TypeBox.Type.String({ default: '' }),

}, { additionalProperties: false });

export type Vips__menusInput = TypeBox.Static<typeof vips__menusInputSchema>;

@Entity()
// @ts-ignore
export class Vips__menus implements TypeBox.Static<typeof vips__menusSchema> {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @DeleteDateColumn()
    deletedAt?: Date;

        @Column({ type: 'integer', default: 0 })
        parent_menu_id!: number;

        @Column({ default: '' })
        module!: string;

        @Column({ default: '' })
        label!: string;

        @Column({ default: '' })
        text!: string;

        @Column({ default: '' })
        link!: string;

        @Column({ default: '' })
        icon!: string;

        @Column({ type: 'integer', default: 0 })
        order!: number;

        @Column({ type: 'integer', default: 0 })
        subscription!: number;

        @Column({ default: '' })
        0=unsubscription!: string;

        @Column({ type: 'integer', default: 0 })
        status!: number;

        @Column({ default: '' })
        0=inactive!: string;

}
