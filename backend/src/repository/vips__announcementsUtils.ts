import { SelectQueryBuilder } from 'typeorm';

export type EntityQuery<T> = {
    [K in keyof T]?: T[K];
};

/**
 * Applies filter query for any entity query builder
 */

export function applyFilters<T>(qb: SelectQueryBuilder<T>, query?: any) {

    let { title } = query;

    if(title){
        qb.where("e.title like :name", { name:  `%${title}%` });
    }
    let { description } = query;

    if(description){
        qb.where("e.description like :name", { name:  `%${description}%` });
    }
    let { 1=publish } = query;

    if(1=publish){
        qb.where("e.1=publish like :name", { name:  `%${1=publish}%` });
    }
    let { 2=completed } = query;

    if(2=completed){
        qb.where("e.2=completed like :name", { name:  `%${2=completed}%` });
    }
    let { 1=all } = query;

    if(1=all){
        qb.where("e.1=all like :name", { name:  `%${1=all}%` });
    }
    return qb;
}
