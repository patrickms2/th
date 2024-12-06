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
 * Schema for vips__slack_integration entity
 */
// @ts-ignore
export const vips__slack_integrationSchema = TypeBox.Type.Object({
    id: TypeBox.Type.String({ format: 'uuid' }),

        user_id: TypeBox.Type.Number({ default: 0 }),

        access_token: TypeBox.Type.String({ default: '' }),

        team_id: TypeBox.Type.String({ default: '' }),

        channel_id: TypeBox.Type.String({ default: '' }),

}, { additionalProperties: false });

/**
 * Input type for editing and creating vips__slack_integration
 */
// @ts-ignore
export const vips__slack_integrationInputSchema = TypeBox.Type.Object({

        user_id: TypeBox.Type.Number({ default: 0 }),

        access_token: TypeBox.Type.String({ default: '' }),

        team_id: TypeBox.Type.String({ default: '' }),

        channel_id: TypeBox.Type.String({ default: '' }),

}, { additionalProperties: false });

export type Vips__slack_integrationInput = TypeBox.Static<typeof vips__slack_integrationInputSchema>;

@Entity()
// @ts-ignore
export class Vips__slack_integration implements TypeBox.Static<typeof vips__slack_integrationSchema> {
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

        @Column({ default: '' })
        access_token!: string;

        @Column({ default: '' })
        team_id!: string;

        @Column({ default: '' })
        channel_id!: string;

}
