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
 * Schema for vips__holidays entity
 */
// @ts-ignore
export const vips__holidaysSchema = TypeBox.Type.Object({
    id: TypeBox.Type.String({ format: 'uuid' }),

        event_name: TypeBox.Type.String({ default: '' }),

        description: TypeBox.Type.String({ default: '' }),

        date: TypeBox.Type.Optional(TypeBox.Type.String({ format: 'date' })),

        location: TypeBox.Type.String({ default: '' }),

        color: TypeBox.Type.String({ default: '' }),

}, { additionalProperties: false });

/**
 * Input type for editing and creating vips__holidays
 */
// @ts-ignore
export const vips__holidaysInputSchema = TypeBox.Type.Object({

        event_name: TypeBox.Type.String({ default: '' }),

        description: TypeBox.Type.String({ default: '' }),

        date: TypeBox.Type.Optional(TypeBox.Type.String({ format: 'date' })),

        location: TypeBox.Type.String({ default: '' }),

        color: TypeBox.Type.String({ default: '' }),

}, { additionalProperties: false });

export type Vips__holidaysInput = TypeBox.Static<typeof vips__holidaysInputSchema>;

@Entity()
// @ts-ignore
export class Vips__holidays implements TypeBox.Static<typeof vips__holidaysSchema> {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @DeleteDateColumn()
    deletedAt?: Date;

        @Column({ default: '' })
        event_name!: string;

        @Column({ default: '' })
        description!: string;

        @Column({ type: 'date', nullable: true })
        date?: string;

        @Column({ default: '' })
        location!: string;

        @Column({ default: '' })
        color!: string;

}
