import { FastifyInstance } from 'fastify'
import { getCustomRepository, Like } from 'typeorm';
import * as TypeBox from '@sinclair/typebox';
import toString from 'lodash/toString';
import omit from 'lodash/omit';
import { parse } from 'json2csv';

import { Vips__user_settingsRepository } from '../repository/Vips__user_settingsRepository';
import { vips__user_settingsInputSchema, vips__user_settingsSchema } from '../entity/Vips__user_settings';

export const tag = 'Vips__user_settings';

export default async (app: FastifyInstance) => {
    const schema = TypeBox.Type.Object({
        q: TypeBox.Type.Optional(TypeBox.Type.Partial(vips__user_settingsSchema, { description: 'Filter query', additionalProperties: false })),
        page: TypeBox.Type.Number({ default: 0, minimum: 0, description: 'Page number' }),
        limit: TypeBox.Type.Number({ minimum: 0, maximum: 100, default: 10, description: 'Page size' }),
        field: TypeBox.Type.String({default: ''}),
        sort: TypeBox.Type.String({default: 'DESC'}),
        filetype: TypeBox.Type.Optional(TypeBox.Type.String({default: ''})),
    company_name: TypeBox.Type.String({default: ''}),
    company_legal_name: TypeBox.Type.String({default: ''}),
    company_short_name: TypeBox.Type.String({default: ''}),
    contact_person: TypeBox.Type.String({default: ''}),
    company_address: TypeBox.Type.String({default: ''}),
    company_city: TypeBox.Type.String({default: ''}),
    company_zipcode: TypeBox.Type.String({default: ''}),
    company_phone: TypeBox.Type.String({default: ''}),
    company_email: TypeBox.Type.String({default: ''}),
    company_website: TypeBox.Type.String({default: ''}),
    company_from_email: TypeBox.Type.String({default: ''}),
    smtp_protocol: TypeBox.Type.String({default: ''}),
    smtp_host: TypeBox.Type.String({default: ''}),
    smtp_user: TypeBox.Type.String({default: ''}),
    smtp_password: TypeBox.Type.String({default: ''}),
    smtp_port: TypeBox.Type.String({default: ''}),
    smtp_encryption: TypeBox.Type.String({default: ''}),
    mail_from_name: TypeBox.Type.String({default: ''}),
    sparkpost_secret: TypeBox.Type.String({default: ''}),
    mailgun_domain: TypeBox.Type.String({default: ''}),
    mailgun_secret: TypeBox.Type.String({default: ''}),
    mandrill_secret: TypeBox.Type.String({default: ''}),
    daily_report_emails: TypeBox.Type.String({default: ''}),
    last_autobackup: TypeBox.Type.String({default: ''}),
    cronjob_link: TypeBox.Type.String({default: ''}),
    last_cronjob_run: TypeBox.Type.String({default: ''}),
    reminder_alert_before_hours: TypeBox.Type.String({default: ''}),
    12: TypeBox.Type.String({default: ''}),
    reminder_alert_before_days: TypeBox.Type.String({default: ''}),
    2: TypeBox.Type.String({default: ''}),
    3: TypeBox.Type.String({default: ''}),
    task: TypeBox.Type.String({default: ''}),
    defect: TypeBox.Type.String({default: ''}),
    login_background: TypeBox.Type.String({default: ''}),
    company_logo: TypeBox.Type.String({default: ''}),
    company_sidebar_logo: TypeBox.Type.String({default: ''}),
    sidebar_background_images: TypeBox.Type.String({default: ''}),
    default_language: TypeBox.Type.String({default: ''}),
    default_locale: TypeBox.Type.String({default: ''}),
    timezone: TypeBox.Type.String({default: ''}),
    date_format: TypeBox.Type.String({default: ''}),
    time_format: TypeBox.Type.String({default: ''}),
    date_time_format: TypeBox.Type.String({default: ''}),
    php_date_format: TypeBox.Type.String({default: ''}),
    php_time_format: TypeBox.Type.String({default: ''}),
    php_date_time_format: TypeBox.Type.String({default: ''}),
    purchase_key: TypeBox.Type.String({default: ''}),
    unique_coder: TypeBox.Type.String({default: ''}),
    update_url: TypeBox.Type.String({default: ''}),
    theme_layout: TypeBox.Type.String({default: ''}),
    sidebar_bg_color: TypeBox.Type.String({default: ''}),
    sidebar_transparent_bg_image: TypeBox.Type.String({default: ''}),
    sidebar_bg_custom_color: TypeBox.Type.String({default: ''}),
    sidebar_font_color: TypeBox.Type.String({default: ''}),
    sidebar_width: TypeBox.Type.String({default: ''}),
    product_version: TypeBox.Type.String({default: ''}),

    }, {
        style: 'deepObject',
    });

    app.get<{ Querystring: TypeBox.Static<typeof schema> }>('/vips__user_settings', {
        // @ts-ignore
        preHandler: app.auth([app.verifyAuthorized]),
        schema: {
            querystring: schema,
            security: [{
                bearerAuth: [],
            }],
            tags: [tag],
            summary: 'List vips__user_settings',
        },
    }, async (req) => {
        // @ts-ignore
        const [items, count] = await getCustomRepository(Vips__user_settingsRepository).filter(req.query, req.query.page, req.query.limit, req.query.field, req.query.sort.toUpperCase());
        const fileType = req.query.filetype;
        if (fileType && fileType === 'csv') {
            const fields = ['id', 'company_name','company_legal_name','company_short_name','contact_person','company_address','company_city','company_zipcode','company_phone','company_email','company_website','company_from_email','smtp_protocol','smtp_host','smtp_user','smtp_password','smtp_port','smtp_encryption','mail_from_name','sparkpost_secret','mailgun_domain','mailgun_secret','mandrill_secret','daily_report_emails','last_autobackup','cronjob_link','last_cronjob_run','reminder_alert_before_hours','12','reminder_alert_before_days','2','3','task','defect','login_background','company_logo','company_sidebar_logo','sidebar_background_images','default_language','default_locale','timezone','date_format','time_format','date_time_format','php_date_format','php_time_format','php_date_time_format','purchase_key','unique_coder','update_url','theme_layout','sidebar_bg_color','sidebar_transparent_bg_image','sidebar_bg_custom_color','sidebar_font_color','sidebar_width','product_version',
                'company_country','post_mark','is_announcement_notification','is_team_notification','active_cronjob','automatic_backup','24','tables_pagination_limit','currency_id','is_collapsed_menu','is_sidebar_background','sidebar_bg_image','is_demo','allowed_for_registration',

                ];
            const opts = { fields };
            try {
                const csv = parse(items, opts);
                return csv
            } catch (err) {
                console.error(err);
            }
        } else {
            return {
                rows: items,
                count,
                isLastPage: (req.query.page + 1) * req.query.limit >= count,
            };
        }
    });

    app.get<{ Querystring: TypeBox.Static<typeof schema> }>('/vips__user_settings/count', {
        // @ts-ignore
        preHandler: app.auth([app.verifyAuthorized]),
        schema: {
            querystring: schema,
            security: [{
                bearerAuth: [],
            }],
            tags: [tag],
            summary: 'List vips__user_settings',
        },
    }, async (req) => {
        // @ts-ignore
        const [items, count] = await getCustomRepository(Vips__user_settingsRepository).filter(req.query, req.query.page, req.query.limit, req.query.field, req.query.sort.toUpperCase(), true);
        return {
            rows: items,
            count,
            isLastPage: (req.query.page + 1) * req.query.limit >= count,
        };
    });

    const autocompleteSchema = TypeBox.Type.Object({
        query: TypeBox.Type.String({ default: '' }),
        limit: TypeBox.Type.Number({ default: 100, max: 100, min: 1 }),
    });
    const autocompleteItems = TypeBox.Type.Array(TypeBox.Type.Object({
        id: TypeBox.Type.String(),
        label: TypeBox.Type.String(),
    }));

    app.get<{
        Querystring: TypeBox.Static<typeof autocompleteSchema>,
        Reply: TypeBox.Static<typeof autocompleteItems>,
    }>('/vips__user_settings/autocomplete', {
        // @ts-ignore
        preHandler: app.auth([app.verifyAuthorized]),
        schema: {
            querystring: autocompleteSchema,
            security: [{
                bearerAuth: [],
            }],
            tags: [tag],
            summary: 'Find vips__user_settings instance to link as relations',
            response: {
                200: autocompleteItems,
                400: TypeBox.Type.Object({
                    statusCode: TypeBox.Type.Number({ default: 400 }),
                    error: TypeBox.Type.Optional(TypeBox.Type.String()),
                    message: TypeBox.Type.String(),
                }, { description: 'Validation error' }),
            }
        },
    }, async (req) => {
        const repo = getCustomRepository(Vips__user_settingsRepository);

        const items = await repo.createQueryBuilder('item')
          .select(['item.id'])

          .where("item.id LIKE :query", { query: `%${req.query.query}%` })

          .orderBy('item.id', 'ASC')
          .getMany();

        return items.map((item) => ({ id: item.id, label: toString(item.id) }));
    });

    const postPayload = TypeBox.Type.Object({
        data: vips__user_settingsInputSchema,
    });
    app.post<{
        Body: TypeBox.Static<typeof postPayload>,
        Reply: TypeBox.Static<typeof vips__user_settingsSchema>
    }>('/vips__user_settings', {
        // @ts-ignore
        preHandler: app.auth([app.verifyAuthorized]),
        schema: {
            security: [{
                bearerAuth: [],
            }],
            tags: [tag],
            summary: 'Create new vips__user_settings',
            body: postPayload,
            response: {
                200: vips__user_settingsSchema,
                400: TypeBox.Type.Object({
                    statusCode: TypeBox.Type.Number({ default: 400 }),
                    error: TypeBox.Type.Optional(TypeBox.Type.String()),
                    message: TypeBox.Type.String(),
                }, { description: 'Validation error' }),
            },
        },
        // @ts-ignore
    }, async (req) => {
        const repo = getCustomRepository(Vips__user_settingsRepository);
        const payload = omit(req.body.data, []);

        const { id } = await repo.save({
            ...payload,

        });

        return repo.findOne({
            where: {
                id,
            },

        });
    });

    const find = TypeBox.Type.Object({
        id: TypeBox.Type.String({
            format: 'uuid',
        }),
    });

    app.get<{
        Params: TypeBox.Static<typeof find>,
        Reply: TypeBox.Static<typeof vips__user_settingsSchema>
    }>('/vips__user_settings/:id', {
        // @ts-ignore
        preHandler: app.auth([app.verifyAuthorized]),
        schema: {
            params: find,
            tags: [tag],
            summary: 'Get specific vips__user_settings',
            security: [{
                bearerAuth: [],
            }],
            response: {
                200: vips__user_settingsSchema,
                404: TypeBox.Type.Object({
                    statusCode: TypeBox.Type.Number({ default: 404 }),
                    error: TypeBox.Type.String({ default: 'Not Found' }),
                    message: TypeBox.Type.String(),
                }, { description: 'Vips__user_settings not found' }),
            },
        }
    // @ts-ignore
    }, async (req, reply) => {
        const entity = await getCustomRepository(Vips__user_settingsRepository).findOne({
            where: {
                id: req.params.id,
            },

        });

        return entity ? entity : reply.notFound('Vips__user_settings not found');
    });

    const putSchema = TypeBox.Type.Object({
        id: TypeBox.Type.String({ format: 'uuid' }),
        data: TypeBox.Type.Partial(vips__user_settingsInputSchema),
    });
    app.put<{
        Params: TypeBox.Static<typeof find>,
        Body: TypeBox.Static<typeof putSchema>,
    }>('/vips__user_settings/:id', {
        // @ts-ignore
        preHandler: app.auth([app.verifyAdmin]),
        schema: {
            summary: 'Edit existing vips__user_settings',
            params: find,
            body: putSchema,
            tags: [tag],
            security: [{
                bearerAuth: [],
            }],
        }
    }, async (req) => {
        const payload = omit(req.body.data, []);
        const repo = getCustomRepository(Vips__user_settingsRepository);

        await repo.save({
            ...payload,

            id: req.params.id,
        });

        return repo.findOne({
            where: {
                id: req.params.id,
            },

        });
    });

    app.delete<{
        Params: TypeBox.Static<typeof find>,
    }>('/vips__user_settings/:id', {
        // @ts-ignore
        preHandler: app.auth([app.verifyAdmin]),
        schema: {
            description: 'Delete vips__user_settings',
            summary: 'Delete vips__user_settings',
            params: find,
            tags: [tag],
            security: [{
                bearerAuth: [],
            }],
            response: {
                200: {
                    description: 'vips__user_settings successfully deleted',
                    type: 'null',
                },
                404: TypeBox.Type.Object({
                    statusCode: TypeBox.Type.Number({ default: 404 }),
                    error: TypeBox.Type.String({ default: 'Not Found' }),
                    message: TypeBox.Type.String(),
                }, { description: 'vips__user_settings not found' }),
            },
        }
    }, async (req, reply) => {
        const entity = await getCustomRepository(Vips__user_settingsRepository).softDelete(req.params.id);
        if (!entity.affected) {
            reply.notFound('vips__user_settings not found');
            return;
        }

        reply.code(200).send();
    });
}
