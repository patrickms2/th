import { EntityRepository, Repository } from 'typeorm';

import { Vips__email_inbox_attachment } from '../entity/Vips__email_inbox_attachment';
import { applyFilters, EntityQuery } from './vips__email_inbox_attachmentUtils';

@EntityRepository(Vips__email_inbox_attachment)
export class Vips__email_inbox_attachmentRepository extends Repository<Vips__email_inbox_attachment> {

    async filter(query: any | undefined, page: number, size: number, field: string | undefined, sort: "ASC" | "DESC" | undefined = "ASC", countOnly: boolean | undefined ): Promise<(any[] | Promise<number>)[] | Promise<[Vips__email_inbox_attachment[], number]>> {
        const qb = this.createQueryBuilder('e');
        applyFilters(qb, query);
        if(field) {
            const dbQuery = qb
              .skip(page * size)
              .take(size)
              .orderBy(`e.${field}`, sort)
              ;

            return countOnly ? [[], await dbQuery.getCount()] : dbQuery.getManyAndCount();
        } else {
            const dbQuery = qb
              .skip(page * size)
              .take(size)

            return countOnly ? [[], await dbQuery.getCount()] : dbQuery.getManyAndCount();
        }
    }
}
