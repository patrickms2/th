import { EntityRepository, Repository } from 'typeorm';

import { Vips__user_role_department } from '../entity/Vips__user_role_department';
import { applyFilters, EntityQuery } from './vips__user_role_departmentUtils';

@EntityRepository(Vips__user_role_department)
export class Vips__user_role_departmentRepository extends Repository<Vips__user_role_department> {

    async filter(query: any | undefined, page: number, size: number, field: string | undefined, sort: "ASC" | "DESC" | undefined = "ASC", countOnly: boolean | undefined ): Promise<(any[] | Promise<number>)[] | Promise<[Vips__user_role_department[], number]>> {
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
