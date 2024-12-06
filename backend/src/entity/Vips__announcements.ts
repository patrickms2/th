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
 * Schema for vips__announcements entity
 */
// @ts-ignore
export const vips__announcementsSchema = TypeBox.Type.Object({
    id: TypeBox.Type.String({ format: 'uuid' }),

        user_id: TypeBox.Type.Number({ default: 0 }),

        title: TypeBox.Type.String({ default: '' }),

        description: TypeBox.Type.String({ default: '' }),

        status: TypeBox.Type.Number({ default: 0 }),

        1=publish: TypeBox.Type.String({ default: '' }),

        2=completed: TypeBox.Type.String({ default: '' }),

        start_date: TypeBox.Type.Optional(TypeBox.Type.String({ format: 'date' })),

        end_date: TypeBox.Type.Optional(TypeBox.Type.String({ format: 'date' })),

        all_client: TypeBox.Type.Number({ default: 0 }),

        1=all: TypeBox.Type.String({ default: '' }),

}, { additionalProperties: false });

/**
 * Input type for editing and creating vips__announcements
 */
// @ts-ignore
export const vips__announcementsInputSchema = TypeBox.Type.Object({

        user_id: TypeBox.Type.Number({ default: 0 }),

        title: TypeBox.Type.String({ default: '' }),

        description: TypeBox.Type.String({ default: '' }),

        status: TypeBox.Type.Number({ default: 0 }),

        1=publish: TypeBox.Type.String({ default: '' }),

        2=completed: TypeBox.Type.String({ default: '' }),

        start_date: TypeBox.Type.Optional(TypeBox.Type.String({ format: 'date' })),

        end_date: TypeBox.Type.Optional(TypeBox.Type.String({ format: 'date' })),

        all_client: TypeBox.Type.Number({ default: 0 }),

        1=all: TypeBox.Type.String({ default: '' }),

}, { additionalProperties: false });

export type Vips__announcementsInput = TypeBox.Static<typeof vips__announcementsInputSchema>;

@Entity()
// @ts-ignore
export class Vips__announcements implements TypeBox.Static<typeof vips__announcementsSchema> {
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
        title!: string;

        @Column({ default: '' })
        description!: string;

        @Column({ type: 'integer', default: 0 })
        status!: number;

        @Column({ default: '' })
        1=publish!: string;

        @Column({ default: '' })
        2=completed!: string;

        @Column({ type: 'date', nullable: true })
        start_date?: string;

        @Column({ type: 'date', nullable: true })
        end_date?: string;

        @Column({ type: 'integer', default: 0 })
        all_client!: number;

        @Column({ default: '' })
        1=all!: string;

}
