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
 * Schema for vips__clients entity
 */
// @ts-ignore
export const vips__clientsSchema = TypeBox.Type.Object({
    id: TypeBox.Type.String({ format: 'uuid' }),

        company_name: TypeBox.Type.String({ default: '' }),

        company_email: TypeBox.Type.String({ default: '' }),

        user_id: TypeBox.Type.Number({ default: 0 }),

        company_phone: TypeBox.Type.String({ default: '' }),

        company_mobile: TypeBox.Type.String({ default: '' }),

        company_zipcode: TypeBox.Type.String({ default: '' }),

        company_city: TypeBox.Type.String({ default: '' }),

        company_country: TypeBox.Type.String({ default: '' }),

        company_fax: TypeBox.Type.String({ default: '' }),

        company_address: TypeBox.Type.String({ default: '' }),

        website: TypeBox.Type.String({ default: '' }),

        skype_id: TypeBox.Type.String({ default: '' }),

        facebook: TypeBox.Type.String({ default: '' }),

        twitter: TypeBox.Type.String({ default: '' }),

        linkedin: TypeBox.Type.String({ default: '' }),

        hosting_company: TypeBox.Type.String({ default: '' }),

        host_name: TypeBox.Type.String({ default: '' }),

        host_username: TypeBox.Type.String({ default: '' }),

        host_password: TypeBox.Type.String({ default: '' }),

        host_port: TypeBox.Type.String({ default: '' }),

}, { additionalProperties: false });

/**
 * Input type for editing and creating vips__clients
 */
// @ts-ignore
export const vips__clientsInputSchema = TypeBox.Type.Object({

        company_name: TypeBox.Type.String({ default: '' }),

        company_email: TypeBox.Type.String({ default: '' }),

        user_id: TypeBox.Type.Number({ default: 0 }),

        company_phone: TypeBox.Type.String({ default: '' }),

        company_mobile: TypeBox.Type.String({ default: '' }),

        company_zipcode: TypeBox.Type.String({ default: '' }),

        company_city: TypeBox.Type.String({ default: '' }),

        company_country: TypeBox.Type.String({ default: '' }),

        company_fax: TypeBox.Type.String({ default: '' }),

        company_address: TypeBox.Type.String({ default: '' }),

        website: TypeBox.Type.String({ default: '' }),

        skype_id: TypeBox.Type.String({ default: '' }),

        facebook: TypeBox.Type.String({ default: '' }),

        twitter: TypeBox.Type.String({ default: '' }),

        linkedin: TypeBox.Type.String({ default: '' }),

        hosting_company: TypeBox.Type.String({ default: '' }),

        host_name: TypeBox.Type.String({ default: '' }),

        host_username: TypeBox.Type.String({ default: '' }),

        host_password: TypeBox.Type.String({ default: '' }),

        host_port: TypeBox.Type.String({ default: '' }),

}, { additionalProperties: false });

export type Vips__clientsInput = TypeBox.Static<typeof vips__clientsInputSchema>;

@Entity()
// @ts-ignore
export class Vips__clients implements TypeBox.Static<typeof vips__clientsSchema> {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @DeleteDateColumn()
    deletedAt?: Date;

        @Column({ default: '' })
        company_name!: string;

        @Column({ default: '' })
        company_email!: string;

        @Column({ type: 'integer', default: 0 })
        user_id!: number;

        @Column({ default: '' })
        company_phone!: string;

        @Column({ default: '' })
        company_mobile!: string;

        @Column({ default: '' })
        company_zipcode!: string;

        @Column({ default: '' })
        company_city!: string;

        @Column({ default: '' })
        company_country!: string;

        @Column({ default: '' })
        company_fax!: string;

        @Column({ default: '' })
        company_address!: string;

        @Column({ default: '' })
        website!: string;

        @Column({ default: '' })
        skype_id!: string;

        @Column({ default: '' })
        facebook!: string;

        @Column({ default: '' })
        twitter!: string;

        @Column({ default: '' })
        linkedin!: string;

        @Column({ default: '' })
        hosting_company!: string;

        @Column({ default: '' })
        host_name!: string;

        @Column({ default: '' })
        host_username!: string;

        @Column({ default: '' })
        host_password!: string;

        @Column({ default: '' })
        host_port!: string;

}
