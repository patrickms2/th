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
    let { file_hash } = query;

    if(file_hash){
        qb.where("e.file_hash like :name", { name:  `%${file_hash}%` });
    }
    let { file_extension } = query;

    if(file_extension){
        qb.where("e.file_extension like :name", { name:  `%${file_extension}%` });
    }
    return qb;
}
