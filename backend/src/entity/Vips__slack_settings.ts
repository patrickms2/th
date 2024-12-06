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
 * Schema for vips__slack_settings entity
 */
// @ts-ignore
export const vips__slack_settingsSchema = TypeBox.Type.Object({
    id: TypeBox.Type.String({ format: 'uuid' }),

        slack_client_id: TypeBox.Type.String({ default: '' }),

        slack_client_secret: TypeBox.Type.String({ default: '' }),

        slack_redirect_url: TypeBox.Type.String({ default: '' }),

        is_authenticate: TypeBox.Type.Number({ default: 0 }),

        slack_status: TypeBox.Type.Number({ default: 0 }),

        0=inactive: TypeBox.Type.String({ default: '' }),

}, { additionalProperties: false });

/**
 * Input type for editing and creating vips__slack_settings
 */
// @ts-ignore
export const vips__slack_settingsInputSchema = TypeBox.Type.Object({

        slack_client_id: TypeBox.Type.String({ default: '' }),

        slack_client_secret: TypeBox.Type.String({ default: '' }),

        slack_redirect_url: TypeBox.Type.String({ default: '' }),

        is_authenticate: TypeBox.Type.Number({ default: 0 }),

        slack_status: TypeBox.Type.Number({ default: 0 }),

        0=inactive: TypeBox.Type.String({ default: '' }),

}, { additionalProperties: false });

export type Vips__slack_settingsInput = TypeBox.Static<typeof vips__slack_settingsInputSchema>;

@Entity()
// @ts-ignore
export class Vips__slack_settings implements TypeBox.Static<typeof vips__slack_settingsSchema> {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @DeleteDateColumn()
    deletedAt?: Date;

        @Column({ default: '' })
        slack_client_id!: string;

        @Column({ default: '' })
        slack_client_secret!: string;

        @Column({ default: '' })
        slack_redirect_url!: string;

        @Column({ type: 'integer', default: 0 })
        is_authenticate!: number;

        @Column({ type: 'integer', default: 0 })
        slack_status!: number;

        @Column({ default: '' })
        0=inactive!: string;

}
