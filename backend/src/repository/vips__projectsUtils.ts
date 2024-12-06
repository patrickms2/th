import { SelectQueryBuilder } from 'typeorm';

export type EntityQuery<T> = {
    [K in keyof T]?: T[K];
};

/**
 * Applies filter query for any entity query builder
 */

export function applyFilters<T>(qb: SelectQueryBuilder<T>, query?: any) {

    let { generated_id } = query;

    if(generated_id){
        qb.where("e.generated_id like :name", { name:  `%${generated_id}%` });
    }
    let { project_name } = query;

    if(project_name){
        qb.where("e.project_name like :name", { name:  `%${project_name}%` });
    }
    let { project_version } = query;

    if(project_version){
        qb.where("e.project_version like :name", { name:  `%${project_version}%` });
    }
    let { 1=task } = query;

    if(1=task){
        qb.where("e.1=task like :name", { name:  `%${1=task}%` });
    }
    let { 2=hourly } = query;

    if(2=hourly){
        qb.where("e.2=hourly like :name", { name:  `%${2=hourly}%` });
    }
    let { price_rate } = query;

    if(price_rate){
        qb.where("e.price_rate like :name", { name:  `%${price_rate}%` });
    }
    let { estimated_hours } = query;

    if(estimated_hours){
        qb.where("e.estimated_hours like :name", { name:  `%${estimated_hours}%` });
    }
    let { actual_hours } = query;

    if(actual_hours){
        qb.where("e.actual_hours like :name", { name:  `%${actual_hours}%` });
    }
    let { 2=inprogress } = query;

    if(2=inprogress){
        qb.where("e.2=inprogress like :name", { name:  `%${2=inprogress}%` });
    }
    let { 3=onhold } = query;

    if(3=onhold){
        qb.where("e.3=onhold like :name", { name:  `%${3=onhold}%` });
    }
    let { 4=cancel } = query;

    if(4=cancel){
        qb.where("e.4=cancel like :name", { name:  `%${4=cancel}%` });
    }
    let { 5=completed } = query;

    if(5=completed){
        qb.where("e.5=completed like :name", { name:  `%${5=completed}%` });
    }
    let { demo_url } = query;

    if(demo_url){
        qb.where("e.demo_url like :name", { name:  `%${demo_url}%` });
    }
    let { description } = query;

    if(description){
        qb.where("e.description like :name", { name:  `%${description}%` });
    }
    let { project_logo } = query;

    if(project_logo){
        qb.where("e.project_logo like :name", { name:  `%${project_logo}%` });
    }
    let { assign_members } = query;

    if(assign_members){
        qb.where("e.assign_members like :name", { name:  `%${assign_members}%` });
    }
    let { notes } = query;

    if(notes){
        qb.where("e.notes like :name", { name:  `%${notes}%` });
    }
    return qb;
}
