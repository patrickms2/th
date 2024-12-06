import { SelectQueryBuilder } from 'typeorm';

export type EntityQuery<T> = {
    [K in keyof T]?: T[K];
};

/**
 * Applies filter query for any entity query builder
 */

export function applyFilters<T>(qb: SelectQueryBuilder<T>, query?: any) {

    let { description } = query;

    if(description){
        qb.where("e.description like :name", { name:  `%${description}%` });
    }
    let { 2=completed } = query;

    if(2=completed){
        qb.where("e.2=completed like :name", { name:  `%${2=completed}%` });
    }
    return qb;
}
