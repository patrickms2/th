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
 * Schema for vips__teams entity
 */
// @ts-ignore
export const vips__teamsSchema = TypeBox.Type.Object({
    id: TypeBox.Type.String({ format: 'uuid' }),

        team_name: TypeBox.Type.String({ default: '' }),

        team_leader: TypeBox.Type.Number({ default: 0 }),

        description: TypeBox.Type.String({ default: '' }),

}, { additionalProperties: false });

/**
 * Input type for editing and creating vips__teams
 */
// @ts-ignore
export const vips__teamsInputSchema = TypeBox.Type.Object({

        team_name: TypeBox.Type.String({ default: '' }),

        team_leader: TypeBox.Type.Number({ default: 0 }),

        description: TypeBox.Type.String({ default: '' }),

}, { additionalProperties: false });

export type Vips__teamsInput = TypeBox.Static<typeof vips__teamsInputSchema>;

@Entity()
// @ts-ignore
export class Vips__teams implements TypeBox.Static<typeof vips__teamsSchema> {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @DeleteDateColumn()
    deletedAt?: Date;

        @Column({ default: '' })
        team_name!: string;

        @Column({ type: 'integer', default: 0 })
        team_leader!: number;

        @Column({ default: '' })
        description!: string;

}
