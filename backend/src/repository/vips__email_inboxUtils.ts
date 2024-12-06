import { SelectQueryBuilder } from 'typeorm';

export type EntityQuery<T> = {
    [K in keyof T]?: T[K];
};

/**
 * Applies filter query for any entity query builder
 */

export function applyFilters<T>(qb: SelectQueryBuilder<T>, query?: any) {

    let { to } = query;

    if(to){
        qb.where("e.to like :name", { name:  `%${to}%` });
    }
    let { from } = query;

    if(from){
        qb.where("e.from like :name", { name:  `%${from}%` });
    }
    let { subject } = query;

    if(subject){
        qb.where("e.subject like :name", { name:  `%${subject}%` });
    }
    let { message_body } = query;

    if(message_body){
        qb.where("e.message_body like :name", { name:  `%${message_body}%` });
    }
    let { type } = query;

    if(type){
        qb.where("e.type like :name", { name:  `%${type}%` });
    }
    let { sent } = query;

    if(sent){
        qb.where("e.sent like :name", { name:  `%${sent}%` });
    }
    let { draft } = query;

    if(draft){
        qb.where("e.draft like :name", { name:  `%${draft}%` });
    }
    let { trash } = query;

    if(trash){
        qb.where("e.trash like :name", { name:  `%${trash}%` });
    }
    let { view_status } = query;

    if(view_status){
        qb.where("e.view_status like :name", { name:  `%${view_status}%` });
    }
    let { favourites } = query;

    if(favourites){
        qb.where("e.favourites like :name", { name:  `%${favourites}%` });
    }
    let { 1=yes } = query;

    if(1=yes){
        qb.where("e.1=yes like :name", { name:  `%${1=yes}%` });
    }
    let { notify_me } = query;

    if(notify_me){
        qb.where("e.notify_me like :name", { name:  `%${notify_me}%` });
    }
    let { 0=off } = query;

    if(0=off){
        qb.where("e.0=off like :name", { name:  `%${0=off}%` });
    }
    return qb;
}
