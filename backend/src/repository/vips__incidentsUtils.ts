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
    let { project_version } = query;

    if(project_version){
        qb.where("e.project_version like :name", { name:  `%${project_version}%` });
    }
    let { 2=info } = query;

    if(2=info){
        qb.where("e.2=info like :name", { name:  `%${2=info}%` });
    }
    let { incident_name } = query;

    if(incident_name){
        qb.where("e.incident_name like :name", { name:  `%${incident_name}%` });
    }
    let { estimated_hours } = query;

    if(estimated_hours){
        qb.where("e.estimated_hours like :name", { name:  `%${estimated_hours}%` });
    }
    let { actual_hours } = query;

    if(actual_hours){
        qb.where("e.actual_hours like :name", { name:  `%${actual_hours}%` });
    }
    let { description } = query;

    if(description){
        qb.where("e.description like :name", { name:  `%${description}%` });
    }
    let { 2=assigned } = query;

    if(2=assigned){
        qb.where("e.2=assigned like :name", { name:  `%${2=assigned}%` });
    }
    let { 3=in } = query;

    if(3=in){
        qb.where("e.3=in like :name", { name:  `%${3=in}%` });
    }
    let { 4=solved } = query;

    if(4=solved){
        qb.where("e.4=solved like :name", { name:  `%${4=solved}%` });
    }
    let { 5=deferred } = query;

    if(5=deferred){
        qb.where("e.5=deferred like :name", { name:  `%${5=deferred}%` });
    }
    let { 6=re-open } = query;

    if(6=re-open){
        qb.where("e.6=re-open like :name", { name:  `%${6=re-open}%` });
    }
    let { 7=closed } = query;

    if(7=closed){
        qb.where("e.7=closed like :name", { name:  `%${7=closed}%` });
    }
    let { assign_to } = query;

    if(assign_to){
        qb.where("e.assign_to like :name", { name:  `%${assign_to}%` });
    }
    let { 2=medium } = query;

    if(2=medium){
        qb.where("e.2=medium like :name", { name:  `%${2=medium}%` });
    }
    let { 3=high } = query;

    if(3=high){
        qb.where("e.3=high like :name", { name:  `%${3=high}%` });
    }
    let { 4=very } = query;

    if(4=very){
        qb.where("e.4=very like :name", { name:  `%${4=very}%` });
    }
    let { 5=urgent } = query;

    if(5=urgent){
        qb.where("e.5=urgent like :name", { name:  `%${5=urgent}%` });
    }
    let { notes } = query;

    if(notes){
        qb.where("e.notes like :name", { name:  `%${notes}%` });
    }
    return qb;
}
