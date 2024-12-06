import { SelectQueryBuilder } from 'typeorm';

export type EntityQuery<T> = {
    [K in keyof T]?: T[K];
};

/**
 * Applies filter query for any entity query builder
 */

export function applyFilters<T>(qb: SelectQueryBuilder<T>, query?: any) {

    let { estimate_number } = query;

    if(estimate_number){
        qb.where("e.estimate_number like :name", { name:  `%${estimate_number}%` });
    }
    let { sub_total } = query;

    if(sub_total){
        qb.where("e.sub_total like :name", { name:  `%${sub_total}%` });
    }
    let { total_tax } = query;

    if(total_tax){
        qb.where("e.total_tax like :name", { name:  `%${total_tax}%` });
    }
    let { discount } = query;

    if(discount){
        qb.where("e.discount like :name", { name:  `%${discount}%` });
    }
    let { total_discount } = query;

    if(total_discount){
        qb.where("e.total_discount like :name", { name:  `%${total_discount}%` });
    }
    let { adjustment } = query;

    if(adjustment){
        qb.where("e.adjustment like :name", { name:  `%${adjustment}%` });
    }
    let { total_amount } = query;

    if(total_amount){
        qb.where("e.total_amount like :name", { name:  `%${total_amount}%` });
    }
    let { reference } = query;

    if(reference){
        qb.where("e.reference like :name", { name:  `%${reference}%` });
    }
    let { note } = query;

    if(note){
        qb.where("e.note like :name", { name:  `%${note}%` });
    }
    return qb;
}
