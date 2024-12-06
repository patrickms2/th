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
 * Schema for vips__meeting_members entity
 */
// @ts-ignore
export const vips__meeting_membersSchema = TypeBox.Type.Object({
    id: TypeBox.Type.String({ format: 'uuid' }),

        user_id: TypeBox.Type.Number({ default: 0 }),

        meeting_id: TypeBox.Type.Number({ default: 0 }),

}, { additionalProperties: false });

/**
 * Input type for editing and creating vips__meeting_members
 */
// @ts-ignore
export const vips__meeting_membersInputSchema = TypeBox.Type.Object({

        user_id: TypeBox.Type.Number({ default: 0 }),

        meeting_id: TypeBox.Type.Number({ default: 0 }),

}, { additionalProperties: false });

export type Vips__meeting_membersInput = TypeBox.Static<typeof vips__meeting_membersInputSchema>;

@Entity()
// @ts-ignore
export class Vips__meeting_members implements TypeBox.Static<typeof vips__meeting_membersSchema> {
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
        meeting_id!: number;

}
