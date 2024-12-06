import { EntityRepository, Repository } from 'typeorm';

import { Vips__appointment_recurrence } from '../entity/Vips__appointment_recurrence';
import { applyFilters, EntityQuery } from './vips__appointment_recurrenceUtils';

@EntityRepository(Vips__appointment_recurrence)
export class Vips__appointment_recurrenceRepository extends Repository<Vips__appointment_recurrence> {

    async filter(query: any | undefined, page: number, size: number, field: string | undefined, sort: "ASC" | "DESC" | undefined = "ASC", countOnly: boolean | undefined ): Promise<(any[] | Promise<number>)[] | Promise<[Vips__appointment_recurrence[], number]>> {
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
