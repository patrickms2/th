import { SelectQueryBuilder } from 'typeorm';

export type EntityQuery<T> = {
    [K in keyof T]?: T[K];
};

/**
 * Applies filter query for any entity query builder
 */

export function applyFilters<T>(qb: SelectQueryBuilder<T>, query?: any) {

    let { slack_client_id } = query;

    if(slack_client_id){
        qb.where("e.slack_client_id like :name", { name:  `%${slack_client_id}%` });
    }
    let { slack_client_secret } = query;

    if(slack_client_secret){
        qb.where("e.slack_client_secret like :name", { name:  `%${slack_client_secret}%` });
    }
    let { slack_redirect_url } = query;

    if(slack_redirect_url){
        qb.where("e.slack_redirect_url like :name", { name:  `%${slack_redirect_url}%` });
    }
    let { 0=inactive } = query;

    if(0=inactive){
        qb.where("e.0=inactive like :name", { name:  `%${0=inactive}%` });
    }
    return qb;
}
