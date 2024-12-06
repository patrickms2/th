import { SelectQueryBuilder } from 'typeorm';

export type EntityQuery<T> = {
    [K in keyof T]?: T[K];
};

/**
 * Applies filter query for any entity query builder
 */

export function applyFilters<T>(qb: SelectQueryBuilder<T>, query?: any) {

    let { module } = query;

    if(module){
        qb.where("e.module like :name", { name:  `%${module}%` });
    }
    let { action } = query;

    if(action){
        qb.where("e.action like :name", { name:  `%${action}%` });
    }
    let { description } = query;

    if(description){
        qb.where("e.description like :name", { name:  `%${description}%` });
    }
    let { ip_address } = query;

    if(ip_address){
        qb.where("e.ip_address like :name", { name:  `%${ip_address}%` });
    }
    let { diff_for_humans } = query;

    if(diff_for_humans){
        qb.where("e.diff_for_humans like :name", { name:  `%${diff_for_humans}%` });
    }
    return qb;
}
