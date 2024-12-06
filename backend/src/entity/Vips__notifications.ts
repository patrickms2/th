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
 * Schema for vips__notifications entity
 */
// @ts-ignore
export const vips__notificationsSchema = TypeBox.Type.Object({
    id: TypeBox.Type.String({ format: 'uuid' }),

        user_id: TypeBox.Type.Number({ default: 0 }),

        route: TypeBox.Type.String({ default: '' }),

        route_related_id: TypeBox.Type.Number({ default: 0 }),

        title: TypeBox.Type.String({ default: '' }),

        message: TypeBox.Type.String({ default: '' }),

}, { additionalProperties: false });

/**
 * Input type for editing and creating vips__notifications
 */
// @ts-ignore
export const vips__notificationsInputSchema = TypeBox.Type.Object({

        user_id: TypeBox.Type.Number({ default: 0 }),

        route: TypeBox.Type.String({ default: '' }),

        route_related_id: TypeBox.Type.Number({ default: 0 }),

        title: TypeBox.Type.String({ default: '' }),

        message: TypeBox.Type.String({ default: '' }),

}, { additionalProperties: false });

export type Vips__notificationsInput = TypeBox.Static<typeof vips__notificationsInputSchema>;

@Entity()
// @ts-ignore
export class Vips__notifications implements TypeBox.Static<typeof vips__notificationsSchema> {
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
        route!: string;

        @Column({ type: 'integer', default: 0 })
        route_related_id!: number;

        @Column({ default: '' })
        title!: string;

        @Column({ default: '' })
        message!: string;

}
