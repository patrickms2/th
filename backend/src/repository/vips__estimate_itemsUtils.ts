import { SelectQueryBuilder } from 'typeorm';

export type EntityQuery<T> = {
    [K in keyof T]?: T[K];
};

/**
 * Applies filter query for any entity query builder
 */

export function applyFilters<T>(qb: SelectQueryBuilder<T>, query?: any) {

    let { item_name } = query;

    if(item_name){
        qb.where("e.item_name like :name", { name:  `%${item_name}%` });
    }
    let { item_description } = query;

    if(item_description){
        qb.where("e.item_description like :name", { name:  `%${item_description}%` });
    }
    let { item_unit } = query;

    if(item_unit){
        qb.where("e.item_unit like :name", { name:  `%${item_unit}%` });
    }
    let { unit_price } = query;

    if(unit_price){
        qb.where("e.unit_price like :name", { name:  `%${unit_price}%` });
    }
    let { total_item_amount } = query;

    if(total_item_amount){
        qb.where("e.total_item_amount like :name", { name:  `%${total_item_amount}%` });
    }
    return qb;
}
