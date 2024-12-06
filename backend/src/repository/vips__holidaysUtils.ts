import { SelectQueryBuilder } from 'typeorm';

export type EntityQuery<T> = {
    [K in keyof T]?: T[K];
};

/**
 * Applies filter query for any entity query builder
 */

export function applyFilters<T>(qb: SelectQueryBuilder<T>, query?: any) {

    let { event_name } = query;

    if(event_name){
        qb.where("e.event_name like :name", { name:  `%${event_name}%` });
    }
    let { description } = query;

    if(description){
        qb.where("e.description like :name", { name:  `%${description}%` });
    }
    let { location } = query;

    if(location){
        qb.where("e.location like :name", { name:  `%${location}%` });
    }
    let { color } = query;

    if(color){
        qb.where("e.color like :name", { name:  `%${color}%` });
    }
    return qb;
}
