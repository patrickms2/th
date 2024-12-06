import { SelectQueryBuilder } from 'typeorm';

export type EntityQuery<T> = {
    [K in keyof T]?: T[K];
};

/**
 * Applies filter query for any entity query builder
 */

export function applyFilters<T>(qb: SelectQueryBuilder<T>, query?: any) {

    let { comment } = query;

    if(comment){
        qb.where("e.comment like :name", { name:  `%${comment}%` });
    }
    let { attachments } = query;

    if(attachments){
        qb.where("e.attachments like :name", { name:  `%${attachments}%` });
    }
    return qb;
}
