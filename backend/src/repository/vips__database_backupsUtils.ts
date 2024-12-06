import { SelectQueryBuilder } from 'typeorm';

export type EntityQuery<T> = {
    [K in keyof T]?: T[K];
};

/**
 * Applies filter query for any entity query builder
 */

export function applyFilters<T>(qb: SelectQueryBuilder<T>, query?: any) {

    let { file_name } = query;

    if(file_name){
        qb.where("e.file_name like :name", { name:  `%${file_name}%` });
    }
    return qb;
}
