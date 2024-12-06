import { SelectQueryBuilder } from 'typeorm';

export type EntityQuery<T> = {
    [K in keyof T]?: T[K];
};

/**
 * Applies filter query for any entity query builder
 */

export function applyFilters<T>(qb: SelectQueryBuilder<T>, query?: any) {

    let { item_tax } = query;

    if(item_tax){
        qb.where("e.item_tax like :name", { name:  `%${item_tax}%` });
    }
    return qb;
}
