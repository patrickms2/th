import { SelectQueryBuilder } from 'typeorm';

export type EntityQuery<T> = {
    [K in keyof T]?: T[K];
};

/**
 * Applies filter query for any entity query builder
 */

export function applyFilters<T>(qb: SelectQueryBuilder<T>, query?: any) {

    let { code } = query;

    if(code){
        qb.where("e.code like :name", { name:  `%${code}%` });
    }
    let { name } = query;

    if(name){
        qb.where("e.name like :name", { name:  `%${name}%` });
    }
    return qb;
}
