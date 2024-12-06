import { SelectQueryBuilder } from 'typeorm';

export type EntityQuery<T> = {
    [K in keyof T]?: T[K];
};

/**
 * Applies filter query for any entity query builder
 */

export function applyFilters<T>(qb: SelectQueryBuilder<T>, query?: any) {

    let { duration } = query;

    if(duration){
        qb.where("e.duration like :name", { name:  `%${duration}%` });
    }
    let { half } = query;

    if(half){
        qb.where("e.half like :name", { name:  `%${half}%` });
    }
    let { duration_type } = query;

    if(duration_type){
        qb.where("e.duration_type like :name", { name:  `%${duration_type}%` });
    }
    let { second_half } = query;

    if(second_half){
        qb.where("e.second_half like :name", { name:  `%${second_half}%` });
    }
    let { leave_day } = query;

    if(leave_day){
        qb.where("e.leave_day like :name", { name:  `%${leave_day}%` });
    }
    let { reason } = query;

    if(reason){
        qb.where("e.reason like :name", { name:  `%${reason}%` });
    }
    let { reject_reason } = query;

    if(reject_reason){
        qb.where("e.reject_reason like :name", { name:  `%${reject_reason}%` });
    }
    let { 2=approved } = query;

    if(2=approved){
        qb.where("e.2=approved like :name", { name:  `%${2=approved}%` });
    }
    let { 3=rejected } = query;

    if(3=rejected){
        qb.where("e.3=rejected like :name", { name:  `%${3=rejected}%` });
    }
    let { 4=cancel } = query;

    if(4=cancel){
        qb.where("e.4=cancel like :name", { name:  `%${4=cancel}%` });
    }
    let { 5=taken } = query;

    if(5=taken){
        qb.where("e.5=taken like :name", { name:  `%${5=taken}%` });
    }
    return qb;
}
