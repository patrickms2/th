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
 * Schema for vips__incident_user entity
 */
// @ts-ignore
export const vips__incident_userSchema = TypeBox.Type.Object({
    id: TypeBox.Type.String({ format: 'uuid' }),

        incident_id: TypeBox.Type.Number({ default: 0 }),

        user_id: TypeBox.Type.Number({ default: 0 }),

}, { additionalProperties: false });

/**
 * Input type for editing and creating vips__incident_user
 */
// @ts-ignore
export const vips__incident_userInputSchema = TypeBox.Type.Object({

        incident_id: TypeBox.Type.Number({ default: 0 }),

        user_id: TypeBox.Type.Number({ default: 0 }),

}, { additionalProperties: false });

export type Vips__incident_userInput = TypeBox.Static<typeof vips__incident_userInputSchema>;

@Entity()
// @ts-ignore
export class Vips__incident_user implements TypeBox.Static<typeof vips__incident_userSchema> {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @DeleteDateColumn()
    deletedAt?: Date;

        @Column({ type: 'integer', default: 0 })
        incident_id!: number;

        @Column({ type: 'integer', default: 0 })
        user_id!: number;

}
