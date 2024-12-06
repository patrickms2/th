import { EntityRepository, Repository } from 'typeorm';

import { Vips__leave_attachments } from '../entity/Vips__leave_attachments';
import { applyFilters, EntityQuery } from './vips__leave_attachmentsUtils';

@EntityRepository(Vips__leave_attachments)
export class Vips__leave_attachmentsRepository extends Repository<Vips__leave_attachments> {

    async filter(query: any | undefined, page: number, size: number, field: string | undefined, sort: "ASC" | "DESC" | undefined = "ASC", countOnly: boolean | undefined ): Promise<(any[] | Promise<number>)[] | Promise<[Vips__leave_attachments[], number]>> {
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
