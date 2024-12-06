import { SelectQueryBuilder } from 'typeorm';

export type EntityQuery<T> = {
    [K in keyof T]?: T[K];
};

/**
 * Applies filter query for any entity query builder
 */

export function applyFilters<T>(qb: SelectQueryBuilder<T>, query?: any) {

    let { email } = query;

    if(email){
        qb.where("e.email like :name", { name:  `%${email}%` });
    }
    let { token } = query;

    if(token){
        qb.where("e.token like :name", { name:  `%${token}%` });
    }
    let { key } = query;

    if(key){
        qb.where("e.key like :name", { name:  `%${key}%` });
    }
    return qb;
}
