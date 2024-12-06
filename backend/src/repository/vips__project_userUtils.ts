import { SelectQueryBuilder } from 'typeorm';

export type EntityQuery<T> = {
    [K in keyof T]?: T[K];
};

/**
 * Applies filter query for any entity query builder
 */

export function applyFilters<T>(qb: SelectQueryBuilder<T>, query?: any) {

    let { 1=yes } = query;

    if(1=yes){
        qb.where("e.1=yes like :name", { name:  `%${1=yes}%` });
    }
    let { 1=yes } = query;

    if(1=yes){
        qb.where("e.1=yes like :name", { name:  `%${1=yes}%` });
    }
    let { 1=yes } = query;

    if(1=yes){
        qb.where("e.1=yes like :name", { name:  `%${1=yes}%` });
    }
    return qb;
}
