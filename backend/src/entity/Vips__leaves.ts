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
 * Schema for vips__leaves entity
 */
// @ts-ignore
export const vips__leavesSchema = TypeBox.Type.Object({
    id: TypeBox.Type.String({ format: 'uuid' }),

        user_id: TypeBox.Type.Number({ default: 0 }),

        leave_type_id: TypeBox.Type.Number({ default: 0 }),

        duration: TypeBox.Type.String({ default: '' }),

        half: TypeBox.Type.String({ default: '' }),

        duration_type: TypeBox.Type.String({ default: '' }),

        second_half: TypeBox.Type.String({ default: '' }),

        leave_day: TypeBox.Type.String({ default: '' }),

        leave_date: TypeBox.Type.Optional(TypeBox.Type.String({ format: 'date' })),

        reason: TypeBox.Type.String({ default: '' }),

        reject_reason: TypeBox.Type.String({ default: '' }),

        status: TypeBox.Type.Number({ default: 0 }),

        2=approved: TypeBox.Type.String({ default: '' }),

        3=rejected: TypeBox.Type.String({ default: '' }),

        4=cancel: TypeBox.Type.String({ default: '' }),

        5=taken: TypeBox.Type.String({ default: '' }),

}, { additionalProperties: false });

/**
 * Input type for editing and creating vips__leaves
 */
// @ts-ignore
export const vips__leavesInputSchema = TypeBox.Type.Object({

        user_id: TypeBox.Type.Number({ default: 0 }),

        leave_type_id: TypeBox.Type.Number({ default: 0 }),

        duration: TypeBox.Type.String({ default: '' }),

        half: TypeBox.Type.String({ default: '' }),

        duration_type: TypeBox.Type.String({ default: '' }),

        second_half: TypeBox.Type.String({ default: '' }),

        leave_day: TypeBox.Type.String({ default: '' }),

        leave_date: TypeBox.Type.Optional(TypeBox.Type.String({ format: 'date' })),

        reason: TypeBox.Type.String({ default: '' }),

        reject_reason: TypeBox.Type.String({ default: '' }),

        status: TypeBox.Type.Number({ default: 0 }),

        2=approved: TypeBox.Type.String({ default: '' }),

        3=rejected: TypeBox.Type.String({ default: '' }),

        4=cancel: TypeBox.Type.String({ default: '' }),

        5=taken: TypeBox.Type.String({ default: '' }),

}, { additionalProperties: false });

export type Vips__leavesInput = TypeBox.Static<typeof vips__leavesInputSchema>;

@Entity()
// @ts-ignore
export class Vips__leaves implements TypeBox.Static<typeof vips__leavesSchema> {
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
        leave_type_id!: number;

        @Column({ default: '' })
        duration!: string;

        @Column({ default: '' })
        half!: string;

        @Column({ default: '' })
        duration_type!: string;

        @Column({ default: '' })
        second_half!: string;

        @Column({ default: '' })
        leave_day!: string;

        @Column({ type: 'date', nullable: true })
        leave_date?: string;

        @Column({ default: '' })
        reason!: string;

        @Column({ default: '' })
        reject_reason!: string;

        @Column({ type: 'integer', default: 0 })
        status!: number;

        @Column({ default: '' })
        2=approved!: string;

        @Column({ default: '' })
        3=rejected!: string;

        @Column({ default: '' })
        4=cancel!: string;

        @Column({ default: '' })
        5=taken!: string;

}
