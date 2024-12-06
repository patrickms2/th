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
    let { price } = query;

    if(price){
        qb.where("e.price like :name", { name:  `%${price}%` });
    }
    let { description } = query;

    if(description){
        qb.where("e.description like :name", { name:  `%${description}%` });
    }
    let { unit } = query;

    if(unit){
        qb.where("e.unit like :name", { name:  `%${unit}%` });
    }
    return qb;
}
