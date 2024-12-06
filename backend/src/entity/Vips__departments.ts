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
 * Schema for vips__departments entity
 */
// @ts-ignore
export const vips__departmentsSchema = TypeBox.Type.Object({
    id: TypeBox.Type.String({ format: 'uuid' }),

        name: TypeBox.Type.String({ default: '' }),

}, { additionalProperties: false });

/**
 * Input type for editing and creating vips__departments
 */
// @ts-ignore
export const vips__departmentsInputSchema = TypeBox.Type.Object({

        name: TypeBox.Type.String({ default: '' }),

}, { additionalProperties: false });

export type Vips__departmentsInput = TypeBox.Static<typeof vips__departmentsInputSchema>;

@Entity()
// @ts-ignore
export class Vips__departments implements TypeBox.Static<typeof vips__departmentsSchema> {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @DeleteDateColumn()
    deletedAt?: Date;

        @Column({ default: '' })
        name!: string;

}
