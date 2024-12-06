import { SelectQueryBuilder } from 'typeorm';

export type EntityQuery<T> = {
    [K in keyof T]?: T[K];
};

/**
 * Applies filter query for any entity query builder
 */

export function applyFilters<T>(qb: SelectQueryBuilder<T>, query?: any) {

    let { module_name } = query;

    if(module_name){
        qb.where("e.module_name like :name", { name:  `%${module_name}%` });
    }
    let { module_slug } = query;

    if(module_slug){
        qb.where("e.module_slug like :name", { name:  `%${module_slug}%` });
    }
    let { 0=inactive } = query;

    if(0=inactive){
        qb.where("e.0=inactive like :name", { name:  `%${0=inactive}%` });
    }
    return qb;
}
