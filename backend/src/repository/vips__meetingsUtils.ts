import { SelectQueryBuilder } from 'typeorm';

export type EntityQuery<T> = {
    [K in keyof T]?: T[K];
};

/**
 * Applies filter query for any entity query builder
 */

export function applyFilters<T>(qb: SelectQueryBuilder<T>, query?: any) {

    let { generated_id } = query;

    if(generated_id){
        qb.where("e.generated_id like :name", { name:  `%${generated_id}%` });
    }
    let { title } = query;

    if(title){
        qb.where("e.title like :name", { name:  `%${title}%` });
    }
    let { description } = query;

    if(description){
        qb.where("e.description like :name", { name:  `%${description}%` });
    }
    let { location } = query;

    if(location){
        qb.where("e.location like :name", { name:  `%${location}%` });
    }
    let { hour_time } = query;

    if(hour_time){
        qb.where("e.hour_time like :name", { name:  `%${hour_time}%` });
    }
    let { 2=in } = query;

    if(2=in){
        qb.where("e.2=in like :name", { name:  `%${2=in}%` });
    }
    let { 3=cancel } = query;

    if(3=cancel){
        qb.where("e.3=cancel like :name", { name:  `%${3=cancel}%` });
    }
    let { 4=completed } = query;

    if(4=completed){
        qb.where("e.4=completed like :name", { name:  `%${4=completed}%` });
    }
    return qb;
}
