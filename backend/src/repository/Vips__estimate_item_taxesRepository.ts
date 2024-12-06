import { EntityRepository, Repository } from 'typeorm';

import { Vips__estimate_item_taxes } from '../entity/Vips__estimate_item_taxes';
import { applyFilters, EntityQuery } from './vips__estimate_item_taxesUtils';

@EntityRepository(Vips__estimate_item_taxes)
export class Vips__estimate_item_taxesRepository extends Repository<Vips__estimate_item_taxes> {

    async filter(query: any | undefined, page: number, size: number, field: string | undefined, sort: "ASC" | "DESC" | undefined = "ASC", countOnly: boolean | undefined ): Promise<(any[] | Promise<number>)[] | Promise<[Vips__estimate_item_taxes[], number]>> {
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
