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
 * Schema for vips__taxes entity
 */
// @ts-ignore
export const vips__taxesSchema = TypeBox.Type.Object({
    id: TypeBox.Type.String({ format: 'uuid' }),

        tax_name: TypeBox.Type.String({ default: '' }),

        tax_rate: TypeBox.Type.String({ default: '' }),

}, { additionalProperties: false });

/**
 * Input type for editing and creating vips__taxes
 */
// @ts-ignore
export const vips__taxesInputSchema = TypeBox.Type.Object({

        tax_name: TypeBox.Type.String({ default: '' }),

        tax_rate: TypeBox.Type.String({ default: '' }),

}, { additionalProperties: false });

export type Vips__taxesInput = TypeBox.Static<typeof vips__taxesInputSchema>;

@Entity()
// @ts-ignore
export class Vips__taxes implements TypeBox.Static<typeof vips__taxesSchema> {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @DeleteDateColumn()
    deletedAt?: Date;

        @Column({ default: '' })
        tax_name!: string;

        @Column({ default: '' })
        tax_rate!: string;

}
