import { EntityRepository, Repository } from 'typeorm';

import { Vips__email_template_groups } from '../entity/Vips__email_template_groups';
import { applyFilters, EntityQuery } from './vips__email_template_groupsUtils';

@EntityRepository(Vips__email_template_groups)
export class Vips__email_template_groupsRepository extends Repository<Vips__email_template_groups> {

    async filter(query: any | undefined, page: number, size: number, field: string | undefined, sort: "ASC" | "DESC" | undefined = "ASC", countOnly: boolean | undefined ): Promise<(any[] | Promise<number>)[] | Promise<[Vips__email_template_groups[], number]>> {
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
