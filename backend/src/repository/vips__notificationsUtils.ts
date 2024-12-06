import { SelectQueryBuilder } from 'typeorm';

export type EntityQuery<T> = {
    [K in keyof T]?: T[K];
};

/**
 * Applies filter query for any entity query builder
 */

export function applyFilters<T>(qb: SelectQueryBuilder<T>, query?: any) {

    let { route } = query;

    if(route){
        qb.where("e.route like :name", { name:  `%${route}%` });
    }
    let { title } = query;

    if(title){
        qb.where("e.title like :name", { name:  `%${title}%` });
    }
    let { message } = query;

    if(message){
        qb.where("e.message like :name", { name:  `%${message}%` });
    }
    return qb;
}
