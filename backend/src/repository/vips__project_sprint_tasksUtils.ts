import { SelectQueryBuilder } from 'typeorm';

export type EntityQuery<T> = {
    [K in keyof T]?: T[K];
};

/**
 * Applies filter query for any entity query builder
 */

export function applyFilters<T>(qb: SelectQueryBuilder<T>, query?: any) {

    let { name } = query;

    if(name){
        qb.where("e.name like :name", { name:  `%${name}%` });
    }
    let { description } = query;

    if(description){
        qb.where("e.description like :name", { name:  `%${description}%` });
    }
    let { 2=onhold } = query;

    if(2=onhold){
        qb.where("e.2=onhold like :name", { name:  `%${2=onhold}%` });
    }
    let { 3=closed } = query;

    if(3=closed){
        qb.where("e.3=closed like :name", { name:  `%${3=closed}%` });
    }
    let { 4=released|story:1=open } = query;

    if(4=released|story:1=open){
        qb.where("e.4=released|story:1=open like :name", { name:  `%${4=released|story:1=open}%` });
    }
    let { 2=inprogress } = query;

    if(2=inprogress){
        qb.where("e.2=inprogress like :name", { name:  `%${2=inprogress}%` });
    }
    let { 3=closed } = query;

    if(3=closed){
        qb.where("e.3=closed like :name", { name:  `%${3=closed}%` });
    }
    let { type } = query;

    if(type){
        qb.where("e.type like :name", { name:  `%${type}%` });
    }
    let { estimated_hours } = query;

    if(estimated_hours){
        qb.where("e.estimated_hours like :name", { name:  `%${estimated_hours}%` });
    }
    return qb;
}
