import { SelectQueryBuilder } from 'typeorm';

export type EntityQuery<T> = {
    [K in keyof T]?: T[K];
};

/**
 * Applies filter query for any entity query builder
 */

export function applyFilters<T>(qb: SelectQueryBuilder<T>, query?: any) {

    let { module } = query;

    if(module){
        qb.where("e.module like :name", { name:  `%${module}%` });
    }
    let { label } = query;

    if(label){
        qb.where("e.label like :name", { name:  `%${label}%` });
    }
    let { text } = query;

    if(text){
        qb.where("e.text like :name", { name:  `%${text}%` });
    }
    let { link } = query;

    if(link){
        qb.where("e.link like :name", { name:  `%${link}%` });
    }
    let { icon } = query;

    if(icon){
        qb.where("e.icon like :name", { name:  `%${icon}%` });
    }
    let { 0=unsubscription } = query;

    if(0=unsubscription){
        qb.where("e.0=unsubscription like :name", { name:  `%${0=unsubscription}%` });
    }
    let { 0=inactive } = query;

    if(0=inactive){
        qb.where("e.0=inactive like :name", { name:  `%${0=inactive}%` });
    }
    return qb;
}
