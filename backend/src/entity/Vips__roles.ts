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

export enum Status {

        1 = '1',

        0 = '0',

}

/**
 * Schema for vips__roles entity
 */
// @ts-ignore
export const vips__rolesSchema = TypeBox.Type.Object({
    id: TypeBox.Type.String({ format: 'uuid' }),

        name: TypeBox.Type.String({ default: '' }),

        slug: TypeBox.Type.String({ default: '' }),

        description: TypeBox.Type.String({ default: '' }),

        status: TypeBox.Type.Enum(Status),

        0=inactive: TypeBox.Type.String({ default: '' }),

}, { additionalProperties: false });

/**
 * Input type for editing and creating vips__roles
 */
// @ts-ignore
export const vips__rolesInputSchema = TypeBox.Type.Object({

        name: TypeBox.Type.String({ default: '' }),

        slug: TypeBox.Type.String({ default: '' }),

        description: TypeBox.Type.String({ default: '' }),

        status: TypeBox.Type.Enum(Status),

        0=inactive: TypeBox.Type.String({ default: '' }),

}, { additionalProperties: false });

export type Vips__rolesInput = TypeBox.Static<typeof vips__rolesInputSchema>;

@Entity()
// @ts-ignore
export class Vips__roles implements TypeBox.Static<typeof vips__rolesSchema> {
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
        slug!: string;

        @Column({ default: '' })
        description!: string;

        @Column({ type: 'enum', enum: Status })
        status!: Status;

        @Column({ default: '' })
        0=inactive!: string;

}
