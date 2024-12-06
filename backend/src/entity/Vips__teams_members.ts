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
 * Schema for vips__teams_members entity
 */
// @ts-ignore
export const vips__teams_membersSchema = TypeBox.Type.Object({
    id: TypeBox.Type.String({ format: 'uuid' }),

        team_id: TypeBox.Type.Number({ default: 0 }),

        user_id: TypeBox.Type.Number({ default: 0 }),

}, { additionalProperties: false });

/**
 * Input type for editing and creating vips__teams_members
 */
// @ts-ignore
export const vips__teams_membersInputSchema = TypeBox.Type.Object({

        team_id: TypeBox.Type.Number({ default: 0 }),

        user_id: TypeBox.Type.Number({ default: 0 }),

}, { additionalProperties: false });

export type Vips__teams_membersInput = TypeBox.Static<typeof vips__teams_membersInputSchema>;

@Entity()
// @ts-ignore
export class Vips__teams_members implements TypeBox.Static<typeof vips__teams_membersSchema> {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @DeleteDateColumn()
    deletedAt?: Date;

        @Column({ type: 'integer', default: 0 })
        team_id!: number;

        @Column({ type: 'integer', default: 0 })
        user_id!: number;

}
