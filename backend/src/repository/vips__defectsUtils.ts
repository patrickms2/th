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
    let { 2=enhancement } = query;

    if(2=enhancement){
        qb.where("e.2=enhancement like :name", { name:  `%${2=enhancement}%` });
    }
    let { defect_name } = query;

    if(defect_name){
        qb.where("e.defect_name like :name", { name:  `%${defect_name}%` });
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
    let { 2=closed } = query;

    if(2=closed){
        qb.where("e.2=closed like :name", { name:  `%${2=closed}%` });
    }
    let { 3=in } = query;

    if(3=in){
        qb.where("e.3=in like :name", { name:  `%${3=in}%` });
    }
    let { 4=open } = query;

    if(4=open){
        qb.where("e.4=open like :name", { name:  `%${4=open}%` });
    }
    let { 5=solved } = query;

    if(5=solved){
        qb.where("e.5=solved like :name", { name:  `%${5=solved}%` });
    }
    let { 6=re-open } = query;

    if(6=re-open){
        qb.where("e.6=re-open like :name", { name:  `%${6=re-open}%` });
    }
    let { 7=deferred } = query;

    if(7=deferred){
        qb.where("e.7=deferred like :name", { name:  `%${7=deferred}%` });
    }
    let { assign_member } = query;

    if(assign_member){
        qb.where("e.assign_member like :name", { name:  `%${assign_member}%` });
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
    let { attachment } = query;

    if(attachment){
        qb.where("e.attachment like :name", { name:  `%${attachment}%` });
    }
    let { attachment_hash } = query;

    if(attachment_hash){
        qb.where("e.attachment_hash like :name", { name:  `%${attachment_hash}%` });
    }
    return qb;
}
