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
    let { slug } = query;

    if(slug){
        qb.where("e.slug like :name", { name:  `%${slug}%` });
    }
    let { description } = query;

    if(description){
        qb.where("e.description like :name", { name:  `%${description}%` });
    }
    let { 0=inactive } = query;

    if(0=inactive){
        qb.where("e.0=inactive like :name", { name:  `%${0=inactive}%` });
    }
    return qb;
}
