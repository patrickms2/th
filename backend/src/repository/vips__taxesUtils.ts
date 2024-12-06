import { SelectQueryBuilder } from 'typeorm';

export type EntityQuery<T> = {
    [K in keyof T]?: T[K];
};

/**
 * Applies filter query for any entity query builder
 */

export function applyFilters<T>(qb: SelectQueryBuilder<T>, query?: any) {

    let { tax_name } = query;

    if(tax_name){
        qb.where("e.tax_name like :name", { name:  `%${tax_name}%` });
    }
    let { tax_rate } = query;

    if(tax_rate){
        qb.where("e.tax_rate like :name", { name:  `%${tax_rate}%` });
    }
    return qb;
}
