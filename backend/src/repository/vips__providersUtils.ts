import { SelectQueryBuilder } from 'typeorm';

export type EntityQuery<T> = {
    [K in keyof T]?: T[K];
};

/**
 * Applies filter query for any entity query builder
 */

export function applyFilters<T>(qb: SelectQueryBuilder<T>, query?: any) {

    let { firstname } = query;

    if(firstname){
        qb.where("e.firstname like :name", { name:  `%${firstname}%` });
    }
    let { lastname } = query;

    if(lastname){
        qb.where("e.lastname like :name", { name:  `%${lastname}%` });
    }
    let { email } = query;

    if(email){
        qb.where("e.email like :name", { name:  `%${email}%` });
    }
    let { color } = query;

    if(color){
        qb.where("e.color like :name", { name:  `%${color}%` });
    }
    let { 0=inactive } = query;

    if(0=inactive){
        qb.where("e.0=inactive like :name", { name:  `%${0=inactive}%` });
    }
    return qb;
}
