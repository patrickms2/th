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
 * Schema for vips__email_template_groups entity
 */
// @ts-ignore
export const vips__email_template_groupsSchema = TypeBox.Type.Object({
    id: TypeBox.Type.String({ format: 'uuid' }),

        email_group_name: TypeBox.Type.String({ default: '' }),

}, { additionalProperties: false });

/**
 * Input type for editing and creating vips__email_template_groups
 */
// @ts-ignore
export const vips__email_template_groupsInputSchema = TypeBox.Type.Object({

        email_group_name: TypeBox.Type.String({ default: '' }),

}, { additionalProperties: false });

export type Vips__email_template_groupsInput = TypeBox.Static<typeof vips__email_template_groupsInputSchema>;

@Entity()
// @ts-ignore
export class Vips__email_template_groups implements TypeBox.Static<typeof vips__email_template_groupsSchema> {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @DeleteDateColumn()
    deletedAt?: Date;

        @Column({ default: '' })
        email_group_name!: string;

}
