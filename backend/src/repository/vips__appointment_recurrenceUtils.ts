import { SelectQueryBuilder } from 'typeorm';

export type EntityQuery<T> = {
    [K in keyof T]?: T[K];
};

/**
 * Applies filter query for any entity query builder
 */

export function applyFilters<T>(qb: SelectQueryBuilder<T>, query?: any) {

    let { 2=confirmed } = query;

    if(2=confirmed){
        qb.where("e.2=confirmed like :name", { name:  `%${2=confirmed}%` });
    }
    let { 3=finished } = query;

    if(3=finished){
        qb.where("e.3=finished like :name", { name:  `%${3=finished}%` });
    }
    let { 4=canceled } = query;

    if(4=canceled){
        qb.where("e.4=canceled like :name", { name:  `%${4=canceled}%` });
    }
    return qb;
}
