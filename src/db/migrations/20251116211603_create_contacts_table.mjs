
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = async (knex) => {
    return knex.schema.createTable("contacts", (table) => {
        table.increments('id').primary();
        table.string('firstName', 255).notNullable();
        table.string('lastName', 255).notNullable();
        table.string('email', 255);
        table.string('company', 255);
        table.string('phone', 20);
        table.timestamp('created_date').defaultTo(knex.fn.now());
    });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = async (knex) => {
 return knex.schema.dropTableIfExists("contacts"); 
};
