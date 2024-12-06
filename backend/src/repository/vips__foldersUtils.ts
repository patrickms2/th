import { SelectQueryBuilder } from 'typeorm';

export type EntityQuery<T> = {
    [K in keyof T]?: T[K];
};

/**
 * Applies filter query for any entity query builder
 */

export function applyFilters<T>(qb: SelectQueryBuilder<T>, query?: any) {

    let { folder_name } = query;

    if(folder_name){
        qb.where("e.folder_name like :name", { name:  `%${folder_name}%` });
    }
    return qb;
}
