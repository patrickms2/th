import { SelectQueryBuilder } from 'typeorm';

export type EntityQuery<T> = {
    [K in keyof T]?: T[K];
};

/**
 * Applies filter query for any entity query builder
 */

export function applyFilters<T>(qb: SelectQueryBuilder<T>, query?: any) {

    let { receipt_number } = query;

    if(receipt_number){
        qb.where("e.receipt_number like :name", { name:  `%${receipt_number}%` });
    }
    let { transaction_id } = query;

    if(transaction_id){
        qb.where("e.transaction_id like :name", { name:  `%${transaction_id}%` });
    }
    let { payment_method } = query;

    if(payment_method){
        qb.where("e.payment_method like :name", { name:  `%${payment_method}%` });
    }
    let { amount } = query;

    if(amount){
        qb.where("e.amount like :name", { name:  `%${amount}%` });
    }
    let { notes } = query;

    if(notes){
        qb.where("e.notes like :name", { name:  `%${notes}%` });
    }
    return qb;
}
