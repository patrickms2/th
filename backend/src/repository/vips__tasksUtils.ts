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
    let { name } = query;

    if(name){
        qb.where("e.name like :name", { name:  `%${name}%` });
    }
    let { project_version } = query;

    if(project_version){
        qb.where("e.project_version like :name", { name:  `%${project_version}%` });
    }
    let { estimated_hours } = query;

    if(estimated_hours){
        qb.where("e.estimated_hours like :name", { name:  `%${estimated_hours}%` });
    }
    let { actual_hours } = query;

    if(actual_hours){
        qb.where("e.actual_hours like :name", { name:  `%${actual_hours}%` });
    }
    let { 2=in } = query;

    if(2=in){
        qb.where("e.2=in like :name", { name:  `%${2=in}%` });
    }
    let { 3=on } = query;

    if(3=on){
        qb.where("e.3=on like :name", { name:  `%${3=on}%` });
    }
    let { 4=waiting } = query;

    if(4=waiting){
        qb.where("e.4=waiting like :name", { name:  `%${4=waiting}%` });
    }
    let { 5=cancel } = query;

    if(5=cancel){
        qb.where("e.5=cancel like :name", { name:  `%${5=cancel}%` });
    }
    let { 6=completed } = query;

    if(6=completed){
        qb.where("e.6=completed like :name", { name:  `%${6=completed}%` });
    }
    let { 2=very } = query;

    if(2=very){
        qb.where("e.2=very like :name", { name:  `%${2=very}%` });
    }
    let { 3=high } = query;

    if(3=high){
        qb.where("e.3=high like :name", { name:  `%${3=high}%` });
    }
    let { 4=medium } = query;

    if(4=medium){
        qb.where("e.4=medium like :name", { name:  `%${4=medium}%` });
    }
    let { 5=low } = query;

    if(5=low){
        qb.where("e.5=low like :name", { name:  `%${5=low}%` });
    }
    let { description } = query;

    if(description){
        qb.where("e.description like :name", { name:  `%${description}%` });
    }
    let { notes } = query;

    if(notes){
        qb.where("e.notes like :name", { name:  `%${notes}%` });
    }
    return qb;
}
