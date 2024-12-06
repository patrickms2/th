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
 * Schema for vips__email_template entity
 */
// @ts-ignore
export const vips__email_templateSchema = TypeBox.Type.Object({
    id: TypeBox.Type.String({ format: 'uuid' }),

        email_group_id: TypeBox.Type.Number({ default: 0 }),

        template_name: TypeBox.Type.String({ default: '' }),

        template_subject: TypeBox.Type.String({ default: '' }),

        template_body: TypeBox.Type.String({ default: '' }),

        type: TypeBox.Type.String({ default: '' }),

}, { additionalProperties: false });

/**
 * Input type for editing and creating vips__email_template
 */
// @ts-ignore
export const vips__email_templateInputSchema = TypeBox.Type.Object({

        email_group_id: TypeBox.Type.Number({ default: 0 }),

        template_name: TypeBox.Type.String({ default: '' }),

        template_subject: TypeBox.Type.String({ default: '' }),

        template_body: TypeBox.Type.String({ default: '' }),

        type: TypeBox.Type.String({ default: '' }),

}, { additionalProperties: false });

export type Vips__email_templateInput = TypeBox.Static<typeof vips__email_templateInputSchema>;

@Entity()
// @ts-ignore
export class Vips__email_template implements TypeBox.Static<typeof vips__email_templateSchema> {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @DeleteDateColumn()
    deletedAt?: Date;

        @Column({ type: 'integer', default: 0 })
        email_group_id!: number;

        @Column({ default: '' })
        template_name!: string;

        @Column({ default: '' })
        template_subject!: string;

        @Column({ default: '' })
        template_body!: string;

        @Column({ default: '' })
        type!: string;

}
