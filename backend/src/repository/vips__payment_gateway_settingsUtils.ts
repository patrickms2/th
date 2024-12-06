import { SelectQueryBuilder } from 'typeorm';

export type EntityQuery<T> = {
    [K in keyof T]?: T[K];
};

/**
 * Applies filter query for any entity query builder
 */

export function applyFilters<T>(qb: SelectQueryBuilder<T>, query?: any) {

    let { paypal_checkout_label } = query;

    if(paypal_checkout_label){
        qb.where("e.paypal_checkout_label like :name", { name:  `%${paypal_checkout_label}%` });
    }
    let { paypal_checkout_client_id } = query;

    if(paypal_checkout_client_id){
        qb.where("e.paypal_checkout_client_id like :name", { name:  `%${paypal_checkout_client_id}%` });
    }
    let { 0=inactive } = query;

    if(0=inactive){
        qb.where("e.0=inactive like :name", { name:  `%${0=inactive}%` });
    }
    let { stripe_label } = query;

    if(stripe_label){
        qb.where("e.stripe_label like :name", { name:  `%${stripe_label}%` });
    }
    let { stripe_api_key } = query;

    if(stripe_api_key){
        qb.where("e.stripe_api_key like :name", { name:  `%${stripe_api_key}%` });
    }
    let { stripe_secret_key } = query;

    if(stripe_secret_key){
        qb.where("e.stripe_secret_key like :name", { name:  `%${stripe_secret_key}%` });
    }
    let { 0=inactive } = query;

    if(0=inactive){
        qb.where("e.0=inactive like :name", { name:  `%${0=inactive}%` });
    }
    return qb;
}
