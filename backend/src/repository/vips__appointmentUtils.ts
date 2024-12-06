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
    let { attendees } = query;

    if(attendees){
        qb.where("e.attendees like :name", { name:  `%${attendees}%` });
    }
    let { location } = query;

    if(location){
        qb.where("e.location like :name", { name:  `%${location}%` });
    }
    let { note } = query;

    if(note){
        qb.where("e.note like :name", { name:  `%${note}%` });
    }
    let { recurrence_pattern } = query;

    if(recurrence_pattern){
        qb.where("e.recurrence_pattern like :name", { name:  `%${recurrence_pattern}%` });
    }
    let { 2=confirmed } = query;

    if(2=confirmed){
        qb.where("e.2=confirmed like :name", { name:  `%${2=confirmed}%` });
    }
    let { 3=finished } = query;

    if(3=finished){
        qb.where("e.3=finished like :name", { name:  `%${3=finished}%` });
    }
    let { 4=canceled } = query;

    if(4=canceled){
        qb.where("e.4=canceled like :name", { name:  `%${4=canceled}%` });
    }
    return qb;
}
