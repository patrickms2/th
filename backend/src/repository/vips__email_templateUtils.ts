import { SelectQueryBuilder } from 'typeorm';

export type EntityQuery<T> = {
    [K in keyof T]?: T[K];
};

/**
 * Applies filter query for any entity query builder
 */

export function applyFilters<T>(qb: SelectQueryBuilder<T>, query?: any) {

    let { template_name } = query;

    if(template_name){
        qb.where("e.template_name like :name", { name:  `%${template_name}%` });
    }
    let { template_subject } = query;

    if(template_subject){
        qb.where("e.template_subject like :name", { name:  `%${template_subject}%` });
    }
    let { template_body } = query;

    if(template_body){
        qb.where("e.template_body like :name", { name:  `%${template_body}%` });
    }
    let { type } = query;

    if(type){
        qb.where("e.type like :name", { name:  `%${type}%` });
    }
    return qb;
}
