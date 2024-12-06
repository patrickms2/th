import { SelectQueryBuilder } from 'typeorm';

export type EntityQuery<T> = {
    [K in keyof T]?: T[K];
};

/**
 * Applies filter query for any entity query builder
 */

export function applyFilters<T>(qb: SelectQueryBuilder<T>, query?: any) {

    let { company_name } = query;

    if(company_name){
        qb.where("e.company_name like :name", { name:  `%${company_name}%` });
    }
    let { company_email } = query;

    if(company_email){
        qb.where("e.company_email like :name", { name:  `%${company_email}%` });
    }
    let { company_phone } = query;

    if(company_phone){
        qb.where("e.company_phone like :name", { name:  `%${company_phone}%` });
    }
    let { company_mobile } = query;

    if(company_mobile){
        qb.where("e.company_mobile like :name", { name:  `%${company_mobile}%` });
    }
    let { company_zipcode } = query;

    if(company_zipcode){
        qb.where("e.company_zipcode like :name", { name:  `%${company_zipcode}%` });
    }
    let { company_city } = query;

    if(company_city){
        qb.where("e.company_city like :name", { name:  `%${company_city}%` });
    }
    let { company_country } = query;

    if(company_country){
        qb.where("e.company_country like :name", { name:  `%${company_country}%` });
    }
    let { company_fax } = query;

    if(company_fax){
        qb.where("e.company_fax like :name", { name:  `%${company_fax}%` });
    }
    let { company_address } = query;

    if(company_address){
        qb.where("e.company_address like :name", { name:  `%${company_address}%` });
    }
    let { website } = query;

    if(website){
        qb.where("e.website like :name", { name:  `%${website}%` });
    }
    let { skype_id } = query;

    if(skype_id){
        qb.where("e.skype_id like :name", { name:  `%${skype_id}%` });
    }
    let { facebook } = query;

    if(facebook){
        qb.where("e.facebook like :name", { name:  `%${facebook}%` });
    }
    let { twitter } = query;

    if(twitter){
        qb.where("e.twitter like :name", { name:  `%${twitter}%` });
    }
    let { linkedin } = query;

    if(linkedin){
        qb.where("e.linkedin like :name", { name:  `%${linkedin}%` });
    }
    let { hosting_company } = query;

    if(hosting_company){
        qb.where("e.hosting_company like :name", { name:  `%${hosting_company}%` });
    }
    let { host_name } = query;

    if(host_name){
        qb.where("e.host_name like :name", { name:  `%${host_name}%` });
    }
    let { host_username } = query;

    if(host_username){
        qb.where("e.host_username like :name", { name:  `%${host_username}%` });
    }
    let { host_password } = query;

    if(host_password){
        qb.where("e.host_password like :name", { name:  `%${host_password}%` });
    }
    let { host_port } = query;

    if(host_port){
        qb.where("e.host_port like :name", { name:  `%${host_port}%` });
    }
    return qb;
}
