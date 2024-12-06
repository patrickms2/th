import { SelectQueryBuilder } from 'typeorm';

export type EntityQuery<T> = {
    [K in keyof T]?: T[K];
};

/**
 * Applies filter query for any entity query builder
 */

export function applyFilters<T>(qb: SelectQueryBuilder<T>, query?: any) {

    let { name } = query;

    if(name){
        qb.where("e.name like :name", { name:  `%${name}%` });
    }
    let { table_name } = query;

    if(table_name){
        qb.where("e.table_name like :name", { name:  `%${table_name}%` });
    }
    return qb;
}
