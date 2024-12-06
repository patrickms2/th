import { EntityRepository, Repository } from 'typeorm';

import { Vips__project_sprints } from '../entity/Vips__project_sprints';
import { applyFilters, EntityQuery } from './vips__project_sprintsUtils';

@EntityRepository(Vips__project_sprints)
export class Vips__project_sprintsRepository extends Repository<Vips__project_sprints> {

    async filter(query: any | undefined, page: number, size: number, field: string | undefined, sort: "ASC" | "DESC" | undefined = "ASC", countOnly: boolean | undefined ): Promise<(any[] | Promise<number>)[] | Promise<[Vips__project_sprints[], number]>> {
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
