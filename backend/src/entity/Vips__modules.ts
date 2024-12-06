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
 * Schema for vips__modules entity
 */
// @ts-ignore
export const vips__modulesSchema = TypeBox.Type.Object({
    id: TypeBox.Type.String({ format: 'uuid' }),

        module_id: TypeBox.Type.Number({ default: 0 }),

        module_name: TypeBox.Type.String({ default: '' }),

        module_slug: TypeBox.Type.String({ default: '' }),

        status: TypeBox.Type.Number({ default: 0 }),

        0=inactive: TypeBox.Type.String({ default: '' }),

}, { additionalProperties: false });

/**
 * Input type for editing and creating vips__modules
 */
// @ts-ignore
export const vips__modulesInputSchema = TypeBox.Type.Object({

        module_id: TypeBox.Type.Number({ default: 0 }),

        module_name: TypeBox.Type.String({ default: '' }),

        module_slug: TypeBox.Type.String({ default: '' }),

        status: TypeBox.Type.Number({ default: 0 }),

        0=inactive: TypeBox.Type.String({ default: '' }),

}, { additionalProperties: false });

export type Vips__modulesInput = TypeBox.Static<typeof vips__modulesInputSchema>;

@Entity()
// @ts-ignore
export class Vips__modules implements TypeBox.Static<typeof vips__modulesSchema> {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @DeleteDateColumn()
    deletedAt?: Date;

        @Column({ type: 'integer', default: 0 })
        module_id!: number;

        @Column({ default: '' })
        module_name!: string;

        @Column({ default: '' })
        module_slug!: string;

        @Column({ type: 'integer', default: 0 })
        status!: number;

        @Column({ default: '' })
        0=inactive!: string;

}
