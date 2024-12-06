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
 * Schema for vips__languages entity
 */
// @ts-ignore
export const vips__languagesSchema = TypeBox.Type.Object({
    id: TypeBox.Type.String({ format: 'uuid' }),

        code: TypeBox.Type.String({ default: '' }),

        name: TypeBox.Type.String({ default: '' }),

        status: TypeBox.Type.Number({ default: 0 }),

        1=active: TypeBox.Type.String({ default: '' }),

}, { additionalProperties: false });

/**
 * Input type for editing and creating vips__languages
 */
// @ts-ignore
export const vips__languagesInputSchema = TypeBox.Type.Object({

        code: TypeBox.Type.String({ default: '' }),

        name: TypeBox.Type.String({ default: '' }),

        status: TypeBox.Type.Number({ default: 0 }),

        1=active: TypeBox.Type.String({ default: '' }),

}, { additionalProperties: false });

export type Vips__languagesInput = TypeBox.Static<typeof vips__languagesInputSchema>;

@Entity()
// @ts-ignore
export class Vips__languages implements TypeBox.Static<typeof vips__languagesSchema> {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @DeleteDateColumn()
    deletedAt?: Date;

        @Column({ default: '' })
        code!: string;

        @Column({ default: '' })
        name!: string;

        @Column({ type: 'integer', default: 0 })
        status!: number;

        @Column({ default: '' })
        1=active!: string;

}
