import config from "../../knexfile.mjs";
import knex from "knex";

export const db = knex(config[process.env.NODE_ENV || "development"]);
export default db;
