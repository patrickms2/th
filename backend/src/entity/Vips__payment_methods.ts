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
 * Schema for vips__payment_methods entity
 */
// @ts-ignore
export const vips__payment_methodsSchema = TypeBox.Type.Object({
    id: TypeBox.Type.String({ format: 'uuid' }),

        method_name: TypeBox.Type.String({ default: '' }),

        description: TypeBox.Type.String({ default: '' }),

        show_on_pdf: TypeBox.Type.Number({ default: 0 }),

        status: TypeBox.Type.Number({ default: 0 }),

        0=inactive: TypeBox.Type.String({ default: '' }),

}, { additionalProperties: false });

/**
 * Input type for editing and creating vips__payment_methods
 */
// @ts-ignore
export const vips__payment_methodsInputSchema = TypeBox.Type.Object({

        method_name: TypeBox.Type.String({ default: '' }),

        description: TypeBox.Type.String({ default: '' }),

        show_on_pdf: TypeBox.Type.Number({ default: 0 }),

        status: TypeBox.Type.Number({ default: 0 }),

        0=inactive: TypeBox.Type.String({ default: '' }),

}, { additionalProperties: false });

export type Vips__payment_methodsInput = TypeBox.Static<typeof vips__payment_methodsInputSchema>;

@Entity()
// @ts-ignore
export class Vips__payment_methods implements TypeBox.Static<typeof vips__payment_methodsSchema> {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @DeleteDateColumn()
    deletedAt?: Date;

        @Column({ default: '' })
        method_name!: string;

        @Column({ default: '' })
        description!: string;

        @Column({ type: 'integer', default: 0 })
        show_on_pdf!: number;

        @Column({ type: 'integer', default: 0 })
        status!: number;

        @Column({ default: '' })
        0=inactive!: string;

}
