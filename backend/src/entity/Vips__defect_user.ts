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
 * Schema for vips__defect_user entity
 */
// @ts-ignore
export const vips__defect_userSchema = TypeBox.Type.Object({
    id: TypeBox.Type.String({ format: 'uuid' }),

        defect_id: TypeBox.Type.Number({ default: 0 }),

        user_id: TypeBox.Type.Number({ default: 0 }),

}, { additionalProperties: false });

/**
 * Input type for editing and creating vips__defect_user
 */
// @ts-ignore
export const vips__defect_userInputSchema = TypeBox.Type.Object({

        defect_id: TypeBox.Type.Number({ default: 0 }),

        user_id: TypeBox.Type.Number({ default: 0 }),

}, { additionalProperties: false });

export type Vips__defect_userInput = TypeBox.Static<typeof vips__defect_userInputSchema>;

@Entity()
// @ts-ignore
export class Vips__defect_user implements TypeBox.Static<typeof vips__defect_userSchema> {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @DeleteDateColumn()
    deletedAt?: Date;

        @Column({ type: 'integer', default: 0 })
        defect_id!: number;

        @Column({ type: 'integer', default: 0 })
        user_id!: number;

}
