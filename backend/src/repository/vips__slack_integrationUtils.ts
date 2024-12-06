import { SelectQueryBuilder } from 'typeorm';

export type EntityQuery<T> = {
    [K in keyof T]?: T[K];
};

/**
 * Applies filter query for any entity query builder
 */

export function applyFilters<T>(qb: SelectQueryBuilder<T>, query?: any) {

    let { access_token } = query;

    if(access_token){
        qb.where("e.access_token like :name", { name:  `%${access_token}%` });
    }
    let { team_id } = query;

    if(team_id){
        qb.where("e.team_id like :name", { name:  `%${team_id}%` });
    }
    let { channel_id } = query;

    if(channel_id){
        qb.where("e.channel_id like :name", { name:  `%${channel_id}%` });
    }
    return qb;
}
