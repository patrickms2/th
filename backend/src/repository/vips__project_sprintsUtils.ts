import { SelectQueryBuilder } from 'typeorm';

export type EntityQuery<T> = {
    [K in keyof T]?: T[K];
};

/**
 * Applies filter query for any entity query builder
 */

export function applyFilters<T>(qb: SelectQueryBuilder<T>, query?: any) {

    let { sprint_name } = query;

    if(sprint_name){
        qb.where("e.sprint_name like :name", { name:  `%${sprint_name}%` });
    }
    let { hours } = query;

    if(hours){
        qb.where("e.hours like :name", { name:  `%${hours}%` });
    }
    let { 2=inprogress } = query;

    if(2=inprogress){
        qb.where("e.2=inprogress like :name", { name:  `%${2=inprogress}%` });
    }
    let { 3=closed } = query;

    if(3=closed){
        qb.where("e.3=closed like :name", { name:  `%${3=closed}%` });
    }
    let { description } = query;

    if(description){
        qb.where("e.description like :name", { name:  `%${description}%` });
    }
    return qb;
}
