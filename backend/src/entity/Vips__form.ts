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
 * Schema for vips__form entity
 */
// @ts-ignore
export const vips__formSchema = TypeBox.Type.Object({
    id: TypeBox.Type.String({ format: 'uuid' }),

        name: TypeBox.Type.String({ default: '' }),

        table_name: TypeBox.Type.String({ default: '' }),

        status: TypeBox.Type.Number({ default: 0 }),

}, { additionalProperties: false });

/**
 * Input type for editing and creating vips__form
 */
// @ts-ignore
export const vips__formInputSchema = TypeBox.Type.Object({

        name: TypeBox.Type.String({ default: '' }),

        table_name: TypeBox.Type.String({ default: '' }),

        status: TypeBox.Type.Number({ default: 0 }),

}, { additionalProperties: false });

export type Vips__formInput = TypeBox.Static<typeof vips__formInputSchema>;

@Entity()
// @ts-ignore
export class Vips__form implements TypeBox.Static<typeof vips__formSchema> {
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

        @Column({ default: '' })
        table_name!: string;

        @Column({ type: 'integer', default: 0 })
        status!: number;

}
