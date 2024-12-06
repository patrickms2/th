import { SelectQueryBuilder } from 'typeorm';

export type EntityQuery<T> = {
    [K in keyof T]?: T[K];
};

/**
 * Applies filter query for any entity query builder
 */

export function applyFilters<T>(qb: SelectQueryBuilder<T>, query?: any) {

    let { invoice_prefix } = query;

    if(invoice_prefix){
        qb.where("e.invoice_prefix like :name", { name:  `%${invoice_prefix}%` });
    }
    let { invoice_logo } = query;

    if(invoice_logo){
        qb.where("e.invoice_logo like :name", { name:  `%${invoice_logo}%` });
    }
    let { template } = query;

    if(template){
        qb.where("e.template like :name", { name:  `%${template}%` });
    }
    let { gst_number } = query;

    if(gst_number){
        qb.where("e.gst_number like :name", { name:  `%${gst_number}%` });
    }
    let { client_note } = query;

    if(client_note){
        qb.where("e.client_note like :name", { name:  `%${client_note}%` });
    }
    let { terms_conditions } = query;

    if(terms_conditions){
        qb.where("e.terms_conditions like :name", { name:  `%${terms_conditions}%` });
    }
    let { auto_remind_after } = query;

    if(auto_remind_after){
        qb.where("e.auto_remind_after like :name", { name:  `%${auto_remind_after}%` });
    }
    let { 3 } = query;

    if(3){
        qb.where("e.3 like :name", { name:  `%${3}%` });
    }
    let { payment_prefix } = query;

    if(payment_prefix){
        qb.where("e.payment_prefix like :name", { name:  `%${payment_prefix}%` });
    }
    return qb;
}
