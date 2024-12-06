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

export enum Email_verified {

        1 = '1',

        0 = '0',

}

/**
 * Schema for vips__users entity
 */
// @ts-ignore
export const vips__usersSchema = TypeBox.Type.Object({
    id: TypeBox.Type.String({ format: 'uuid' }),

        user_generated_id: TypeBox.Type.String({ default: '' }),

        firstname: TypeBox.Type.String({ default: '' }),

        lastname: TypeBox.Type.String({ default: '' }),

        username: TypeBox.Type.String({ default: '' }),

        email: TypeBox.Type.String(),

        password: TypeBox.Type.String({ default: '' }),

        is_super_admin: TypeBox.Type.Number({ default: 0 }),

        is_client: TypeBox.Type.Number({ default: 0 }),

        is_active: TypeBox.Type.Number({ default: 0 }),

        0=inactive: TypeBox.Type.String({ default: '' }),

        email_verified: TypeBox.Type.Enum(Email_verified),

        0=unverified: TypeBox.Type.String({ default: '' }),

        email_verification_code: TypeBox.Type.String({ default: '' }),

        online_status: TypeBox.Type.Number({ default: 0 }),

        0=offline: TypeBox.Type.String({ default: '' }),

        avatar: TypeBox.Type.String({ default: '' }),

        last_ip: TypeBox.Type.String({ default: '' }),

        last_login: TypeBox.Type.String({ format: 'date-time' }),

        emp_id: TypeBox.Type.String({ default: '' }),

        city: TypeBox.Type.String({ default: '' }),

        state: TypeBox.Type.String({ default: '' }),

        country: TypeBox.Type.String({ default: '' }),

        postal_code: TypeBox.Type.String({ default: '' }),

        language: TypeBox.Type.String({ default: '' }),

        address: TypeBox.Type.String({ default: '' }),

        phone: TypeBox.Type.String({ default: '' }),

        mobile: TypeBox.Type.String({ default: '' }),

        skype: TypeBox.Type.String({ default: '' }),

        joining_date: TypeBox.Type.Optional(TypeBox.Type.String({ format: 'date' })),

        gender: TypeBox.Type.String({ default: '' }),

        dob: TypeBox.Type.Optional(TypeBox.Type.String({ format: 'date' })),

        maritial_status: TypeBox.Type.String({ default: '' }),

        father_name: TypeBox.Type.String({ default: '' }),

        mother_name: TypeBox.Type.String({ default: '' }),

        permission: TypeBox.Type.String({ default: '' }),

        can_view_all_users: TypeBox.Type.Number({ default: 0 }),

        primary_manager: TypeBox.Type.Number({ default: 0 }),

        secondary_manager: TypeBox.Type.Number({ default: 0 }),

        remember_token: TypeBox.Type.String({ default: '' }),

}, { additionalProperties: false });

/**
 * Input type for editing and creating vips__users
 */
// @ts-ignore
export const vips__usersInputSchema = TypeBox.Type.Object({

        user_generated_id: TypeBox.Type.String({ default: '' }),

        firstname: TypeBox.Type.String({ default: '' }),

        lastname: TypeBox.Type.String({ default: '' }),

        username: TypeBox.Type.String({ default: '' }),

        email: TypeBox.Type.String(),

        password: TypeBox.Type.String({ default: '' }),

        is_super_admin: TypeBox.Type.Number({ default: 0 }),

        is_client: TypeBox.Type.Number({ default: 0 }),

        is_active: TypeBox.Type.Number({ default: 0 }),

        0=inactive: TypeBox.Type.String({ default: '' }),

        email_verified: TypeBox.Type.Enum(Email_verified),

        0=unverified: TypeBox.Type.String({ default: '' }),

        email_verification_code: TypeBox.Type.String({ default: '' }),

        online_status: TypeBox.Type.Number({ default: 0 }),

        0=offline: TypeBox.Type.String({ default: '' }),

        avatar: TypeBox.Type.String({ default: '' }),

        last_ip: TypeBox.Type.String({ default: '' }),

        last_login: TypeBox.Type.String({ format: 'date-time' }),

        emp_id: TypeBox.Type.String({ default: '' }),

        city: TypeBox.Type.String({ default: '' }),

        state: TypeBox.Type.String({ default: '' }),

        country: TypeBox.Type.String({ default: '' }),

        postal_code: TypeBox.Type.String({ default: '' }),

        language: TypeBox.Type.String({ default: '' }),

        address: TypeBox.Type.String({ default: '' }),

        phone: TypeBox.Type.String({ default: '' }),

        mobile: TypeBox.Type.String({ default: '' }),

        skype: TypeBox.Type.String({ default: '' }),

        joining_date: TypeBox.Type.Optional(TypeBox.Type.String({ format: 'date' })),

        gender: TypeBox.Type.String({ default: '' }),

        dob: TypeBox.Type.Optional(TypeBox.Type.String({ format: 'date' })),

        maritial_status: TypeBox.Type.String({ default: '' }),

        father_name: TypeBox.Type.String({ default: '' }),

        mother_name: TypeBox.Type.String({ default: '' }),

        permission: TypeBox.Type.String({ default: '' }),

        can_view_all_users: TypeBox.Type.Number({ default: 0 }),

        primary_manager: TypeBox.Type.Number({ default: 0 }),

        secondary_manager: TypeBox.Type.Number({ default: 0 }),

        remember_token: TypeBox.Type.String({ default: '' }),

}, { additionalProperties: false });

export type Vips__usersInput = TypeBox.Static<typeof vips__usersInputSchema>;

@Entity()
// @ts-ignore
export class Vips__users implements Omit<TypeBox.Static<typeof vips__usersSchema>, 'last_login'> {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @DeleteDateColumn()
    deletedAt?: Date;

        @Column({ default: '' })
        user_generated_id!: string;

        @Column({ default: '' })
        firstname!: string;

        @Column({ default: '' })
        lastname!: string;

        @Column({ default: '' })
        username!: string;

        @Column({ default: '' })
        email!: string;

        @Column({ default: '' })
        password!: string;

        @Column({ type: 'integer', default: 0 })
        is_super_admin!: number;

        @Column({ type: 'integer', default: 0 })
        is_client!: number;

        @Column({ type: 'integer', default: 0 })
        is_active!: number;

        @Column({ default: '' })
        0=inactive!: string;

        @Column({ type: 'enum', enum: Email_verified })
        email_verified!: Email_verified;

        @Column({ default: '' })
        0=unverified!: string;

        @Column({ default: '' })
        email_verification_code!: string;

        @Column({ type: 'integer', default: 0 })
        online_status!: number;

        @Column({ default: '' })
        0=offline!: string;

        @Column({ default: '' })
        avatar!: string;

        @Column({ default: '' })
        last_ip!: string;

        @Column({ type: 'datetime', nullable: true })
        last_login?: Date;

        @Column({ default: '' })
        emp_id!: string;

        @Column({ default: '' })
        city!: string;

        @Column({ default: '' })
        state!: string;

        @Column({ default: '' })
        country!: string;

        @Column({ default: '' })
        postal_code!: string;

        @Column({ default: '' })
        language!: string;

        @Column({ default: '' })
        address!: string;

        @Column({ default: '' })
        phone!: string;

        @Column({ default: '' })
        mobile!: string;

        @Column({ default: '' })
        skype!: string;

        @Column({ type: 'date', nullable: true })
        joining_date?: string;

        @Column({ default: '' })
        gender!: string;

        @Column({ type: 'date', nullable: true })
        dob?: string;

        @Column({ default: '' })
        maritial_status!: string;

        @Column({ default: '' })
        father_name!: string;

        @Column({ default: '' })
        mother_name!: string;

        @Column({ default: '' })
        permission!: string;

        @Column({ type: 'integer', default: 0 })
        can_view_all_users!: number;

        @Column({ type: 'integer', default: 0 })
        primary_manager!: number;

        @Column({ type: 'integer', default: 0 })
        secondary_manager!: number;

        @Column({ default: '' })
        remember_token!: string;

}
