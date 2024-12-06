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
 * Schema for vips__knowledge_base_article entity
 */
// @ts-ignore
export const vips__knowledge_base_articleSchema = TypeBox.Type.Object({
    id: TypeBox.Type.String({ format: 'uuid' }),

        category_id: TypeBox.Type.Number({ default: 0 }),

        user_id: TypeBox.Type.Number({ default: 0 }),

        article_title: TypeBox.Type.String({ default: '' }),

        description: TypeBox.Type.String({ default: '' }),

        file_name: TypeBox.Type.String({ default: '' }),

}, { additionalProperties: false });

/**
 * Input type for editing and creating vips__knowledge_base_article
 */
// @ts-ignore
export const vips__knowledge_base_articleInputSchema = TypeBox.Type.Object({

        category_id: TypeBox.Type.Number({ default: 0 }),

        user_id: TypeBox.Type.Number({ default: 0 }),

        article_title: TypeBox.Type.String({ default: '' }),

        description: TypeBox.Type.String({ default: '' }),

        file_name: TypeBox.Type.String({ default: '' }),

}, { additionalProperties: false });

export type Vips__knowledge_base_articleInput = TypeBox.Static<typeof vips__knowledge_base_articleInputSchema>;

@Entity()
// @ts-ignore
export class Vips__knowledge_base_article implements TypeBox.Static<typeof vips__knowledge_base_articleSchema> {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @DeleteDateColumn()
    deletedAt?: Date;

        @Column({ type: 'integer', default: 0 })
        category_id!: number;

        @Column({ type: 'integer', default: 0 })
        user_id!: number;

        @Column({ default: '' })
        article_title!: string;

        @Column({ default: '' })
        description!: string;

        @Column({ default: '' })
        file_name!: string;

}
