import { FastifyInstance } from 'fastify'
import { getCustomRepository, Like } from 'typeorm';
import * as TypeBox from '@sinclair/typebox';
import toString from 'lodash/toString';
import omit from 'lodash/omit';
import { parse } from 'json2csv';

import { Vips__estimate_settingsRepository } from '../repository/Vips__estimate_settingsRepository';
import { vips__estimate_settingsInputSchema, vips__estimate_settingsSchema } from '../entity/Vips__estimate_settings';

export const tag = 'Vips__estimate_settings';

export default async (app: FastifyInstance) => {
    const schema = TypeBox.Type.Object({
        q: TypeBox.Type.Optional(TypeBox.Type.Partial(vips__estimate_settingsSchema, { description: 'Filter query', additionalProperties: false })),
        page: TypeBox.Type.Number({ default: 0, minimum: 0, description: 'Page number' }),
        limit: TypeBox.Type.Number({ minimum: 0, maximum: 100, default: 10, description: 'Page size' }),
        field: TypeBox.Type.String({default: ''}),
        sort: TypeBox.Type.String({default: 'DESC'}),
        filetype: TypeBox.Type.Optional(TypeBox.Type.String({default: ''})),
    estimate_prefix: TypeBox.Type.String({default: ''}),
    estimate_logo: TypeBox.Type.String({default: ''}),
    template: TypeBox.Type.String({default: ''}),
    client_note: TypeBox.Type.String({default: ''}),
    terms_conditions: TypeBox.Type.String({default: ''}),

    }, {
        style: 'deepObject',
    });

    app.get<{ Querystring: TypeBox.Static<typeof schema> }>('/vips__estimate_settings', {
        // @ts-ignore
        preHandler: app.auth([app.verifyAuthorized]),
        schema: {
            querystring: schema,
            security: [{
                bearerAuth: [],
            }],
            tags: [tag],
            summary: 'List vips__estimate_settings',
        },
    }, async (req) => {
        // @ts-ignore
        const [items, count] = await getCustomRepository(Vips__estimate_settingsRepository).filter(req.query, req.query.page, req.query.limit, req.query.field, req.query.sort.toUpperCase());
        const fileType = req.query.filetype;
        if (fileType && fileType === 'csv') {
            const fields = ['id', 'estimate_prefix','estimate_logo','template','client_note','terms_conditions',
                'due_after','auto_remind','auto_remind_before','auto_convert_to_invoice_on_client_accept',

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

    app.get<{ Querystring: TypeBox.Static<typeof schema> }>('/vips__estimate_settings/count', {
        // @ts-ignore
        preHandler: app.auth([app.verifyAuthorized]),
        schema: {
            querystring: schema,
            security: [{
                bearerAuth: [],
            }],
            tags: [tag],
            summary: 'List vips__estimate_settings',
        },
    }, async (req) => {
        // @ts-ignore
        const [items, count] = await getCustomRepository(Vips__estimate_settingsRepository).filter(req.query, req.query.page, req.query.limit, req.query.field, req.query.sort.toUpperCase(), true);
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
    }>('/vips__estimate_settings/autocomplete', {
        // @ts-ignore
        preHandler: app.auth([app.verifyAuthorized]),
        schema: {
            querystring: autocompleteSchema,
            security: [{
                bearerAuth: [],
            }],
            tags: [tag],
            summary: 'Find vips__estimate_settings instance to link as relations',
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
        const repo = getCustomRepository(Vips__estimate_settingsRepository);

        const items = await repo.createQueryBuilder('item')
          .select(['item.id'])

          .where("item.id LIKE :query", { query: `%${req.query.query}%` })

          .orderBy('item.id', 'ASC')
          .getMany();

        return items.map((item) => ({ id: item.id, label: toString(item.id) }));
    });

    const postPayload = TypeBox.Type.Object({
        data: vips__estimate_settingsInputSchema,
    });
    app.post<{
        Body: TypeBox.Static<typeof postPayload>,
        Reply: TypeBox.Static<typeof vips__estimate_settingsSchema>
    }>('/vips__estimate_settings', {
        // @ts-ignore
        preHandler: app.auth([app.verifyAuthorized]),
        schema: {
            security: [{
                bearerAuth: [],
            }],
            tags: [tag],
            summary: 'Create new vips__estimate_settings',
            body: postPayload,
            response: {
                200: vips__estimate_settingsSchema,
                400: TypeBox.Type.Object({
                    statusCode: TypeBox.Type.Number({ default: 400 }),
                    error: TypeBox.Type.Optional(TypeBox.Type.String()),
                    message: TypeBox.Type.String(),
                }, { description: 'Validation error' }),
            },
        },
        // @ts-ignore
    }, async (req) => {
        const repo = getCustomRepository(Vips__estimate_settingsRepository);
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
        Reply: TypeBox.Static<typeof vips__estimate_settingsSchema>
    }>('/vips__estimate_settings/:id', {
        // @ts-ignore
        preHandler: app.auth([app.verifyAuthorized]),
        schema: {
            params: find,
            tags: [tag],
            summary: 'Get specific vips__estimate_settings',
            security: [{
                bearerAuth: [],
            }],
            response: {
                200: vips__estimate_settingsSchema,
                404: TypeBox.Type.Object({
                    statusCode: TypeBox.Type.Number({ default: 404 }),
                    error: TypeBox.Type.String({ default: 'Not Found' }),
                    message: TypeBox.Type.String(),
                }, { description: 'Vips__estimate_settings not found' }),
            },
        }
    // @ts-ignore
    }, async (req, reply) => {
        const entity = await getCustomRepository(Vips__estimate_settingsRepository).findOne({
            where: {
                id: req.params.id,
            },

        });

        return entity ? entity : reply.notFound('Vips__estimate_settings not found');
    });

    const putSchema = TypeBox.Type.Object({
        id: TypeBox.Type.String({ format: 'uuid' }),
        data: TypeBox.Type.Partial(vips__estimate_settingsInputSchema),
    });
    app.put<{
        Params: TypeBox.Static<typeof find>,
        Body: TypeBox.Static<typeof putSchema>,
    }>('/vips__estimate_settings/:id', {
        // @ts-ignore
        preHandler: app.auth([app.verifyAdmin]),
        schema: {
            summary: 'Edit existing vips__estimate_settings',
            params: find,
            body: putSchema,
            tags: [tag],
            security: [{
                bearerAuth: [],
            }],
        }
    }, async (req) => {
        const payload = omit(req.body.data, []);
        const repo = getCustomRepository(Vips__estimate_settingsRepository);

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
    }>('/vips__estimate_settings/:id', {
        // @ts-ignore
        preHandler: app.auth([app.verifyAdmin]),
        schema: {
            description: 'Delete vips__estimate_settings',
            summary: 'Delete vips__estimate_settings',
            params: find,
            tags: [tag],
            security: [{
                bearerAuth: [],
            }],
            response: {
                200: {
                    description: 'vips__estimate_settings successfully deleted',
                    type: 'null',
                },
                404: TypeBox.Type.Object({
                    statusCode: TypeBox.Type.Number({ default: 404 }),
                    error: TypeBox.Type.String({ default: 'Not Found' }),
                    message: TypeBox.Type.String(),
                }, { description: 'vips__estimate_settings not found' }),
            },
        }
    }, async (req, reply) => {
        const entity = await getCustomRepository(Vips__estimate_settingsRepository).softDelete(req.params.id);
        if (!entity.affected) {
            reply.notFound('vips__estimate_settings not found');
            return;
        }

        reply.code(200).send();
    });
}
