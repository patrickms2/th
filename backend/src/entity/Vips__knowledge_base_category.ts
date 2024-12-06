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
 * Schema for vips__knowledge_base_category entity
 */
// @ts-ignore
export const vips__knowledge_base_categorySchema = TypeBox.Type.Object({
    id: TypeBox.Type.String({ format: 'uuid' }),

        user_id: TypeBox.Type.Number({ default: 0 }),

        category_name: TypeBox.Type.String({ default: '' }),

        category_logo: TypeBox.Type.String({ default: '' }),

}, { additionalProperties: false });

/**
 * Input type for editing and creating vips__knowledge_base_category
 */
// @ts-ignore
export const vips__knowledge_base_categoryInputSchema = TypeBox.Type.Object({

        user_id: TypeBox.Type.Number({ default: 0 }),

        category_name: TypeBox.Type.String({ default: '' }),

        category_logo: TypeBox.Type.String({ default: '' }),

}, { additionalProperties: false });

export type Vips__knowledge_base_categoryInput = TypeBox.Static<typeof vips__knowledge_base_categoryInputSchema>;

@Entity()
// @ts-ignore
export class Vips__knowledge_base_category implements TypeBox.Static<typeof vips__knowledge_base_categorySchema> {
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
        category_name!: string;

        @Column({ default: '' })
        category_logo!: string;

}
