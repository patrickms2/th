import { SelectQueryBuilder } from 'typeorm';

export type EntityQuery<T> = {
    [K in keyof T]?: T[K];
};

/**
 * Applies filter query for any entity query builder
 */

export function applyFilters<T>(qb: SelectQueryBuilder<T>, query?: any) {

    let { leave_type } = query;

    if(leave_type){
        qb.where("e.leave_type like :name", { name:  `%${leave_type}%` });
    }
    let { color } = query;

    if(color){
        qb.where("e.color like :name", { name:  `%${color}%` });
    }
    return qb;
}
