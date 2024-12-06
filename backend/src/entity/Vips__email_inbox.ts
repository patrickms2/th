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
 * Schema for vips__email_inbox entity
 */
// @ts-ignore
export const vips__email_inboxSchema = TypeBox.Type.Object({
    id: TypeBox.Type.String({ format: 'uuid' }),

        user_id: TypeBox.Type.Number({ default: 0 }),

        to: TypeBox.Type.String({ default: '' }),

        from: TypeBox.Type.String({ default: '' }),

        subject: TypeBox.Type.String({ default: '' }),

        message_body: TypeBox.Type.String({ default: '' }),

        type: TypeBox.Type.String({ default: '' }),

        sent: TypeBox.Type.String({ default: '' }),

        draft: TypeBox.Type.String({ default: '' }),

        trash: TypeBox.Type.String({ default: '' }),

        view_status: TypeBox.Type.String({ default: '' }),

        favourites: TypeBox.Type.String({ default: '' }),

        1=yes: TypeBox.Type.String({ default: '' }),

        notify_me: TypeBox.Type.String({ default: '' }),

        0=off: TypeBox.Type.String({ default: '' }),

}, { additionalProperties: false });

/**
 * Input type for editing and creating vips__email_inbox
 */
// @ts-ignore
export const vips__email_inboxInputSchema = TypeBox.Type.Object({

        user_id: TypeBox.Type.Number({ default: 0 }),

        to: TypeBox.Type.String({ default: '' }),

        from: TypeBox.Type.String({ default: '' }),

        subject: TypeBox.Type.String({ default: '' }),

        message_body: TypeBox.Type.String({ default: '' }),

        type: TypeBox.Type.String({ default: '' }),

        sent: TypeBox.Type.String({ default: '' }),

        draft: TypeBox.Type.String({ default: '' }),

        trash: TypeBox.Type.String({ default: '' }),

        view_status: TypeBox.Type.String({ default: '' }),

        favourites: TypeBox.Type.String({ default: '' }),

        1=yes: TypeBox.Type.String({ default: '' }),

        notify_me: TypeBox.Type.String({ default: '' }),

        0=off: TypeBox.Type.String({ default: '' }),

}, { additionalProperties: false });

export type Vips__email_inboxInput = TypeBox.Static<typeof vips__email_inboxInputSchema>;

@Entity()
// @ts-ignore
export class Vips__email_inbox implements TypeBox.Static<typeof vips__email_inboxSchema> {
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
        to!: string;

        @Column({ default: '' })
        from!: string;

        @Column({ default: '' })
        subject!: string;

        @Column({ default: '' })
        message_body!: string;

        @Column({ default: '' })
        type!: string;

        @Column({ default: '' })
        sent!: string;

        @Column({ default: '' })
        draft!: string;

        @Column({ default: '' })
        trash!: string;

        @Column({ default: '' })
        view_status!: string;

        @Column({ default: '' })
        favourites!: string;

        @Column({ default: '' })
        1=yes!: string;

        @Column({ default: '' })
        notify_me!: string;

        @Column({ default: '' })
        0=off!: string;

}
