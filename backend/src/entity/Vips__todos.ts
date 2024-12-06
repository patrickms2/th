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
 * Schema for vips__todos entity
 */
// @ts-ignore
export const vips__todosSchema = TypeBox.Type.Object({
    id: TypeBox.Type.String({ format: 'uuid' }),

        user_id: TypeBox.Type.Number({ default: 0 }),

        module_id: TypeBox.Type.Number({ default: 0 }),

        module_related_id: TypeBox.Type.Number({ default: 0 }),

        description: TypeBox.Type.String({ default: '' }),

        due_date: TypeBox.Type.Optional(TypeBox.Type.String({ format: 'date' })),

        order: TypeBox.Type.Number({ default: 0 }),

        status: TypeBox.Type.Number({ default: 0 }),

        2=completed: TypeBox.Type.String({ default: '' }),

}, { additionalProperties: false });

/**
 * Input type for editing and creating vips__todos
 */
// @ts-ignore
export const vips__todosInputSchema = TypeBox.Type.Object({

        user_id: TypeBox.Type.Number({ default: 0 }),

        module_id: TypeBox.Type.Number({ default: 0 }),

        module_related_id: TypeBox.Type.Number({ default: 0 }),

        description: TypeBox.Type.String({ default: '' }),

        due_date: TypeBox.Type.Optional(TypeBox.Type.String({ format: 'date' })),

        order: TypeBox.Type.Number({ default: 0 }),

        status: TypeBox.Type.Number({ default: 0 }),

        2=completed: TypeBox.Type.String({ default: '' }),

}, { additionalProperties: false });

export type Vips__todosInput = TypeBox.Static<typeof vips__todosInputSchema>;

@Entity()
// @ts-ignore
export class Vips__todos implements TypeBox.Static<typeof vips__todosSchema> {
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

        @Column({ type: 'integer', default: 0 })
        module_id!: number;

        @Column({ type: 'integer', default: 0 })
        module_related_id!: number;

        @Column({ default: '' })
        description!: string;

        @Column({ type: 'date', nullable: true })
        due_date?: string;

        @Column({ type: 'integer', default: 0 })
        order!: number;

        @Column({ type: 'integer', default: 0 })
        status!: number;

        @Column({ default: '' })
        2=completed!: string;

}
