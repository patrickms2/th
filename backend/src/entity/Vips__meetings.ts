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
 * Schema for vips__meetings entity
 */
// @ts-ignore
export const vips__meetingsSchema = TypeBox.Type.Object({
    id: TypeBox.Type.String({ format: 'uuid' }),

        generated_id: TypeBox.Type.String({ default: '' }),

        organizer_id: TypeBox.Type.Number({ default: 0 }),

        project_id: TypeBox.Type.Number({ default: 0 }),

        client_id: TypeBox.Type.Number({ default: 0 }),

        title: TypeBox.Type.String({ default: '' }),

        description: TypeBox.Type.String({ default: '' }),

        location: TypeBox.Type.String({ default: '' }),

        start_date: TypeBox.Type.String({ format: 'date-time' }),

        end_date: TypeBox.Type.String({ format: 'date-time' }),

        hour_time: TypeBox.Type.String({ default: '' }),

        status: TypeBox.Type.Number({ default: 0 }),

        2=in: TypeBox.Type.String({ default: '' }),

        3=cancel: TypeBox.Type.String({ default: '' }),

        4=completed: TypeBox.Type.String({ default: '' }),

}, { additionalProperties: false });

/**
 * Input type for editing and creating vips__meetings
 */
// @ts-ignore
export const vips__meetingsInputSchema = TypeBox.Type.Object({

        generated_id: TypeBox.Type.String({ default: '' }),

        organizer_id: TypeBox.Type.Number({ default: 0 }),

        project_id: TypeBox.Type.Number({ default: 0 }),

        client_id: TypeBox.Type.Number({ default: 0 }),

        title: TypeBox.Type.String({ default: '' }),

        description: TypeBox.Type.String({ default: '' }),

        location: TypeBox.Type.String({ default: '' }),

        start_date: TypeBox.Type.String({ format: 'date-time' }),

        end_date: TypeBox.Type.String({ format: 'date-time' }),

        hour_time: TypeBox.Type.String({ default: '' }),

        status: TypeBox.Type.Number({ default: 0 }),

        2=in: TypeBox.Type.String({ default: '' }),

        3=cancel: TypeBox.Type.String({ default: '' }),

        4=completed: TypeBox.Type.String({ default: '' }),

}, { additionalProperties: false });

export type Vips__meetingsInput = TypeBox.Static<typeof vips__meetingsInputSchema>;

@Entity()
// @ts-ignore
export class Vips__meetings implements Omit<TypeBox.Static<typeof vips__meetingsSchema>, 'start_date' | 'end_date'> {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @DeleteDateColumn()
    deletedAt?: Date;

        @Column({ default: '' })
        generated_id!: string;

        @Column({ type: 'integer', default: 0 })
        organizer_id!: number;

        @Column({ type: 'integer', default: 0 })
        project_id!: number;

        @Column({ type: 'integer', default: 0 })
        client_id!: number;

        @Column({ default: '' })
        title!: string;

        @Column({ default: '' })
        description!: string;

        @Column({ default: '' })
        location!: string;

        @Column({ type: 'datetime', nullable: true })
        start_date?: Date;

        @Column({ type: 'datetime', nullable: true })
        end_date?: Date;

        @Column({ default: '' })
        hour_time!: string;

        @Column({ type: 'integer', default: 0 })
        status!: number;

        @Column({ default: '' })
        2=in!: string;

        @Column({ default: '' })
        3=cancel!: string;

        @Column({ default: '' })
        4=completed!: string;

}
