
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = async (knex) => {
 return knex.schema.createTable("users", (table) => {
    table.increments('id').primary();
    table.string('userName', 255).notNullable();
    table.string('password', 255).notNullable();
    table.string('email', 255);
    table.timestamp('created_date').defaultTo(knex.fn.now());
 })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = async (knex) => {
 return knex.schema.dropTableIfExists("users");  
};
