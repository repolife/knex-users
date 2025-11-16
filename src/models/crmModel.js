import { pool } from "../../db/knex.js";

export const createContactsTable = async (pool) => {
	try {
		await pool.query(`
            CREATE TABLE IF NOT EXISTS contacts (
                id SERIAL PRIMARY KEY,
                firstName VARCHAR(255) NOT NULL,
                lastName VARCHAR(255) NOT NULL,
                email VARCHAR(255),
                company VARCHAR(255),
                phone VARCHAR(20),
                created_date TIMESTAMP DEFAULT NOW()
            );
        `);
		console.log("Contacts table ensured to exist.");
	} catch (err) {
		console.error("Error creating contacts table:", err);
	}
};
