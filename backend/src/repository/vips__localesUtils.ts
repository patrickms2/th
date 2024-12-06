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
    let { locale } = query;

    if(locale){
        qb.where("e.locale like :name", { name:  `%${locale}%` });
    }
    let { 1=active } = query;

    if(1=active){
        qb.where("e.1=active like :name", { name:  `%${1=active}%` });
    }
    return qb;
}
