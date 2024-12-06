import { EntityRepository, Repository } from 'typeorm';

import { Vips__department_role_menu } from '../entity/Vips__department_role_menu';
import { applyFilters, EntityQuery } from './vips__department_role_menuUtils';

@EntityRepository(Vips__department_role_menu)
export class Vips__department_role_menuRepository extends Repository<Vips__department_role_menu> {

    async filter(query: any | undefined, page: number, size: number, field: string | undefined, sort: "ASC" | "DESC" | undefined = "ASC", countOnly: boolean | undefined ): Promise<(any[] | Promise<number>)[] | Promise<[Vips__department_role_menu[], number]>> {
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
