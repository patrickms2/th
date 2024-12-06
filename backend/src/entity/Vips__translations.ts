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
 * Schema for vips__translations entity
 */
// @ts-ignore
export const vips__translationsSchema = TypeBox.Type.Object({
    id: TypeBox.Type.String({ format: 'uuid' }),

        name: TypeBox.Type.String({ default: '' }),

        language: TypeBox.Type.String({ default: '' }),

        icon: TypeBox.Type.String({ default: '' }),

        status: TypeBox.Type.Number({ default: 0 }),

        0=inactive: TypeBox.Type.String({ default: '' }),

}, { additionalProperties: false });

/**
 * Input type for editing and creating vips__translations
 */
// @ts-ignore
export const vips__translationsInputSchema = TypeBox.Type.Object({

        name: TypeBox.Type.String({ default: '' }),

        language: TypeBox.Type.String({ default: '' }),

        icon: TypeBox.Type.String({ default: '' }),

        status: TypeBox.Type.Number({ default: 0 }),

        0=inactive: TypeBox.Type.String({ default: '' }),

}, { additionalProperties: false });

export type Vips__translationsInput = TypeBox.Static<typeof vips__translationsInputSchema>;

@Entity()
// @ts-ignore
export class Vips__translations implements TypeBox.Static<typeof vips__translationsSchema> {
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
        language!: string;

        @Column({ default: '' })
        icon!: string;

        @Column({ type: 'integer', default: 0 })
        status!: number;

        @Column({ default: '' })
        0=inactive!: string;

}
