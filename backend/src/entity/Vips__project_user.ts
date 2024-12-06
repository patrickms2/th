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
 * Schema for vips__project_user entity
 */
// @ts-ignore
export const vips__project_userSchema = TypeBox.Type.Object({
    id: TypeBox.Type.String({ format: 'uuid' }),

        user_id: TypeBox.Type.Number({ default: 0 }),

        project_id: TypeBox.Type.Number({ default: 0 }),

        view: TypeBox.Type.Number({ default: 0 }),

        1=yes: TypeBox.Type.String({ default: '' }),

        edit: TypeBox.Type.Number({ default: 0 }),

        1=yes: TypeBox.Type.String({ default: '' }),

        1=yes: TypeBox.Type.String({ default: '' }),

}, { additionalProperties: false });

/**
 * Input type for editing and creating vips__project_user
 */
// @ts-ignore
export const vips__project_userInputSchema = TypeBox.Type.Object({

        user_id: TypeBox.Type.Number({ default: 0 }),

        project_id: TypeBox.Type.Number({ default: 0 }),

        view: TypeBox.Type.Number({ default: 0 }),

        1=yes: TypeBox.Type.String({ default: '' }),

        edit: TypeBox.Type.Number({ default: 0 }),

        1=yes: TypeBox.Type.String({ default: '' }),

        1=yes: TypeBox.Type.String({ default: '' }),

}, { additionalProperties: false });

export type Vips__project_userInput = TypeBox.Static<typeof vips__project_userInputSchema>;

@Entity()
// @ts-ignore
export class Vips__project_user implements TypeBox.Static<typeof vips__project_userSchema> {
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
        project_id!: number;

        @Column({ type: 'integer', default: 0 })
        view!: number;

        @Column({ default: '' })
        1=yes!: string;

        @Column({ type: 'integer', default: 0 })
        edit!: number;

        @Column({ default: '' })
        1=yes!: string;

        @Column({ default: '' })
        1=yes!: string;

}
