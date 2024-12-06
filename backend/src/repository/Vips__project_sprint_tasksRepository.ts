import { EntityRepository, Repository } from 'typeorm';

import { Vips__project_sprint_tasks } from '../entity/Vips__project_sprint_tasks';
import { applyFilters, EntityQuery } from './vips__project_sprint_tasksUtils';

@EntityRepository(Vips__project_sprint_tasks)
export class Vips__project_sprint_tasksRepository extends Repository<Vips__project_sprint_tasks> {

    async filter(query: any | undefined, page: number, size: number, field: string | undefined, sort: "ASC" | "DESC" | undefined = "ASC", countOnly: boolean | undefined ): Promise<(any[] | Promise<number>)[] | Promise<[Vips__project_sprint_tasks[], number]>> {
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
