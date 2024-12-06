import { EntityRepository, Repository } from 'typeorm';

import { Vips__knowledge_base_article } from '../entity/Vips__knowledge_base_article';
import { applyFilters, EntityQuery } from './vips__knowledge_base_articleUtils';

@EntityRepository(Vips__knowledge_base_article)
export class Vips__knowledge_base_articleRepository extends Repository<Vips__knowledge_base_article> {

    async filter(query: any | undefined, page: number, size: number, field: string | undefined, sort: "ASC" | "DESC" | undefined = "ASC", countOnly: boolean | undefined ): Promise<(any[] | Promise<number>)[] | Promise<[Vips__knowledge_base_article[], number]>> {
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
