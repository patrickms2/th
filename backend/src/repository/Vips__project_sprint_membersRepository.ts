import { EntityRepository, Repository } from 'typeorm';

import { Vips__project_sprint_members } from '../entity/Vips__project_sprint_members';
import { applyFilters, EntityQuery } from './vips__project_sprint_membersUtils';

@EntityRepository(Vips__project_sprint_members)
export class Vips__project_sprint_membersRepository extends Repository<Vips__project_sprint_members> {

    async filter(query: any | undefined, page: number, size: number, field: string | undefined, sort: "ASC" | "DESC" | undefined = "ASC", countOnly: boolean | undefined ): Promise<(any[] | Promise<number>)[] | Promise<[Vips__project_sprint_members[], number]>> {
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
