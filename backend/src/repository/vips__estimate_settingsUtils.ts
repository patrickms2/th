import { SelectQueryBuilder } from 'typeorm';

export type EntityQuery<T> = {
    [K in keyof T]?: T[K];
};

/**
 * Applies filter query for any entity query builder
 */

export function applyFilters<T>(qb: SelectQueryBuilder<T>, query?: any) {

    let { estimate_prefix } = query;

    if(estimate_prefix){
        qb.where("e.estimate_prefix like :name", { name:  `%${estimate_prefix}%` });
    }
    let { estimate_logo } = query;

    if(estimate_logo){
        qb.where("e.estimate_logo like :name", { name:  `%${estimate_logo}%` });
    }
    let { template } = query;

    if(template){
        qb.where("e.template like :name", { name:  `%${template}%` });
    }
    let { client_note } = query;

    if(client_note){
        qb.where("e.client_note like :name", { name:  `%${client_note}%` });
    }
    let { terms_conditions } = query;

    if(terms_conditions){
        qb.where("e.terms_conditions like :name", { name:  `%${terms_conditions}%` });
    }
    return qb;
}
