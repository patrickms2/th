import { SelectQueryBuilder } from 'typeorm';

export type EntityQuery<T> = {
    [K in keyof T]?: T[K];
};

/**
 * Applies filter query for any entity query builder
 */

export function applyFilters<T>(qb: SelectQueryBuilder<T>, query?: any) {

    let { email_group_name } = query;

    if(email_group_name){
        qb.where("e.email_group_name like :name", { name:  `%${email_group_name}%` });
    }
    return qb;
}
