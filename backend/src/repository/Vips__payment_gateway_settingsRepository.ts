import { EntityRepository, Repository } from 'typeorm';

import { Vips__payment_gateway_settings } from '../entity/Vips__payment_gateway_settings';
import { applyFilters, EntityQuery } from './vips__payment_gateway_settingsUtils';

@EntityRepository(Vips__payment_gateway_settings)
export class Vips__payment_gateway_settingsRepository extends Repository<Vips__payment_gateway_settings> {

    async filter(query: any | undefined, page: number, size: number, field: string | undefined, sort: "ASC" | "DESC" | undefined = "ASC", countOnly: boolean | undefined ): Promise<(any[] | Promise<number>)[] | Promise<[Vips__payment_gateway_settings[], number]>> {
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
