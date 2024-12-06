import { SelectQueryBuilder } from 'typeorm';

export type EntityQuery<T> = {
    [K in keyof T]?: T[K];
};

/**
 * Applies filter query for any entity query builder
 */

export function applyFilters<T>(qb: SelectQueryBuilder<T>, query?: any) {

    let { category_name } = query;

    if(category_name){
        qb.where("e.category_name like :name", { name:  `%${category_name}%` });
    }
    let { category_logo } = query;

    if(category_logo){
        qb.where("e.category_logo like :name", { name:  `%${category_logo}%` });
    }
    return qb;
}
