import { SelectQueryBuilder } from 'typeorm';

export type EntityQuery<T> = {
    [K in keyof T]?: T[K];
};

/**
 * Applies filter query for any entity query builder
 */

export function applyFilters<T>(qb: SelectQueryBuilder<T>, query?: any) {

    let { hour_time } = query;

    if(hour_time){
        qb.where("e.hour_time like :name", { name:  `%${hour_time}%` });
    }
    let { note } = query;

    if(note){
        qb.where("e.note like :name", { name:  `%${note}%` });
    }
    return qb;
}
