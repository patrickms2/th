import { SelectQueryBuilder } from 'typeorm';

export type EntityQuery<T> = {
    [K in keyof T]?: T[K];
};

/**
 * Applies filter query for any entity query builder
 */

export function applyFilters<T>(qb: SelectQueryBuilder<T>, query?: any) {

    let { user_generated_id } = query;

    if(user_generated_id){
        qb.where("e.user_generated_id like :name", { name:  `%${user_generated_id}%` });
    }
    let { firstname } = query;

    if(firstname){
        qb.where("e.firstname like :name", { name:  `%${firstname}%` });
    }
    let { lastname } = query;

    if(lastname){
        qb.where("e.lastname like :name", { name:  `%${lastname}%` });
    }
    let { username } = query;

    if(username){
        qb.where("e.username like :name", { name:  `%${username}%` });
    }
    let { email } = query;

    if(email){
        qb.where("e.email like :name", { name:  `%${email}%` });
    }
    let { password } = query;

    if(password){
        qb.where("e.password like :name", { name:  `%${password}%` });
    }
    let { 0=inactive } = query;

    if(0=inactive){
        qb.where("e.0=inactive like :name", { name:  `%${0=inactive}%` });
    }
    let { 0=unverified } = query;

    if(0=unverified){
        qb.where("e.0=unverified like :name", { name:  `%${0=unverified}%` });
    }
    let { email_verification_code } = query;

    if(email_verification_code){
        qb.where("e.email_verification_code like :name", { name:  `%${email_verification_code}%` });
    }
    let { 0=offline } = query;

    if(0=offline){
        qb.where("e.0=offline like :name", { name:  `%${0=offline}%` });
    }
    let { avatar } = query;

    if(avatar){
        qb.where("e.avatar like :name", { name:  `%${avatar}%` });
    }
    let { last_ip } = query;

    if(last_ip){
        qb.where("e.last_ip like :name", { name:  `%${last_ip}%` });
    }
    let { emp_id } = query;

    if(emp_id){
        qb.where("e.emp_id like :name", { name:  `%${emp_id}%` });
    }
    let { city } = query;

    if(city){
        qb.where("e.city like :name", { name:  `%${city}%` });
    }
    let { state } = query;

    if(state){
        qb.where("e.state like :name", { name:  `%${state}%` });
    }
    let { country } = query;

    if(country){
        qb.where("e.country like :name", { name:  `%${country}%` });
    }
    let { postal_code } = query;

    if(postal_code){
        qb.where("e.postal_code like :name", { name:  `%${postal_code}%` });
    }
    let { language } = query;

    if(language){
        qb.where("e.language like :name", { name:  `%${language}%` });
    }
    let { address } = query;

    if(address){
        qb.where("e.address like :name", { name:  `%${address}%` });
    }
    let { phone } = query;

    if(phone){
        qb.where("e.phone like :name", { name:  `%${phone}%` });
    }
    let { mobile } = query;

    if(mobile){
        qb.where("e.mobile like :name", { name:  `%${mobile}%` });
    }
    let { skype } = query;

    if(skype){
        qb.where("e.skype like :name", { name:  `%${skype}%` });
    }
    let { gender } = query;

    if(gender){
        qb.where("e.gender like :name", { name:  `%${gender}%` });
    }
    let { maritial_status } = query;

    if(maritial_status){
        qb.where("e.maritial_status like :name", { name:  `%${maritial_status}%` });
    }
    let { father_name } = query;

    if(father_name){
        qb.where("e.father_name like :name", { name:  `%${father_name}%` });
    }
    let { mother_name } = query;

    if(mother_name){
        qb.where("e.mother_name like :name", { name:  `%${mother_name}%` });
    }
    let { permission } = query;

    if(permission){
        qb.where("e.permission like :name", { name:  `%${permission}%` });
    }
    let { remember_token } = query;

    if(remember_token){
        qb.where("e.remember_token like :name", { name:  `%${remember_token}%` });
    }
    return qb;
}
