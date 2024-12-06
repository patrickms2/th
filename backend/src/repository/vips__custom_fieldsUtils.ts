import { SelectQueryBuilder } from 'typeorm';

export type EntityQuery<T> = {
    [K in keyof T]?: T[K];
};

/**
 * Applies filter query for any entity query builder
 */

export function applyFilters<T>(qb: SelectQueryBuilder<T>, query?: any) {

    let { field_label } = query;

    if(field_label){
        qb.where("e.field_label like :name", { name:  `%${field_label}%` });
    }
    let { field_column } = query;

    if(field_column){
        qb.where("e.field_column like :name", { name:  `%${field_column}%` });
    }
    let { default_value } = query;

    if(default_value){
        qb.where("e.default_value like :name", { name:  `%${default_value}%` });
    }
    let { help_text } = query;

    if(help_text){
        qb.where("e.help_text like :name", { name:  `%${help_text}%` });
    }
    let { true=active } = query;

    if(true=active){
        qb.where("e.true=active like :name", { name:  `%${true=active}%` });
    }
    return qb;
}
