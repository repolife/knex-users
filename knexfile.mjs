/**
 * knexfile.mjs
 */
// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
export default {
	development: {
		client: "pg",
		connection: {
			user: "user",
			password: "password",
			port: 5433,
			database: "crmdb",
			host: "localhost",
		},
		pool: {
			min: 2,
			max: 10,
		},
		migrations: {
			tableName: "knex_migrations",
      directory: "./src/db/migrations",
			loadExtensions: [".mjs"],
		},
	},
};
